var assert = require('assert'),
  path = require('path'),
  Completion = require('./lib/completion'),
  Parser = require('./lib/parser'),
  Usage = require('./lib/usage'),
  Validation = require('./lib/validation')

Argv(process.argv.slice(2))

var exports = module.exports = Argv
function Argv (processArgs, cwd) {
  processArgs = processArgs || [] // handle calling yargs().

  var self = {}
  var completion = null
  var usage = null
  var validation = null

  if (!cwd) cwd = process.cwd()

  self.$0 = process.argv
    .slice(0, 2)
    .map(function (x, i) {
      // ignore the node bin, specify this in your
      // bin file with #!/usr/bin/env node
      if (i === 0 && /\b(node|iojs)$/.test(x)) return
      var b = rebase(cwd, x)
      return x.match(/^\//) && b.length < x.length
      ? b : x
    })
    .join(' ').trim()

  if (process.env._ !== undefined && process.argv[1] === process.env._) {
    self.$0 = process.env._.replace(
      path.dirname(process.execPath) + '/', ''
    )
  }

  var options
  self.resetOptions = self.reset = function () {
    // put yargs back into its initial
    // state, this is useful for creating a
    // nested CLI.
    options = {
      array: [],
      boolean: [],
      string: [],
      narg: {},
      key: {},
      alias: {},
      default: {},
      defaultDescription: {},
      requiresArg: [],
      count: [],
      normalize: [],
      config: []
    }

    usage = Usage(self) // handle usage output.
    validation = Validation(self, usage) // handle arg validation.
    completion = Completion(self, usage)

    demanded = {}

    exitProcess = true
    strict = false
    helpOpt = null
    versionOpt = null
    completionOpt = null
    commandHandlers = {}
    self.parsed = false

    return self
  }
  self.resetOptions()

  self.boolean = function (bools) {
    options.boolean.push.apply(options.boolean, [].concat(bools))
    return self
  }

  self.array = function (arrays) {
    options.array.push.apply(options.array, [].concat(arrays))
    return self
  }

  self.nargs = function (key, n) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(function (k) {
        self.nargs(k, key[k])
      })
    } else {
      options.narg[key] = n
    }
    return self
  }

  self.normalize = function (strings) {
    options.normalize.push.apply(options.normalize, [].concat(strings))
    return self
  }

  self.config = function (configs) {
    options.config.push.apply(options.config, [].concat(configs))
    return self
  }

  self.example = function (cmd, description) {
    usage.example(cmd, description)
    return self
  }

  self.command = function (cmd, description, fn) {
    usage.command(cmd, description)
    if (fn) commandHandlers[cmd] = fn
    return self
  }

  var commandHandlers = {}
  self.getCommandHandlers = function () {
    return commandHandlers
  }

  self.string = function (strings) {
    options.string.push.apply(options.string, [].concat(strings))
    return self
  }

  self.default = function (key, value, defaultDescription) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(function (k) {
        self.default(k, key[k])
      })
    } else {
      if (typeof value === 'function') {
        defaultDescription = usage.functionDescription(value, defaultDescription)
        value = value.call()
      }
      options.defaultDescription[key] = defaultDescription
      options.default[key] = value
    }
    return self
  }

  self.alias = function (x, y) {
    if (typeof x === 'object') {
      Object.keys(x).forEach(function (key) {
        self.alias(key, x[key])
      })
    } else {
      options.alias[x] = (options.alias[x] || []).concat(y)
    }
    return self
  }

  self.count = function (counts) {
    options.count.push.apply(options.count, [].concat(counts))
    return self
  }

  var demanded = {}
  self.demand = self.required = self.require = function (keys, msg) {
    if (typeof keys === 'number') {
      if (!demanded._) demanded._ = { count: 0, msg: null }
      demanded._.count += keys
      demanded._.msg = msg
    } else if (Array.isArray(keys)) {
      keys.forEach(function (key) {
        self.demand(key, msg)
      })
    } else {
      if (typeof msg === 'string') {
        demanded[keys] = { msg: msg }
      } else if (msg === true || typeof msg === 'undefined') {
        demanded[keys] = { msg: undefined }
      }
    }

    return self
  }
  self.getDemanded = function () {
    return demanded
  }

  self.requiresArg = function (requiresArgs) {
    options.requiresArg.push.apply(options.requiresArg, [].concat(requiresArgs))
    return self
  }

  self.implies = function (key, value) {
    validation.implies(key, value)
    return self
  }

  self.usage = function (msg, opts) {
    if (!opts && typeof msg === 'object') {
      opts = msg
      msg = null
    }

    usage.usage(msg)

    if (opts) self.options(opts)

    return self
  }

  self.epilogue = self.epilog = function (msg) {
    usage.epilog(msg)
    return self
  }

  self.fail = function (f) {
    usage.failFn(f)
    return self
  }

  self.check = function (f) {
    validation.check(f)
    return self
  }

  self.defaults = self.default

  self.describe = function (key, desc) {
    options.key[key] = true
    usage.describe(key, desc)
    return self
  }

  self.parse = function (args) {
    return parseArgs(args)
  }

  self.option = self.options = function (key, opt) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(function (k) {
        self.options(k, key[k])
      })
    } else {
      assert(typeof opt === 'object', 'second argument to option must be an object')

      options.key[key] = true // track manually set keys.

      if (opt.alias) self.alias(key, opt.alias)

      var demand = opt.demand || opt.required || opt.require

      if (demand) {
        self.demand(key, demand)
      } if ('default' in opt) {
        self.default(key, opt.default)
      } if ('nargs' in opt) {
        self.nargs(key, opt.nargs)
      } if (opt.boolean || opt.type === 'boolean') {
        self.boolean(key)
        if (opt.alias) self.boolean(opt.alias)
      } if (opt.array || opt.type === 'array') {
        self.array(key)
        if (opt.alias) self.array(opt.alias)
      } if (opt.string || opt.type === 'string') {
        self.string(key)
        if (opt.alias) self.string(opt.alias)
      } if (opt.count || opt.type === 'count') {
        self.count(key)
      }

      var desc = opt.describe || opt.description || opt.desc
      if (desc) {
        self.describe(key, desc)
      }

      if (opt.requiresArg) {
        self.requiresArg(key)
      }
    }

    return self
  }
  self.getOptions = function () {
    return options
  }

  self.wrap = function (cols) {
    usage.wrap(cols)
    return self
  }

  var strict = false
  self.strict = function () {
    strict = true
    return self
  }
  self.getStrict = function () {
    return strict
  }

  self.showHelp = function (level) {
    if (!self.parsed) parseArgs(processArgs) // run parser, if it has not already been executed.
    usage.showHelp(level)
    return self
  }

  var versionOpt = null
  self.version = function (ver, opt, msg) {
    versionOpt = opt || 'version'
    usage.version(ver)
    self.boolean(versionOpt)
    self.describe(versionOpt, msg || 'Show version number')
    return self
  }

  var helpOpt = null
  self.addHelpOpt = function (opt, msg) {
    helpOpt = opt
    self.boolean(opt)
    self.describe(opt, msg || 'Show help')
    return self
  }

  self.showHelpOnFail = function (enabled, message) {
    usage.showHelpOnFail(enabled, message)
    return self
  }

  var exitProcess = true
  self.exitProcess = function (enabled) {
    if (typeof enabled !== 'boolean') {
      enabled = true
    }
    exitProcess = enabled
    return self
  }
  self.getExitProcess = function () {
    return exitProcess
  }

  self.help = function () {
    if (arguments.length > 0) return self.addHelpOpt.apply(self, arguments)

    if (!self.parsed) parseArgs(processArgs) // run parser, if it has not already been executed.

    return usage.help()
  }

  var completionOpt = null,
  completionCommand = null
  self.completion = function (cmd, desc, fn) {
    // a function to execute when generating
    // completions can be provided as the second
    // or third argument to completion.
    if (typeof desc === 'function') {
      fn = desc
      desc = null
    }

    // register the completion command.
    completionCommand = cmd
    completionOpt = completion.completionKey
    self.command(completionCommand, desc || 'generate bash completion script')

    // a function can be provided
    if (fn) completion.registerFunction(fn)

    return self
  }

  self.showCompletionScript = function ($0) {
    $0 = $0 || self.$0
    console.log(completion.generateCompletionScript($0))
    return self
  }

  self.getUsageInstance = function () {
    return usage
  }

  self.getValidationInstance = function () {
    return validation
  }

  self.terminalWidth = function () {
    return require('window-size').width
  }

  Object.defineProperty(self, 'argv', {
    get: function () {
      var args = null

      try {
        args = parseArgs(processArgs)
      } catch (err) {
        usage.fail(err.message)
      }

      return args
    },
    enumerable: true
  })

  function parseArgs (args) {
    var parsed = Parser(args, options),
      argv = parsed.argv,
      aliases = parsed.aliases

    argv.$0 = self.$0

    self.parsed = parsed

    // generate a completion script for adding to ~/.bashrc.
    if (completionCommand && ~argv._.indexOf(completionCommand)) {
      self.showCompletionScript()
      if (exitProcess) {
        process.exit(0)
      }
    }

    // if there's a handler associated with a
    // command defer processing to it.
    var handlerKeys = Object.keys(self.getCommandHandlers())
    for (var i = 0, command; (command = handlerKeys[i]) !== undefined; i++) {
      if (~argv._.indexOf(command)) {
        self.getCommandHandlers()[command](self.reset())
        return self.argv
      }
    }

    Object.keys(argv).forEach(function (key) {
      if (key === helpOpt && argv[key]) {
        self.showHelp('log')
        if (exitProcess) {
          process.exit(0)
        }
      } else if (key === versionOpt && argv[key]) {
        usage.showVersion()
        if (exitProcess) {
          process.exit(0)
        }
      } else if (key === completionOpt) {
        // we allow for asynchronous completions,
        // e.g., loading in a list of commands from an API.
        completion.getCompletion(function (completions) {
          ;(completions || []).forEach(function (completion) {
            console.log(completion)
          })

          if (exitProcess) {
            process.exit(0)
          }
        })
        return
      }
    })

    validation.nonOptionCount(argv)
    validation.missingArgumentValue(argv)
    validation.requiredArguments(argv)

    if (strict) {
      validation.unknownArguments(argv, aliases)
    }

    validation.customChecks(argv, aliases)
    validation.implications(argv)
    setPlaceholderKeys(argv)

    return argv
  }

  function setPlaceholderKeys (argv) {
    Object.keys(options.key).forEach(function (key) {
      if (typeof argv[key] === 'undefined') argv[key] = undefined
    })
  }

  sigletonify(self)
  return self
}

// rebase an absolute path to a relative one with respect to a base directory
// exported for tests
exports.rebase = rebase
function rebase (base, dir) {
  return path.relative(base, dir)
}

/*  Hack an instance of Argv with process.argv into Argv
    so people can do
    require('yargs')(['--beeble=1','-z','zizzle']).argv
    to parse a list of args and
    require('yargs').argv
    to get a parsed version of process.argv.
*/
function sigletonify (inst) {
  Object.keys(inst).forEach(function (key) {
    if (key === 'argv') {
      Argv.__defineGetter__(key, inst.__lookupGetter__(key))
    } else {
      Argv[key] = typeof inst[key] === 'function'
      ? inst[key].bind(inst)
      : inst[key]
    }
  })
}
