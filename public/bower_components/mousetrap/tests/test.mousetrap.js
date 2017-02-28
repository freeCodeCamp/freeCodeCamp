/* jshint es5: true, browser: true, expr: true */
/* globals describe, afterEach, chai, it, sinon, Mousetrap, KeyEvent, Event */
var expect = chai.expect;
afterEach(function() {
    Mousetrap.reset();
});

describe('Mousetrap.bind', function() {
    describe('basic', function() {
        it('z key fires when pressing z', function() {
            var spy = sinon.spy();

            Mousetrap.bind('z', spy);

            KeyEvent.simulate('Z'.charCodeAt(0), 90);

            // really slow for some reason
            // expect(spy).to.have.been.calledOnce;
            expect(spy.callCount).to.equal(1, 'callback should fire once');
            expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
            expect(spy.args[0][1]).to.equal('z', 'second argument should be key combo');
        });

        it('z key fires from keydown', function() {
            var spy = sinon.spy();

            Mousetrap.bind('z', spy, 'keydown');

            KeyEvent.simulate('Z'.charCodeAt(0), 90);

            // really slow for some reason
            // expect(spy).to.have.been.calledOnce;
            expect(spy.callCount).to.equal(1, 'callback should fire once');
            expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
            expect(spy.args[0][1]).to.equal('z', 'second argument should be key combo');
        });

        it('z key does not fire when pressing b', function() {
            var spy = sinon.spy();

            Mousetrap.bind('z', spy);

            KeyEvent.simulate('B'.charCodeAt(0), 66);

            expect(spy.callCount).to.equal(0);
        });

        it('z key does not fire when holding a modifier key', function() {
            var spy = sinon.spy();
            var modifiers = ['ctrl', 'alt', 'meta', 'shift'];
            var charCode;
            var modifier;

            Mousetrap.bind('z', spy);

            for (var i = 0; i < 4; i++) {
                modifier = modifiers[i];
                charCode = 'Z'.charCodeAt(0);

                // character code is different when alt is pressed
                if (modifier == 'alt') {
                    charCode = 'Ω'.charCodeAt(0);
                }

                spy.reset();

                KeyEvent.simulate(charCode, 90, [modifier]);

                expect(spy.callCount).to.equal(0);
            }
        });

        it('keyup events should fire', function() {
            var spy = sinon.spy();

            Mousetrap.bind('z', spy, 'keyup');

            KeyEvent.simulate('Z'.charCodeAt(0), 90);

            expect(spy.callCount).to.equal(1, 'keyup event for "z" should fire');

            // for key held down we should only get one key up
            KeyEvent.simulate('Z'.charCodeAt(0), 90, [], document, 10);
            expect(spy.callCount).to.equal(2, 'keyup event for "z" should fire once for held down key');
        });

        it('keyup event for 0 should fire', function() {
            var spy = sinon.spy();

            Mousetrap.bind('0', spy, 'keyup');

            KeyEvent.simulate(0, 48);

            expect(spy.callCount).to.equal(1, 'keyup event for "0" should fire');
        });

        it('rebinding a key overwrites the callback for that key', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();
            Mousetrap.bind('x', spy1);
            Mousetrap.bind('x', spy2);

            KeyEvent.simulate('X'.charCodeAt(0), 88);

            expect(spy1.callCount).to.equal(0, 'original callback should not fire');
            expect(spy2.callCount).to.equal(1, 'new callback should fire');
        });

        it('binding an array of keys', function() {
            var spy = sinon.spy();
            Mousetrap.bind(['a', 'b', 'c'], spy);

            KeyEvent.simulate('A'.charCodeAt(0), 65);
            expect(spy.callCount).to.equal(1, 'new callback was called');
            expect(spy.args[0][1]).to.equal('a', 'callback should match "a"');

            KeyEvent.simulate('B'.charCodeAt(0), 66);
            expect(spy.callCount).to.equal(2, 'new callback was called twice');
            expect(spy.args[1][1]).to.equal('b', 'callback should match "b"');

            KeyEvent.simulate('C'.charCodeAt(0), 67);
            expect(spy.callCount).to.equal(3, 'new callback was called three times');
            expect(spy.args[2][1]).to.equal('c', 'callback should match "c"');
        });

        it('return false should prevent default and stop propagation', function() {
            var spy = sinon.spy(function() {
                return false;
            });

            Mousetrap.bind('command+s', spy);

            KeyEvent.simulate('S'.charCodeAt(0), 83, ['meta']);

            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');

            expect(spy.args[0][0].defaultPrevented).to.be.true;

            // cancelBubble is not correctly set to true in webkit/blink
            //
            // @see https://code.google.com/p/chromium/issues/detail?id=162270
            // expect(spy.args[0][0].cancelBubble).to.be.true;

            // try without return false
            spy = sinon.spy();
            Mousetrap.bind('command+s', spy);
            KeyEvent.simulate('S'.charCodeAt(0), 83, ['meta']);

            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
            expect(spy.args[0][0].cancelBubble).to.be.falsey;
            expect(spy.args[0][0].defaultPrevented).to.be.falsey;
        });

        it('capslock key is ignored', function() {
            var spy = sinon.spy();
            Mousetrap.bind('a', spy);

            KeyEvent.simulate('a'.charCodeAt(0), 65);
            expect(spy.callCount).to.equal(1, 'callback should fire for lowercase a');

            spy.reset();
            KeyEvent.simulate('A'.charCodeAt(0), 65);
            expect(spy.callCount).to.equal(1, 'callback should fire for capslock A');

            spy.reset();
            KeyEvent.simulate('A'.charCodeAt(0), 65, ['shift']);
            expect(spy.callCount).to.equal(0, 'callback should not fire fort shift+a');
        });
    });

    describe('special characters', function() {
        it('binding special characters', function() {
            var spy = sinon.spy();
            Mousetrap.bind('*', spy);

            KeyEvent.simulate('*'.charCodeAt(0), 56, ['shift']);

            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][1]).to.equal('*', 'callback should match *');
        });

        it('binding special characters keyup', function() {
            var spy = sinon.spy();
            Mousetrap.bind('*', spy, 'keyup');

            KeyEvent.simulate('*'.charCodeAt(0), 56, ['shift']);

            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][1]).to.equal('*', 'callback should match "*"');
        });

        it('binding keys with no associated charCode', function() {
            var spy = sinon.spy();
            Mousetrap.bind('left', spy);

            KeyEvent.simulate(0, 37);

            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][1]).to.equal('left', 'callback should match "left"');
        });

        it('binding plus key alone should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('+', spy);

            // fires for regular + character
            KeyEvent.simulate('+'.charCodeAt(0), 43);

            // and for shift+=
            KeyEvent.simulate(43, 187, ['shift']);

            expect(spy.callCount).to.equal(2, 'callback should fire');
            expect(spy.args[0][1]).to.equal('+', 'callback should match "+"');
        });

        it('binding plus key as "plus" should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('plus', spy);

            // fires for regular + character
            KeyEvent.simulate('+'.charCodeAt(0), 43);

            // and for shift+=
            KeyEvent.simulate(43, 187, ['shift']);

            expect(spy.callCount).to.equal(2, 'callback should fire');
            expect(spy.args[0][1]).to.equal('plus', 'callback should match "plus"');
        });

        it('binding to alt++ should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('alt++', spy);

            KeyEvent.simulate('+'.charCodeAt(0), 43, ['alt']);
            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][1]).to.equal('alt++', 'callback should match "alt++"');
        });

        it('binding to alt+shift++ should work as well', function() {
            var spy = sinon.spy();
            Mousetrap.bind('alt+shift++', spy);

            KeyEvent.simulate('+'.charCodeAt(0), 43, ['shift', 'alt']);
            expect(spy.callCount).to.equal(1, 'callback should fire');
            expect(spy.args[0][1]).to.equal('alt+shift++', 'callback should match "alt++"');

        })
    });

    describe('combos with modifiers', function() {
        it('binding key combinations', function() {
            var spy = sinon.spy();
            Mousetrap.bind('command+o', spy);

            KeyEvent.simulate('O'.charCodeAt(0), 79, ['meta']);

            expect(spy.callCount).to.equal(1, 'command+o callback should fire');
            expect(spy.args[0][1]).to.equal('command+o', 'keyboard string returned is correct');
        });

        it('binding key combos with multiple modifiers', function() {
            var spy = sinon.spy();
            Mousetrap.bind('command+shift+o', spy);
            KeyEvent.simulate('O'.charCodeAt(0), 79, ['meta']);
            expect(spy.callCount).to.equal(0, 'command+o callback should not fire');

            KeyEvent.simulate('O'.charCodeAt(0), 79, ['meta', 'shift']);
            expect(spy.callCount).to.equal(1, 'command+o callback should fire');
        });
    });

    describe('sequences', function() {
        it('binding sequences', function() {
            var spy = sinon.spy();
            Mousetrap.bind('g i', spy);

            KeyEvent.simulate('G'.charCodeAt(0), 71);
            expect(spy.callCount).to.equal(0, 'callback should not fire');

            KeyEvent.simulate('I'.charCodeAt(0), 73);
            expect(spy.callCount).to.equal(1, 'callback should fire');
        });

        it('binding sequences with mixed types', function() {
            var spy = sinon.spy();
            Mousetrap.bind('g o enter', spy);

            KeyEvent.simulate('G'.charCodeAt(0), 71);
            expect(spy.callCount).to.equal(0, 'callback should not fire');

            KeyEvent.simulate('O'.charCodeAt(0), 79);
            expect(spy.callCount).to.equal(0, 'callback should not fire');

            KeyEvent.simulate(0, 13);
            expect(spy.callCount).to.equal(1, 'callback should fire');
        });

        it('binding sequences starting with modifier keys', function() {
            var spy = sinon.spy();
            Mousetrap.bind('option enter', spy);
            KeyEvent.simulate(0, 18, ['alt']);
            KeyEvent.simulate(0, 13);
            expect(spy.callCount).to.equal(1, 'callback should fire');

            spy = sinon.spy();
            Mousetrap.bind('command enter', spy);
            KeyEvent.simulate(0, 91, ['meta']);
            KeyEvent.simulate(0, 13);
            expect(spy.callCount).to.equal(1, 'callback should fire');

            spy = sinon.spy();
            Mousetrap.bind('escape enter', spy);
            KeyEvent.simulate(0, 27);
            KeyEvent.simulate(0, 13);
            expect(spy.callCount).to.equal(1, 'callback should fire');
        });

        it('key within sequence should not fire', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();
            Mousetrap.bind('a', spy1);
            Mousetrap.bind('c a t', spy2);

            KeyEvent.simulate('A'.charCodeAt(0), 65);
            expect(spy1.callCount).to.equal(1, 'callback 1 should fire');
            spy1.reset();

            KeyEvent.simulate('C'.charCodeAt(0), 67);
            KeyEvent.simulate('A'.charCodeAt(0), 65);
            KeyEvent.simulate('T'.charCodeAt(0), 84);
            expect(spy1.callCount).to.equal(0, 'callback for "a" key should not fire');
            expect(spy2.callCount).to.equal(1, 'callback for "c a t" sequence should fire');
        });

        it('keyup at end of sequence should not fire', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();

            Mousetrap.bind('t', spy1, 'keyup');
            Mousetrap.bind('b a t', spy2);

            KeyEvent.simulate('B'.charCodeAt(0), 66);
            KeyEvent.simulate('A'.charCodeAt(0), 65);
            KeyEvent.simulate('T'.charCodeAt(0), 84);

            expect(spy1.callCount).to.equal(0, 'callback for "t" keyup should not fire');
            expect(spy2.callCount).to.equal(1, 'callback for "b a t" sequence should fire');
        });

        it('keyup sequences should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('b a t', spy, 'keyup');

            KeyEvent.simulate('b'.charCodeAt(0), 66);
            KeyEvent.simulate('a'.charCodeAt(0), 65);

            // hold the last key down for a while
            KeyEvent.simulate('t'.charCodeAt(0), 84, [], document, 10);

            expect(spy.callCount).to.equal(1, 'callback for "b a t" sequence should fire on keyup');
        });

        it('extra spaces in sequences should be ignored', function() {
            var spy = sinon.spy();
            Mousetrap.bind('b   a  t', spy);

            KeyEvent.simulate('b'.charCodeAt(0), 66);
            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate('t'.charCodeAt(0), 84);

            expect(spy.callCount).to.equal(1, 'callback for "b a t" sequence should fire');
        });

        it('modifiers and sequences play nicely', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();

            Mousetrap.bind('ctrl a', spy1);
            Mousetrap.bind('ctrl+b', spy2);

            KeyEvent.simulate(0, 17, ['ctrl']);
            KeyEvent.simulate('A'.charCodeAt(0), 65);
            expect(spy1.callCount).to.equal(1, '"ctrl a" should fire');

            KeyEvent.simulate('B'.charCodeAt(0), 66, ['ctrl']);
            expect(spy2.callCount).to.equal(1, '"ctrl+b" should fire');
        });

        it('sequences that start the same work', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();

            Mousetrap.bind('g g l', spy2);
            Mousetrap.bind('g g o', spy1);

            KeyEvent.simulate('g'.charCodeAt(0), 71);
            KeyEvent.simulate('g'.charCodeAt(0), 71);
            KeyEvent.simulate('o'.charCodeAt(0), 79);
            expect(spy1.callCount).to.equal(1, '"g g o" should fire');
            expect(spy2.callCount).to.equal(0, '"g g l" should not fire');

            spy1.reset();
            spy2.reset();
            KeyEvent.simulate('g'.charCodeAt(0), 71);
            KeyEvent.simulate('g'.charCodeAt(0), 71);
            KeyEvent.simulate('l'.charCodeAt(0), 76);
            expect(spy1.callCount).to.equal(0, '"g g o" should not fire');
            expect(spy2.callCount).to.equal(1, '"g g l" should fire');
        });

        it('sequences should not fire subsequences', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();

            Mousetrap.bind('a b c', spy1);
            Mousetrap.bind('b c', spy2);

            KeyEvent.simulate('A'.charCodeAt(0), 65);
            KeyEvent.simulate('B'.charCodeAt(0), 66);
            KeyEvent.simulate('C'.charCodeAt(0), 67);

            expect(spy1.callCount).to.equal(1, '"a b c" should fire');
            expect(spy2.callCount).to.equal(0, '"b c" should not fire');

            spy1.reset();
            spy2.reset();
            Mousetrap.bind('option b', spy1);
            Mousetrap.bind('a option b', spy2);

            KeyEvent.simulate('A'.charCodeAt(0), 65);
            KeyEvent.simulate(0, 18, ['alt']);
            KeyEvent.simulate('B'.charCodeAt(0), 66);

            expect(spy1.callCount).to.equal(0, '"option b" should not fire');
            expect(spy2.callCount).to.equal(1, '"a option b" should fire');
        });

        it('rebinding same sequence should override previous', function() {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();
            Mousetrap.bind('a b c', spy1);
            Mousetrap.bind('a b c', spy2);

            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate('b'.charCodeAt(0), 66);
            KeyEvent.simulate('c'.charCodeAt(0), 67);

            expect(spy1.callCount).to.equal(0, 'first callback should not fire');
            expect(spy2.callCount).to.equal(1, 'second callback should fire');
        });

        it('broken sequences', function() {
            var spy = sinon.spy();
            Mousetrap.bind('h a t', spy);

            KeyEvent.simulate('h'.charCodeAt(0), 72);
            KeyEvent.simulate('e'.charCodeAt(0), 69);
            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate('r'.charCodeAt(0), 82);
            KeyEvent.simulate('t'.charCodeAt(0), 84);

            expect(spy.callCount).to.equal(0, 'sequence for "h a t" should not fire for "h e a r t"');
        });

        it('sequences containing combos should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('a ctrl+b', spy);

            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate('B'.charCodeAt(0), 66, ['ctrl']);

            expect(spy.callCount).to.equal(1, '"a ctrl+b" should fire');

            Mousetrap.unbind('a ctrl+b');

            spy = sinon.spy();
            Mousetrap.bind('ctrl+b a', spy);

            KeyEvent.simulate('b'.charCodeAt(0), 66, ['ctrl']);
            KeyEvent.simulate('a'.charCodeAt(0), 65);

            expect(spy.callCount).to.equal(1, '"ctrl+b a" should fire');
        });

        it('sequences starting with spacebar should work', function() {
            var spy = sinon.spy();
            Mousetrap.bind('a space b c', spy);

            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate(32, 32);
            KeyEvent.simulate('b'.charCodeAt(0), 66);
            KeyEvent.simulate('c'.charCodeAt(0), 67);

            expect(spy.callCount).to.equal(1, '"a space b c" should fire');
        });

        it('konami code', function() {
            var spy = sinon.spy();
            Mousetrap.bind('up up down down left right left right b a enter', spy);

            KeyEvent.simulate(0, 38);
            KeyEvent.simulate(0, 38);
            KeyEvent.simulate(0, 40);
            KeyEvent.simulate(0, 40);
            KeyEvent.simulate(0, 37);
            KeyEvent.simulate(0, 39);
            KeyEvent.simulate(0, 37);
            KeyEvent.simulate(0, 39);
            KeyEvent.simulate('b'.charCodeAt(0), 66);
            KeyEvent.simulate('a'.charCodeAt(0), 65);
            KeyEvent.simulate(0, 13);

            expect(spy.callCount).to.equal(1, 'konami code should fire');
        });

        it('sequence timer resets', function() {
            var spy = sinon.spy();
            var clock = sinon.useFakeTimers();

            Mousetrap.bind('h a t', spy);

            KeyEvent.simulate('h'.charCodeAt(0), 72);
            clock.tick(600);
            KeyEvent.simulate('a'.charCodeAt(0), 65);
            clock.tick(900);
            KeyEvent.simulate('t'.charCodeAt(0), 84);

            expect(spy.callCount).to.equal(1, 'sequence should fire after waiting');
            clock.restore();
        });

        it('sequences timeout', function() {
            var spy = sinon.spy();
            var clock = sinon.useFakeTimers();

            Mousetrap.bind('g t', spy);
            KeyEvent.simulate('g'.charCodeAt(0), 71);
            clock.tick(1000);
            KeyEvent.simulate('t'.charCodeAt(0), 84);

            expect(spy.callCount).to.equal(0, 'sequence callback should not fire');
            clock.restore();
        });
    });

    describe('default actions', function() {
        var keys = {
            keypress: [
                ['a', 65],
                ['A', 65, ['shift']],
                ['7', 55],
                ['?', 191],
                ['*', 56],
                ['+', 187],
                ['$', 52],
                ['[', 219],
                ['.', 190]
            ],
            keydown: [
                ['shift+\'', 222, ['shift']],
                ['shift+a', 65, ['shift']],
                ['shift+5', 53, ['shift']],
                ['command+shift+p', 80, ['meta', 'shift']],
                ['space', 32],
                ['left', 37]
            ]
        };

        function getCallback(key, keyCode, type, modifiers) {
            return function() {
                var spy = sinon.spy();
                Mousetrap.bind(key, spy);

                KeyEvent.simulate(key.charCodeAt(0), keyCode, modifiers);
                expect(spy.callCount).to.equal(1);
                expect(spy.args[0][0].type).to.equal(type);
            };
        }

        for (var type in keys) {
            for (var i = 0; i < keys[type].length; i++) {
                var key = keys[type][i][0];
                var keyCode = keys[type][i][1];
                var modifiers = keys[type][i][2] || [];
                it('"' + key + '" uses "' + type + '"', getCallback(key, keyCode, type, modifiers));
            }
        }
    });
});

