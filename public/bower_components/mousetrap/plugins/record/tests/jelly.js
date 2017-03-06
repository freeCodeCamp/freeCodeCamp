/**
 * Peanut butter goes great with jelly.
 *
 * @author Dan Tao <daniel.tao@gmail.com>
 */
var Jelly = (function() {
    var recordButton = $("button.test-record"),
        recordResult = $("div.test-record-result");

    function _formatSequenceAsHtml(sequence) {
        var combos = [],
            i;

        for (i = 0; i < sequence.length; ++i) {
            combos.push('<span>' + _formatKeysAsHtml(sequence[i].split('+')) + '</span>');
        }

        return combos.join(' ');
    }

    function _formatKeysAsHtml(keys) {
        var htmlKeys = [],
            i;

        for (i = 0; i < keys.length; ++i) {
            htmlKeys.push('<kbd>' + keys[i] + '</kbd>');
        }

        return htmlKeys.join('+');
    }

    function _prepareRecordTest() {
        recordButton.prop('disabled', true);
        recordButton.text('Recording');

        Mousetrap.record(function(sequence) {
            recordResult.html(_formatSequenceAsHtml(sequence));
            recordButton.prop('disabled', false);
            recordButton.text('Record');
        });

        // take focus away from the button so that Mousetrap will actually
        // capture keystrokes
        recordButton.blur();
    }

    return {
        spread: function() {
            recordButton.click(_prepareRecordTest);
        }
    };

})();
