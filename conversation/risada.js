module.exports = bot => {
    bot.onText(/kk|hihi|hoho|shuas|kaka/i, (msg, match) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'HUEHUEHUEHUEHUEHUE!!!');
    });
}