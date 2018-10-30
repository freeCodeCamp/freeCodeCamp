
'use strict';

describe("Test domains", function () {
  const Emitter = require('../emitter');


  it("should use domain events");


  it('should set default domain using option', function () {
    let originalValue = Emitter.usingDomains;

    Emitter.usingDomains = true;
    Emitter.usingDomains.should.be.true;
    Emitter.usingDomains = false;
    Emitter.usingDomains.should.be.false;

    Emitter.usingDomains = originalValue;
  });

});