var _a = require("./mod.js"), closest = _a.closest, distance = _a.distance;
var levenshtein = function (a, b) {
    if (a.length === 0) {
        return b.length;
    }
    if (b.length === 0) {
        return a.length;
    }
    if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var row = [];
    for (var i = 0; i <= a.length; i++) {
        row[i] = i;
    }
    for (var i = 1; i <= b.length; i++) {
        var prev = i;
        for (var j = 1; j <= a.length; j++) {
            var val = 0;
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                val = row[j - 1];
            }
            else {
                val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
            }
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
};
var makeid = function (length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
for (var i = 0; i < 10000; i++) {
    var rnd_num1 = (Math.random() * 1000) | 0;
    var rnd_num2 = (Math.random() * 1000) | 0;
    var rnd_string1 = makeid(rnd_num1);
    var rnd_string2 = makeid(rnd_num2);
    var actual = distance(rnd_string1, rnd_string2);
    var expected = levenshtein(rnd_string1, rnd_string2);
    console.log(i);
    if (actual !== expected) {
        console.log("fail");
    }
}
