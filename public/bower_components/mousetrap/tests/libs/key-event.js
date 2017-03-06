(function() {
    var KeyEvent = function(data, type) {
        this.keyCode = 'keyCode' in data ? data.keyCode : 0;
        this.charCode = 'charCode' in data ? data.charCode : 0;

        var modifiers = 'modifiers' in data ? data.modifiers : [];

        this.ctrlKey = false;
        this.metaKey = false;
        this.altKey = false;
        this.shiftKey = false;

        for (var i = 0; i < modifiers.length; i++) {
            this[modifiers[i] + 'Key'] = true;
        }

        this.type = type || 'keypress';
    };

    KeyEvent.prototype.toNative = function() {
        var event = document.createEventObject ? document.createEventObject() : document.createEvent('Events');

        if (event.initEvent) {
            event.initEvent(this.type, true, true);
        }

        event.keyCode = this.keyCode;
        event.which = this.charCode || this.keyCode;
        event.shiftKey = this.shiftKey;
        event.metaKey = this.metaKey;
        event.altKey = this.altKey;
        event.ctrlKey = this.ctrlKey;

        return event;
    };

    KeyEvent.prototype.fire = function(element) {
        var event = this.toNative();
        if (element.dispatchEvent) {
            element.dispatchEvent(event);
            return;
        }

        element.fireEvent('on' + this.type, event);
    };

    // simulates complete key event as if the user pressed the key in the browser
    // triggers a keydown, then a keypress, then a keyup
    KeyEvent.simulate = function(charCode, keyCode, modifiers, element, repeat) {
        if (modifiers === undefined) {
            modifiers = [];
        }

        if (element === undefined) {
            element = document;
        }

        if (repeat === undefined) {
            repeat = 1;
        }

        var modifierToKeyCode = {
            'shift': 16,
            'ctrl': 17,
            'alt': 18,
            'meta': 91
        };

        // if the key is a modifier then take it out of the regular
        // keypress/keydown
        if (keyCode == 16 || keyCode == 17 || keyCode == 18 || keyCode == 91) {
            repeat = 0;
        }

        var modifiersToInclude = [];
        var keyEvents = [];

        // modifiers would go down first
        for (var i = 0; i < modifiers.length; i++) {
            modifiersToInclude.push(modifiers[i]);
            keyEvents.push(new KeyEvent({
                charCode: 0,
                keyCode: modifierToKeyCode[modifiers[i]],
                modifiers: modifiersToInclude
            }, 'keydown'));
        }

        // @todo factor in duration for these
        while (repeat > 0) {
            keyEvents.push(new KeyEvent({
                charCode: 0,
                keyCode: keyCode,
                modifiers: modifiersToInclude
            }, 'keydown'));

            keyEvents.push(new KeyEvent({
                charCode: charCode,
                keyCode: charCode,
                modifiers: modifiersToInclude
            }, 'keypress'));

            repeat--;
        }

        keyEvents.push(new KeyEvent({
            charCode: 0,
            keyCode: keyCode,
            modifiers: modifiersToInclude
        }, 'keyup'));

        // now lift up the modifier keys
        for (i = 0; i < modifiersToInclude.length; i++) {
            var modifierKeyCode = modifierToKeyCode[modifiersToInclude[i]];
            modifiersToInclude.splice(i, 1);
            keyEvents.push(new KeyEvent({
                charCode: 0,
                keyCode: modifierKeyCode,
                modifiers: modifiersToInclude
            }, 'keyup'));
        }

        for (i = 0; i < keyEvents.length; i++) {
            // console.log('firing', keyEvents[i].type, keyEvents[i].keyCode, keyEvents[i].charCode);
            keyEvents[i].fire(element);
        }
    };

    window.KeyEvent = KeyEvent;
}) ();
