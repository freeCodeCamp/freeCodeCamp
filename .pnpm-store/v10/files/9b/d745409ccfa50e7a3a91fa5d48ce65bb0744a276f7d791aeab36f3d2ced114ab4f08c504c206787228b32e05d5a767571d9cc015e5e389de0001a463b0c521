"use strict";
module.exports = (function(){
var AssertionError = (function() {
    function AssertionError(a) {
        this.constructor$(a);
        this.message = a;
        this.name = "AssertionError";
    }
    AssertionError.prototype = new Error();
    AssertionError.prototype.constructor = AssertionError;
    AssertionError.prototype.constructor$ = Error;
    return AssertionError;
})();

function getParams(args) {
    var params = [];
    for (var i = 0; i < args.length; ++i) params.push("arg" + i);
    return params;
}

function nativeAssert(callName, args, expect) {
    try {
        var params = getParams(args);
        var constructorArgs = params;
        constructorArgs.push("return " +
                callName + "("+ params.join(",") + ");");
        var fn = Function.apply(null, constructorArgs);
        return fn.apply(null, args);
    } catch (e) {
        if (!(e instanceof SyntaxError)) {
            throw e;
        } else {
            return expect;
        }
    }
}

return function assert(boolExpr, message) {
    if (boolExpr === true) return;

    if (typeof boolExpr === "string" &&
        boolExpr.charAt(0) === "%") {
        var nativeCallName = boolExpr;
        var $_len = arguments.length;var args = new Array(Math.max($_len - 2, 0)); for(var $_i = 2; $_i < $_len; ++$_i) {args[$_i - 2] = arguments[$_i];};
        if (nativeAssert(nativeCallName, args, message) === message) return;
        message = (nativeCallName + " !== " + message);
    }

    var ret = new AssertionError(message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(ret, assert);
    }
    throw ret;
};
})();
