'use strict';
var fs   = require('fs')
var ini  = require('ini')
var path = require('path')
var stripJsonComments = require('strip-json-comments')

var parse = exports.parse = function (content) {

  //if it ends in .json or starts with { then it must be json.
  //must be done this way, because ini accepts everything.
  //can't just try and parse it and let it throw if it's not ini.
  //everything is ini. even json with a syntax error.

  if(/^\s*{/.test(content))
    return JSON.parse(stripJsonComments(content))
  return ini.parse(content)

}

var file = exports.file = function () {
  var args = [].slice.call(arguments).filter(function (arg) { return arg != null })

  //path.join breaks if it's a not a string, so just skip this.
  for(var i in args)
    if('string' !== typeof args[i])
      return

  var file = path.join.apply(null, args)
  var content
  try {
    return fs.readFileSync(file,'utf-8')
  } catch (err) {
    return
  }
}

var json = exports.json = function () {
  var content = file.apply(null, arguments)
  return content ? parse(content) : null
}

var env = exports.env = function (prefix, env) {
  env = env || process.env
  var obj = {}
  var l = prefix.length
  for(var k in env) {
    if(k.toLowerCase().indexOf(prefix.toLowerCase()) === 0) {

      var keypath = k.substring(l).split('__')

      // Trim empty strings from keypath array
      var _emptyStringIndex
      while ((_emptyStringIndex=keypath.indexOf('')) > -1) {
        keypath.splice(_emptyStringIndex, 1)
      }

      var cursor = obj
      keypath.forEach(function _buildSubObj(_subkey,i){

        // (check for _subkey first so we ignore empty strings)
        // (check for cursor to avoid assignment to primitive objects)
        if (!_subkey || typeof cursor !== 'object')
          return

        // If this is the last key, just stuff the value in there
        // Assigns actual value from env variable to final key
        // (unless it's just an empty string- in that case use the last valid key)
        if (i === keypath.length-1)
          cursor[_subkey] = env[k]


        // Build sub-object if nothing already exists at the keypath
        if (cursor[_subkey] === undefined)
          cursor[_subkey] = {}

        // Increment cursor used to track the object at the current depth
        cursor = cursor[_subkey]

      })

    }

  }

  return obj
}

var find = exports.find = function () {
  var rel = path.join.apply(null, [].slice.call(arguments))

  function find(start, rel) {
    var file = path.join(start, rel)
    try {
      fs.statSync(file)
      return file
    } catch (err) {
      if(path.dirname(start) !== start) // root
        return find(path.dirname(start), rel)
    }
  }
  return find(process.cwd(), rel)
}