describe('Mousetrap.unbind', function() {
    it('unbind works', function() {
        var spy = sinon.spy();
        Mousetrap.bind('a', spy);
        KeyEvent.simulate('a'.charCodeAt(0), 65);
        expect(spy.callCount).to.equal(1, 'callback for a should fire');

        Mousetrap.unbind('a');
        KeyEvent.simulate('a'.charCodeAt(0), 65);
        expect(spy.callCount).to.equal(1, 'callback for a should not fire after unbind');
    });

    it('unbind accepts an array', function() {
        var spy = sinon.spy();
        Mousetrap.bind(['a', 'b', 'c'], spy);
        KeyEvent.simulate('a'.charCodeAt(0), 65);
        KeyEvent.simulate('b'.charCodeAt(0), 66);
        KeyEvent.simulate('c'.charCodeAt(0), 67);
        expect(spy.callCount).to.equal(3, 'callback should have fired 3 times');

        Mousetrap.unbind(['a', 'b', 'c']);
        KeyEvent.simulate('a'.charCodeAt(0), 65);
        KeyEvent.simulate('b'.charCodeAt(0), 66);
        KeyEvent.simulate('c'.charCodeAt(0), 67);
        expect(spy.callCount).to.equal(3, 'callback should not fire after unbind');
    });
});

