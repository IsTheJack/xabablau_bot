module.exports = function(api) {
    var commands = {
        default: require('../commands/default.js')(api),
        cinema: require('../commands/cinema.js')(api),
    };

    return {
        '/cinema': commands.cinema,
        '/start': commands.default,
    };
};
