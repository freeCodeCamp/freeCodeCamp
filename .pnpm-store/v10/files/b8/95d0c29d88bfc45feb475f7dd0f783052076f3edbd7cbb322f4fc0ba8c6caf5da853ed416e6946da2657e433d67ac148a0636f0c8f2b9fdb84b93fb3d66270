var fs = require('fs')
var path = require('path')
var mocha = require('mocha')
var assert = require('assert')
var requireUncached = require('require-uncached')

var npmRcPath = path.join(__dirname, '..', '.npmrc')
var afterEach = mocha.afterEach
var describe = mocha.describe
var it = mocha.it

describe('registry-url', function () {
  afterEach(function (done) {
    fs.unlink(npmRcPath, function () {
      done()
    })
  })

  it('should read global if no local is found', function () {
    var getRegistryUrl = requireUncached('../registry-url')
    getRegistryUrl()
  })

  it('should return default registry if no url is given for scope', function (done) {
    fs.writeFile(npmRcPath, 'registry=https://registry.npmjs.org/', function (err) {
      var getRegistryUrl = requireUncached('../registry-url')
      assert(!err, err)
      assert.equal(getRegistryUrl('@somescope'), 'https://registry.npmjs.org/')
      done()
    })
  })

  it('should return registry url if url is given for scope ', function (done) {
    fs.writeFile(npmRcPath, '@somescope:registry=https://some.registry/', function (err) {
      var getRegistryUrl = requireUncached('../registry-url')
      assert(!err, err)
      assert.equal(getRegistryUrl('@somescope'), 'https://some.registry/')
      done()
    })
  })

  it('should append trailing slash if not present', function (done) {
    fs.writeFile(npmRcPath, '@somescope:registry=https://some.registry', function (err) {
      var getRegistryUrl = requireUncached('../registry-url')
      assert(!err, err)
      assert.equal(getRegistryUrl('@somescope'), 'https://some.registry/')
      done()
    })
  })

  it('should return configured global registry if given', function (done) {
    var content = [
      'registry=http://registry.foobar.eu/',
      '@somescope:registry=https://some.url/', ''
    ].join('\n')

    fs.writeFile(npmRcPath, content, function (err) {
      var getRegistryUrl = requireUncached('../registry-url')
      assert(!err, err)
      assert.equal(getRegistryUrl(), 'http://registry.foobar.eu/')
      done()
    })
  })
})
