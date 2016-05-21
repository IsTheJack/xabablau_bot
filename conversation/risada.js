var laughsResponse = require('../ramdom_responses/laughs.js');

module.exports = bot => {

    bot.onText(/kk|hihi|hoho|shuas|kaka/i, (msg, match) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, laughsResponse(msg));
    });
}