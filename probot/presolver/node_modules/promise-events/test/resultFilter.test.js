
'use strict';

describe("Test resultFilter", function () {

  const Emitter = require('../emitter');
  let _resultFilter;

  before(function () {
    _resultFilter = Emitter.defaultResultFilter;
  });

  after(function () {
    Emitter.defaultResultFilter = _resultFilter;
  });


  it('should throw when adding invalid filters', function () {
    let events = new Emitter();

    [
      true, 'foo', /./, 42, {}, [], -1
    ].forEach(function (n) {
      !function () { events.resultFilter = n; }.should.throw('Filter must be a function');
    });
  });


  it('should reciprocate', function () {
    const events = new Emitter();

    (typeof events.getResultFilter()).should.equal('undefined');

    const exampleFilter = function() { return true; };
    Emitter.defaultResultFilter = exampleFilter;
    Emitter.defaultResultFilter.should.equal(exampleFilter);

    events.resultFilter = undefined;
    events.resultFilter.should.equal(Emitter.defaultResultFilter);

    Emitter.defaultMaxListeners = undefined;
    (typeof Emitter.defaultMaxListeners).should.equal('undefined');
    (typeof events.maxListeners).should.equal('undefined');
  });


  describe('Filtering the listener return values', function () {

    it('should not filter out undefined results by default', function () {
      const events = new Emitter();

      return Promise.all([
        events.on('foo', () => { return undefined; }),
        events.on('foo', () => { return 1; }),
        events.on('foo', () => { return 2; }),
      ]).then(function() {
        return events.emit('foo').then((results) => {
          results.sort().should.deepEqual([undefined, 1, 2].sort());
        });
      });
    });

    it('should accept custom result filters', function() {
      const events = new Emitter();

      function filter(value) {
        return value !== 2;
      }

      events.setResultFilter(filter);
      events._resultFilter.should.equal(filter);

      return Promise.all([
        events.on('foo', () => { return undefined; }),
        events.on('foo', () => { return 1; }),
        events.on('foo', () => { return 2; }),
      ]).then(function() {
        return events.emit('foo').then((results) => {
          results.sort().should.deepEqual([undefined, 1].sort());
        });
      });
    });

    it("should accept a custom 'undefined' filter", function() {
      const events = new Emitter();

      events.setResultFilter(undefined);

      return Promise.all([
        events.on('foo', () => { return undefined; }),
        events.on('foo', () => { return 1; }),
        events.on('foo', () => { return 2; }),
      ]).then(function() {
        return events.emit('foo').then((results) => {
          results.sort().should.deepEqual([undefined, 1, 2].sort());
        });
      });
    });

    it('should throw when adding invalid filters', function() {
      const events = new Emitter();

      try {
        events.setResultFilter(42);
      } catch (err) {
        err.should.be.instanceOf(Error).and.have.ownProperty('message').equal('Filter must be a function');
      }
    });
  });
});
