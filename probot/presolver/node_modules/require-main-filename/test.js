/* global describe, it */

var requireMainFilename = require('./')

require('tap').mochaGlobals()
require('chai').should()

describe('require-main-filename', function () {
  it('returns require.main.filename in normal circumstances', function () {
    requireMainFilename().should.match(/test\.js/)
  })

  it('should use children[0].filename when running on iisnode', function () {
    var main = {
      filename: 'D:\\Program Files (x86)\\iisnode\\interceptor.js',
      children: [ {filename: 'D:\\home\\site\\wwwroot\\server.js'} ]
    }
    requireMainFilename({
      main: main
    }).should.match(/server\.js/)
  })

  it('should not use children[0] if no children exist', function () {
    var main = {
      filename: 'D:\\Program Files (x86)\\iisnode\\interceptor.js',
      children: []
    }
    requireMainFilename({
      main: main
    }).should.match(/interceptor\.js/)
  })

  it('should default to process.cwd() if require.main is undefined', function () {
    requireMainFilename({}).should.match(/require-main-filename/)
  })
})
