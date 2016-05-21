module.exports = function(bot) {
    var commands = {
        default: require('../commands/default.js')(bot),
        cinema: require('../commands/cinema.js')(bot),
    };

    return {
        '/cinema': commands.cinema,
        '/start': commands.default,
    };
};
