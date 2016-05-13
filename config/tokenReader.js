var fs = require('fs');

module.exports = function() {
    return fs.readFileSync('.token').toString().trim();
};