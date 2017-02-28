var x = 3;

try {
    throw "boom";
} catch (x) {}

console.log(x);

if (true) {
    var y;
}

try {
    throw "boom";
} catch (y) {}
