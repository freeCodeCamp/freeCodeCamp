(function () {
    "use strict";

    function returnthis() { return this; }
    function Returnthis() { return this; }

    function callCallee() { return arguments.callee; }
    function callCaller() { return arguments.caller; }
}());