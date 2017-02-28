function functionWithNoParameters() {
}

function functionWith3Parameters(param1, param2, param3) {
}

var a = () => {};
var b = (a) => {};
var c = a => {};
var d = (a, b, c) => {};
var e = ({a, b, c}) => {};

function f([a, b, c] = [], [d, e] = []) {
}

function g({a}, {b}, {c}) {
}