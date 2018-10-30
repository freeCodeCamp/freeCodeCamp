// this file handles outputting usage instructions,
// failures, etc. keeps logging in one place.
var cliui = require('cliui'),
  decamelize = require('decamelize'),
  wsize = require('window-size')

module.exports = function (yargs) {
  var self = {}

  // methods for ouputting/building failure message.
  var fails = []
  self.failFn = function (f) {
    fails.push(f)
  }

  var failMessage = null
  var showHelpOnFail = true
  self.showHelpOnFail = function (enabled, message) {
    if (typeof enabled === 'string') {
      message = enabled
      enabled = true
    } else if (typeof enabled === 'undefined') {
      enabled = true
    }
    failMessage = message
    showHelpOnFail = enabled
    return self
  }

  self.fail = function (msg) {
    if (fails.length) {
      fails.forEach(function (f) {
        f(msg)
      })
    } else {
      if (showHelpOnFail) yargs.showHelp('error')
      if (msg) console.error(msg)
      if (failMessage) {
        if (msg) console.error('')
        console.error(failMessage)
      }
      if (yargs.getExitProcess()) {
        process.exit(1)
      } else {
        throw new Error(msg)
      }
    }
  }

  // methods for ouputting/building help (usage) message.
  var usage
  self.usage = function (msg) {
    usage = msg
  }

  var examples = []
  self.example = function (cmd, description) {
    examples.push([cmd, description || ''])
  }

  var commands = []
  self.command = function (cmd, description) {
    commands.push([cmd, description || ''])
  }
  self.getCommands = function () {
    return commands
  }

  var descriptions = {}
  self.describe = function (key, desc) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(function (k) {
        self.describe(k, key[k])
      })
    } else {
      descriptions[key] = desc
    }
  }
  self.getDescriptions = function () {
    return descriptions
  }

  var epilog
  self.epilog = function (msg) {
    epilog = msg
  }

  var wrap = windowWidth()
  self.wrap = function (cols) {
    wrap = cols
  }

  self.help = function () {
    normalizeAliases()

    var demanded = yargs.getDemanded(),
      options = yargs.getOptions(),
      keys = Object.keys(
        Object.keys(descriptions)
        .concat(Object.keys(demanded))
        .concat(Object.keys(options.default))
        .reduce(function (acc, key) {
          if (key !== '_') acc[key] = true
          return acc
        }, {})
      ),
      ui = cliui({
        width: wrap,
        wrap: !!wrap
      })

    // the usage string.
    if (usage) {
      var u = usage.replace(/\$0/g, yargs.$0)
      ui.div(u + '\n')
    }

    // your application's commands, i.e., non-option
    // arguments populated in '_'.
    if (commands.length) {
      ui.div('Commands:')

      commands.forEach(function (command) {
        ui.div(
          {text: command[0], padding: [0, 2, 0, 2], width: maxWidth(commands) + 4},
          {text: command[1]}
        )
      })

      ui.div()
    }

    // the options table.
    var aliasKeys = (Object.keys(options.alias) || [])
      .concat(Object.keys(yargs.parsed.newAliases) || [])

    keys = keys.filter(function (key) {
      return !yargs.parsed.newAliases[key] && aliasKeys.every(function (alias) {
        return (options.alias[alias] || []).indexOf(key) === -1
      })
    })

    var switches = keys.reduce(function (acc, key) {
      acc[key] = [ key ].concat(options.alias[key] || [])
      .map(function (sw) {
        return (sw.length > 1 ? '--' : '-') + sw
      })
      .join(', ')

      return acc
    }, {})

    if (keys.length) {
      ui.div('Options:')

      keys.forEach(function (key) {
        var kswitch = switches[key]
        var desc = descriptions[key] || ''
        var type = null

        if (~options.boolean.indexOf(key)) type = '[boolean]'
        if (~options.count.indexOf(key)) type = '[count]'
        if (~options.string.indexOf(key)) type = '[string]'
        if (~options.normalize.indexOf(key)) type = '[string]'
        if (~options.array.indexOf(key)) type = '[array]'

        var extra = [
            type,
            demanded[key] ? '[required]' : null,
            defaultString(options.default[key], options.defaultDescription[key])
          ].filter(Boolean).join(' ')

        ui.span(
          {text: kswitch, padding: [0, 2, 0, 2], width: maxWidth(switches) + 4},
          desc
        )

        if (extra) ui.div({text: extra, padding: [0, 0, 0, 2], align: 'right'})
        else ui.div()
      })

      ui.div()
    }

    // describe some common use-cases for your application.
    if (examples.length) {
      ui.div('Examples:')

      examples.forEach(function (example) {
        example[0] = example[0].replace(/\$0/g, yargs.$0)
      })

      examples.forEach(function (example) {
        ui.div(
          {text: example[0], padding: [0, 2, 0, 2], width: maxWidth(examples) + 4},
          example[1]
        )
      })

      ui.div()
    }

    // the usage string.
    if (epilog) {
      var e = epilog.replace(/\$0/g, yargs.$0)
      ui.div(e + '\n')
    }

    return ui.toString()
  }

  // return the maximum width of a string
  // in the left-hand column of a table.
  function maxWidth (table) {
    var width = 0

    // table might be of the form [leftColumn],
    // or {key: leftColumn}}
    if (!Array.isArray(table)) {
      table = Object.keys(table).map(function (key) {
        return [table[key]]
      })
    }

    table.forEach(function (v) {
      width = Math.max(v[0].length, width)
    })

    // if we've enabled 'wrap' we should limit
    // the max-width of the left-column.
    if (wrap) width = Math.min(width, parseInt(wrap * 0.5, 10))

    return width
  }

  // make sure any options set for aliases,
  // are copied to the keys being aliased.
  function normalizeAliases () {
    var options = yargs.getOptions(),
    demanded = yargs.getDemanded()

    ;(Object.keys(options.alias) || []).forEach(function (key) {
      options.alias[key].forEach(function (alias) {
        // copy descriptions.
        if (descriptions[alias]) self.describe(key, descriptions[alias])
        // copy demanded.
        if (demanded[alias]) yargs.demand(key, demanded[alias].msg)

        // type messages.
        if (~options.boolean.indexOf(alias)) yargs.boolean(key)
        if (~options.count.indexOf(alias)) yargs.count(key)
        if (~options.string.indexOf(alias)) yargs.string(key)
        if (~options.normalize.indexOf(alias)) yargs.normalize(key)
        if (~options.array.indexOf(alias)) yargs.array(key)
      })
    })
  }

  self.showHelp = function (level) {
    level = level || 'error'
    console[level](self.help())
  }

  self.functionDescription = function (fn, defaultDescription) {
    if (defaultDescription) {
      return defaultDescription
    }
    var description = fn.name ? decamelize(fn.name, '-') : 'generated-value'
    return ['(', description, ')'].join('')
  }

  // format the default-value-string displayed in
  // the right-hand column.
  function defaultString (value, defaultDescription) {
    var string = '[default: '

    if (value === undefined) return null

    if (defaultDescription) {
      string += defaultDescription
    } else {
      switch (typeof value) {
        case 'string':
          string += JSON.stringify(value)
          break
        case 'object':
          string += JSON.stringify(value)
          break
        default:
          string += value
      }
    }

    return string + ']'
  }

  // guess the width of the console window, max-width 80.
  function windowWidth () {
    return wsize.width ? Math.min(80, wsize.width) : null
  }

  // logic for displaying application version.
  var version = null
  self.version = function (ver, opt, msg) {
    version = ver
  }

  self.showVersion = function () {
    if (typeof version === 'function') console.log(version())
    else console.log(version)
  }

  return self
}
