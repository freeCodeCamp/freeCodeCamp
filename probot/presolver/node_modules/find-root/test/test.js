/* globals describe, it */
var chai = require('chai')
chai.should()
var expect = chai.expect
var moquire = require('moquire')

var MODULE = '../'

describe('find-root', function () {
  it('recursively looks for package.json', function () {
    var checked = []
    var fs = {
      existsSync: function (path) {
        checked.push(path)
        return path === '/foo/package.json'
      }
    }

    var findRoot = moquire(MODULE, {fs: fs})

    findRoot('/foo/bar/baz')
      .should.equal('/foo')

    checked.should.deep.equal([
      '/foo/bar/baz/package.json',
      '/foo/bar/package.json',
      '/foo/package.json'
    ])
  })

  it('can take a custom check argument', function () {
    var checked = []

    var findRoot = require(MODULE)

    findRoot('/foo/bar/baz', function (dir) {
      checked.push(dir)
      return dir === '/foo/bar'
    })
    .should.equal('/foo/bar')

    checked.should.deep.equal([
      '/foo/bar/baz',
      '/foo/bar'
    ])
  })

  it('throws if not found', function () {
    var fs = {
      statSync: function (path) {
        throw new Error()
      }
    }

    var findRoot = moquire(MODULE, {fs: fs})

    expect(function () {
      findRoot('/foo/bar/baz/')
    }).to.throw('not found')
  })
})
