var assert = require('assert');
var ourProcess = require('./browser');
describe('test against our process', function () {
    test(ourProcess);
});
if (!process.browser) {
  describe('test against node', function () {
    test(process);
  });
  vmtest();
}
function test (ourProcess) {
    describe('test arguments', function () {
        it ('works', function (done) {
          var order = 0;


          ourProcess.nextTick(function (num) {
              assert.equal(num, order++, 'first one works');
              ourProcess.nextTick(function (num) {
                assert.equal(num, order++, 'recursive one is 4th');
              }, 3);
          }, 0);
          ourProcess.nextTick(function (num) {
              assert.equal(num, order++, 'second one starts');
              ourProcess.nextTick(function (num) {
                assert.equal(num, order++, 'this is third');
                ourProcess.nextTick(function (num) {
                    assert.equal(num, order++, 'this is last');
                    done();
                }, 5);
            }, 4);
          }, 1);
          ourProcess.nextTick(function (num) {

              assert.equal(num, order++, '3rd schedualed happens after the error');
          }, 2);
        });
    });
if (!process.browser) {
    describe('test errors', function (t) {
        it ('works', function (done) {
        var order = 0;
        process.removeAllListeners('uncaughtException');
        process.once('uncaughtException', function(err) {
            assert.equal(2, order++, 'error is third');
            ourProcess.nextTick(function () {
                assert.equal(5, order++, 'schedualed in error is last');
                done();
            });
        });
        ourProcess.nextTick(function () {
            assert.equal(0, order++, 'first one works');
            ourProcess.nextTick(function () {
            assert.equal(4, order++, 'recursive one is 4th');
            });
        });
        ourProcess.nextTick(function () {
            assert.equal(1, order++, 'second one starts');
            throw(new Error('an error is thrown'));
        });
        ourProcess.nextTick(function () {
            assert.equal(3, order++, '3rd schedualed happens after the error');
        });
        });
    });
}
    describe('rename globals', function (t) {
      var oldTimeout = setTimeout;
      var oldClear = clearTimeout;

      it('clearTimeout', function (done){

        var ok = true;
        clearTimeout = function () {
          ok = false;
        }
        var ran = false;
        function cleanup() {
          clearTimeout = oldClear;
          var err;
          try {
            assert.ok(ok, 'fake clearTimeout ran');
            assert.ok(ran, 'should have run');
          } catch (e) {
            err = e;
          }
          done(err);
        }
        setTimeout(cleanup, 1000);
        ourProcess.nextTick(function () {
          ran = true;
        });
      });
      it('just setTimeout', function (done){


        setTimeout = function () {
          setTimeout = oldTimeout;
          try {
            assert.ok(false, 'fake setTimeout called')
          } catch (e) {
            done(e);
          }

        }

        ourProcess.nextTick(function () {
          setTimeout = oldTimeout;
          done();
        });
      });
    });
}
function vmtest() {
  var vm = require('vm');
  var fs = require('fs');
  var process =  fs.readFileSync('./browser.js', {encoding: 'utf8'});


  describe('should work in vm in strict mode with no globals', function () {
    it('should parse', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'this.works = process.browser;';
      var script = new vm.Script(str);
      var context = {
        works: false
      };
      script.runInNewContext(context);
      assert.ok(context.works);
      done();
    });
    it('setTimeout throws error', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'try {process.nextTick(function () {})} catch (e){this.works = e;}';
      var script = new vm.Script(str);
      var context = {
        works: false
      };
      script.runInNewContext(context);
      assert.ok(context.works);
      done();
    });
    it('should generally work', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'process.nextTick(function () {assert.ok(true);done();})';
      var script = new vm.Script(str);
      var context = {
        clearTimeout: clearTimeout,
        setTimeout: setTimeout,
        done: done,
        assert: assert
      };
      script.runInNewContext(context);
    });
    it('late defs setTimeout', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'var setTimeout = hiddenSetTimeout;process.nextTick(function () {assert.ok(true);done();})';
      var script = new vm.Script(str);
      var context = {
        clearTimeout: clearTimeout,
        hiddenSetTimeout: setTimeout,
        done: done,
        assert: assert
      };
      script.runInNewContext(context);
    });
    it('late defs clearTimeout', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'var clearTimeout = hiddenClearTimeout;process.nextTick(function () {assert.ok(true);done();})';
      var script = new vm.Script(str);
      var context = {
        hiddenClearTimeout: clearTimeout,
        setTimeout: setTimeout,
        done: done,
        assert: assert
      };
      script.runInNewContext(context);
    });
    it('late defs setTimeout and then redefine', function (done) {
      var str = '"use strict";var module = {exports:{}};';
      str += process;
      str += 'var setTimeout = hiddenSetTimeout;process.nextTick(function () {setTimeout = function (){throw new Error("foo")};hiddenSetTimeout(function(){process.nextTick(function (){assert.ok(true);done();});});});';
      var script = new vm.Script(str);
      var context = {
        clearTimeout: clearTimeout,
        hiddenSetTimeout: setTimeout,
        done: done,
        assert: assert
      };
      script.runInNewContext(context);
    });
  });
}
