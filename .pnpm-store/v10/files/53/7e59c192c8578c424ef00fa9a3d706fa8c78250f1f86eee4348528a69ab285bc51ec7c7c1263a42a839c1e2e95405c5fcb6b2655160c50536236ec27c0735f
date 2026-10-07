var fs = require('fs')
var path = require('path')
var mocha = require('mocha')
var assert = require('assert')
var requireUncached = require('require-uncached')

var npmRcPath = path.join(__dirname, '..', '.npmrc')
var afterEach = mocha.afterEach
var describe = mocha.describe
var it = mocha.it

var base64 = require('../base64')
var decodeBase64 = base64.decodeBase64
var encodeBase64 = base64.encodeBase64

/* eslint max-nested-callbacks: ["error", 4] */

describe('auth-token', function () {
  afterEach(function (done) {
    fs.unlink(npmRcPath, function () {
      done()
    })
  })

  it('should read global if no local is found', function () {
    var getAuthToken = requireUncached('../index')
    getAuthToken()
  })

  it('should return undefined if no auth token is given for registry', function (done) {
    fs.writeFile(npmRcPath, 'registry=http://registry.npmjs.eu/', function (err) {
      var getAuthToken = requireUncached('../index')
      assert(!err, err)
      assert(!getAuthToken())
      done()
    })
  })

  describe('legacy auth token', function () {
    it('should return auth token if it is defined in the legacy way via the `_auth` key', function (done) {
      var content = [
        '_auth=foobar',
        'registry=http://registry.foobar.eu/'
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'foobar', type: 'Basic'})
        done()
      })
    })
  })

  describe('bearer token', function () {
    it('should return auth token if registry is defined', function (done) {
      var content = [
        'registry=http://registry.foobar.eu/',
        '//registry.foobar.eu/:_authToken=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'foobar', type: 'Bearer'})
        done()
      })
    })

    it('should use npmrc passed in', function (done) {
      var content = [
        'registry=http://registry.foobar.eu/',
        '//registry.foobar.eu/:_authToken=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        const npmrc = {
          'registry': 'http://registry.foobar.eu/',
          '//registry.foobar.eu/:_authToken': 'qar'
        }
        assert.deepEqual(getAuthToken({npmrc: npmrc}), {token: 'qar', type: 'Bearer'})
        done()
      })
    })

    it('should return auth token if registry url has port specified', function (done) {
      var content = [
        'registry=http://localhost:8770/',
        // before the patch this token was selected.
        '//localhost/:_authToken=ohno',
        '//localhost:8770/:_authToken=beepboop', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'beepboop', type: 'Bearer'})
        done()
      })
    })

    it('should return auth token defined by reference to an environment variable (with curly braces)', function (done) {
      var environmentVariable = '__REGISTRY_AUTH_TOKEN_NPM_TOKEN__'
      var content = [
        'registry=http://registry.foobar.cc/',
        '//registry.foobar.cc/:_authToken=${' + environmentVariable + '}', ''
      ].join('\n')
      process.env[environmentVariable] = 'foobar'

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'foobar', type: 'Bearer'})
        delete process.env[environmentVariable]
        done()
      })
    })

    it('should return auth token defined by reference to an environment variable (without curly braces)', function (done) {
      var environmentVariable = '__REGISTRY_AUTH_TOKEN_NPM_TOKEN__'
      var content = [
        'registry=http://registry.foobar.cc/',
        '//registry.foobar.cc/:_authToken=$' + environmentVariable, ''
      ].join('\n')
      process.env[environmentVariable] = 'foobar'

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'foobar', type: 'Bearer'})
        delete process.env[environmentVariable]
        done()
      })
    })

    it('should try with and without a slash at the end of registry url', function (done) {
      var content = [
        'registry=http://registry.foobar.eu',
        '//registry.foobar.eu:_authToken=barbaz', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken(), {token: 'barbaz', type: 'Bearer'})
        done()
      })
    })

    it('should fetch for the registry given (if defined)', function (done) {
      var content = [
        '//registry.foobar.eu:_authToken=barbaz',
        '//registry.blah.foo:_authToken=whatev',
        '//registry.last.thing:_authToken=yep', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken('//registry.blah.foo'), {token: 'whatev', type: 'Bearer'})
        done()
      })
    })

    it('recursively finds registries for deep url if option is set', function (done, undef) {
      var opts = {recursive: true}
      var content = [
        '//registry.blah.com/foo:_authToken=whatev',
        '//registry.blah.org/foo/bar:_authToken=recurseExactlyOneLevel',
        '//registry.blah.edu/foo/bar/baz:_authToken=recurseNoLevel',
        '//registry.blah.eu:_authToken=yep', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken('https://registry.blah.edu/foo/bar/baz', opts), {token: 'recurseNoLevel', type: 'Bearer'})
        assert.deepEqual(getAuthToken('https://registry.blah.org/foo/bar/baz', opts), {token: 'recurseExactlyOneLevel', type: 'Bearer'})
        assert.deepEqual(getAuthToken('https://registry.blah.com/foo/bar/baz', opts), {token: 'whatev', type: 'Bearer'})
        assert.deepEqual(getAuthToken('http://registry.blah.eu/what/ever', opts), {token: 'yep', type: 'Bearer'})
        assert.deepEqual(getAuthToken('http://registry.blah.eu//what/ever', opts), undefined, 'does not hang')
        assert.equal(getAuthToken('//some.registry', opts), undef)
        done()
      })
    })

    it('should try both with and without trailing slash', function (done) {
      fs.writeFile(npmRcPath, '//registry.blah.com:_authToken=whatev', function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken('https://registry.blah.com'), {token: 'whatev', type: 'Bearer'})
        done()
      })
    })

    it('should prefer bearer token over basic token', function (done) {
      var content = [
        'registry=http://registry.foobar.eu/',
        'registry=http://registry.foobar.eu/',
        '//registry.foobar.eu/:_authToken=bearerToken',
        '//registry.foobar.eu/:_password=' + encodeBase64('foobar'),
        '//registry.foobar.eu/:username=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(getAuthToken('//registry.foobar.eu'), {token: 'bearerToken', type: 'Bearer'})
        done()
      })
    })

    it('"nerf darts" registry urls', function (done, undef) {
      fs.writeFile(npmRcPath, '//contoso.pkgs.visualstudio.com/_packaging/MyFeed/npm/:_authToken=heider', function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.deepEqual(
          getAuthToken('https://contoso.pkgs.visualstudio.com/_packaging/MyFeed/npm/registry'),
          {token: 'heider', type: 'Bearer'}
        )
        done()
      })
    })
  })

  describe('basic token', function () {
    it('should return undefined if password or username are missing', function (done, undef) {
      var content = [
        'registry=http://registry.foobar.eu/',
        '//registry.foobar.eu/:_password=' + encodeBase64('foobar'),
        '//registry.foobar.com/:username=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        assert.equal(getAuthToken('//registry.foobar.eu'), undef)
        assert.equal(getAuthToken('//registry.foobar.com'), undef)
        done()
      })
    })

    it('should return basic token if username and password are defined', function (done) {
      var content = [
        'registry=http://registry.foobar.eu/',
        '//registry.foobar.eu/:_password=' + encodeBase64('foobar'),
        '//registry.foobar.eu/:username=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken()
        assert.deepEqual(token, {
          token: 'Zm9vYmFyOmZvb2Jhcg==',
          type: 'Basic',
          username: 'foobar',
          password: 'foobar'
        })
        assert.equal(decodeBase64(token.token), 'foobar:foobar')
        done()
      })
    })

    it('should return basic token if registry url has port specified', function (done) {
      var content = [
        'registry=http://localhost:8770/',
        // before the patch this token was selected.
        '//localhost/:_authToken=ohno',
        '//localhost:8770/:_password=' + encodeBase64('foobar'),
        '//localhost:8770/:username=foobar', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken()
        assert.deepEqual(token, {
          token: 'Zm9vYmFyOmZvb2Jhcg==',
          type: 'Basic',
          username: 'foobar',
          password: 'foobar'
        })
        assert.equal(decodeBase64(token.token), 'foobar:foobar')
        done()
      })
    })

    it('should return password defined by reference to an environment variable (with curly braces)', function (done) {
      var environmentVariable = '__REGISTRY_PASSWORD__'
      var content = [
        'registry=http://registry.foobar.cc/',
        '//registry.foobar.cc/:username=username',
        '//registry.foobar.cc/:_password=${' + environmentVariable + '}', ''
      ].join('\n')
      process.env[environmentVariable] = encodeBase64('password')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken()
        assert.deepEqual(token, {
          type: 'Basic',
          username: 'username',
          password: 'password',
          token: 'dXNlcm5hbWU6cGFzc3dvcmQ='
        })
        assert.equal(decodeBase64(token.token), 'username:password')
        delete process.env[environmentVariable]
        done()
      })
    })

    it('should return password defined by reference to an environment variable (without curly braces)', function (done) {
      var environmentVariable = '__REGISTRY_PASSWORD__'
      var content = [
        'registry=http://registry.foobar.cc/',
        '//registry.foobar.cc/:username=username',
        '//registry.foobar.cc/:_password=$' + environmentVariable, ''
      ].join('\n')
      process.env[environmentVariable] = encodeBase64('password')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken()
        assert.deepEqual(token, {
          type: 'Basic',
          username: 'username',
          password: 'password',
          token: 'dXNlcm5hbWU6cGFzc3dvcmQ='
        })
        assert.equal(decodeBase64(token.token), 'username:password')
        delete process.env[environmentVariable]
        done()
      })
    })

    it('should try with and without a slash at the end of registry url', function (done) {
      var content = [
        'registry=http://registry.foobar.eu',
        '//registry.foobar.eu:_password=' + encodeBase64('barbay'),
        '//registry.foobar.eu:username=barbaz', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken()
        assert.deepEqual(token, {
          token: 'YmFyYmF6OmJhcmJheQ==',
          type: 'Basic',
          password: 'barbay',
          username: 'barbaz'
        })
        assert.equal(decodeBase64(token.token), 'barbaz:barbay')
        done()
      })
    })

    it('should fetch for the registry given (if defined)', function (done) {
      var content = [
        '//registry.foobar.eu:_authToken=barbaz',
        '//registry.blah.foo:_password=' + encodeBase64('barbay'),
        '//registry.blah.foo:username=barbaz',
        '//registry.last.thing:_authToken=yep', ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken('//registry.blah.foo')
        assert.deepEqual(token, {
          token: 'YmFyYmF6OmJhcmJheQ==',
          type: 'Basic',
          password: 'barbay',
          username: 'barbaz'
        })
        assert.equal(decodeBase64(token.token), 'barbaz:barbay')
        done()
      })
    })

    it('recursively finds registries for deep url if option is set', function (done, undef) {
      var opts = {recursive: true}
      var content = [
        '//registry.blah.com/foo:_password=' + encodeBase64('barbay'),
        '//registry.blah.com/foo:username=barbaz',
        '//registry.blah.eu:username=barbaz',
        '//registry.blah.eu:_password=' + encodeBase64('foobaz'), ''
      ].join('\n')

      fs.writeFile(npmRcPath, content, function (err) {
        var getAuthToken = requireUncached('../index')
        assert(!err, err)
        var token = getAuthToken('https://registry.blah.com/foo/bar/baz', opts)
        assert.deepEqual(token, {
          token: 'YmFyYmF6OmJhcmJheQ==',
          type: 'Basic',
          password: 'barbay',
          username: 'barbaz'
        })
        assert.equal(decodeBase64(token.token), 'barbaz:barbay')
        token = getAuthToken('https://registry.blah.eu/foo/bar/baz', opts)
        assert.deepEqual(token, {
          token: 'YmFyYmF6OmZvb2Jheg==',
          type: 'Basic',
          password: 'foobaz',
          username: 'barbaz'
        })
        assert.equal(decodeBase64(token.token), 'barbaz:foobaz')
        assert.equal(getAuthToken('//some.registry', opts), undef)
        done()
      })
    })
  })
})
