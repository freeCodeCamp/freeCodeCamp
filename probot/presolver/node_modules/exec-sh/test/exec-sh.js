/* global describe, it, beforeEach, afterEach */
var execSh = require('..')
var assert = require('assert')
var sinon = require('sinon')
var merge = require('merge')
var cp = require('child_process')

describe('exec-sh', function () {
  describe('module.exports', function () {
    it('should export a single function', function () {
      assert.strictEqual(typeof execSh, 'function')
    })
  })

  describe('#execSh() arguments', function () {
    var spawn, exitCode, stream

    stream = {
      on: function (e, c) {
        if (e === 'data') {
          // execute callback two times to check if stream
          // aggregation works correctly
          c('1')
          c('2')
        }
      }
    }

    beforeEach(function () {
      exitCode = 0
      spawn = sinon.stub(cp, 'spawn')
      spawn.returns({
        spawn_return: true,
        on: function (e, c) {
          if (e === 'close') {
            c(exitCode)
          }
        },
        stdout: stream,
        stderr: stream
      })
    })

    afterEach(function () {
      cp.spawn.restore()
    })

    it('should pass command to spawn function', function () {
      execSh('command')
      sinon.assert.calledOnce(spawn)
      assert.strictEqual('command', spawn.getCall(0).args[1][1])
    })

    it('should accept array of commands to run', function () {
      execSh(['command1', 'command2'])
      sinon.assert.calledOnce(spawn)
      assert.strictEqual('command1;command2', spawn.getCall(0).args[1][1])
    })

    it('should accept true as options argument', function () {
      execSh('command', true)
      sinon.assert.calledOnce(spawn)
      assert.strictEqual(spawn.getCall(0).args[2].stdio, null)
    })

    it('should merge defaults with options', function () {
      execSh('command')
      var defOptionsClone = merge(true, spawn.getCall(0).args[2])
      var options = { key: 'value' }

      execSh('command', options)
      assert.deepEqual(spawn.getCall(1).args[2], merge(true, defOptionsClone, options))

      // change value of the fist property in default options to null
      assert.ok(Object.keys(defOptionsClone).length > 0)
      defOptionsClone[Object.keys(defOptionsClone)[0]] = null

      execSh('command', defOptionsClone)
      assert.deepEqual(spawn.getCall(2).args[2], defOptionsClone)
    })

    it("should accept optional 'callback' parameter", function () {
      var callback = sinon.spy()
      execSh('command', callback)
      execSh('command', { key: 'value' }, callback)
      sinon.assert.callCount(callback, 2)
    })

    it("should use 'cmd /C' command prefix on windows", function () {
      var platform = process.platform
      Object.defineProperty(process, 'platform', { value: 'win32' })
      execSh('command')
      Object.defineProperty(process, 'platform', { value: platform })

      sinon.assert.calledOnce(spawn)
      assert.strictEqual(spawn.getCall(0).args[0], 'cmd')
    })

    it("should use 'sh -c' command prefix on *nix", function () {
      var platform = process.platform
      process.platform = 'linux'
      execSh('command')
      process.platform = platform

      sinon.assert.calledOnce(spawn)
      assert.strictEqual(spawn.getCall(0).args[1][0], '-c')
      assert.strictEqual(spawn.getCall(0).args[0], 'sh')
    })

    it('should return spawn() result', function () {
      assert(execSh('command').spawn_return)
    })

    it('should aggregate stdoout and stderr', function (done) {
      execSh('command', function (_err, stdout, stderr) {
        assert.strictEqual(stdout, '12')
        assert.strictEqual(stderr, '12')
        done()
      })
    })

    it('should catch exceptions thrown by spawn', function (done) {
      spawn.throws()
      execSh('command', function (err, stdout, stderr) {
        assert(err instanceof Error)
        done()
      })
    })

    it('should return empty stdout and stderr when spawn throws', function (done) {
      spawn.throws()
      stream = null
      execSh('command', function (_err, stdout, stderr) {
        assert.strictEqual(stderr, '')
        assert.strictEqual(stdout, '')
        done()
      })
    })

    it('should run callback with error when shell exit with non-zero code', function (done) {
      exitCode = 1
      execSh('command', function (err) {
        assert(err instanceof Error)
        assert.equal(exitCode, err.code)
        done()
      })
    })
  })
})
