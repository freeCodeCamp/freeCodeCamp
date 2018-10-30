#!/usr/bin/env node

module.exports = Cli

var minimist = require('minimist')
var getStdin = require('get-stdin')

function Cli (opts) {
  var standard = require('../').linter(opts)

  opts = Object.assign({
    cmd: 'standard-engine',
    tagline: 'JavaScript Custom Style',
    version: require('../package.json').version
  }, opts)

  var argv = minimist(process.argv.slice(2), {
    alias: {
      global: 'globals',
      plugin: 'plugins',
      env: 'envs',
      help: 'h',
      verbose: 'v'
    },
    boolean: [
      'fix',
      'help',
      'stdin',
      'verbose',
      'version'
    ],
    string: [
      'global',
      'plugin',
      'parser',
      'env'
    ]
  })

  // Unix convention: Command line argument `-` is a shorthand for `--stdin`
  if (argv._[0] === '-') {
    argv.stdin = true
    argv._.shift()
  }

  if (argv.help) {
    if (opts.tagline) console.log('%s - %s (%s)', opts.cmd, opts.tagline, opts.homepage)
    console.log(`
Usage:
    ${opts.cmd} <flags> [FILES...]

    If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
    working directory are checked, recursively.

    Certain paths (node_modules/, coverage/, vendor/, *.min.js, bundle.js, and
    files/folders that begin with '.' like .git/) are automatically ignored.

    Paths in a project's root .gitignore file are also automatically ignored.

Flags:
        --fix       Automatically fix problems
    -v, --verbose   Show rule names for errors (to ignore specific rules)
        --version   Show current version
    -h, --help      Show usage information

Flags (advanced):
        --stdin     Read file text from stdin
        --global    Declare global variable
        --plugin    Use custom eslint plugin
        --env       Use custom eslint environment
        --parser    Use custom js parser (e.g. babel-eslint)
    `)
    process.exitCode = 0
    return
  }

  if (argv.version) {
    console.log(opts.version)
    process.exitCode = 0
    return
  }

  var lintOpts = {
    fix: argv.fix,
    globals: argv.global,
    plugins: argv.plugin,
    envs: argv.env,
    parser: argv.parser
  }

  var stdinText

  if (argv.stdin) {
    getStdin().then(function (text) {
      stdinText = text
      standard.lintText(text, lintOpts, onResult)
    })
  } else {
    standard.lintFiles(argv._, lintOpts, onResult)
  }

  function onResult (err, result) {
    if (err) return onError(err)

    if (argv.stdin && argv.fix) {
      if (result.results[0].output) {
        // Code contained fixable errors, so print the fixed code
        process.stdout.write(result.results[0].output)
      } else {
        // Code did not contain fixable errors, so print original code
        process.stdout.write(stdinText)
      }
    }

    if (!result.errorCount && !result.warningCount) {
      process.exitCode = 0
      return
    }

    console.error('%s: %s (%s)', opts.cmd, opts.tagline, opts.homepage)

    // Are any fixable rules present?
    var isFixable = result.results.some(function (result) {
      return result.messages.some(function (message) {
        return !!message.fix
      })
    })

    if (isFixable) {
      console.error(
        '%s: %s',
        opts.cmd,
        'Run `' + opts.cmd + ' --fix` to automatically fix some problems.'
      )
    }

    result.results.forEach(function (result) {
      result.messages.forEach(function (message) {
        log(
          '  %s:%d:%d: %s%s',
          result.filePath, message.line || 0, message.column || 0, message.message,
          argv.verbose ? ' (' + message.ruleId + ')' : ''
        )
      })
    })

    process.exitCode = result.errorCount ? 1 : 0
  }

  function onError (err) {
    console.error(opts.cmd + ': Unexpected linter output:\n')
    console.error(err.stack || err.message || err)
    console.error(
      '\nIf you think this is a bug in `%s`, open an issue: %s',
      opts.cmd, opts.bugs
    )
    process.exitCode = 1
  }

  /**
   * Print lint errors to stdout -- this is expected output from `standard-engine`.
   * Note: When fixing code from stdin (`standard --stdin --fix`), the transformed
   * code is printed to stdout, so print lint errors to stderr in this case.
   */
  function log () {
    if (argv.stdin && argv.fix) {
      arguments[0] = opts.cmd + ': ' + arguments[0]
      console.error.apply(console, arguments)
    } else {
      console.log.apply(console, arguments)
    }
  }
}
