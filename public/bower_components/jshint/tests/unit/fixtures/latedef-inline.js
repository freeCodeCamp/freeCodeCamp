(function () {
    /* jshint latedef:true */
    foo();
    function foo() {}
    a = 1;
    var a;
}());

(function () {
    /* jshint latedef:false */
    foo();
    function foo() {}
    a = 1;
    var a;
}());

(function () {
    /* jshint latedef:nofunc */
    foo();
    function foo() {}
    a = 1;
    var a;
}());

(function () {
    /* jshint latedef:badoption */
    foo();
    function foo() {}
    a = 1;
    var a;
}());
