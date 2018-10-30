#!/usr/bin/env node
var which = require("../")
if (process.argv.length < 3)
  usage()

function usage () {
  console.error('usage: which [-as] program ...')
  process.exit(1)
}

var all = false
var silent = false
var dashdash = false
var args = process.argv.slice(2).filter(function (arg) {
  if (dashdash || !/^-/.test(arg))
    return true

  if (arg === '--') {
    dashdash = true
    return false
  }

  var flags = arg.substr(1).split('')
  for (var f = 0; f < flags.length; f++) {
    var flag = flags[f]
    switch (flag) {
      case 's':
        silent = true
        break
      case 'a':
        all = true
        break
      default:
        console.error('which: illegal option -- ' + flag)
        usage()
    }
  }
  return false
})

process.exit(args.reduce(function (pv, current) {
  try {
    var f = which.sync(current, { all: all })
    if (all)
      f = f.join('\n')
    if (!silent)
      console.log(f)
    return pv;
  } catch (e) {
    return 1;
  }
}, 0))
