'use strict'

var path = require('path')
var replace = require('replace-ext')
var buffer = require('is-buffer')

module.exports = VFile

var own = {}.hasOwnProperty
var proto = VFile.prototype

proto.toString = toString

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

// Construct a new file.
function VFile(options) {
  var prop
  var index
  var length

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = process.cwd()

  // Set path related properties in the correct order.
  index = -1
  length = order.length

  while (++index < length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop]
    }
  }
}

// Access full path (`~/index.min.js`).
Object.defineProperty(proto, 'path', {
  get: function() {
    return this.history[this.history.length - 1]
  },
  set: function(path) {
    assertNonEmpty(path, 'path')

    if (path !== this.path) {
      this.history.push(path)
    }
  }
})

// Access parent path (`~`).
Object.defineProperty(proto, 'dirname', {
  get: function() {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined
  },
  set: function(dirname) {
    assertPath(this.path, 'dirname')
    this.path = path.join(dirname || '', this.basename)
  }
})

// Access basename (`index.min.js`).
Object.defineProperty(proto, 'basename', {
  get: function() {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined
  },
  set: function(basename) {
    assertNonEmpty(basename, 'basename')
    assertPart(basename, 'basename')
    this.path = path.join(this.dirname || '', basename)
  }
})

// Access extname (`.js`).
Object.defineProperty(proto, 'extname', {
  get: function() {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined
  },
  set: function(extname) {
    var ext = extname || ''

    assertPart(ext, 'extname')
    assertPath(this.path, 'extname')

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`')
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots')
      }
    }

    this.path = replace(this.path, ext)
  }
})

// Access stem (`index.min`).
Object.defineProperty(proto, 'stem', {
  get: function() {
    return typeof this.path === 'string'
      ? path.basename(this.path, this.extname)
      : undefined
  },
  set: function(stem) {
    assertNonEmpty(stem, 'stem')
    assertPart(stem, 'stem')
    this.path = path.join(this.dirname || '', stem + (this.extname || ''))
  }
})

// Get the value of the file.
function toString(encoding) {
  var value = this.contents || ''
  return buffer(value) ? value.toString(encoding) : String(value)
}

// Assert that `part` is not a path (i.e., does not contain `path.sep`).
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}
