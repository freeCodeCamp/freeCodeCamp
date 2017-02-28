(function () {
    var a = 1;

    function foo() {
        var a = 2;
    }
}());

(function () {
    var b = 1;

    function foo(b) {
    }
}());

(function () {
    function bar() {}

    function foo() {
        function bar() {}
    }
}());

(function () {
    function foo() {}
    function foo() {}
}());
