/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */


// Sets the timeout to three times the poll interval to ensure all updates
// happen (especially in slower browsers). Native implementations get the
// standard 100ms timeout defined in the spec.
var ASYNC_TIMEOUT = IntersectionObserver.prototype.THROTTLE_TIMEOUT * 3 || 100;


var io;
var noop = function() {};


// References to DOM elements, which are accessible to any test
// and reset prior to each test so state isn't shared.
var rootEl;
var grandParentEl;
var parentEl;
var targetEl1;
var targetEl2;
var targetEl3;
var targetEl4;


describe('IntersectionObserver', function() {

  before(function() {
    // If the browser running the tests doesn't support MutationObserver,
    // fall back to polling.
    if (!('MutationObserver' in window)) {
      IntersectionObserver.prototype.POLL_INTERVAL =
          IntersectionObserver.prototype.THROTTLE_TIMEOUT || 100;
    }
  });


  beforeEach(function() {
    addStyles();
    addFixtures();
  });


  afterEach(function() {
    if (io && 'disconnect' in io) io.disconnect();
    io = null;

    removeStyles();
    removeFixtures();
  });


  describe('constructor', function() {

    it('throws when callback is not a function', function() {
      expect(function() {
        io = new IntersectionObserver(null);
      }).to.throwException();
    });


    it('instantiates root correctly', function() {
      io = new IntersectionObserver(noop);
      expect(io.root).to.be(null);

      io = new IntersectionObserver(noop, {root: rootEl});
      expect(io.root).to.be(rootEl);
    });


    it('throws when root is not an Element', function() {
      expect(function() {
        io = new IntersectionObserver(noop, {root: 'foo'});
      }).to.throwException();
    });


    it('instantiates rootMargin correctly', function() {
      io = new IntersectionObserver(noop, {rootMargin: '10px'});
      expect(io.rootMargin).to.be('10px 10px 10px 10px');

      io = new IntersectionObserver(noop, {rootMargin: '10px -5%'});
      expect(io.rootMargin).to.be('10px -5% 10px -5%');

      io = new IntersectionObserver(noop, {rootMargin: '10px 20% 0px'});
      expect(io.rootMargin).to.be('10px 20% 0px 20%');

      io = new IntersectionObserver(noop, {rootMargin: '0px 0px -5% 5px'});
      expect(io.rootMargin).to.be('0px 0px -5% 5px');

      // TODO(philipwalton): the polyfill supports fractional pixel and
      // percentage values, but the native Chrome implementation does not,
      // at least not in what it reports `rootMargin` to be.
      if (!supportsNativeIntersectionObserver()) {
        io = new IntersectionObserver(noop, {rootMargin: '-2.5% -8.5px'});
        expect(io.rootMargin).to.be('-2.5% -8.5px -2.5% -8.5px');
      }
    });


    // TODO(philipwalton): this doesn't throw in FF, consider readding once
    // expected behavior is clarified.
    // it('throws when rootMargin is not in pixels or pecernt', function() {
    //   expect(function() {
    //     io = new IntersectionObserver(noop, {rootMargin: '0'});
    //   }).to.throwException();
    // });


    // Chrome's implementation in version 51 doesn't include the thresholds
    // property, but versions 52+ do.
    if ('thresholds' in IntersectionObserver.prototype) {
      it('instantiates thresholds correctly', function() {
        io = new IntersectionObserver(noop);
        expect(io.thresholds).to.eql([0]);

        io = new IntersectionObserver(noop, {threshold: 0.5});
        expect(io.thresholds).to.eql([0.5]);

        io = new IntersectionObserver(noop, {threshold: [0.25, 0.5, 0.75]});
        expect(io.thresholds).to.eql([0.25, 0.5, 0.75]);

        io = new IntersectionObserver(noop, {threshold: [1, .5, 0]});
        expect(io.thresholds).to.eql([0, .5, 1]);
      });
    }


    it('throws when a threshold is not a number', function() {
      expect(function() {
        io = new IntersectionObserver(noop, {threshold: ['foo']});
      }).to.throwException();
    });


    it('throws when a threshold value is not between 0 and 1', function() {
      expect(function() {
        io = new IntersectionObserver(noop, {threshold: [0, -1]});
      }).to.throwException();
    });

  });


  describe('observe', function() {

    it('throws when target is not an Element', function() {
      expect(function() {
        io = new IntersectionObserver(noop);
        io.observe(null);
      }).to.throwException();
    });

    it('fills in x and y in the resulting rects', function(done) {
      io = new IntersectionObserver(function(records) {
        expect(records.length).to.be(1);
        var entry = records[0];
        expect(entry.rootBounds.x).to.be(entry.rootBounds.left);
        expect(entry.rootBounds.y).to.be(entry.rootBounds.top);
        expect(entry.boundingClientRect.x).to.be(entry.boundingClientRect.left);
        expect(entry.boundingClientRect.y).to.be(entry.boundingClientRect.top);
        expect(entry.intersectionRect.x).to.be(entry.intersectionRect.left);
        expect(entry.intersectionRect.y).to.be(entry.intersectionRect.top);
        done();
      }, {root: rootEl});
      targetEl2.style.top = '-40px';
      io.observe(targetEl1);
    });

    it('triggers for all targets when observing begins', function(done) {
      io = new IntersectionObserver(function(records) {
        expect(records.length).to.be(2);
        expect(records[0].intersectionRatio).to.be(1);
        expect(records[1].intersectionRatio).to.be(0);
        done();
      }, {root: rootEl});

      targetEl2.style.top = '-40px';
      io.observe(targetEl1);
      io.observe(targetEl2);
    });

    it('triggers for existing targets when observing begins after monitoring has begun', function(done) {
      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      io.observe(targetEl1);
      setTimeout(function() {
        io.observe(targetEl2);
        setTimeout(function() {
          expect(spy.callCount).to.be(2);
          done();
        }, ASYNC_TIMEOUT);
      }, ASYNC_TIMEOUT);
    });


    it('triggers with the correct arguments', function(done) {
      io = new IntersectionObserver(function(records, observer) {
        expect(records.length).to.be(2);
        expect(records[0] instanceof IntersectionObserverEntry).to.be.ok();
        expect(records[1] instanceof IntersectionObserverEntry).to.be.ok();
        expect(observer).to.be(io);
        expect(this).to.be(io);
        done();
      }, {root: rootEl});

      targetEl2.style.top = '-40px';
      io.observe(targetEl1);
      io.observe(targetEl2);
    });


    it('handles container elements with non-visible overflow',
        function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      runSequence([
        function(done) {
          io.observe(targetEl1);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.left = '-40px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          parentEl.style.overflow = 'visible';
          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);
    });


    it('observes one target at a single threshold correctly', function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl, threshold: 0.5});

      runSequence([
        function(done) {
          targetEl1.style.left = '-5px';
          io.observe(targetEl1);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be.greaterThan(0.5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.left = '-15px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be.lessThan(0.5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.left = '-25px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.left = '-10px';
          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(0.5);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);

    });


    it('observes multiple targets at multiple thresholds correctly',
        function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {
        root: rootEl,
        threshold: [1, 0.5, 0]
      });

      runSequence([
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '-15px';
          targetEl2.style.top = '-5px';
          targetEl2.style.left = '0px';
          targetEl3.style.top = '0px';
          targetEl3.style.left = '205px';
          io.observe(targetEl1);
          io.observe(targetEl2);
          io.observe(targetEl3);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(3);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(0.25);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0.75);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '-5px';
          targetEl2.style.top = '-15px';
          targetEl2.style.left = '0px';
          targetEl3.style.top = '0px';
          targetEl3.style.left = '195px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(3);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(0.75);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0.25);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0.25);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '5px';
          targetEl2.style.top = '-25px';
          targetEl2.style.left = '0px';
          targetEl3.style.top = '0px';
          targetEl3.style.left = '185px';
          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(3);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0.75);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '15px';
          targetEl2.style.top = '-35px';
          targetEl2.style.left = '0px';
          targetEl3.style.top = '0px';
          targetEl3.style.left = '175px';
          setTimeout(function() {
            expect(spy.callCount).to.be(4);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].target).to.be(targetEl3);
            expect(records[0].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);
    });


    it('handles rootMargin properly', function(done) {

      parentEl.style.overflow = 'visible';
      targetEl1.style.top = '0px';
      targetEl1.style.left = '-20px';
      targetEl2.style.top = '-20px';
      targetEl2.style.left = '0px';
      targetEl3.style.top = '0px';
      targetEl3.style.left = '200px';
      targetEl4.style.top = '180px';
      targetEl4.style.left = '180px';

      runSequence([
        function(done) {
          io = new IntersectionObserver(function(records) {
            records = sortRecords(records);
            expect(records.length).to.be(4);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(.5);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(.5);
            expect(records[3].target).to.be(targetEl4);
            expect(records[3].intersectionRatio).to.be(1);
            io.disconnect();
            done();
          }, {root: rootEl, rootMargin: '10px'});

          io.observe(targetEl1);
          io.observe(targetEl2);
          io.observe(targetEl3);
          io.observe(targetEl4);
        },
        function(done) {
          io = new IntersectionObserver(function(records) {
            records = sortRecords(records);
            expect(records.length).to.be(4);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(0.5);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0.5);
            expect(records[3].target).to.be(targetEl4);
            expect(records[3].intersectionRatio).to.be(0.5);

            io.disconnect();
            done();
          }, {root: rootEl, rootMargin: '-10px 10%'});

          io.observe(targetEl1);
          io.observe(targetEl2);
          io.observe(targetEl3);
          io.observe(targetEl4);
        },
        function(done) {
          io = new IntersectionObserver(function(records) {
            records = sortRecords(records);
            expect(records.length).to.be(4);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(0.5);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0);
            expect(records[3].target).to.be(targetEl4);
            expect(records[3].intersectionRatio).to.be(0.5);
            io.disconnect();
            done();
          }, {root: rootEl, rootMargin: '-5% -2.5% 0px'});

          io.observe(targetEl1);
          io.observe(targetEl2);
          io.observe(targetEl3);
          io.observe(targetEl4);
        },
        function(done) {
          io = new IntersectionObserver(function(records) {
            records = sortRecords(records);
            expect(records.length).to.be(4);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(0.5);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(0.5);
            expect(records[2].target).to.be(targetEl3);
            expect(records[2].intersectionRatio).to.be(0);
            expect(records[3].target).to.be(targetEl4);
            expect(records[3].intersectionRatio).to.be(0.25);
            io.disconnect();
            done();
          }, {root: rootEl, rootMargin: '5% -2.5% -10px -190px'});

          io.observe(targetEl1);
          io.observe(targetEl2);
          io.observe(targetEl3);
          io.observe(targetEl4);
        }
      ], done);
    });


    it('handles targets on the boundary of root', function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      runSequence([
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '-21px';
          targetEl2.style.top = '-20px';
          targetEl2.style.left = '0px';
          io.observe(targetEl1);
          io.observe(targetEl2);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(2);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].isIntersecting).to.be(false);
            expect(records[1].intersectionRatio).to.be(0);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].isIntersecting).to.be(true);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.top = '0px';
          targetEl1.style.left = '-20px';
          targetEl2.style.top = '-21px';
          targetEl2.style.left = '0px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(2);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl1);
            expect(records[1].intersectionRatio).to.be(0);
            expect(records[1].target).to.be(targetEl2);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.top = '-20px';
          targetEl1.style.left = '200px';
          targetEl2.style.top = '200px';
          targetEl2.style.left = '200px';

          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl2);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);

    });


    it('handles zero-size targets within the root coordinate space',
        function(done) {

      io = new IntersectionObserver(function(records) {
        expect(records.length).to.be(1);
        expect(records[0].isIntersecting).to.be(true);
        expect(records[0].intersectionRatio).to.be(1);
        done();
      }, {root: rootEl});

      targetEl1.style.top = '0px';
      targetEl1.style.left = '0px';
      targetEl1.style.width = '0px';
      targetEl1.style.height = '0px';
      io.observe(targetEl1);
    });


    it('handles elements with display set to none', function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      runSequence([
        function(done) {
          rootEl.style.display = 'none';
          io.observe(targetEl1);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(false);
            expect(records[0].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          rootEl.style.display = 'block';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(true);
            expect(records[0].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          parentEl.style.display = 'none';
          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(false);
            expect(records[0].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          parentEl.style.display = 'block';
          setTimeout(function() {
            expect(spy.callCount).to.be(4);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(true);
            expect(records[0].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          targetEl1.style.display = 'none';
          setTimeout(function() {
            expect(spy.callCount).to.be(5);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(false);
            expect(records[0].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);
    });


    it('handles target elements not yet added to the DOM', function(done) {
      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      // targetEl5 is initially not in the DOM. Note that this element must be
      // created outside of the addFixtures() function to catch the IE11 error
      // described here: https://github.com/w3c/IntersectionObserver/pull/205
      var targetEl5 = document.createElement('div');
      targetEl5.setAttribute('id', 'target5');

      runSequence([
        function(done) {
          io.observe(targetEl5);
          setTimeout(function() {
            // Initial observe should trigger with no intersections since
            // targetEl5 is not yet in the DOM.
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].isIntersecting).to.be(false);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          // Adding targetEl5 inside rootEl should trigger.
          parentEl.insertBefore(targetEl5, targetEl2);
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[0].target).to.be(targetEl5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          // Removing an ancestor of targetEl5 should trigger.
          grandParentEl.parentNode.removeChild(grandParentEl);
          setTimeout(function() {
            expect(spy.callCount).to.be(3);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          // Adding the previously removed targetEl5 (via grandParentEl)
          // back directly inside rootEl should trigger.
          rootEl.appendChild(targetEl5);
          setTimeout(function() {
            expect(spy.callCount).to.be(4);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[0].target).to.be(targetEl5);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          // Removing rootEl should trigger.
          rootEl.parentNode.removeChild(rootEl);
          setTimeout(function() {
            expect(spy.callCount).to.be(5);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].intersectionRatio).to.be(0);
            expect(records[0].target).to.be(targetEl5);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);
    });


    if ('attachShadow' in Element.prototype) {
      it('handles targets in shadow DOM', function(done) {
        grandParentEl.attachShadow({mode: 'open'});
        grandParentEl.shadowRoot.appendChild(parentEl);

        io = new IntersectionObserver(function(records) {
          expect(records.length).to.be(1);
          expect(records[0].intersectionRatio).to.be(1);
          done();
        }, {root: rootEl});

        io.observe(targetEl1);
      });

      it('handles roots in shadow DOM', function(done) {
        var shadowRoot = grandParentEl.attachShadow({mode: 'open'});

        shadowRoot.innerHTML =
        '<style>' +
          '#slot-parent {' +
          '  position: relative;' +
          '  width: 400px;' +
          '  height: 200px;' +
          '}' +
        '</style>' +
        '<div id="slot-parent"><slot></slot></div>';

        var slotParent = shadowRoot.getElementById('slot-parent');

        io = new IntersectionObserver(function(records) {
          expect(records.length).to.be(1);
          expect(records[0].intersectionRatio).to.be(1);
          done();
        }, {root: slotParent});

        io.observe(targetEl1);
      });
    }


    it('handles sub-root element scrolling', function(done) {
      io = new IntersectionObserver(function(records) {
        expect(records.length).to.be(1);
        expect(records[0].intersectionRatio).to.be(1);
        done();
      }, {root: rootEl});

      io.observe(targetEl3);
      setTimeout(function() {
        parentEl.scrollLeft = 40;
      }, 0);
    });


    // Only run this test in browsers that support CSS transitions.
    if ('transform' in document.documentElement.style &&
        'transition' in document.documentElement.style) {

      it('supports CSS transitions and transforms', function(done) {

        targetEl1.style.top = '220px';
        targetEl1.style.left = '220px';

        io = new IntersectionObserver(function(records) {
          expect(records.length).to.be(1);
          // Chrome's native implementation sometimes incorrectly reports
          // the intersection ratio as a number > 1.
          expect(records[0].intersectionRatio >= 1);
          done();
        }, {root: rootEl, threshold: [1]});

        // CSS transitions that are slower than the default throttle timeout
        // require polling to detect, which can be set on a per-instance basis.
        if (!supportsNativeIntersectionObserver()) {
          io.POLL_INTERVAL = 100;
        }

        io.observe(targetEl1);
        setTimeout(function() {
          targetEl1.style.transform = 'translateX(-40px) translateY(-40px)';
        }, 0);
      });
    }


    it('uses the viewport when no root is specified', function(done) {
      io = new IntersectionObserver(function(records) {
        var viewportWidth =
            document.documentElement.clientWidth || document.body.clientWidth;
        var viewportHeight =
            document.documentElement.clientHeight || document.body.clientHeight;

        expect(records.length).to.be(1);
        expect(records[0].rootBounds.top).to.be(0);
        expect(records[0].rootBounds.left).to.be(0);
        expect(records[0].rootBounds.right).to.be(viewportWidth);
        expect(records[0].rootBounds.width).to.be(viewportWidth);
        expect(records[0].rootBounds.bottom).to.be(viewportHeight);
        expect(records[0].rootBounds.height).to.be(viewportHeight);
        done();
      });

      // Ensures targetEl1 is visible in the viewport before observing.
      window.scrollTo(0, 0);
      rootEl.style.position = 'absolute';
      rootEl.style.top = '0px';
      rootEl.style.left = '0px';

      io.observe(targetEl1);
    });

  });


  describe('takeRecords', function() {

    it('supports getting records before the callback is invoked',
        function(done) {

      var lastestRecords = [];
      io = new IntersectionObserver(function(records) {
        lastestRecords = lastestRecords.concat(records);
      }, {root: rootEl});
      io.observe(targetEl1);

      window.requestAnimationFrame && requestAnimationFrame(function() {
        lastestRecords = lastestRecords.concat(io.takeRecords());
      });

      setTimeout(function() {
        expect(lastestRecords.length).to.be(1);
        expect(lastestRecords[0].intersectionRatio).to.be(1);
        done();
      }, ASYNC_TIMEOUT);
    });

  });


  describe('unobserve', function() {

    it('removes targets from the internal store', function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      runSequence([
        function(done) {
          targetEl1.style.top = targetEl2.style.top = '0px';
          targetEl1.style.left = targetEl2.style.left = '0px';
          io.observe(targetEl1);
          io.observe(targetEl2);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(2);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          io.unobserve(targetEl1);
          targetEl1.style.top = targetEl2.style.top = '0px';
          targetEl1.style.left = targetEl2.style.left = '-40px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(1);
            expect(records[0].target).to.be(targetEl2);
            expect(records[0].intersectionRatio).to.be(0);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          io.unobserve(targetEl2);
          targetEl1.style.top = targetEl2.style.top = '0px';
          targetEl1.style.left = targetEl2.style.left = '0px';
          setTimeout(function() {
            expect(spy.callCount).to.be(2);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);

    });

  });

  describe('disconnect', function() {

    it('removes all targets and stops listening for changes', function(done) {

      var spy = sinon.spy();
      io = new IntersectionObserver(spy, {root: rootEl});

      runSequence([
        function(done) {
          targetEl1.style.top = targetEl2.style.top = '0px';
          targetEl1.style.left = targetEl2.style.left = '0px';
          io.observe(targetEl1);
          io.observe(targetEl2);
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            var records = sortRecords(spy.lastCall.args[0]);
            expect(records.length).to.be(2);
            expect(records[0].target).to.be(targetEl1);
            expect(records[0].intersectionRatio).to.be(1);
            expect(records[1].target).to.be(targetEl2);
            expect(records[1].intersectionRatio).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        },
        function(done) {
          io.disconnect();
          targetEl1.style.top = targetEl2.style.top = '0px';
          targetEl1.style.left = targetEl2.style.left = '-40px';
          setTimeout(function() {
            expect(spy.callCount).to.be(1);
            done();
          }, ASYNC_TIMEOUT);
        }
      ], done);

    });

  });

  describe('iframe', function() {
    var iframe;
    var documentElement, body;
    var iframeTargetEl1, iframeTargetEl2;
    var bodyWidth;

    beforeEach(function(done) {
      iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'yes');
      iframe.style.position = 'fixed';
      iframe.style.top = '0px';
      iframe.style.width = '100px';
      iframe.style.height = '200px';
      iframe.onerror = function() {
        done(new Error('iframe initialization failed'));
      };
      iframe.onload = function() {
        iframe.onload = null;
        iframeWin = iframe.contentWindow;
        iframeDoc = iframeWin.document;
        iframeDoc.open();
        iframeDoc.write('<!DOCTYPE html><html><body>');
        iframeDoc.write('<style>');
        iframeDoc.write('body {margin: 0}');
        iframeDoc.write('.target {height: 200px; margin-bottom: 2px; background: blue;}');
        iframeDoc.write('</style>');
        iframeDoc.close();

        // Ensure the documentElement and body are always sorted on top. See
        // `sortRecords` for more info.
        documentElement = iframeDoc.documentElement;
        body = iframeDoc.body;
        documentElement.id = 'A1';
        body.id = 'A1';

        function createTarget(id, bg) {
          var target = iframeDoc.createElement('div');
          target.id = id;
          target.className = 'target';
          target.style.background = bg;
          iframeDoc.body.appendChild(target);
          return target;
        }
        iframeTargetEl1 = createTarget('target1', 'blue');
        iframeTargetEl2 = createTarget('target2', 'green');
        bodyWidth = iframeDoc.body.clientWidth;
        done();
      };
      iframe.src = 'about:blank';
      rootEl.appendChild(iframe);
    });

    afterEach(function() {
      rootEl.removeChild(iframe);
    });

    function rect(r) {
      return {
        y: typeof r.y == 'number' ? r.y : r.top,
        x: typeof r.x == 'number' ? r.x : r.left,
        top: r.top,
        left: r.left,
        width: r.width != null ? r.width : r.right - r.left,
        height: r.height != null ? r.height : r.bottom - r.top,
        right: r.right != null ? r.right : r.left + r.width,
        bottom: r.bottom != null ? r.bottom : r.top + r.height
      };
    }

    function getRootRect(doc) {
      var html = doc.documentElement;
      var body = doc.body;
      return rect({
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      });
    }

    describe('same-origin iframe', function() {
      it('iframe targets do not intersect with a top root element', function(done) {
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(records[0].isIntersecting).to.be(false);
          expect(records[1].isIntersecting).to.be(false);
          done();
          io.disconnect();
        }, {root: rootEl});
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('triggers for all targets in top-level root', function(done) {
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.be(1);
          expect(records[1].isIntersecting).to.be(false);
          expect(records[1].intersectionRatio).to.be(0);

          // The rootBounds is for the document's root.
          expect(records[0].rootBounds.height).to.be(innerHeight);

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('triggers for all targets in iframe-level root', function(done) {
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(records[0].intersectionRatio).to.be(1);
          expect(records[1].intersectionRatio).to.be(1);

          // The rootBounds is for the document's root.
          expect(rect(records[0].rootBounds)).
            to.eql(rect(iframeDoc.body.getBoundingClientRect()));

          done();
          io.disconnect();
        }, {root: iframeDoc.body});
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a fully visible frame', function(done) {
        iframe.style.top = '0px';
        iframe.style.height = '300px';
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(clientRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.be(1);

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.48, 0.5); // ~0.5

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a fully visible and offset frame', function(done) {
        iframe.style.top = '10px';
        iframe.style.height = '300px';
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(clientRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.be(1);

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.48, 0.5); // ~0.5

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a clipped frame on top', function(done) {
        iframe.style.top = '-10px';
        iframe.style.height = '300px';
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            left: 0,
            width: bodyWidth,
            // Top is clipped.
            top: 10,
            height: 200 - 10
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(intersectRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.within(0.94, 0.96); // ~0.95

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.48, 0.5); // ~0.49

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a clipped frame on bottom', function(done) {
        iframe.style.top = 'auto';
        iframe.style.bottom = '-10px';
        iframe.style.height = '300px';
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(clientRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.be(1);

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300 - 10
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.43, 0.45); // ~0.44

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a fully visible frame and scrolled', function(done) {
        iframe.style.top = '0px';
        iframe.style.height = '300px';
        iframeWin.scrollTo(0, 10);
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: -10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            // Height is only for the visible area.
            height: 200 - 10
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(intersectRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.within(0.94, 0.96); // ~0.95

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.53, 0.55); // ~0.54

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a clipped frame on top and scrolled', function(done) {
        iframe.style.top = '-10px';
        iframe.style.height = '300px';
        iframeWin.scrollTo(0, 10);
        var io = new IntersectionObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(2);
          expect(rect(records[0].rootBounds)).to.eql(getRootRect(document));
          expect(rect(records[1].rootBounds)).to.eql(getRootRect(document));

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: -10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            left: 0,
            width: bodyWidth,
            // Top is clipped.
            top: 10,
            // The height is less by both: offset and scroll.
            height: 200 - 10 - 10
          });
          expect(rect(records[0].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[0].intersectionRect)).to.eql(intersectRect1);
          expect(records[0].isIntersecting).to.be(true);
          expect(records[0].intersectionRatio).to.within(0.89, 0.91); // ~0.9

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[1].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[1].intersectionRect)).to.eql(intersectRect2);
          expect(records[1].isIntersecting).to.be(true);
          expect(records[1].intersectionRatio).to.be.within(0.53, 0.55); // ~0.54

          done();
          io.disconnect();
        });
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('handles style changes', function(done) {
        var spy = sinon.spy();

        // When first element becomes invisible, the second element will show.
        // And in reverse: when the first element becomes visible again, the
        // second element will disappear.
        var io = new IntersectionObserver(spy);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeTargetEl1.style.display = 'none';
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              expect(records[1].intersectionRatio).to.be(1);
              expect(records[1].isIntersecting).to.be(true);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeTargetEl1.style.display = '';
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('handles scroll changes', function(done) {
        var spy = sinon.spy();

        // Scrolling to the middle of the iframe shows the second box and
        // hides the first.
        var io = new IntersectionObserver(spy);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeWin.scrollTo(0, 202);
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              expect(records[1].intersectionRatio).to.be(1);
              expect(records[1].isIntersecting).to.be(true);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeWin.scrollTo(0, 0);
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('handles iframe changes', function(done) {
        var spy = sinon.spy();

        // Iframe goes off screen and returns.
        var io = new IntersectionObserver(spy);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              // Top-level bounds.
              expect(records[0].rootBounds.height).to.be(innerHeight);
              expect(records[0].intersectionRect.height).to.be(200);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Completely off screen.
            iframe.style.top = '-202px';
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(1);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              // Top-level bounds.
              expect(records[0].rootBounds.height).to.be(innerHeight);
              expect(records[0].intersectionRect.height).to.be(0);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Partially returns.
            iframe.style.top = '-100px';
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(1);
              expect(records[0].intersectionRatio).to.be.within(0.45, 0.55);
              expect(records[0].isIntersecting).to.be(true);
              // Top-level bounds.
              expect(records[0].rootBounds.height).to.be(innerHeight);
              expect(records[0].intersectionRect.height / 200).to.be.within(0.45, 0.55);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('continues to monitor until the last target unobserved', function(done) {
        var spy = sinon.spy();

        // Iframe goes off screen and returns.
        var io = new IntersectionObserver(spy);
        io.observe(target1);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              expect(spy.lastCall.args[0].length).to.be(3);

              // Unobserve one from the main context and one from iframe.
              io.unobserve(target1);
              io.unobserve(iframeTargetEl2);

              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Completely off screen.
            iframe.style.top = '-202px';
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              expect(spy.lastCall.args[0].length).to.be(1);

              io.unobserve(iframeTargetEl1);

              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Partially returns.
            iframe.style.top = '-100px';
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });
    });

    describe('cross-origin iframe', function() {
      var ASYNC_TIMEOUT = 300;
      var crossOriginUpdater;

      beforeEach(function(done) {
        Object.defineProperty(iframeWin, 'frameElement', {value: null});

        /* Uncomment these lines to force polyfill inside the iframe.
        delete iframeWin.IntersectionObserver;
        delete iframeWin.IntersectionObserverEntry;
        */

        // Install polyfill right into the iframe.
        if (!iframeWin.IntersectionObserver) {
          var script = iframeDoc.createElement('script');
          script.src = 'intersection-observer.js';
          script.onload = function() {
            if (iframeWin.IntersectionObserver._setupCrossOriginUpdater) {
              crossOriginUpdater = iframeWin.IntersectionObserver._setupCrossOriginUpdater();
            }
            done();
          };
          iframeDoc.body.appendChild(script);
        } else {
          done();
        }
      });

      afterEach(function() {
        if (IntersectionObserver._resetCrossOriginUpdater) {
          IntersectionObserver._resetCrossOriginUpdater();
        }
      });

      function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;

        return (width >= 0 && height >= 0) && {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        } || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }

      function checkRootBoundsAreNull(records) {
        if (!supportsNativeIntersectionObserver(iframeWin)) {
          records.forEach(function(record) {
            expect(record.rootBounds).to.be(null);
          });
        }
      }

      function applyParentRect(parentRect) {
        if (crossOriginUpdater) {
          var parentIntersectionRect = computeRectIntersection(
              parentRect, getRootRect(document));
          crossOriginUpdater(parentRect, parentIntersectionRect);
        } else {
          iframe.style.top = parentRect.top + 'px';
          iframe.style.left = parentRect.left + 'px';
          iframe.style.height = parentRect.height + 'px';
          iframe.style.width = parentRect.width + 'px';
        }
      }

      function createObserver(callback, options, parentRect) {
        var io = new iframeWin.IntersectionObserver(callback, options);
        if (parentRect) {
          applyParentRect(parentRect);
        }
        return io;
      }

      it('calculates rects for a fully visible frame', function(done) {
        var parentRect = rect({top: 0, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[0].isIntersecting).to.be(true);
          // 300 / 404 == ~0.743
          expect(records[0].intersectionRatio).to.be.within(0.74, 0.75);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[1].isIntersecting).to.be(true);
          // 300 / 402 == ~0.746
          expect(records[1].intersectionRatio).to.be.within(0.74, 0.75);

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(clientRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.be(1);

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('calculates rects for a fully visible and offset frame', function(done) {
        var parentRect = rect({top: 10, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[0].isIntersecting).to.be(true);
          // 300 / 404 == ~0.743
          expect(records[0].intersectionRatio).to.be.within(0.74, 0.75);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[1].isIntersecting).to.be(true);
          // 300 / 402 == ~0.746
          expect(records[1].intersectionRatio).to.be.within(0.74, 0.75);

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(clientRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.be(1);

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('calculates rects for a clipped frame on top', function(done) {
        var parentRect = rect({top: -10, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 10,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[0].isIntersecting).to.be(true);
          // (300 - 10) / 404 == ~0.717
          expect(records[0].intersectionRatio).to.be.within(0.71, 0.72);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 10,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[1].isIntersecting).to.be(true);
          // (300 - 10) / 402 == ~0.721
          expect(records[1].intersectionRatio).to.be.within(0.72, 0.73);

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            left: 0,
            width: bodyWidth,
            // Top is clipped.
            top: 10,
            height: 200 - 10
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(intersectRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.within(0.94, 0.96); // ~0.95

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('calculates rects for a clipped frame on bottom', function(done) {
        var rootRect = getRootRect(document);
        var parentRect = rect({top: rootRect.bottom - 300 + 10, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[0].isIntersecting).to.be(true);
          // (300 - 10) / 404 == ~0.717
          expect(records[0].intersectionRatio).to.be.within(0.71, 0.72);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[1].isIntersecting).to.be(true);
          // (300 - 10) / 402 == ~0.721
          expect(records[1].intersectionRatio).to.be.within(0.72, 0.73);

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(clientRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.be(1);

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('calculates rects for a fully visible and scrolled frame', function(done) {
        iframeWin.scrollTo(0, 10);
        var parentRect = rect({top: 0, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[0].isIntersecting).to.be(true);
          // 300 / 404 == ~0.743
          expect(records[0].intersectionRatio).to.be.within(0.74, 0.75);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 300
          }));
          expect(records[1].isIntersecting).to.be(true);
          // 300 / 402 == ~0.746
          expect(records[1].intersectionRatio).to.be.within(0.74, 0.75);

          // The target1 is fully visible.
          var clientRect1 = rect({
            top: -10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            // Height is only for the visible area.
            height: 200 - 10
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(intersectRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.within(0.94, 0.96); // ~0.95

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('calculates rects for a clipped frame on top and scrolled', function(done) {
        iframeWin.scrollTo(0, 10);
        var parentRect = rect({top: -10, left: 0, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(4);
          checkRootBoundsAreNull(records);

          // The documentElement is partially visible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(rect({
            top: 10,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[0].isIntersecting).to.be(true);
          // (300 - 10) / 404 == ~0.717
          expect(records[0].intersectionRatio).to.be.within(0.71, 0.72);

          // The document.body is partially visible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(rect({
            top: 10,
            left: 0,
            width: bodyWidth,
            height: 300 - 10
          }));
          expect(records[1].isIntersecting).to.be(true);
          // (300 - 10) / 402 == ~0.721
          expect(records[1].intersectionRatio).to.be.within(0.72, 0.73);

          // The target1 is clipped at the top by the iframe's clipping.
          var clientRect1 = rect({
            top: -10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect1 = rect({
            left: 0,
            width: bodyWidth,
            // Top is clipped.
            top: 10,
            // The height is less by both: offset and scroll.
            height: 200 - 10 - 10
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(intersectRect1);
          expect(records[2].isIntersecting).to.be(true);
          expect(records[2].intersectionRatio).to.within(0.89, 0.91); // ~0.9

          // The target2 is partially visible.
          var clientRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          var intersectRect2 = rect({
            top: 202 - 10,
            left: 0,
            width: bodyWidth,
            // The bottom is clipped off.
            bottom: 300
          });
          expect(rect(records[3].boundingClientRect)).to.eql(clientRect2);
          expect(rect(records[3].intersectionRect)).to.eql(intersectRect2);
          expect(records[3].isIntersecting).to.be(true);
          expect(records[3].intersectionRatio).to.be.within(0.53, 0.55); // ~0.54

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);
      });

      it('calculates rects for a fully clipped frame', function(done) {
        var parentRect = rect({top: -400, left: 20, height: 300, width: 100});
        var io = createObserver(function(unsortedRecords) {
          var records = sortRecords(unsortedRecords);
          expect(records.length).to.be(3);
          checkRootBoundsAreNull(records);

          var emptyRect = rect({
            top: 0,
            left: 0,
            width: 0,
            height: 0
          });

          // The documentElement is completely invisible.
          expect(rect(records[0].boundingClientRect))
              .to.eql(rect(documentElement.getBoundingClientRect()));
          expect(rect(records[0].intersectionRect)).to.eql(emptyRect);
          expect(records[0].isIntersecting).to.be(false);
          expect(records[0].intersectionRatio).to.be(0);

          // The document.body is completely invisible.
          expect(rect(records[1].boundingClientRect))
              .to.eql(rect(body.getBoundingClientRect()));
          expect(rect(records[1].intersectionRect)).to.eql(emptyRect);
          expect(records[1].isIntersecting).to.be(false);
          expect(records[1].intersectionRatio).to.be(0);

          // The target1 is completely invisible.
          var clientRect1 = rect({
            top: 0,
            left: 0,
            width: bodyWidth,
            height: 200
          });
          expect(rect(records[2].boundingClientRect)).to.eql(clientRect1);
          expect(rect(records[2].intersectionRect)).to.eql(emptyRect);
          expect(records[2].isIntersecting).to.be(false);
          expect(records[2].intersectionRatio).to.be(0);

          done();
          io.disconnect();
        }, {}, parentRect);
        io.observe(documentElement);
        io.observe(body);
        io.observe(iframeTargetEl1);
      });

      it('blocks until crossOriginUpdater is called first time', function(done) {
        if (supportsNativeIntersectionObserver(iframeWin)) {
          // Skip: not possible to emulate with the native observer.
          done();
          return;
        }

        var spy = sinon.spy();

        var parentRect = rect({top: 0, left: 20, height: 300, width: 100});

        var io = createObserver(spy, {});
        io.observe(iframeTargetEl1);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(0);

              // Issue the first update.
              crossOriginUpdater(parentRect, null);

              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(1);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('doesn\'t block with a root specified', function(done) {
        var spy = sinon.spy();

        var io = createObserver(spy, {root: body});
        io.observe(iframeTargetEl1);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var record = sortRecords(spy.lastCall.args[0])[0];
              expect(record.intersectionRatio).to.be(1);
              expect(record.isIntersecting).to.be(true);
              expect(rect(record.rootBounds)).to.eql(rect(body.getBoundingClientRect()));
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('handles style changes', function(done) {
        var spy = sinon.spy();

        var parentRect = rect({top: 0, left: 0, height: 200, width: 100});

        // When first element becomes invisible, the second element will show.
        // And in reverse: when the first element becomes visible again, the
        // second element will disappear.
        var io = createObserver(spy, {}, parentRect);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeTargetEl1.style.display = 'none';
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              expect(records[1].intersectionRatio).to.be(1);
              expect(records[1].isIntersecting).to.be(true);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeTargetEl1.style.display = '';
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('handles scroll changes', function(done) {
        var spy = sinon.spy();

        var parentRect = rect({top: 0, left: 0, height: 200, width: 100});

        // Scrolling to the middle of the iframe shows the second box and
        // hides the first.
        var io = createObserver(spy, {}, parentRect);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeWin.scrollTo(0, 202);
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              expect(records[1].intersectionRatio).to.be(1);
              expect(records[1].isIntersecting).to.be(true);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            iframeWin.scrollTo(0, 0);
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });

      it('handles parent rect changes', function(done) {
        var spy = sinon.spy();

        var parentRect = rect({top: 0, left: 0, height: 200, width: 100});

        // Iframe goes off screen and returns.
        var io = createObserver(spy, {}, parentRect);
        io.observe(iframeTargetEl1);
        io.observe(iframeTargetEl2);

        runSequence([
          function(done) {
            setTimeout(function() {
              expect(spy.callCount).to.be(1);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(2);
              checkRootBoundsAreNull(records);
              expect(records[0].intersectionRatio).to.be(1);
              expect(records[0].isIntersecting).to.be(true);
              expect(records[1].intersectionRatio).to.be(0);
              expect(records[1].isIntersecting).to.be(false);
              // Top-level bounds.
              expect(records[0].intersectionRect.height).to.be(200);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Completely off screen.
            applyParentRect(rect({top: -202, left: 0, height: 200, width: 100}));
            setTimeout(function() {
              expect(spy.callCount).to.be(2);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(1);
              checkRootBoundsAreNull(records);
              expect(records[0].intersectionRatio).to.be(0);
              expect(records[0].isIntersecting).to.be(false);
              // Top-level bounds.
              expect(records[0].intersectionRect.height).to.be(0);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            // Partially returns.
            applyParentRect(rect({top: -100, left: 0, height: 200, width: 100}));
            setTimeout(function() {
              expect(spy.callCount).to.be(3);
              var records = sortRecords(spy.lastCall.args[0]);
              expect(records.length).to.be(1);
              checkRootBoundsAreNull(records);
              expect(records[0].intersectionRatio).to.be.within(0.45, 0.55);
              expect(records[0].isIntersecting).to.be(true);
              // Top-level bounds.
              expect(records[0].intersectionRect.height / 200).to.be.within(0.45, 0.55);
              done();
            }, ASYNC_TIMEOUT);
          },
          function(done) {
            io.disconnect();
            done();
          }
        ], done);
      });
    });
  });
});


/**
 * Runs a sequence of function and when finished invokes the done callback.
 * Each function in the sequence is invoked with its own done function and
 * it should call that function once it's complete.
 * @param {Array<Function>} functions An array of async functions.
 * @param {Function} done A final callback to be invoked once all function
 *     have run.
 */
function runSequence(functions, done) {
  var next = functions.shift();
  if (next) {
    next(function() {
      runSequence(functions, done);
    });
  } else {
    done && done();
  }
}


/**
 * Returns whether or not the current browser has native support for
 * IntersectionObserver.
 * @param {Window=} win
 * @return {boolean} True if native support is detected.
 */
function supportsNativeIntersectionObserver(win) {
  win = win || window;
  return 'IntersectionObserver' in win &&
      win.IntersectionObserver.toString().indexOf('[native code]') > -1;
}


/**
 * Sorts an array of records alphebetically by ascending ID. Since the current
 * native implementation doesn't sort change entries by `observe` order, we do
 * that ourselves for the non-polyfill case. Since all tests call observe
 * on targets in sequential order, this should always match.
 * https://crbug.com/613679
 * @param {Array<IntersectionObserverEntry>} entries The entries to sort.
 * @return {Array<IntersectionObserverEntry>} The sorted array.
 */
function sortRecords(entries) {
  if (supportsNativeIntersectionObserver()) {
    entries = entries.sort(function(a, b) {
      return a.target.id < b.target.id ? -1 : 1;
    });
  }
  return entries;
}


/**
 * Adds the common styles used by all tests to the page.
 */
function addStyles() {
  var styles = document.createElement('style');
  styles.id = 'styles';
  document.documentElement.appendChild(styles);

  var cssText =
      '#root {' +
      '  position: relative;' +
      '  width: 400px;' +
      '  height: 200px;' +
      '  background: #eee' +
      '}' +
      '#grand-parent {' +
      '  position: relative;' +
      '  width: 200px;' +
      '  height: 200px;' +
      '}' +
      '#parent {' +
      '  position: absolute;' +
      '  top: 0px;' +
      '  left: 200px;' +
      '  overflow: hidden;' +
      '  width: 200px;' +
      '  height: 200px;' +
      '  background: #ddd;' +
      '}' +
      '#target1, #target2, #target3, #target4, #target5 {' +
      '  position: absolute;' +
      '  top: 0px;' +
      '  left: 0px;' +
      '  width: 20px;' +
      '  height: 20px;' +
      '  transform: translateX(0px) translateY(0px);' +
      '  transition: transform .5s;' +
      '  background: #f00;' +
      '}';

  // IE8 doesn't allow setting innerHTML on a <style> element.
  if (styles.styleSheet) {
    styles.styleSheet.cssText = cssText;
  }
  else {
    styles.innerHTML = cssText;
  }
}


/**
 * Adds the DOM fixtures used by all tests to the page and assigns them to
 * global variables so they can be referenced within the tests.
 */
function addFixtures() {
  var fixtures = document.createElement('div');
  fixtures.id = 'fixtures';

  fixtures.innerHTML =
      '<div id="root">' +
      '  <div id="grand-parent">' +
      '    <div id="parent">' +
      '      <div id="target1"></div>' +
      '      <div id="target2"></div>' +
      '      <div id="target3"></div>' +
      '      <div id="target4"></div>' +
      '    </div>' +
      '  </div>' +
      '</div>';

  document.body.appendChild(fixtures);

  rootEl = document.getElementById('root');
  grandParentEl = document.getElementById('grand-parent');
  parentEl = document.getElementById('parent');
  targetEl1 = document.getElementById('target1');
  targetEl2 = document.getElementById('target2');
  targetEl3 = document.getElementById('target3');
  targetEl4 = document.getElementById('target4');
}


/**
 * Removes the common styles from the page.
 */
function removeStyles() {
  var styles = document.getElementById('styles');
  styles.parentNode.removeChild(styles);
}


/**
 * Removes the DOM fixtures from the page and resets the global references.
 */
function removeFixtures() {
  var fixtures = document.getElementById('fixtures');
  fixtures.parentNode.removeChild(fixtures);

  rootEl = null;
  grandParentEl = null;
  parentEl = null;
  targetEl1 = null;
  targetEl2 = null;
  targetEl3 = null;
  targetEl4 = null;
}
