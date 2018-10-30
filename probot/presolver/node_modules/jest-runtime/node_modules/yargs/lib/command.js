'use strict'

const inspect = require('util').inspect
const path = require('path')
const Parser = require('yargs-parser')

const DEFAULT_MARKER = /(^\*)|(^\$0)/

// handles parsing positional arguments,
// and populating argv with said positional
// arguments.
module.exports = function command (yargs, usage, validation) {
  const self = {}
  let handlers = {}
  let aliasMap = {}
  let defaultCommand
  self.addHandler = function addHandler (cmd, description, builder, handler, middlewares) {
    let aliases = []
    handler = handler || (() => {})
    middlewares = middlewares || []
    if (Array.isArray(cmd)) {
      aliases = cmd.slice(1)
      cmd = cmd[0]
    } else if (typeof cmd === 'object') {
      let command = (Array.isArray(cmd.command) || typeof cmd.command === 'string') ? cmd.command : moduleName(cmd)
      if (cmd.aliases) command = [].concat(command).concat(cmd.aliases)
      self.addHandler(command, extractDesc(cmd), cmd.builder, cmd.handler, cmd.middlewares)
      return
    }

    // allow a module to be provided instead of separate builder and handler
    if (typeof builder === 'object' && builder.builder && typeof builder.handler === 'function') {
      self.addHandler([cmd].concat(aliases), description, builder.builder, builder.handler, builder.middlewares)
      return
    }

    // parse positionals out of cmd string
    const parsedCommand = self.parseCommand(cmd)

    // remove positional args from aliases only
    aliases = aliases.map(alias => self.parseCommand(alias).cmd)

    // check for default and filter out '*''
    let isDefault = false
    const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
      if (DEFAULT_MARKER.test(c)) {
        isDefault = true
        return false
      }
      return true
    })

    // standardize on $0 for default command.
    if (parsedAliases.length === 0 && isDefault) parsedAliases.push('$0')

    // shift cmd and aliases after filtering out '*'
    if (isDefault) {
      parsedCommand.cmd = parsedAliases[0]
      aliases = parsedAliases.slice(1)
      cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd)
    }

    // populate aliasMap
    aliases.forEach((alias) => {
      aliasMap[alias] = parsedCommand.cmd
    })

    if (description !== false) {
      usage.command(cmd, description, isDefault, aliases)
    }

    handlers[parsedCommand.cmd] = {
      original: cmd,
      description: description,
      handler,
      builder: builder || {},
      middlewares: middlewares || [],
      demanded: parsedCommand.demanded,
      optional: parsedCommand.optional
    }

    if (isDefault) defaultCommand = handlers[parsedCommand.cmd]
  }

  self.addDirectory = function addDirectory (dir, context, req, callerFile, opts) {
    opts = opts || {}
    // disable recursion to support nested directories of subcommands
    if (typeof opts.recurse !== 'boolean') opts.recurse = false
    // exclude 'json', 'coffee' from require-directory defaults
    if (!Array.isArray(opts.extensions)) opts.extensions = ['js']
    // allow consumer to define their own visitor function
    const parentVisit = typeof opts.visit === 'function' ? opts.visit : o => o
    // call addHandler via visitor function
    opts.visit = function visit (obj, joined, filename) {
      const visited = parentVisit(obj, joined, filename)
      // allow consumer to skip modules with their own visitor
      if (visited) {
        // check for cyclic reference
        // each command file path should only be seen once per execution
        if (~context.files.indexOf(joined)) return visited
        // keep track of visited files in context.files
        context.files.push(joined)
        self.addHandler(visited)
      }
      return visited
    }
    require('require-directory')({ require: req, filename: callerFile }, dir, opts)
  }

  // lookup module object from require()d command and derive name
  // if module was not require()d and no name given, throw error
  function moduleName (obj) {
    const mod = require('which-module')(obj)
    if (!mod) throw new Error(`No command name given for module: ${inspect(obj)}`)
    return commandFromFilename(mod.filename)
  }

  // derive command name from filename
  function commandFromFilename (filename) {
    return path.basename(filename, path.extname(filename))
  }

  function extractDesc (obj) {
    for (let keys = ['describe', 'description', 'desc'], i = 0, l = keys.length, test; i < l; i++) {
      test = obj[keys[i]]
      if (typeof test === 'string' || typeof test === 'boolean') return test
    }
    return false
  }

  self.parseCommand = function parseCommand (cmd) {
    const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, ' ')
    const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/)
    const bregex = /\.*[\][<>]/g
    const parsedCommand = {
      cmd: (splitCommand.shift()).replace(bregex, ''),
      demanded: [],
      optional: []
    }
    splitCommand.forEach((cmd, i) => {
      let variadic = false
      cmd = cmd.replace(/\s/g, '')
      if (/\.+[\]>]/.test(cmd) && i === splitCommand.length - 1) variadic = true
      if (/^\[/.test(cmd)) {
        parsedCommand.optional.push({
          cmd: cmd.replace(bregex, '').split('|'),
          variadic
        })
      } else {
        parsedCommand.demanded.push({
          cmd: cmd.replace(bregex, '').split('|'),
          variadic
        })
      }
    })
    return parsedCommand
  }

  self.getCommands = () => Object.keys(handlers).concat(Object.keys(aliasMap))

  self.getCommandHandlers = () => handlers

  self.hasDefaultCommand = () => !!defaultCommand

  self.runCommand = function runCommand (command, yargs, parsed, commandIndex) {
    let aliases = parsed.aliases
    const commandHandler = handlers[command] || handlers[aliasMap[command]] || defaultCommand
    const currentContext = yargs.getContext()
    let numFiles = currentContext.files.length
    const parentCommands = currentContext.commands.slice()

    // what does yargs look like after the buidler is run?
    let innerArgv = parsed.argv
    let innerYargs = null
    let positionalMap = {}
    if (command) {
      currentContext.commands.push(command)
      currentContext.fullCommands.push(commandHandler.original)
    }
    if (typeof commandHandler.builder === 'function') {
      // a function can be provided, which builds
      // up a yargs chain and possibly returns it.
      innerYargs = commandHandler.builder(yargs.reset(parsed.aliases))
      // if the builder function did not yet parse argv with reset yargs
      // and did not explicitly set a usage() string, then apply the
      // original command string as usage() for consistent behavior with
      // options object below.
      if (yargs.parsed === false) {
        if (shouldUpdateUsage(yargs)) {
          yargs.getUsageInstance().usage(
            usageFromParentCommandsCommandHandler(parentCommands, commandHandler),
            commandHandler.description
          )
        }
        innerArgv = innerYargs ? innerYargs._parseArgs(null, null, true, commandIndex) : yargs._parseArgs(null, null, true, commandIndex)
      } else {
        innerArgv = yargs.parsed.argv
      }

      if (innerYargs && yargs.parsed === false) aliases = innerYargs.parsed.aliases
      else aliases = yargs.parsed.aliases
    } else if (typeof commandHandler.builder === 'object') {
      // as a short hand, an object can instead be provided, specifying
      // the options that a command takes.
      innerYargs = yargs.reset(parsed.aliases)
      if (shouldUpdateUsage(innerYargs)) {
        innerYargs.getUsageInstance().usage(
          usageFromParentCommandsCommandHandler(parentCommands, commandHandler),
          commandHandler.description
        )
      }
      Object.keys(commandHandler.builder).forEach((key) => {
        innerYargs.option(key, commandHandler.builder[key])
      })
      innerArgv = innerYargs._parseArgs(null, null, true, commandIndex)
      aliases = innerYargs.parsed.aliases
    }

    if (!yargs._hasOutput()) {
      positionalMap = populatePositionals(commandHandler, innerArgv, currentContext, yargs)
    }

    // we apply validation post-hoc, so that custom
    // checks get passed populated positional arguments.
    if (!yargs._hasOutput()) yargs._runValidation(innerArgv, aliases, positionalMap, yargs.parsed.error)

    if (commandHandler.handler && !yargs._hasOutput()) {
      yargs._setHasOutput()
      if (commandHandler.middlewares.length > 0) {
        const middlewareArgs = commandHandler.middlewares.reduce(function (initialObj, middleware) {
          return Object.assign(initialObj, middleware(innerArgv))
        }, {})
        Object.assign(innerArgv, middlewareArgs)
      }
      const handlerResult = commandHandler.handler(innerArgv)
      if (handlerResult && typeof handlerResult.then === 'function') {
        handlerResult.then(
          null,
          (error) => yargs.getUsageInstance().fail(null, error)
        )
      }
    }

    if (command) {
      currentContext.commands.pop()
      currentContext.fullCommands.pop()
    }
    numFiles = currentContext.files.length - numFiles
    if (numFiles > 0) currentContext.files.splice(numFiles * -1, numFiles)

    return innerArgv
  }

  function shouldUpdateUsage (yargs) {
    return !yargs.getUsageInstance().getUsageDisabled() &&
      yargs.getUsageInstance().getUsage().length === 0
  }

  function usageFromParentCommandsCommandHandler (parentCommands, commandHandler) {
    const c = DEFAULT_MARKER.test(commandHandler.original) ? commandHandler.original.replace(DEFAULT_MARKER, '').trim() : commandHandler.original
    const pc = parentCommands.filter((c) => { return !DEFAULT_MARKER.test(c) })
    pc.push(c)
    return `$0 ${pc.join(' ')}`
  }

  self.runDefaultBuilderOn = function (yargs) {
    if (shouldUpdateUsage(yargs)) {
      // build the root-level command string from the default string.
      const commandString = DEFAULT_MARKER.test(defaultCommand.original)
        ? defaultCommand.original : defaultCommand.original.replace(/^[^[\]<>]*/, '$0 ')
      yargs.getUsageInstance().usage(
        commandString,
        defaultCommand.description
      )
    }
    const builder = defaultCommand.builder
    if (typeof builder === 'function') {
      builder(yargs)
    } else {
      Object.keys(builder).forEach((key) => {
        yargs.option(key, builder[key])
      })
    }
  }

  // transcribe all positional arguments "command <foo> <bar> [apple]"
  // onto argv.
  function populatePositionals (commandHandler, argv, context, yargs) {
    argv._ = argv._.slice(context.commands.length) // nuke the current commands
    const demanded = commandHandler.demanded.slice(0)
    const optional = commandHandler.optional.slice(0)
    const positionalMap = {}

    validation.positionalCount(demanded.length, argv._.length)

    while (demanded.length) {
      const demand = demanded.shift()
      populatePositional(demand, argv, positionalMap)
    }

    while (optional.length) {
      const maybe = optional.shift()
      populatePositional(maybe, argv, positionalMap)
    }

    argv._ = context.commands.concat(argv._)

    postProcessPositionals(argv, positionalMap, self.cmdToParseOptions(commandHandler.original))

    return positionalMap
  }

  function populatePositional (positional, argv, positionalMap, parseOptions) {
    const cmd = positional.cmd[0]
    if (positional.variadic) {
      positionalMap[cmd] = argv._.splice(0).map(String)
    } else {
      if (argv._.length) positionalMap[cmd] = [String(argv._.shift())]
    }
  }

  // we run yargs-parser against the positional arguments
  // applying the same parsing logic used for flags.
  function postProcessPositionals (argv, positionalMap, parseOptions) {
    // combine the parsing hints we've inferred from the command
    // string with explicitly configured parsing hints.
    const options = Object.assign({}, yargs.getOptions())
    options.default = Object.assign(parseOptions.default, options.default)
    options.alias = Object.assign(parseOptions.alias, options.alias)
    options.array = options.array.concat(parseOptions.array)

    const unparsed = []
    Object.keys(positionalMap).forEach((key) => {
      positionalMap[key].map((value) => {
        unparsed.push(`--${key}`)
        unparsed.push(value)
      })
    })

    // short-circuit parse.
    if (!unparsed.length) return

    const parsed = Parser.detailed(unparsed, options)

    if (parsed.error) {
      yargs.getUsageInstance().fail(parsed.error.message, parsed.error)
    } else {
      // only copy over positional keys (don't overwrite
      // flag arguments that were already parsed).
      const positionalKeys = Object.keys(positionalMap)
      Object.keys(positionalMap).forEach((key) => {
        [].push.apply(positionalKeys, parsed.aliases[key])
      })

      Object.keys(parsed.argv).forEach((key) => {
        if (positionalKeys.indexOf(key) !== -1) {
          argv[key] = parsed.argv[key]
        }
      })
    }
  }

  self.cmdToParseOptions = function (cmdString) {
    const parseOptions = {
      array: [],
      default: {},
      alias: {},
      demand: {}
    }

    const parsed = self.parseCommand(cmdString)
    parsed.demanded.forEach((d) => {
      const cmds = d.cmd.slice(0)
      const cmd = cmds.shift()
      if (d.variadic) {
        parseOptions.array.push(cmd)
        parseOptions.default[cmd] = []
      }
      cmds.forEach((c) => {
        parseOptions.alias[cmd] = c
      })
      parseOptions.demand[cmd] = true
    })

    parsed.optional.forEach((o) => {
      const cmds = o.cmd.slice(0)
      const cmd = cmds.shift()
      if (o.variadic) {
        parseOptions.array.push(cmd)
        parseOptions.default[cmd] = []
      }
      cmds.forEach((c) => {
        parseOptions.alias[cmd] = c
      })
    })

    return parseOptions
  }

  self.reset = () => {
    handlers = {}
    aliasMap = {}
    defaultCommand = undefined
    return self
  }

  // used by yargs.parse() to freeze
  // the state of commands such that
  // we can apply .parse() multiple times
  // with the same yargs instance.
  let frozen
  self.freeze = () => {
    frozen = {}
    frozen.handlers = handlers
    frozen.aliasMap = aliasMap
    frozen.defaultCommand = defaultCommand
  }
  self.unfreeze = () => {
    handlers = frozen.handlers
    aliasMap = frozen.aliasMap
    defaultCommand = frozen.defaultCommand
    frozen = undefined
  }

  return self
}
