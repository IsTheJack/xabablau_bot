module.exports = bot => {
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
                var messageId = sended.message_id;

                bot.onReplyToMessage(chatId, messageId, (responseMessage) => {
                    bot.sendMessage(chatId, `"${responseMessage.text}"\nSabe de nada, inocente! (@${msg.from.username} hehe)`);
                });
            });
    });
}