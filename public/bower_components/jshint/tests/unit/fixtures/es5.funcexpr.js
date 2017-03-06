/*
 * Code from ticket #96 (https://github.com/jshint/jshint/issues/96)
 * The problem was that JSHint parsed getters/setters as function
 * declarations and not (anonymous) function expressions.
 */

var test = (function() {
    var func = function() {},
    innerTest = {
        get func() { return func; },
        set func(value) { func = value; }
    };
    innerTest = func;
    return innerTest;
})();
