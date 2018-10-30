
'use strict';

describe("Test emitting events", function () {

  const Emitter = require('../emitter');
  const should = require('should');


  describe("Emitting events", function () {

    it("should emit 'newListener'", function () {
      let events = new Emitter();
      let fnFoo = function foo() {};
      let fnBar = function bar() {};
      let listeners = {};

      this.timeout(1000);

      return events.addListener('newListener', (type, listener) => {
        listeners[type] = listener;
      }).then(() => {
        return events.addListener('foo', fnFoo).then(events.on('bar', fnBar)).then(() => {

          listeners.should.have.ownProperty('foo').and.equal(fnFoo);
          listeners.should.have.ownProperty('bar').and.equal(fnBar);

        });
      });
    });


    it("should emit 'removeListener'", function () {
      let events = new Emitter();
      let fn = function () {};
      let listeners = { 'foo': fn };

      this.timeout(1000);

      return events.addListener('removeListener', (type, listener) => {
        listener.should.equal(listeners[type]);

        listeners[type] = false;
      }).then(() => {
        return events.on('foo', fn).then(() => {
          return events.removeListener('foo', fn).then(() => {

            listeners.should.have.ownProperty('foo').and.equal(false);

          });
        });
      });
    });


    it("should emit with no arguments", function () {
      let events = new Emitter();
      let fn = function () {
        arguments.should.have.lengthOf(0);
      };

      this.timeout(1000);

      return events.addListener('foo', fn).then(() => {
        return events.emit('foo').then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);

          Emitter.listenerCount(events, 'foo').should.equal(1);

          return events.on('foo', fn).then(() => {
            return events.emit('foo').then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);

              events.listeners('foo').should.be.an.instanceOf(Array).and.have.lengthOf(2);
              Emitter.listenerCount(events, 'foo').should.equal(2);

            });
          });
        });
      });
    });


    it("should emit with one argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let fn = function (arg1) {
        arguments.should.have.lengthOf(1);

        arg1.should.equal(a);

        return arg1;
      };

      this.timeout(1000);

      return events.addListener('foo', fn).then(() => {
        return events.emit('foo', a).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

        }).then(events.on('foo', fn)).then(() => {
          return events.emit('foo', a).then((results) => {

            results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
            should(results[0]).equal(a);
            should(results[1]).equal(a);
          });
        });
      });
    });


    it("should emit with two argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let b = 'World';
      let fn1 = function (arg1, arg2) {
        arguments.should.have.lengthOf(2);

        arg1.should.equal(a);
        arg2.should.equal(b);

        return arg1;
      };
      let fn2 = function (arg1, arg2) {
        arguments.should.have.lengthOf(2);

        arg1.should.equal(a);
        arg2.should.equal(b);

        return arg2;
      };

      this.timeout(1000);

      return events.addListener('foo', fn1).then(() => {
        return events.emit('foo', a, b).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

        }).then(events.on('foo', fn2)).then(() => {
          return events.emit('foo', a, b).then((results) => {

            results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
            should(results[0]).equal(a);
            should(results[1]).equal(b);
          });
        });
      });
    });


    it("should emit with three argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let b = 'World';
      let c = '!!';
      let fn1 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg1;
      };
      let fn2 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg2;
      };
      let fn3 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg3;
      };

      this.timeout(1000);

      return events.addListener('foo', fn1).then(() => {
        return events.emit('foo', a, b, c).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

        }).then(events.addListener('foo', fn2)).then(() => {
          return events.emit('foo', a, b, c).then((results) => {

            results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
            should(results[0]).equal(a);
            should(results[1]).equal(b);

          }).then(events.on('foo', fn3)).then(() => {
            return events.emit('foo', a, b, c).then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(3);
              should(results[0]).equal(a);
              should(results[1]).equal(b);
              should(results[2]).equal(c);

            });
          });
        });
      });
    });


    it("should emit with many argument", function () {
      let events = new Emitter();
      let args = ['a', 'b', 'c', 'd'];
      function fnGenerator(retVal) {
        return function () {
          arguments.should.have.lengthOf(args.length);
          Array.prototype.slice.call(arguments).should.eql(args);

          return retVal;
        }
      }

      return events.addListener('foo', fnGenerator(1)).then(() => {
        return events.emit('foo', 'a', 'b', 'c', 'd').then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(1);

        }).then(events.on('foo', fnGenerator(2))).then(() => {
          return events.emit('foo', 'a', 'b', 'c', 'd').then((results) => {

            results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
            should(results[0]).equal(1);
            should(results[1]).equal(2);

          });
        });
      });
    });

  });


  describe("Emitting event once", function () {

    it("should emit 'newListener'", function () {
      let events = new Emitter();
      let fnFoo = function foo() {};
      let fnBar = function bar() {};
      let listeners = {};

      this.timeout(1000);

      return events.addListener('newListener', (type, listener) => {
        listeners[type] = listener;
      }).then(() => {
        return events.once('foo', fnFoo).then(events.on('bar', fnBar)).then(() => {

          listeners.should.have.ownProperty('foo').and.equal(fnFoo);
          listeners.should.have.ownProperty('bar').and.equal(fnBar);

        });
      });
    });


    it("should emit 'removeListener'", function () {
      let events = new Emitter();
      let fn = function () {};
      let listeners = { 'foo': fn };

      this.timeout(1000);

      return events.addListener('removeListener', (type, listener) => {
        listener.should.equal(listeners[type]);

        listeners[type] = false;
      }).then(() => {
        return events.once('foo', fn).then(() => {
          return events.removeListener('foo', fn).then(() => {

            listeners.should.have.ownProperty('foo').and.equal(false);

          });
        });
      });
    });


    it("should emit 'newListener' only once", function () {
      let events = new Emitter();
      let fn = function () {};
      let newHandlerCount = 0;

      this.timeout(1000);

      return events.once('newListener', (type, listener) => {
        ++newHandlerCount;
      }).then(() => {
        newHandlerCount.should.equal(0);
        events._eventsCount.should.equal(1);

        return events.on('foo', fn).then(events.on('foo', fn)).then(() => {

          newHandlerCount.should.equal(1);
          events._eventsCount.should.equal(2);

        });
      });

    });


    it("should emit with no arguments", function () {
      let events = new Emitter();
      let fn = function () {
        arguments.should.have.lengthOf(0);
      };

      this.timeout(1000);

      return events.once('foo', fn).then(() => {
        (typeof events._events['foo']).should.be.a.Function;

        return events.emit('foo').then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);

          events._events.should.not.have.ownProperty('foo');

          return events.once('foo', fn).then(events.once('foo', fn)).then(() => {
            events._events.should.have.ownProperty('foo').and.have.lengthOf(2);

            return events.emit('foo').then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);

              events._events.should.not.have.ownProperty('foo');
            });
          });
        });
      });
    });


    it("should emit with one argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let fn = function (arg1) {
        arguments.should.have.lengthOf(1);

        arg1.should.equal(a);

        return arg1;
      };

      this.timeout(1000);

      return events.once('foo', fn).then(() => {
        return events.emit('foo', a).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

          events._events.should.not.have.ownProperty('foo');

          return events.once('foo', fn).then(events.once('foo', fn)).then((results) => {
            return events.emit('foo', a).then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
              should(results[0]).equal(a);
              should(results[1]).equal(a);

              events._events.should.not.have.ownProperty('foo');

            });
          });
        });
      });
    });


    it("should emit with two argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let b = 'World';
      let fn1 = function (arg1, arg2) {
        arguments.should.have.lengthOf(2);

        arg1.should.equal(a);
        arg2.should.equal(b);

        return arg1;
      };
      let fn2 = function (arg1, arg2) {
        arguments.should.have.lengthOf(2);

        arg1.should.equal(a);
        arg2.should.equal(b);

        return arg2;
      };

      this.timeout(1000);

      return events.once('foo', fn1).then(() => {
        return events.emit('foo', a, b).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

          events._events.should.not.have.ownProperty('foo');

          return events.once('foo', fn1).then(events.once('foo', fn2)).then((results) => {
            return events.emit('foo', a, b).then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
              should(results[0]).equal(a);
              should(results[1]).equal(b);

              events._events.should.not.have.ownProperty('foo');

            });
          });
        });
      });
    });


    it("should emit with three argument", function () {
      let events = new Emitter();
      let a = 'Hello';
      let b = 'World';
      let c = '!!';
      let fn1 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg1;
      };
      let fn2 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg2;
      };
      let fn3 = function (arg1, arg2, arg3) {
        arguments.should.have.lengthOf(3);

        arg1.should.equal(a);
        arg2.should.equal(b);
        arg3.should.equal(c);

        return arg3;
      };

      this.timeout(1000);

      return events.once('foo', fn1).then(() => {
        return events.emit('foo', a, b, c).then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(a);

          events._events.should.not.have.ownProperty('foo');

          return events.once('foo', fn1).then(events.once('foo', fn2)).then(() => {
            return events.emit('foo', a, b, c).then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
              should(results[0]).equal(a);
              should(results[1]).equal(b);

              events._events.should.not.have.ownProperty('foo');

              return events.once('foo', fn1).then(events.once('foo', fn2)).then(events.once('foo', fn3)).then(() => {
                return events.emit('foo', a, b, c).then((results) => {

                  results.should.be.an.instanceOf(Array).and.have.lengthOf(3);
                  should(results[0]).equal(a);
                  should(results[1]).equal(b);
                  should(results[2]).equal(c);

                  events._events.should.not.have.ownProperty('foo');

                });
              });
            });
          });
        });
      });
    });


    it("should emit with many argument", function () {
      let events = new Emitter();
      let args = ['a', 'b', 'c', 'd'];
      function fnGenerator(retVal) {
        return function () {
          arguments.should.have.lengthOf(args.length);
          Array.prototype.slice.call(arguments).should.eql(args);

          return retVal;
        }
      }

      return events.once('foo', fnGenerator(1)).then(() => {
        return events.emit('foo', 'a', 'b', 'c', 'd').then((results) => {

          results.should.be.an.instanceOf(Array).and.have.lengthOf(1);
          should(results[0]).equal(1);

          events._events.should.not.have.ownProperty('foo');

          return events.once('foo', fnGenerator(1)).then(events.once('foo', fnGenerator(2))).then(() => {
            return events.emit('foo', 'a', 'b', 'c', 'd').then((results) => {

              results.should.be.an.instanceOf(Array).and.have.lengthOf(2);
              should(results[0]).equal(1);
              should(results[1]).equal(2);

              events._events.should.not.have.ownProperty('foo');
            });
          });
        });
      });
    });

    it('should resolve promises created by .once(type)', function() {
      let events = new Emitter();

      return new Promise((resolve, reject) => {
        events.once('foo').then(resolve, reject);

        events.emit('foo').catch(reject);
      });
    });
  });



  describe('Test errors', function () {


    it('should reject error instance when no error listeners', function () {
      let events = new Emitter();

      return events.emit('error', new Error('Test Error')).then(() => {
        throw new Error('Failed test');
      }, (err) => {
        err.should.be.instanceOf(Error).and.have.ownProperty('message').equal('Test Error');
      });
    });

    it('should reject error string when no error listeners', function () {
      let events = new Emitter();

      return events.emit('error', 'Test string').then(() => {
        throw new Error('Failed test');
      }, (err) => {
        err.should.be.instanceOf(Error).and.have.ownProperty('message').equal('Uncaught, unspecified "error" event. (Test string)');
      });
    });

    it('should reject undefined error when no error listeners', function () {
      let events = new Emitter();

      return events.emit('error').then(() => {
        throw new Error('Failed test');
      }, (err) => {
        err.should.be.instanceOf(Error).and.have.ownProperty('message').equal('Uncaught, unspecified "error" event.');
      });
    });

    it('should reject even with undefined _events', function () {
      let events = new Emitter();

      events._events = null;

      return events.emit('error').then(() => {
        throw new Error('Failed test');
      }, (err) => {
        err.should.be.instanceOf(Error).and.have.ownProperty('message').equal('Uncaught, unspecified "error" event.');
      });
    });

  });


  it('should resolve on missing listeners', function () {
    let events = new Emitter();

    return events.emit('missing');
  });

  it('should resolve on missing listeners with undefined _events', function () {
    let events = new Emitter();

    events._events = null;

    return events.emit('missing');
  });

});
