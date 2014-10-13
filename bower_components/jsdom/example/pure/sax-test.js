var util = require("util"),
    sax  = require("./sax");


parser = sax.parser(false);

sax.EVENTS.forEach(function (ev) {
    parser["on" + ev] = function() { console.log(util.inspect(arguments)); };
});

parser.write("<span>Welcome,</span> to monkey land").close();
