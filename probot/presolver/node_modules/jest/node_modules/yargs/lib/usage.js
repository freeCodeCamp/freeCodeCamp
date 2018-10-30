'use strict'
// this file handles outputting usage instructions,
// failures, etc. keeps logging in one place.
const stringWidth = require('string-width')
const objFilter = require('./obj-filter')
const path = require('path')
const setBlocking = require('set-blocking')
const YError = require('./yerror')

module.exports = function usage (yargs, y18n) {
  const __ = y18n.__
  const self = {}

  // methods for ouputting/building failure message.
  const fails = []
  self.failFn = function failFn (f) {
    fails.push(f)
  }

  let failMessage = null
  let showHelpOnFail = true
  self.showHelpOnFail = function showHelpOnFailFn (enabled, message) {
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

  let failureOutput = false
  self.fail = function fail (msg, err) {
    const logger = yargs._getLoggerInstance()

    if (fails.length) {
      for (let i = fails.length - 1; i >= 0; --i) {
        fails[i](msg, err, self)
      }
    } else {
      if (yargs.getExitProcess()) setBlocking(true)

      // don't output failure message more than once
      if (!failureOutput) {
        failureOutput = true
        if (showHelpOnFail) yargs.showHelp('error')
        if (msg || err) logger.error(msg || err)
        if (failMessage) {
          if (msg || err) logger.error('')
          logger.error(failMessage)
        }
      }

      err = err || new YError(msg)
      if (yargs.getExitProcess()) {
        return yargs.exit(1)
      } else if (yargs._hasParseCallback()) {
        return yargs.exit(1, err)
      } else {
        throw err
      }
    }
  }

  // methods for ouputting/building help (usage) message.
  let usages = []
  let usageDisabled = false
  self.usage = (msg, description) => {
    if (msg === null) {
      usageDisabled = true
      usages = []
      return
    }
    usageDisabled = false
    usages.push([msg, description || ''])
    return self
  }
  self.getUsage = () => {
    return usages
  }
  self.getUsageDisabled = () => {
    return usageDisabled
  }

  self.getPositionalGroupName = () => {
    return __('Positionals:')
  }

  let examples = []
  self.example = (cmd, description) => {
    examples.push([cmd, description || ''])
  }

  let commands = []
  self.command = function command (cmd, description, isDefault, aliases) {
    // the last default wins, so cancel out any previously set default
    if (isDefault) {
      commands = commands.map((cmdArray) => {
        cmdArray[2] = false
        return cmdArray
      })
    }
    commands.push([cmd, description || '', isDefault, aliases])
  }
  self.getCommands = () => commands

  let descriptions = {}
  self.describe = function describe (key, desc) {
    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.describe(k, key[k])
      })
    } else {
      descriptions[key] = desc
    }
  }
  self.getDescriptions = () => descriptions

  let epilog
  self.epilog = (msg) => {
    epilog = msg
  }

  let wrapSet = false
  let wrap
  self.wrap = (cols) => {
    wrapSet = true
    wrap = cols
  }

  function getWrap () {
    if (!wrapSet) {
      wrap = windowWidth()
      wrapSet = true
    }

    return wrap
  }

  const deferY18nLookupPrefix = '__yargsString__:'
  self.deferY18nLookup = str => deferY18nLookupPrefix + str

  const defaultGroup = 'Options:'
  self.help = function help () {
    normalizeAliases()

    // handle old demanded API
    const base$0 = path.basename(yargs.$0)
    const demandedOptions = yargs.getDemandedOptions()
    const demandedCommands = yargs.getDemandedCommands()
    const groups = yargs.getGroups()
    const options = yargs.getOptions()
    let keys = Object.keys(
      Object.keys(descriptions)
      .concat(Object.keys(demandedOptions))
      .concat(Object.keys(demandedCommands))
      .concat(Object.keys(options.default))
      .reduce((acc, key) => {
        if (key !== '_') acc[key] = true
        return acc
      }, {})
    )

    const theWrap = getWrap()
    const ui = require('cliui')({
      width: theWrap,
      wrap: !!theWrap
    })

    // the usage string.
    if (!usageDisabled) {
      if (usages.length) {
        // user-defined usage.
        usages.forEach((usage) => {
          ui.div(`${usage[0].replace(/\$0/g, base$0)}`)
          if (usage[1]) {
            ui.div({text: `${usage[1]}`, padding: [1, 0, 0, 0]})
          }
        })
        ui.div()
      } else if (commands.length) {
        let u = null
        // demonstrate how commands are used.
        if (demandedCommands._) {
          u = `${base$0} <${__('command')}>\n`
        } else {
          u = `${base$0} [${__('command')}]\n`
        }
        ui.div(`${u}`)
      }
    }

    // your application's commands, i.e., non-option
    // arguments populated in '_'.
    if (commands.length) {
      ui.div(__('Commands:'))

      const context = yargs.getContext()
      const parentCommands = context.commands.length ? `${context.commands.join(' ')} ` : ''

      commands.forEach((command) => {
        const commandString = `${base$0} ${parentCommands}${command[0].replace(/^\$0 ?/, '')}` // drop $0 from default commands.
        ui.span(
          {
            text: commandString,
            padding: [0, 2, 0, 2],
            width: maxWidth(commands, theWrap, `${base$0}${parentCommands}`) + 4
          },
          {text: command[1]}
        )
        const hints = []
        if (command[2]) hints.push(`[${__('default:').slice(0, -1)}]`) // TODO hacking around i18n here
        if (command[3] && command[3].length) {
          hints.push(`[${__('aliases:')} ${command[3].join(', ')}]`)
        }
        if (hints.length) {
          ui.div({text: hints.join(' '), padding: [0, 0, 0, 2], align: 'right'})
        } else {
          ui.div()
        }
      })

      ui.div()
    }

    // perform some cleanup on the keys array, making it
    // only include top-level keys not their aliases.
    const aliasKeys = (Object.keys(options.alias) || [])
      .concat(Object.keys(yargs.parsed.newAliases) || [])

    keys = keys.filter(key => !yargs.parsed.newAliases[key] && aliasKeys.every(alias => (options.alias[alias] || []).indexOf(key) === -1))

    // populate 'Options:' group with any keys that have not
    // explicitly had a group set.
    if (!groups[defaultGroup]) groups[defaultGroup] = []
    addUngroupedKeys(keys, options.alias, groups)

    // display 'Options:' table along with any custom tables:
    Object.keys(groups).forEach((groupName) => {
      if (!groups[groupName].length) return

      ui.div(__(groupName))

      // if we've grouped the key 'f', but 'f' aliases 'foobar',
      // normalizedKeys should contain only 'foobar'.
      const normalizedKeys = groups[groupName].map((key) => {
        if (~aliasKeys.indexOf(key)) return key
        for (let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== undefined; i++) {
          if (~(options.alias[aliasKey] || []).indexOf(key)) return aliasKey
        }
        return key
      })

      // actually generate the switches string --foo, -f, --bar.
      const switches = normalizedKeys.reduce((acc, key) => {
        acc[key] = [ key ].concat(options.alias[key] || [])
          .map(sw => {
            // for the special positional group don't
            // add '--' or '-' prefix.
            if (groupName === self.getPositionalGroupName()) return sw
            else return (sw.length > 1 ? '--' : '-') + sw
          })
          .join(', ')

        return acc
      }, {})

      normalizedKeys.forEach((key) => {
        const kswitch = switches[key]
        let desc = descriptions[key] || ''
        let type = null

        if (~desc.lastIndexOf(deferY18nLookupPrefix)) desc = __(desc.substring(deferY18nLookupPrefix.length))

        if (~options.boolean.indexOf(key)) type = `[${__('boolean')}]`
        if (~options.count.indexOf(key)) type = `[${__('count')}]`
        if (~options.string.indexOf(key)) type = `[${__('string')}]`
        if (~options.normalize.indexOf(key)) type = `[${__('string')}]`
        if (~options.array.indexOf(key)) type = `[${__('array')}]`
        if (~options.number.indexOf(key)) type = `[${__('number')}]`

        const extra = [
          type,
          (key in demandedOptions) ? `[${__('required')}]` : null,
          options.choices && options.choices[key] ? `[${__('choices:')} ${
            self.stringifiedValues(options.choices[key])}]` : null,
          defaultString(options.default[key], options.defaultDescription[key])
        ].filter(Boolean).join(' ')

        ui.span(
          {text: kswitch, padding: [0, 2, 0, 2], width: maxWidth(switches, theWrap) + 4},
          desc
        )

        if (extra) ui.div({text: extra, padding: [0, 0, 0, 2], align: 'right'})
        else ui.div()
      })

      ui.div()
    })

    // describe some common use-cases for your application.
    if (examples.length) {
      ui.div(__('Examples:'))

      examples.forEach((example) => {
        example[0] = example[0].replace(/\$0/g, base$0)
      })

      examples.forEach((example) => {
        if (example[1] === '') {
          ui.div(
            {
              text: example[0],
              padding: [0, 2, 0, 2]
            }
          )
        } else {
          ui.div(
            {
              text: example[0],
              padding: [0, 2, 0, 2],
              width: maxWidth(examples, theWrap) + 4
            }, {
              text: example[1]
            }
          )
        }
      })

      ui.div()
    }

    // the usage string.
    if (epilog) {
      const e = epilog.replace(/\$0/g, base$0)
      ui.div(`${e}\n`)
    }

    return ui.toString()
  }

  // return the maximum width of a string
  // in the left-hand column of a table.
  function maxWidth (table, theWrap, modifier) {
    let width = 0

    // table might be of the form [leftColumn],
    // or {key: leftColumn}
    if (!Array.isArray(table)) {
      table = Object.keys(table).map(key => [table[key]])
    }

    table.forEach((v) => {
      width = Math.max(
        stringWidth(modifier ? `${modifier} ${v[0]}` : v[0]),
        width
      )
    })

    // if we've enabled 'wrap' we should limit
    // the max-width of the left-column.
    if (theWrap) width = Math.min(width, parseInt(theWrap * 0.5, 10))

    return width
  }

  // make sure any options set for aliases,
  // are copied to the keys being aliased.
  function normalizeAliases () {
    // handle old demanded API
    const demandedOptions = yargs.getDemandedOptions()
    const options = yargs.getOptions()

    ;(Object.keys(options.alias) || []).forEach((key) => {
      options.alias[key].forEach((alias) => {
        // copy descriptions.
        if (descriptions[alias]) self.describe(key, descriptions[alias])
        // copy demanded.
        if (alias in demandedOptions) yargs.demandOption(key, demandedOptions[alias])
        // type messages.
        if (~options.boolean.indexOf(alias)) yargs.boolean(key)
        if (~options.count.indexOf(alias)) yargs.count(key)
        if (~options.string.indexOf(alias)) yargs.string(key)
        if (~options.normalize.indexOf(alias)) yargs.normalize(key)
        if (~options.array.indexOf(alias)) yargs.array(key)
        if (~options.number.indexOf(alias)) yargs.number(key)
      })
    })
  }

  // given a set of keys, place any keys that are
  // ungrouped under the 'Options:' grouping.
  function addUngroupedKeys (keys, aliases, groups) {
    let groupedKeys = []
    let toCheck = null
    Object.keys(groups).forEach((group) => {
      groupedKeys = groupedKeys.concat(groups[group])
    })

    keys.forEach((key) => {
      toCheck = [key].concat(aliases[key])
      if (!toCheck.some(k => groupedKeys.indexOf(k) !== -1)) {
        groups[defaultGroup].push(key)
      }
    })
    return groupedKeys
  }

  self.showHelp = (level) => {
    const logger = yargs._getLoggerInstance()
    if (!level) level = 'error'
    const emit = typeof level === 'function' ? level : logger[level]
    emit(self.help())
  }

  self.functionDescription = (fn) => {
    const description = fn.name ? require('decamelize')(fn.name, '-') : __('generated-value')
    return ['(', description, ')'].join('')
  }

  self.stringifiedValues = function stringifiedValues (values, separator) {
    let string = ''
    const sep = separator || ', '
    const array = [].concat(values)

    if (!values || !array.length) return string

    array.forEach((value) => {
      if (string.length) string += sep
      string += JSON.stringify(value)
    })

    return string
  }

  // format the default-value-string displayed in
  // the right-hand column.
  function defaultString (value, defaultDescription) {
    let string = `[${__('default:')} `

    if (value === undefined && !defaultDescription) return null

    if (defaultDescription) {
      string += defaultDescription
    } else {
      switch (typeof value) {
        case 'string':
          string += `"${value}"`
          break
        case 'object':
          string += JSON.stringify(value)
          break
        default:
          string += value
      }
    }

    return `${string}]`
  }

  // guess the width of the console window, max-width 80.
  function windowWidth () {
    const maxWidth = 80
    if (typeof process === 'object' && process.stdout && process.stdout.columns) {
      return Math.min(maxWidth, process.stdout.columns)
    } else {
      return maxWidth
    }
  }

  // logic for displaying application version.
  let version = null
  self.version = (ver) => {
    version = ver
  }

  self.showVersion = () => {
    const logger = yargs._getLoggerInstance()
    logger.log(version)
  }

  self.reset = function reset (localLookup) {
    // do not reset wrap here
    // do not reset fails here
    failMessage = null
    failureOutput = false
    usages = []
    usageDisabled = false
    epilog = undefined
    examples = []
    commands = []
    descriptions = objFilter(descriptions, (k, v) => !localLookup[k])
    return self
  }

  let frozen
  self.freeze = function freeze () {
    frozen = {}
    frozen.failMessage = failMessage
    frozen.failureOutput = failureOutput
    frozen.usages = usages
    frozen.usageDisabled = usageDisabled
    frozen.epilog = epilog
    frozen.examples = examples
    frozen.commands = commands
    frozen.descriptions = descriptions
  }
  self.unfreeze = function unfreeze () {
    failMessage = frozen.failMessage
    failureOutput = frozen.failureOutput
    usages = frozen.usages
    usageDisabled = frozen.usageDisabled
    epilog = frozen.epilog
    examples = frozen.examples
    commands = frozen.commands
    descriptions = frozen.descriptions
    frozen = undefined
  }

  return self
}
