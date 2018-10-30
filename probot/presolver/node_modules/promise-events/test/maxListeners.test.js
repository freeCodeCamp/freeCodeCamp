'use strict';

const should = require('should');

describe("Test maxListeners", function () {

  const Emitter = require('../emitter');
  let _maxListeners;

  before(function () {
    _maxListeners = Emitter.defaultMaxListeners;
  });

  after(function () {
    Emitter.defaultMaxListeners = _maxListeners;
  });


  it('should not set invalid value', function () {
    let events = new Emitter();

    [
      undefined, null, false, true, '', 'foo', /./, function () {}, {}, [], -1, NaN
    ].forEach(function (n) {
      !function () { events.maxListeners = n; }.should.throw(/must be a positive number/);
    });
  });


  it('should reciprocate', function () {
    let events = new Emitter();

    events.getMaxListeners().should.equal(events.maxListeners);

    Emitter.defaultMaxListeners = 10;
    Emitter.defaultMaxListeners.should.equal(10);

    events.maxListeners.should.equal(Emitter.defaultMaxListeners);

    Emitter.defaultMaxListeners = 0;
    Emitter.defaultMaxListeners.should.equal(0);
    events.getMaxListeners().should.equal(0);
    events.maxListeners.should.equal(0);

    for (let i = 1; i < 100; ++i) {
      events.setMaxListeners(i).getMaxListeners().should.equal(events.maxListeners);
      events.maxListeners.should.equal(i);
    }
  });


  it("should detect memory leak", function () {
    const events = new Emitter();
    const _error = console.error;
    const _trace = console.trace;
    let errorCount = 0;
    let traceCount = 0;

    console.error = function () {
      ++errorCount;
    };
    console.trace = function () {
      ++traceCount;
    };

    events.maxListeners = 5;

    for (var i = 0; i < events.maxListeners + 2; ++i) {
      events.listeners('test').length.should.equal(i);
      events.on('test', () => {});
    }

    events.listeners('test').length.should.equal(events.maxListeners + 2);

    errorCount.should.equal(1);
    traceCount.should.equal(1);

    events.removeAllListeners();
    events.listeners('test').length.should.equal(0);

    console.error = _error;
    console.trace = _trace;
  });


});
