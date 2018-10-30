
'use strict';

describe("Test inheritance", function () {

  const Emitter = require('../emitter');


  it("should create valid instance", function () {
    const util = require('util');
    const SubEmitter = function () {};

    let events;

    util.inherits(SubEmitter, Emitter);

    events = new SubEmitter();

    events.should.be.instanceOf(Emitter);

    events.should.not.have.ownProperty('_events');
    events.should.not.have.ownProperty('_eventsCount');

    return events.on('foo', () => {}).then(() => {

      events.should.have.ownProperty('_events').and.have.ownProperty('foo').be.a.Function;
      events.should.have.ownProperty('_eventsCount').equal(1);

    });

  });


  it('should be instance of built-in EventEmitter', function () {
    const EventEmitter = require('events').EventEmitter;

    let events = new Emitter();

    events.should.be.instanceOf(EventEmitter);
  });

});
