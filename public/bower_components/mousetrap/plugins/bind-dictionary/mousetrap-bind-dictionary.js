/**
 * Overwrites default Mousetrap.bind method to optionally accept
 * an object to bind multiple key events in a single call
 *
 * You can pass it in like:
 *
 * Mousetrap.bind({
 *     'a': function() { console.log('a'); },
 *     'b': function() { console.log('b'); }
 * });
 *
 * And can optionally pass in 'keypress', 'keydown', or 'keyup'
 * as a second argument
 *
 */
/* global Mousetrap:true */
(function(Mousetrap) {
    var _oldBind = Mousetrap.prototype.bind;
    var args;

    Mousetrap.prototype.bind = function() {
        var self = this;
        args = arguments;

        // normal call
        if (typeof args[0] == 'string' || args[0] instanceof Array) {
            return _oldBind.call(self, args[0], args[1], args[2]);
        }

        // object passed in
        for (var key in args[0]) {
            if (args[0].hasOwnProperty(key)) {
                _oldBind.call(self, key, args[0][key], args[1]);
            }
        }
    };

    Mousetrap.init();
}) (Mousetrap);
