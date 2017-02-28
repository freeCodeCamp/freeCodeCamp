/**
 * adds a pause and unpause method to Mousetrap
 * this allows you to enable or disable keyboard shortcuts
 * without having to reset Mousetrap and rebind everything
 */
/* global Mousetrap:true */
(function(Mousetrap) {
    var _originalStopCallback = Mousetrap.prototype.stopCallback;

    Mousetrap.prototype.stopCallback = function(e, element, combo) {
        var self = this;

        if (self.paused) {
            return true;
        }

        return _originalStopCallback.call(self, e, element, combo);
    };

    Mousetrap.prototype.pause = function() {
        var self = this;
        self.paused = true;
    };

    Mousetrap.prototype.unpause = function() {
        var self = this;
        self.paused = false;
    };

    Mousetrap.init();
}) (Mousetrap);
