module.exports = bot => {
    bot.onText(/:3/i, (msg, match) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, '*--------*');
    });
}