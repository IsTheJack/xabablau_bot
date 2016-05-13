module.exports = function(api) {
    return function(message) {
        api.sendMessage({
            chat_id: message.chat.id,
            'parse_mode': 'Markdown',
            text: `Xabablau, ${message.from.first_name}.\n` +
            `Por enquanto eu só sei ver os filmes que tão no Resende Shopping...\n` +
            `Digite /cinema que eu te falo.`,
        });
    };
}