(function () {
    /*jshint quotmark:double */
    /*members '\b' */
    /* This is a comment with a 'single' quoted text. */

    var test1 = 'hello';
    var test2 = "hello";
})();

(function () {
    /*jshint quotmark:single */

    var test1 = 'hello';
    var test2 = "hello";
})();

(function () {
    /*jshint quotmark:true */

    var test1 = 'hello';
    var test2 = "hello";
})();

(function () {
    /*jshint quotmark:false */

    var test1 = 'hello';
    var test2 = "hello";
})();

(function () {
    /*jshint quotmark:bad */

    var test1 = 'hello';
    var test2 = "hello";
})();
