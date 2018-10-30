'use strict'
const argsert = require('./lib/argsert')
const fs = require('fs')
const Command = require('./lib/command')
const Completion = require('./lib/completion')
const Parser = require('yargs-parser')
const path = require('path')
const Usage = require('./lib/usage')
const Validation = require('./lib/validation')
const Y18n = require('y18n')
const objFilter = require('./lib/obj-filter')
const setBlocking = require('set-blocking')
const applyExtends = require('./lib/apply-extends')
const YError = require('./lib/yerror')

exports = module.exports = Yargs
function Yargs (processArgs, cwd, parentRequire) {
  processArgs = processArgs || [] // handle calling yargs().

  const self = {}
  let command = null
  let completion = null
  let groups = {}
  let output = ''
  let preservedGroups = {}
  let usage = null
  let validation = null

  const y18n = Y18n({
    directory: path.resolve(__dirname, './locales'),
    updateFiles: false
  })

  if (!cwd) cwd = process.cwd()

  self.$0 = process.argv
    .slice(0, 2)
    .map((x, i) => {
      // ignore the node bin, specify this in your
      // bin file with #!/usr/bin/env node
      if (i === 0 && /\b(node|iojs)(\.exe)?$/.test(x)) return
      const b = rebase(cwd, x)
      return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x
    })
    .join(' ').trim()

  if (process.env._ !== undefined && process.argv[1] === process.env._) {
    self.$0 = process.env._.replace(
      `${path.dirname(process.execPath)}/`, ''
    )
  }

  // use context object to keep track of resets, subcommand execution, etc
  // submodules should modify and check the state of context as necessary
  const context = { resets: -1, commands: [], fullCommands: [], files: [] }
  self.getContext = () => context

  // puts yargs back into an initial state. any keys
  // that have been set to "global" will not be reset
  // by this action.
  let options
  self.resetOptions = self.reset = function resetOptions (aliases) {
    context.resets++
    aliases = aliases || {}
    options = options || {}
    // put yargs back into an initial state, this
    // logic is used to build a nested command
    // hierarchy.
    const tmpOptions = {}
    tmpOptions.local = options.local ? options.local : []
    tmpOptions.configObjects = options.configObjects ? options.configObjects : []

    // if a key has been explicitly set as local,
    // we should reset it before passing options to command.
    const localLookup = {}
    tmpOptions.local.forEach((l) => {
      localLookup[l] = true
      ;(aliases[l] || []).forEach((a) => {
        localLookup[a] = true
      })
    })

    // preserve all groups not set to local.
    preservedGroups = Object.keys(groups).reduce((acc, groupName) => {
      const keys = groups[groupName].filter(key => !(key in localLookup))
      if (keys.length > 0) {
        acc[groupName] = keys
      }
      return acc
    }, {})
    // groups can now be reset
    groups = {}

    const arrayOptions = [
      'array', 'boolean', 'string', 'requiresArg', 'skipValidation',
      'count', 'normalize', 'number'
    ]

    const objectOptions = [
      'narg', 'key', 'alias', 'default', 'defaultDescription',
      'config', 'choices', 'demandedOptions', 'demandedCommands', 'coerce'
    ]

    arrayOptions.forEach((k) => {
      tmpOptions[k] = (options[k] || []).filter(k => !localLookup[k])
    })

    objectOptions.forEach((k) => {
      tmpOptions[k] = objFilter(options[k], (k, v) => !localLookup[k])
    })

    tmpOptions.envPrefix = options.envPrefix
    options = tmpOptions

    // if this is the first time being executed, create
    // instances of all our helpers -- otherwise just reset.
    usage = usage ? usage.reset(localLookup) : Usage(self, y18n)
    validation = validation ? validation.reset(localLookup) : Validation(self, usage, y18n)
    command = command ? command.reset() : Command(self, usage, validation)
    if (!completion) completion = Completion(self, usage, command)

    completionCommand = null
    output = ''
    exitError = null
    hasOutput = false
    self.parsed = false

    return self
  }
  self.resetOptions()

  // temporary hack: allow "freezing" of reset-able state for parse(msg, cb)
  let frozen
  function freeze () {
    frozen = {}
    frozen.options = options
    frozen.configObjects = options.configObjects.slice(0)
    frozen.exitProcess = exitProcess
    frozen.groups = groups
    usage.freeze()
    validation.freeze()
    command.freeze()
    frozen.strict = strict
    frozen.completionCommand = completionCommand
    frozen.output = output
    frozen.exitError = exitError
    frozen.hasOutput = hasOutput
    frozen.parsed = self.parsed
  }
  function unfreeze () {
    options = frozen.options
    options.configObjects = frozen.configObjects
    exitProcess = frozen.exitProcess
    groups = frozen.groups
    output = frozen.output
    exitError = frozen.exitError
    hasOutput = frozen.hasOutput
    self.parsed = frozen.parsed
    usage.unfreeze()
    validation.unfreeze()
    command.unfreeze()
    strict = frozen.strict
    completionCommand = frozen.completionCommand
    parseFn = null
    parseContext = null
    frozen = undefined
  }

  self.boolean = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('boolean', keys)
    return self
  }

  self.array = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('array', keys)
    return self
  }

  self.number = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('number', keys)
    return self
  }

  self.normalize = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('normalize', keys)
    return self
  }

  self.count = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('count', keys)
    return self
  }

  self.string = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('string', keys)
    return self
  }

  self.requiresArg = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('requiresArg', keys)
    return self
  }

  self.skipValidation = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('skipValidation', keys)
    return self
  }

  function populateParserHintArray (type, keys, value) {
    keys = [].concat(keys)
    keys.forEach((key) => {
      options[type].push(key)
    })
  }

  self.nargs = function (key, value) {
    argsert('<string|object|array> [number]', [key, value], arguments.length)
    populateParserHintObject(self.nargs, false, 'narg', key, value)
    return self
  }

  self.choices = function (key, value) {
    argsert('<object|string|array> [string|array]', [key, value], arguments.length)
    populateParserHintObject(self.choices, true, 'choices', key, value)
    return self
  }

  self.alias = function (key, value) {
    argsert('<object|string|array> [string|array]', [key, value], arguments.length)
    populateParserHintObject(self.alias, true, 'alias', key, value)
    return self
  }

  // TODO: actually deprecate self.defaults.
  self.default = self.defaults = function (key, value, defaultDescription) {
    argsert('<object|string|array> [*] [string]', [key, value, defaultDescription], arguments.length)
    if (defaultDescription) options.defaultDescription[key] = defaultDescription
    if (typeof value === 'function') {
      if (!options.defaultDescription[key]) options.defaultDescription[key] = usage.functionDescription(value)
      value = value.call()
    }
    populateParserHintObject(self.default, false, 'default', key, value)
    return self
  }

  self.describe = function (key, desc) {
    argsert('<object|string|array> [string]', [key, desc], arguments.length)
    populateParserHintObject(self.describe, false, 'key', key, true)
    usage.describe(key, desc)
    return self
  }

  self.demandOption = function (keys, msg) {
    argsert('<object|string|array> [string]', [keys, msg], arguments.length)
    populateParserHintObject(self.demandOption, false, 'demandedOptions', keys, msg)
    return self
  }

  self.coerce = function (keys, value) {
    argsert('<object|string|array> [function]', [keys, value], arguments.length)
    populateParserHintObject(self.coerce, false, 'coerce', keys, value)
    return self
  }

  function populateParserHintObject (builder, isArray, type, key, value) {
    if (Array.isArray(key)) {
      // an array of keys with one value ['x', 'y', 'z'], function parse () {}
      const temp = {}
      key.forEach((k) => {
        temp[k] = value
      })
      builder(temp)
    } else if (typeof key === 'object') {
      // an object of key value pairs: {'x': parse () {}, 'y': parse() {}}
      Object.keys(key).forEach((k) => {
        builder(k, key[k])
      })
    } else {
      // a single key value pair 'x', parse() {}
      if (isArray) {
        options[type][key] = (options[type][key] || []).concat(value)
      } else {
        options[type][key] = value
      }
    }
  }

  function deleteFromParserHintObject (optionKey) {
    // delete from all parsing hints:
    // boolean, array, key, alias, etc.
    Object.keys(options).forEach((hintKey) => {
      const hint = options[hintKey]
      if (Array.isArray(hint)) {
        if (~hint.indexOf(optionKey)) hint.splice(hint.indexOf(optionKey), 1)
      } else if (typeof hint === 'object') {
        delete hint[optionKey]
      }
    })
    // now delete the description from usage.js.
    delete usage.getDescriptions()[optionKey]
  }

  self.config = function config (key, msg, parseFn) {
    argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length)
    // allow a config object to be provided directly.
    if (typeof key === 'object') {
      key = applyExtends(key, cwd)
      options.configObjects = (options.configObjects || []).concat(key)
      return self
    }

    // allow for a custom parsing function.
    if (typeof msg === 'function') {
      parseFn = msg
      msg = null
    }

    key = key || 'config'
    self.describe(key, msg || usage.deferY18nLookup('Path to JSON config file'))
    ;(Array.isArray(key) ? key : [key]).forEach((k) => {
      options.config[k] = parseFn || true
    })

    return self
  }

  self.example = function (cmd, description) {
    argsert('<string> [string]', [cmd, description], arguments.length)
    usage.example(cmd, description)
    return self
  }

  self.command = function (cmd, description, builder, handler, middlewares) {
    argsert('<string|array|object> [string|boolean] [function|object] [function] [array]', [cmd, description, builder, handler, middlewares], arguments.length)
    command.addHandler(cmd, description, builder, handler, middlewares)
    return self
  }

  self.commandDir = function (dir, opts) {
    argsert('<string> [object]', [dir, opts], arguments.length)
    const req = parentRequire || require
    command.addDirectory(dir, self.getContext(), req, require('get-caller-file')(), opts)
    return self
  }

  // TODO: deprecate self.demand in favor of
  // .demandCommand() .demandOption().
  self.demand = self.required = self.require = function demand (keys, max, msg) {
    // you can optionally provide a 'max' key,
    // which will raise an exception if too many '_'
    // options are provided.
    if (Array.isArray(max)) {
      max.forEach((key) => {
        self.demandOption(key, msg)
      })
      max = Infinity
    } else if (typeof max !== 'number') {
      msg = max
      max = Infinity
    }

    if (typeof keys === 'number') {
      self.demandCommand(keys, max, msg, msg)
    } else if (Array.isArray(keys)) {
      keys.forEach((key) => {
        self.demandOption(key, msg)
      })
    } else {
      if (typeof msg === 'string') {
        self.demandOption(keys, msg)
      } else if (msg === true || typeof msg === 'undefined') {
        self.demandOption(keys)
      }
    }

    return self
  }

  self.demandCommand = function demandCommand (min, max, minMsg, maxMsg) {
    argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [min, max, minMsg, maxMsg], arguments.length)

    if (typeof min === 'undefined') min = 1

    if (typeof max !== 'number') {
      minMsg = max
      max = Infinity
    }

    self.global('_', false)

    options.demandedCommands._ = {
      min,
      max,
      minMsg,
      maxMsg
    }

    return self
  }

  self.getDemandedOptions = () => {
    argsert([], 0)
    return options.demandedOptions
  }

  self.getDemandedCommands = () => {
    argsert([], 0)
    return options.demandedCommands
  }

  self.implies = function (key, value) {
    argsert('<string|object> [number|string|array]', [key, value], arguments.length)
    validation.implies(key, value)
    return self
  }

  self.conflicts = function (key1, key2) {
    argsert('<string|object> [string|array]', [key1, key2], arguments.length)
    validation.conflicts(key1, key2)
    return self
  }

  self.usage = function (msg, description, builder, handler) {
    argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [msg, description, builder, handler], arguments.length)

    if (description !== undefined) {
      // .usage() can be used as an alias for defining
      // a default command.
      if ((msg || '').match(/^\$0( |$)/)) {
        return self.command(msg, description, builder, handler)
      } else {
        throw new YError('.usage() description must start with $0 if being used as alias for .command()')
      }
    } else {
      usage.usage(msg)
      return self
    }
  }

  self.epilogue = self.epilog = function (msg) {
    argsert('<string>', [msg], arguments.length)
    usage.epilog(msg)
    return self
  }

  self.fail = function (f) {
    argsert('<function>', [f], arguments.length)
    usage.failFn(f)
    return self
  }

  self.check = function (f, _global) {
    argsert('<function> [boolean]', [f, _global], arguments.length)
    validation.check(f, _global !== false)
    return self
  }

  self.global = function global (globals, global) {
    argsert('<string|array> [boolean]', [globals, global], arguments.length)
    globals = [].concat(globals)
    if (global !== false) {
      options.local = options.local.filter(l => globals.indexOf(l) === -1)
    } else {
      globals.forEach((g) => {
        if (options.local.indexOf(g) === -1) options.local.push(g)
      })
    }
    return self
  }

  self.pkgConf = function pkgConf (key, path) {
    argsert('<string> [string]', [key, path], arguments.length)
    let conf = null
    // prefer cwd to require-main-filename in this method
    // since we're looking for e.g. "nyc" config in nyc consumer
    // rather than "yargs" config in nyc (where nyc is the main filename)
    const obj = pkgUp(path || cwd)

    // If an object exists in the key, add it to options.configObjects
    if (obj[key] && typeof obj[key] === 'object') {
      conf = applyExtends(obj[key], path || cwd)
      options.configObjects = (options.configObjects || []).concat(conf)
    }

    return self
  }

  const pkgs = {}
  function pkgUp (path) {
    const npath = path || '*'
    if (pkgs[npath]) return pkgs[npath]
    const findUp = require('find-up')

    let obj = {}
    try {
      const pkgJsonPath = findUp.sync('package.json', {
        cwd: path || require('path').dirname(require('require-main-filename')(parentRequire || require)),
        normalize: false
      })
      obj = JSON.parse(fs.readFileSync(pkgJsonPath))
    } catch (noop) {}

    pkgs[npath] = obj || {}
    return pkgs[npath]
  }

  let parseFn = null
  let parseContext = null
  self.parse = function parse (args, shortCircuit, _parseFn) {
    argsert('[string|array] [function|boolean|object] [function]', [args, shortCircuit, _parseFn], arguments.length)
    if (typeof args === 'undefined') args = processArgs

    // a context object can optionally be provided, this allows
    // additional information to be passed to a command handler.
    if (typeof shortCircuit === 'object') {
      parseContext = shortCircuit
      shortCircuit = _parseFn
    }

    // by providing a function as a second argument to
    // parse you can capture output that would otherwise
    // default to printing to stdout/stderr.
    if (typeof shortCircuit === 'function') {
      parseFn = shortCircuit
      shortCircuit = null
    }
    // completion short-circuits the parsing process,
    // skipping validation, etc.
    if (!shortCircuit) processArgs = args

    freeze()
    if (parseFn) exitProcess = false

    const parsed = self._parseArgs(args, shortCircuit)
    if (parseFn) parseFn(exitError, parsed, output)
    unfreeze()

    return parsed
  }

  self._getParseContext = () => parseContext || {}

  self._hasParseCallback = () => !!parseFn

  self.option = self.options = function option (key, opt) {
    argsert('<string|object> [object]', [key, opt], arguments.length)
    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.options(k, key[k])
      })
    } else {
      if (typeof opt !== 'object') {
        opt = {}
      }

      options.key[key] = true // track manually set keys.

      if (opt.alias) self.alias(key, opt.alias)

      const demand = opt.demand || opt.required || opt.require

      // deprecated, use 'demandOption' instead
      if (demand) {
        self.demand(key, demand)
      }

      if (opt.demandOption) {
        self.demandOption(key, typeof opt.demandOption === 'string' ? opt.demandOption : undefined)
      }

      if ('conflicts' in opt) {
        self.conflicts(key, opt.conflicts)
      }

      if ('default' in opt) {
        self.default(key, opt.default)
      }

      if ('implies' in opt) {
        self.implies(key, opt.implies)
      }

      if ('nargs' in opt) {
        self.nargs(key, opt.nargs)
      }

      if (opt.config) {
        self.config(key, opt.configParser)
      }

      if (opt.normalize) {
        self.normalize(key)
      }

      if ('choices' in opt) {
        self.choices(key, opt.choices)
      }

      if ('coerce' in opt) {
        self.coerce(key, opt.coerce)
      }

      if ('group' in opt) {
        self.group(key, opt.group)
      }

      if (opt.boolean || opt.type === 'boolean') {
        self.boolean(key)
        if (opt.alias) self.boolean(opt.alias)
      }

      if (opt.array || opt.type === 'array') {
        self.array(key)
        if (opt.alias) self.array(opt.alias)
      }

      if (opt.number || opt.type === 'number') {
        self.number(key)
        if (opt.alias) self.number(opt.alias)
      }

      if (opt.string || opt.type === 'string') {
        self.string(key)
        if (opt.alias) self.string(opt.alias)
      }

      if (opt.count || opt.type === 'count') {
        self.count(key)
      }

      if (typeof opt.global === 'boolean') {
        self.global(key, opt.global)
      }

      if (opt.defaultDescription) {
        options.defaultDescription[key] = opt.defaultDescription
      }

      if (opt.skipValidation) {
        self.skipValidation(key)
      }

      const desc = opt.describe || opt.description || opt.desc
      if (!opt.hidden) {
        self.describe(key, desc)
      }

      if (opt.requiresArg) {
        self.requiresArg(key)
      }
    }

    return self
  }
  self.getOptions = () => options

  self.positional = function (key, opts) {
    argsert('<string> <object>', [key, opts], arguments.length)
    if (context.resets === 0) {
      throw new YError(".positional() can only be called in a command's builder function")
    }

    // .positional() only supports a subset of the configuration
    // options availble to .option().
    const supportedOpts = ['default', 'implies', 'normalize',
      'choices', 'conflicts', 'coerce', 'type', 'describe',
      'desc', 'description', 'alias']
    opts = objFilter(opts, (k, v) => {
      let accept = supportedOpts.indexOf(k) !== -1
      // type can be one of string|number|boolean.
      if (k === 'type' && ['string', 'number', 'boolean'].indexOf(v) === -1) accept = false
      return accept
    })

    // copy over any settings that can be inferred from the command string.
    const fullCommand = context.fullCommands[context.fullCommands.length - 1]
    const parseOptions = fullCommand ? command.cmdToParseOptions(fullCommand) : {
      array: [],
      alias: {},
      default: {},
      demand: {}
    }
    Object.keys(parseOptions).forEach((pk) => {
      if (Array.isArray(parseOptions[pk])) {
        if (parseOptions[pk].indexOf(key) !== -1) opts[pk] = true
      } else {
        if (parseOptions[pk][key] && !(pk in opts)) opts[pk] = parseOptions[pk][key]
      }
    })
    self.group(key, usage.getPositionalGroupName())
    return self.option(key, opts)
  }

  self.group = function group (opts, groupName) {
    argsert('<string|array> <string>', [opts, groupName], arguments.length)
    const existing = preservedGroups[groupName] || groups[groupName]
    if (preservedGroups[groupName]) {
      // we now only need to track this group name in groups.
      delete preservedGroups[groupName]
    }

    const seen = {}
    groups[groupName] = (existing || []).concat(opts).filter((key) => {
      if (seen[key]) return false
      return (seen[key] = true)
    })
    return self
  }
  // combine explicit and preserved groups. explicit groups should be first
  self.getGroups = () => Object.assign({}, groups, preservedGroups)

  // as long as options.envPrefix is not undefined,
  // parser will apply env vars matching prefix to argv
  self.env = function (prefix) {
    argsert('[string|boolean]', [prefix], arguments.length)
    if (prefix === false) options.envPrefix = undefined
    else options.envPrefix = prefix || ''
    return self
  }

  self.wrap = function (cols) {
    argsert('<number|null|undefined>', [cols], arguments.length)
    usage.wrap(cols)
    return self
  }

  let strict = false
  self.strict = function (enabled) {
    argsert('[boolean]', [enabled], arguments.length)
    strict = enabled !== false
    return self
  }
  self.getStrict = () => strict

  self.showHelp = function (level) {
    argsert('[string|function]', [level], arguments.length)
    if (!self.parsed) self._parseArgs(processArgs) // run parser, if it has not already been executed.
    if (command.hasDefaultCommand()) {
      context.resets++ // override the restriction on top-level positoinals.
      command.runDefaultBuilderOn(self, true)
    }
    usage.showHelp(level)
    return self
  }

  let versionOpt = null
  self.version = function version (opt, msg, ver) {
    const defaultVersionOpt = 'version'
    argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length)

    // nuke the key previously configured
    // to return version #.
    if (versionOpt) {
      deleteFromParserHintObject(versionOpt)
      usage.version(undefined)
      versionOpt = null
    }

    if (arguments.length === 0) {
      ver = guessVersion()
      opt = defaultVersionOpt
    } else if (arguments.length === 1) {
      if (opt === false) { // disable default 'version' key.
        return self
      }
      ver = opt
      opt = defaultVersionOpt
    } else if (arguments.length === 2) {
      ver = msg
      msg = null
    }

    versionOpt = typeof opt === 'string' ? opt : defaultVersionOpt
    msg = msg || usage.deferY18nLookup('Show version number')

    usage.version(ver || undefined)
    self.boolean(versionOpt)
    self.describe(versionOpt, msg)
    return self
  }

  function guessVersion () {
    const obj = pkgUp()

    return obj.version || 'unknown'
  }

  let helpOpt = null
  self.addHelpOpt = self.help = function addHelpOpt (opt, msg) {
    const defaultHelpOpt = 'help'
    argsert('[string|boolean] [string]', [opt, msg], arguments.length)

    // nuke the key previously configured
    // to return help.
    if (helpOpt) {
      deleteFromParserHintObject(helpOpt)
      helpOpt = null
    }

    if (arguments.length === 1) {
      if (opt === false) return self
    }

    // use arguments, fallback to defaults for opt and msg
    helpOpt = typeof opt === 'string' ? opt : defaultHelpOpt
    self.boolean(helpOpt)
    self.describe(helpOpt, msg || usage.deferY18nLookup('Show help'))
    return self
  }

  self.showHelpOnFail = function showHelpOnFail (enabled, message) {
    argsert('[boolean|string] [string]', [enabled, message], arguments.length)
    usage.showHelpOnFail(enabled, message)
    return self
  }

  var exitProcess = true
  self.exitProcess = function (enabled) {
    argsert('[boolean]', [enabled], arguments.length)
    if (typeof enabled !== 'boolean') {
      enabled = true
    }
    exitProcess = enabled
    return self
  }
  self.getExitProcess = () => exitProcess

  var completionCommand = null
  self.completion = function (cmd, desc, fn) {
    argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length)

    // a function to execute when generating
    // completions can be provided as the second
    // or third argument to completion.
    if (typeof desc === 'function') {
      fn = desc
      desc = null
    }

    // register the completion command.
    completionCommand = cmd || 'completion'
    if (!desc && desc !== false) {
      desc = 'generate bash completion script'
    }
    self.command(completionCommand, desc)

    // a function can be provided
    if (fn) completion.registerFunction(fn)

    return self
  }

  self.showCompletionScript = function ($0) {
    argsert('[string]', [$0], arguments.length)
    $0 = $0 || self.$0
    _logger.log(completion.generateCompletionScript($0, completionCommand))
    return self
  }

  self.getCompletion = function (args, done) {
    argsert('<array> <function>', [args, done], arguments.length)
    completion.getCompletion(args, done)
  }

  self.locale = function (locale) {
    argsert('[string]', [locale], arguments.length)
    if (arguments.length === 0) {
      guessLocale()
      return y18n.getLocale()
    }
    detectLocale = false
    y18n.setLocale(locale)
    return self
  }

  self.updateStrings = self.updateLocale = function (obj) {
    argsert('<object>', [obj], arguments.length)
    detectLocale = false
    y18n.updateLocale(obj)
    return self
  }

  let detectLocale = true
  self.detectLocale = function (detect) {
    argsert('<boolean>', [detect], arguments.length)
    detectLocale = detect
    return self
  }
  self.getDetectLocale = () => detectLocale

  var hasOutput = false
  var exitError = null
  // maybe exit, always capture
  // context about why we wanted to exit.
  self.exit = (code, err) => {
    hasOutput = true
    exitError = err
    if (exitProcess) process.exit(code)
  }

  // we use a custom logger that buffers output,
  // so that we can print to non-CLIs, e.g., chat-bots.
  const _logger = {
    log () {
      const args = []
      for (let i = 0; i < arguments.length; i++) args.push(arguments[i])
      if (!self._hasParseCallback()) console.log.apply(console, args)
      hasOutput = true
      if (output.length) output += '\n'
      output += args.join(' ')
    },
    error () {
      const args = []
      for (let i = 0; i < arguments.length; i++) args.push(arguments[i])
      if (!self._hasParseCallback()) console.error.apply(console, args)
      hasOutput = true
      if (output.length) output += '\n'
      output += args.join(' ')
    }
  }
  self._getLoggerInstance = () => _logger
  // has yargs output an error our help
  // message in the current execution context.
  self._hasOutput = () => hasOutput

  self._setHasOutput = () => {
    hasOutput = true
  }

  let recommendCommands
  self.recommendCommands = function (recommend) {
    argsert('[boolean]', [recommend], arguments.length)
    recommendCommands = typeof recommend === 'boolean' ? recommend : true
    return self
  }

  self.getUsageInstance = () => usage

  self.getValidationInstance = () => validation

  self.getCommandInstance = () => command

  self.terminalWidth = () => {
    argsert([], 0)
    return typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null
  }

  Object.defineProperty(self, 'argv', {
    get: () => self._parseArgs(processArgs),
    enumerable: true
  })

  self._parseArgs = function parseArgs (args, shortCircuit, _skipValidation, commandIndex) {
    let skipValidation = !!_skipValidation
    args = args || processArgs

    options.__ = y18n.__
    options.configuration = pkgUp()['yargs'] || {}
    const parsed = Parser.detailed(args, options)
    let argv = parsed.argv
    if (parseContext) argv = Object.assign({}, argv, parseContext)
    const aliases = parsed.aliases

    argv.$0 = self.$0
    self.parsed = parsed

    try {
      guessLocale() // guess locale lazily, so that it can be turned off in chain.

      // while building up the argv object, there
      // are two passes through the parser. If completion
      // is being performed short-circuit on the first pass.
      if (shortCircuit) {
        return argv
      }

      // if there's a handler associated with a
      // command defer processing to it.
      if (helpOpt) {
        // consider any multi-char helpOpt alias as a valid help command
        // unless all helpOpt aliases are single-char
        // note that parsed.aliases is a normalized bidirectional map :)
        const helpCmds = [helpOpt]
          .concat(aliases[helpOpt] || [])
          .filter(k => k.length > 1)
        // check if help should trigger and strip it from _.
        if (~helpCmds.indexOf(argv._[argv._.length - 1])) {
          argv._.pop()
          argv[helpOpt] = true
        }
      }
      const handlerKeys = command.getCommands()
      const skipDefaultCommand = argv[helpOpt] && (handlerKeys.length > 1 || handlerKeys[0] !== '$0')

      if (argv._.length) {
        if (handlerKeys.length) {
          let firstUnknownCommand
          for (let i = (commandIndex || 0), cmd; argv._[i] !== undefined; i++) {
            cmd = String(argv._[i])
            if (~handlerKeys.indexOf(cmd) && cmd !== completionCommand) {
              setPlaceholderKeys(argv)
              // commands are executed using a recursive algorithm that executes
              // the deepest command first; we keep track of the position in the
              // argv._ array that is currently being executed.
              return command.runCommand(cmd, self, parsed, i + 1)
            } else if (!firstUnknownCommand && cmd !== completionCommand) {
              firstUnknownCommand = cmd
              break
            }
          }

          // run the default command, if defined
          if (command.hasDefaultCommand() && !skipDefaultCommand) {
            setPlaceholderKeys(argv)
            return command.runCommand(null, self, parsed)
          }

          // recommend a command if recommendCommands() has
          // been enabled, and no commands were found to execute
          if (recommendCommands && firstUnknownCommand && !argv[helpOpt]) {
            validation.recommendCommands(firstUnknownCommand, handlerKeys)
          }
        }

        // generate a completion script for adding to ~/.bashrc.
        if (completionCommand && ~argv._.indexOf(completionCommand) && !argv[completion.completionKey]) {
          if (exitProcess) setBlocking(true)
          self.showCompletionScript()
          self.exit(0)
        }
      } else if (command.hasDefaultCommand() && !skipDefaultCommand) {
        setPlaceholderKeys(argv)
        return command.runCommand(null, self, parsed)
      }

      // we must run completions first, a user might
      // want to complete the --help or --version option.
      if (completion.completionKey in argv) {
        if (exitProcess) setBlocking(true)

        // we allow for asynchronous completions,
        // e.g., loading in a list of commands from an API.
        const completionArgs = args.slice(args.indexOf(`--${completion.completionKey}`) + 1)
        completion.getCompletion(completionArgs, (completions) => {
          ;(completions || []).forEach((completion) => {
            _logger.log(completion)
          })

          self.exit(0)
        })
        return setPlaceholderKeys(argv)
      }

      // Handle 'help' and 'version' options
      // if we haven't already output help!
      if (!hasOutput) {
        Object.keys(argv).forEach((key) => {
          if (key === helpOpt && argv[key]) {
            if (exitProcess) setBlocking(true)

            skipValidation = true
            self.showHelp('log')
            self.exit(0)
          } else if (key === versionOpt && argv[key]) {
            if (exitProcess) setBlocking(true)

            skipValidation = true
            usage.showVersion()
            self.exit(0)
          }
        })
      }

      // Check if any of the options to skip validation were provided
      if (!skipValidation && options.skipValidation.length > 0) {
        skipValidation = Object.keys(argv).some(key => options.skipValidation.indexOf(key) >= 0 && argv[key] === true)
      }

      // If the help or version options where used and exitProcess is false,
      // or if explicitly skipped, we won't run validations.
      if (!skipValidation) {
        if (parsed.error) throw new YError(parsed.error.message)

        // if we're executed via bash completion, don't
        // bother with validation.
        if (!argv[completion.completionKey]) {
          self._runValidation(argv, aliases, {}, parsed.error)
        }
      }
    } catch (err) {
      if (err instanceof YError) usage.fail(err.message, err)
      else throw err
    }

    return setPlaceholderKeys(argv)
  }

  self._runValidation = function runValidation (argv, aliases, positionalMap, parseErrors) {
    if (parseErrors) throw new YError(parseErrors.message)
    validation.nonOptionCount(argv)
    validation.missingArgumentValue(argv)
    validation.requiredArguments(argv)
    if (strict) validation.unknownArguments(argv, aliases, positionalMap)
    validation.customChecks(argv, aliases)
    validation.limitedChoices(argv)
    validation.implications(argv)
    validation.conflicting(argv)
  }

  function guessLocale () {
    if (!detectLocale) return

    try {
      const osLocale = require('os-locale')
      self.locale(osLocale.sync({ spawn: false }))
    } catch (err) {
      // if we explode looking up locale just noop
      // we'll keep using the default language 'en'.
    }
  }

  function setPlaceholderKeys (argv) {
    Object.keys(options.key).forEach((key) => {
      // don't set placeholder keys for dot
      // notation options 'foo.bar'.
      if (~key.indexOf('.')) return
      if (typeof argv[key] === 'undefined') argv[key] = undefined
    })
    return argv
  }

  // an app should almost always have --version and --help,
  // if you *really* want to disable this use .help(false)/.version(false).
  self.help()
  self.version()

  return self
}

// rebase an absolute path to a relative one with respect to a base directory
// exported for tests
exports.rebase = rebase
function rebase (base, dir) {
  return path.relative(base, dir)
}
