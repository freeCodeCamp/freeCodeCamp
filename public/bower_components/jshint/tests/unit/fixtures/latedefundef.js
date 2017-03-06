function func1() {
    h = func2();
}

function func2() {
    return 2;
}


foo();

function foo() { }


(function () {
    "use strict";
    fn1();
    function fn1() {}
}());


function bar() {
    baz();
}

function baz() {}


hello();


(function () {
    fn();
    function fn() {}
    world();
}());


(function () {
    q = 2;
    var q;
    return q;
}());


var h;
