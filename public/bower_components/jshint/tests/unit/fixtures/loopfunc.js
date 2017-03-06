var v;

while (true) {
    var x = function () { return v; };
}

for (var i = 0; i < 5; i++) {
    var y = function () { return v; };
}

while (true) {
    function z() { return v; }
}

while (true) {
  var a = function () { return 0; };
}

while (true) {
  var b = function () { return nonExistent; };
}

function boo(p) {
  while (true) {
    var c = function () { return p; };
  }
}

while (true) {
  var d = function z() { return z(); };
}

for (i = 0; i < 5; i++) {
  c = function (a,b,i) { return i; };
}

for (i = 0; i < 5; i++) {
  c = function (a,b,i) { function d() { return i; } return d(); };
}

for (i = 0; i < 5; i++) {
  c = function (a,b,c) { function d() { return i; } return d(); };
}
