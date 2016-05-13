var fs = require('fs');

module.exports = function() {
    try {
        return fs.readFileSync('.token').toString().trim();
    } catch (Error) {
        return false;
    }
};