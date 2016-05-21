// var telegram = require('telegram-bot-api');
var TelegramBot = require('node-telegram-bot-api');
var token = process.env.botToken || require('./config/tokenReader.js')();
var http = require('http');

// ramdomResponses Helpers
var withoutCommandResponse = require('./ramdom_responses/withoutCommand.js')

const server = http.createServer((req, res) => {
  res.end();
});

server.listen(process.env.PORT || 3000);

var bot = new TelegramBot(token, {
    polling: true
});

bot.getMe()
    .then(me => {
        console.log(`Olá, meu nome é ${me.first_name}!`);
    });

var commandInvoker = require('./config/commandInvoker')(bot);

bot.on('message', msg => {
    const chatId = msg.chat.id;

    const isCommand = !!msg.entities && msg.entities[0].type === 'bot_command';
    const hasCommand = !!commandInvoker[msg.text];

    if(isCommand) {
        if(hasCommand) {
            commandInvoker[msg.text](msg);
        } else {
            bot.sendMessage(chatId, withoutCommandResponse(msg));
        }
    }
});

bot.onText(/amor/i, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    var opts = {
        reply_markup: JSON.stringify({
            force_reply: true
        }),
    };

    bot.sendMessage(chatId, 'O que você sabe sobre o amor, hein?', opts)
        .then(sended => {
            var chatId = sended.chat.id;
            var messageId = sended.message_id;

            bot.onReplyToMessage(chatId, messageId, (responseMessage) => {
                bot.sendMessage(chatId, `"${responseMessage.text}"\nSabe de nada, inocente! (@${msg.from.username} hehe)`);
            });
        });

});

bot.onText(/^o que é (.+)|^o que e (.+)|^o que significa (.+)/i, (msg, match) => {
    const chatId = msg.chat.id;
    const arg = (match[1] || match[2] || match[3]).replace('?', '');

    bot.sendMessage(chatId, `I don't know what is ${arg}`);
});