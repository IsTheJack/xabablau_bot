module.exports = bot => {
    bot.onText(/^o que é (.+)|^o que e (.+)|^o que significa (.+)/i, (msg, match) => {
        console.log(msg);
        const chatId = msg.chat.id;
        const arg = (match[1] || match[2] || match[3]).replace('?', '');

        bot.sendMessage(chatId, `I don't know what is ${arg}`);
    });
}