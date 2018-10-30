'use strict'
// classic singleton yargs API, to use yargs
// without running as a singleton do:
// require('yargs/yargs')(process.argv.slice(2))
const yargs = require('./yargs')

Argv(process.argv.slice(2))

module.exports = Argv

function Argv (processArgs, cwd) {
  const argv = yargs(processArgs, cwd, require)
  singletonify(argv)
  return argv
}

/*  Hack an instance of Argv with process.argv into Argv
    so people can do
    require('yargs')(['--beeble=1','-z','zizzle']).argv
    to parse a list of args and
    require('yargs').argv
    to get a parsed version of process.argv.
*/
function singletonify (inst) {
  Object.keys(inst).forEach((key) => {
    if (key === 'argv') {
      Argv.__defineGetter__(key, inst.__lookupGetter__(key))
    } else {
      Argv[key] = typeof inst[key] === 'function' ? inst[key].bind(inst) : inst[key]
    }
  })
}
