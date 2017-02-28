var Factory = function () {};

(function () {
    "use strict";

    var a = Factory();
    var b = new Factory();

    return a && b;
})();


(function () {
    "use strict";
    /*jshint newcap:false */

    var a = Factory();
    var b = new Factory();

    return a && b;
})();
