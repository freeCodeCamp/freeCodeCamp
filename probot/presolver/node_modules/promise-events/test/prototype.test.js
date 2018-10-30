
'use strict';

describe("Test EventEmitter prototype", function () {

  const Emitter = require('../emitter');
  //var should = require('should');

  it("should provide standard emitter interface", function () {
    let events = new Emitter();

    Emitter.prototype.getMaxListeners.should.be.a.Function;
    Emitter.prototype.setMaxListeners.should.be.a.Function;
    Emitter.prototype.emit.should.be.a.Function;
    Emitter.prototype.addListener.should.be.a.Function;
    Emitter.prototype.on.should.be.a.Function;
    Emitter.prototype.once.should.be.a.Function;
    Emitter.prototype.removeListener.should.be.a.Function;
    Emitter.prototype.removeAllListeners.should.be.a.Function;
    Emitter.prototype.listeners.should.be.a.Function;

    events.getMaxListeners.should.be.a.Function;
    events.setMaxListeners.should.be.a.Function;
    events.emit.should.be.a.Function;
    events.addListener.should.be.a.Function;
    events.on.should.be.a.Function;
    events.once.should.be.a.Function;
    events.removeListener.should.be.a.Function;
    events.removeAllListeners.should.be.a.Function;
    events.listeners.should.be.a.Function;

    events.hasOwnProperty('_events');
    events.hasOwnProperty('_maxListeners');
  });


  it('should provide method and property aliases', function () {
    let descriptor;

    Emitter.prototype.on.should.equal(Emitter.prototype.addListener);
    Emitter.prototype.should.have.property('maxListeners');

    descriptor = Object.getOwnPropertyDescriptor(Emitter.prototype, 'maxListeners');
    descriptor.get.should.be.a.Function;
    descriptor.set.should.be.a.Function;
  });


});
