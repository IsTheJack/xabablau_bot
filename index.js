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

    console.log(msg);

    if(isCommand) {
        if(hasCommand) {
            commandInvoker[msg.text](msg);
        } else {
            bot.sendMessage(chatId, withoutCommandResponse(msg));
        }
    }
});

require('./conversation/amor.js')(bot);
require('./conversation/oQueE.js')(bot);
require('./conversation/risada.js')(bot);
require('./conversation/smiles.js')(bot);
