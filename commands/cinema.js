var cheerio = require('cheerio');
var request = require('request');

module.exports = function(bot) {
    return function(msg) {
        var text;

        const chatId = msg.chat.id;
        const initialText = `Espere um pouco, ${msg.from.first_name}.\n` +
        `Estou navegando no universo internético... Que nem o papai Ultron!\n`;

        bot.sendMessage(chatId, initialText);

        request.get({
            url: 'http://www.redecineshow.com.br/programacao/7/resende.html',
            encoding: 'binary'
        }, function (error, response, body) {
            var encoded = body;

            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(encoded, {
                    decodeEntities: false,
                });

                var everyMovies = $('ul.prog');
                var movies = [];
                var movieTimes = [];

                everyMovies.find('.dt-prog').each(function (i, movieContainer) {
                    movies[i] = {};
                    movies[i].title = $(this).find('h1').text();
                    movies[i].dubbed = !!$(this).find('p img[alt="Dublado"]').length;
                    movies[i].subtitled = !!$(this).find('p img[alt="Legendado"]').length;
                    movies[i].numbersTheater = $(this).find('h4').text();
                    $(this).find('span a').map(function(){ movieTimes.push(this.text)  } )
                    movies[i].time = movieTimes.join(', ')});

                text = movies.reduce((acc, x) => {
                    var dubbed = x.dubbed? "Dublado\n": '';
                    var subtitled = x.subtitled? "Legendado\n": '';

                    return (
                        acc +
                        `*${x.title}*\n` +
                        dubbed +
                        subtitled +
                        `*Sala(s)*: ${x.numbersTheater}\n` +
                        `*Horário(s)*: ${x.time}\n` +
                        "*-------------------------*\n"
                    );

                }, "Pediu filme?! *TOMA FILMEEEE!!!*\n\n*-------------------------*\n");
            }

            bot.sendMessage(chatId, text, {
                'parse_mode': 'Markdown',
            })
        });
    };
};
