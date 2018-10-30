'use strict'
const argsert = require('./argsert')
const objFilter = require('./obj-filter')
const specialKeys = ['$0', '--', '_']

// validation-type-stuff, missing params,
// bad implications, custom checks.
module.exports = function validation (yargs, usage, y18n) {
  const __ = y18n.__
  const __n = y18n.__n
  const self = {}

  // validate appropriate # of non-option
  // arguments were provided, i.e., '_'.
  self.nonOptionCount = function nonOptionCount (argv) {
    const demandedCommands = yargs.getDemandedCommands()
    // don't count currently executing commands
    const _s = argv._.length - yargs.getContext().commands.length

    if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
      if (_s < demandedCommands._.min) {
        if (demandedCommands._.minMsg !== undefined) {
          usage.fail(
            // replace $0 with observed, $1 with expected.
            demandedCommands._.minMsg ? demandedCommands._.minMsg.replace(/\$0/g, _s).replace(/\$1/, demandedCommands._.min) : null
          )
        } else {
          usage.fail(
            __('Not enough non-option arguments: got %s, need at least %s', _s, demandedCommands._.min)
          )
        }
      } else if (_s > demandedCommands._.max) {
        if (demandedCommands._.maxMsg !== undefined) {
          usage.fail(
            // replace $0 with observed, $1 with expected.
            demandedCommands._.maxMsg ? demandedCommands._.maxMsg.replace(/\$0/g, _s).replace(/\$1/, demandedCommands._.max) : null
          )
        } else {
          usage.fail(
          __('Too many non-option arguments: got %s, maximum of %s', _s, demandedCommands._.max)
          )
        }
      }
    }
  }

  // validate the appropriate # of <required>
  // positional arguments were provided:
  self.positionalCount = function positionalCount (required, observed) {
    if (observed < required) {
      usage.fail(
        __('Not enough non-option arguments: got %s, need at least %s', observed, required)
      )
    }
  }

  // make sure that any args that require an
  // value (--foo=bar), have a value.
  self.missingArgumentValue = function missingArgumentValue (argv) {
    const defaultValues = [true, false, '', undefined]
    const options = yargs.getOptions()
    if (options.requiresArg.length > 0) {
      const missingRequiredArgs = []

      options.requiresArg.forEach((key) => {
        // if the argument is not set in argv no need to check
        // whether a right-hand-side has been provided.
        if (!argv.hasOwnProperty(key)) return

        const value = argv[key]
        // if a value is explicitly requested,
        // flag argument as missing if it does not
        // look like foo=bar was entered.
        if (~defaultValues.indexOf(value) ||
          (Array.isArray(value) && !value.length)) {
          missingRequiredArgs.push(key)
        }
      })

      if (missingRequiredArgs.length > 0) {
        usage.fail(__n(
          'Missing argument value: %s',
          'Missing argument values: %s',
          missingRequiredArgs.length,
          missingRequiredArgs.join(', ')
        ))
      }
    }
  }

  // make sure all the required arguments are present.
  self.requiredArguments = function requiredArguments (argv) {
    const demandedOptions = yargs.getDemandedOptions()
    let missing = null

    Object.keys(demandedOptions).forEach((key) => {
      if (!argv.hasOwnProperty(key) || typeof argv[key] === 'undefined') {
        missing = missing || {}
        missing[key] = demandedOptions[key]
      }
    })

    if (missing) {
      const customMsgs = []
      Object.keys(missing).forEach((key) => {
        const msg = missing[key]
        if (msg && customMsgs.indexOf(msg) < 0) {
          customMsgs.push(msg)
        }
      })

      const customMsg = customMsgs.length ? `\n${customMsgs.join('\n')}` : ''

      usage.fail(__n(
        'Missing required argument: %s',
        'Missing required arguments: %s',
        Object.keys(missing).length,
        Object.keys(missing).join(', ') + customMsg
      ))
    }
  }

  // check for unknown arguments (strict-mode).
  self.unknownArguments = function unknownArguments (argv, aliases, positionalMap) {
    const commandKeys = yargs.getCommandInstance().getCommands()
    const unknown = []
    const currentContext = yargs.getContext()

    Object.keys(argv).forEach((key) => {
      if (specialKeys.indexOf(key) === -1 &&
        !positionalMap.hasOwnProperty(key) &&
        !yargs._getParseContext().hasOwnProperty(key) &&
        !aliases.hasOwnProperty(key)
      ) {
        unknown.push(key)
      }
    })

    if (commandKeys.length > 0) {
      argv._.slice(currentContext.commands.length).forEach((key) => {
        if (commandKeys.indexOf(key) === -1) {
          unknown.push(key)
        }
      })
    }

    if (unknown.length > 0) {
      usage.fail(__n(
        'Unknown argument: %s',
        'Unknown arguments: %s',
        unknown.length,
        unknown.join(', ')
      ))
    }
  }

  // validate arguments limited to enumerated choices
  self.limitedChoices = function limitedChoices (argv) {
    const options = yargs.getOptions()
    const invalid = {}

    if (!Object.keys(options.choices).length) return

    Object.keys(argv).forEach((key) => {
      if (specialKeys.indexOf(key) === -1 &&
        options.choices.hasOwnProperty(key)) {
        [].concat(argv[key]).forEach((value) => {
          // TODO case-insensitive configurability
          if (options.choices[key].indexOf(value) === -1 &&
              value !== undefined) {
            invalid[key] = (invalid[key] || []).concat(value)
          }
        })
      }
    })

    const invalidKeys = Object.keys(invalid)

    if (!invalidKeys.length) return

    let msg = __('Invalid values:')
    invalidKeys.forEach((key) => {
      msg += `\n  ${__(
        'Argument: %s, Given: %s, Choices: %s',
        key,
        usage.stringifiedValues(invalid[key]),
        usage.stringifiedValues(options.choices[key])
      )}`
    })
    usage.fail(msg)
  }

  // custom checks, added using the `check` option on yargs.
  let checks = []
  self.check = function check (f, global) {
    checks.push({
      func: f,
      global
    })
  }

  self.customChecks = function customChecks (argv, aliases) {
    for (let i = 0, f; (f = checks[i]) !== undefined; i++) {
      const func = f.func
      let result = null
      try {
        result = func(argv, aliases)
      } catch (err) {
        usage.fail(err.message ? err.message : err, err)
        continue
      }

      if (!result) {
        usage.fail(__('Argument check failed: %s', func.toString()))
      } else if (typeof result === 'string' || result instanceof Error) {
        usage.fail(result.toString(), result)
      }
    }
  }

  // check implications, argument foo implies => argument bar.
  let implied = {}
  self.implies = function implies (key, value) {
    argsert('<string|object> [array|number|string]', [key, value], arguments.length)

    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.implies(k, key[k])
      })
    } else {
      yargs.global(key)
      if (!implied[key]) {
        implied[key] = []
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.implies(key, i))
      } else {
        implied[key].push(value)
      }
    }
  }
  self.getImplied = function getImplied () {
    return implied
  }

  self.implications = function implications (argv) {
    const implyFail = []

    Object.keys(implied).forEach((key) => {
      const origKey = key
      ;(implied[key] || []).forEach((value) => {
        let num
        let key = origKey
        const origValue = value

        // convert string '1' to number 1
        num = Number(key)
        key = isNaN(num) ? key : num

        if (typeof key === 'number') {
          // check length of argv._
          key = argv._.length >= key
        } else if (key.match(/^--no-.+/)) {
          // check if key doesn't exist
          key = key.match(/^--no-(.+)/)[1]
          key = !argv[key]
        } else {
          // check if key exists
          key = argv[key]
        }

        num = Number(value)
        value = isNaN(num) ? value : num

        if (typeof value === 'number') {
          value = argv._.length >= value
        } else if (value.match(/^--no-.+/)) {
          value = value.match(/^--no-(.+)/)[1]
          value = !argv[value]
        } else {
          value = argv[value]
        }
        if (key && !value) {
          implyFail.push(` ${origKey} -> ${origValue}`)
        }
      })
    })

    if (implyFail.length) {
      let msg = `${__('Implications failed:')}\n`

      implyFail.forEach((value) => {
        msg += (value)
      })

      usage.fail(msg)
    }
  }

  let conflicting = {}
  self.conflicts = function conflicts (key, value) {
    argsert('<string|object> [array|string]', [key, value], arguments.length)

    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.conflicts(k, key[k])
      })
    } else {
      yargs.global(key)
      if (!conflicting[key]) {
        conflicting[key] = []
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.conflicts(key, i))
      } else {
        conflicting[key].push(value)
      }
    }
  }
  self.getConflicting = () => conflicting

  self.conflicting = function conflictingFn (argv) {
    Object.keys(argv).forEach((key) => {
      if (conflicting[key]) {
        conflicting[key].forEach((value) => {
          // we default keys to 'undefined' that have been configured, we should not
          // apply conflicting check unless they are a value other than 'undefined'.
          if (value && argv[key] !== undefined && argv[value] !== undefined) {
            usage.fail(__(`Arguments ${key} and ${value} are mutually exclusive`))
          }
        })
      }
    })
  }

  self.recommendCommands = function recommendCommands (cmd, potentialCommands) {
    const distance = require('./levenshtein')
    const threshold = 3 // if it takes more than three edits, let's move on.
    potentialCommands = potentialCommands.sort((a, b) => b.length - a.length)

    let recommended = null
    let bestDistance = Infinity
    for (let i = 0, candidate; (candidate = potentialCommands[i]) !== undefined; i++) {
      const d = distance(cmd, candidate)
      if (d <= threshold && d < bestDistance) {
        bestDistance = d
        recommended = candidate
      }
    }
    if (recommended) usage.fail(__('Did you mean %s?', recommended))
  }

  self.reset = function reset (localLookup) {
    implied = objFilter(implied, (k, v) => !localLookup[k])
    conflicting = objFilter(conflicting, (k, v) => !localLookup[k])
    checks = checks.filter(c => c.global)
    return self
  }

  let frozen
  self.freeze = function freeze () {
    frozen = {}
    frozen.implied = implied
    frozen.checks = checks
    frozen.conflicting = conflicting
  }
  self.unfreeze = function unfreeze () {
    implied = frozen.implied
    checks = frozen.checks
    conflicting = frozen.conflicting
    frozen = undefined
  }

  return self
}
