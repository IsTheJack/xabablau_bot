var telegram = require('telegram-bot-api');
var token = require('./config/tokenReader.js')() || process.env.botToken;

var api = new telegram({
    token: token,
    updates: {
        enabled: true
    }
});

var commandInvoker = require('./config/commandInvoker')(api);

api.on('message', function(message) {
    console.log(message);

    if(message.entities && message.entities[0].type === 'bot_command') {
        commandInvoker[message.text](message);
    } else {
        commandInvoker['/start'](message);
    }
});