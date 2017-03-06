(function () {
    /* jshint shadow:outer */

    var a = 1;

    function foo(a) {
        var a = 2;
    }
}());

(function () {
    /* jshint shadow:inner */

    var a = 1;

    function foo(a) {
        var a = 2;
    }
}());

(function () {
    /* jshint shadow:false */

    var a = 1;

    function foo(a) {
        var a = 2;
    }
}());

(function () {
    /* jshint shadow:true */

    var a = 1;

    function foo(a) {
        var a = 2;
    }
}());

(function () {
    /* jshint shadow:puppet */

    var a = 1;

    function foo(a) {
        var a = 2;
    }
}());
