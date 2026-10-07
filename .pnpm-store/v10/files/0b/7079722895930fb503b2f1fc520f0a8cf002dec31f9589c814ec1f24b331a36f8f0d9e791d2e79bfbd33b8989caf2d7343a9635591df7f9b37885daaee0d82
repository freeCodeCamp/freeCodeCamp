var expect = require('chai').expect,
    Sister = require('../src/sister.js');

describe('Sister', function () {
    var sister;
    beforeEach(function () {
        sister = Sister();
    });
    describe('.on()', function () {
        it('returns listener object', function () {
            var handler = function () {},
                listener;

            listener = sister.on('foo', handler);

            expect(listener).to.deep.equal({name: 'foo', handler: handler});
        });
    });
    describe('.off', function () {
        it('removes listener', function () {
            var callCount = 0,
                listener;
            listener = sister.on('foo', function () {
                callCount++;
            });
            sister.trigger('foo');
            sister.off(listener);
            sister.trigger('foo');
            expect(callCount).to.equal(1);
        });
    });
    it('invokes listeners for matched events in order', function () {
        var i = '';
        sister.on('foo', function () {
            i += 'a';
        });
        sister.on('foo', function () {
            i += 'b';
        });
        sister.trigger('foo');
        expect(i).to.equal('ab');
    });
    it('passes data parameter to the listeners', function () {
        var data;
        sister.on('foo', function (_data) {
            data = _data;
        });
        sister.trigger('foo', 1);
        expect(data).to.equal(1);
    });
});