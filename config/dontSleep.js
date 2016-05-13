var http = require("http");

setInterval(function() {
    http.get("http://xabablau-bot.herokuapp.com");
}, 300000);