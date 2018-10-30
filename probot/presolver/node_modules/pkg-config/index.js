'use strict'

var debug = require('debug-log')('pkg-config')
var extend = require('xtend')
var find = require('find-root')
var fs = require('fs')
var path = require('path')

module.exports = function (namespace, options, fallback) {
  var opts = extend({
    root: 'config',
    cwd: process.cwd(),
    cache: true
  }, options || {})

  try {
    var root = find(opts.cwd)

    if (!root) {
      debug('could not find at %s', opts.cwd)

      return
    }

    debug('found root at %s', root)

    var pkg

    if (opts.cache) {
      pkg = require(path.join(root, 'package.json'))
    } else {
      pkg = fs.readFileSync(path.join(root, 'package.json'), {enconding: 'utf8'})
      pkg = JSON.parse(pkg)
    }

    debug('found package.json at %s', root)

    // where should we look under?
    var parent = opts.root ? pkg[opts.root] : pkg

    // do we have a custom namespace?
    var config = namespace ? parent[namespace] : parent

    // return found result or default
    return config || fallback
  } catch (e) {
    debug(e.message)
  }
}
