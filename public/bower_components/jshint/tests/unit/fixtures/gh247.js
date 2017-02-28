var i = 5;

try {
    var u = "I'm trying here!";
} catch (e) {
    var w = "Let's play catch.";
}

alert("i:" + i);
alert("u:" + u);
alert("w:" + w);

function test() {
    var w;

    try {
        alert("Hello.");
    } catch (e) {
        var w = "What's up?";
    }

    alert("w:" + w);
}

function infunc() {
    var i2 = 5;

    try {
        var u2 = "I'm trying here!";
    } catch (e) {
        var w2 = "Let's play catch.";
    }

    alert("i2:" + i2);
    alert("u2:" + u2);
    alert("w2:" + w2);
}