describe('wrapping a specific element', function() {
    var form = document.querySelector('form');
    var textarea = form.querySelector('textarea');

    it('z key fires when pressing z in the target element', function() {
        var spy = sinon.spy();

        Mousetrap(form).bind('z', spy);

        KeyEvent.simulate('Z'.charCodeAt(0), 90, [], form);

        expect(spy.callCount).to.equal(1, 'callback should fire once');
        expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
        expect(spy.args[0][1]).to.equal('z', 'second argument should be key combo');
    });

    it('z key fires when pressing z in a child of the target element', function() {
        var spy = sinon.spy();

        Mousetrap(form).bind('z', spy);

        KeyEvent.simulate('Z'.charCodeAt(0), 90, [], textarea);

        expect(spy.callCount).to.equal(1, 'callback should fire once');
        expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
        expect(spy.args[0][1]).to.equal('z', 'second argument should be key combo');
    });

    it('z key does not fire when pressing z outside the target element', function() {
        var spy = sinon.spy();

        Mousetrap(textarea).bind('z', spy);

        KeyEvent.simulate('Z'.charCodeAt(0), 90);

        expect(spy.callCount).to.equal(0, 'callback should not have fired');
    });

    it('should work when constructing a new mousetrap object', function() {
        var spy = sinon.spy();

        var mousetrap = new Mousetrap(form);
        mousetrap.bind('a', spy);

        KeyEvent.simulate('a'.charCodeAt(0), 65, [], textarea);

        expect(spy.callCount).to.equal(1, 'callback should fire once');
        expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
        expect(spy.args[0][1]).to.equal('a', 'second argument should be key combo');
    });

    it('should allow you to create an empty mousetrap constructor', function() {
        var spy = sinon.spy();

        var mousetrap = new Mousetrap();
        mousetrap.bind('a', spy);

        KeyEvent.simulate('a'.charCodeAt(0), 65);

        expect(spy.callCount).to.equal(1, 'callback should fire once');
        expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
        expect(spy.args[0][1]).to.equal('a', 'second argument should be key combo');
    });
});
