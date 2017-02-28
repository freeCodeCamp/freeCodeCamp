var foo;

; (foo)
? foo.bar = {}
: (function () {
      foo = {};
      foo.bar = {};
} ())
;


;(function () {
    var bar = 1;
}());

;function boo() {
};

// From GH-487
;(x || y).doSomething();
;[a, b, c].foreach(doSomething);