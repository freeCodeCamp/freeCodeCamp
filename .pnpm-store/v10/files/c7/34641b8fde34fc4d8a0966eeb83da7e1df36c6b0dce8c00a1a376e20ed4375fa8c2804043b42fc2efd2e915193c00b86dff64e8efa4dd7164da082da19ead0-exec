#!/usr/bin/env node

import { userInfo } from 'node:os'

import { Option, program } from 'commander'

import { createDebug, enableDebug } from '../lib/debug.js'
import lintStaged from '../lib/index.js'
import { CONFIG_STDIN_ERROR, restoreStashExample } from '../lib/messages.js'
import { readStdin } from '../lib/readStdin.js'
import { getVersion } from '../lib/version.js'

const debugLog = createDebug('lint-staged:bin')

// Do not terminate main Listr process on SIGINT
process.on('SIGINT', () => {})

program
  .version(await getVersion())

  /**
   * This shouldn't be necessary for lint-staged, but add migration step just in case
   * to preserve old behavior of "commander".
   *
   * @todo remove this in the major version
   * @see https://github.com/tj/commander.js/releases/tag/v13.0.0
   * */
  .allowExcessArguments()

  .addOption(
    new Option('--allow-empty', 'allow empty commits when tasks revert all staged changes').default(
      false
    )
  )
  .addOption(
    new Option(
      '-p, --concurrent <number|boolean>',
      'the number of tasks to run concurrently, or false for serial'
    ).default(true)
  )
  .addOption(
    new Option('-c, --config [path]', 'path to configuration file, or - to read from stdin')
  )
  .addOption(
    new Option('--cwd [path]', 'run all tasks in specific directory, instead of the current')
  )
  .addOption(new Option('-d, --debug', 'print additional debug information').default(false))
  .addOption(
    new Option(
      '--diff [string]',
      'override the default "--staged" flag of "git diff" to get list of files. Implies "--no-stash".'
    ).implies({ stash: false })
  )
  .addOption(
    new Option(
      '--diff-filter [string]',
      'override the default "--diff-filter=ACMR" flag of "git diff" to get list of files'
    )
  )
  .addOption(
    new Option('--continue-on-error', 'run all tasks to completion even if one fails').default(
      false
    )
  )
  .addOption(
    new Option('--fail-on-changes', 'fail with exit code 1 when tasks modify tracked files')
      .default(false)
      .implies({ revert: false })
  )
  .addOption(
    new Option(
      '--max-arg-length [number]',
      'maximum length of the command-line argument string'
    ).default(0)
  )

  /**
   * We don't want to show the `--revert` flag because it's on by default, and only show the
   * negatable flag `--no-rever` instead. There seems to be a bug in Commander.js where
   * configuring only the latter won't actually set the default value.
   */
  .addOption(
    new Option('--revert', 'revert to original state in case of errors').default(true).hideHelp()
  )
  .addOption(
    new Option('--no-revert', 'do not revert to original state in case of errors.').default(false)
  )

  .addOption(new Option('--stash', 'enable the backup stash').default(true).hideHelp())
  .addOption(
    new Option('--no-stash', 'disable the backup stash. Implies "--no-revert".')
      .default(false)
      .implies({ revert: false })
  )

  .addOption(
    new Option('--hide-partially-staged', 'hide unstaged changes from partially staged files')
      .default(true)
      .hideHelp()
  )
  .addOption(
    new Option(
      '--no-hide-partially-staged',
      'disable hiding unstaged changes from partially staged files'
    ).default(false)
  )

  .addOption(
    new Option('--hide-unstaged', 'hide all unstaged changes, instead of just partially staged')
      .default(false)
      .implies({ hidePartiallyStaged: false })
  )

  .addOption(new Option('-q, --quiet', 'disable lint-staged’s own console output').default(false))
  .addOption(new Option('-r, --relative', 'pass relative filepaths to tasks').default(false))
  .addOption(
    new Option(
      '-v, --verbose',
      'show task output even when tasks succeed; by default only failed output is shown'
    ).default(false)
  )

  .addHelpText('afterAll', '\n' + restoreStashExample())

const cliOptions = program.parse(process.argv).opts()

if (cliOptions.debug) {
  enableDebug()
}

const options = {
  allowEmpty: !!cliOptions.allowEmpty,
  concurrent: JSON.parse(cliOptions.concurrent),
  configPath: cliOptions.config,
  continueOnError: !!cliOptions.continueOnError,
  cwd: cliOptions.cwd,
  debug: !!cliOptions.debug,
  diff: cliOptions.diff,
  diffFilter: cliOptions.diffFilter,
  failOnChanges: !!cliOptions.failOnChanges,
  hidePartiallyStaged: !!cliOptions.hidePartiallyStaged, // commander inverts `no-<x>` flags to `!x`
  hideUnstaged: !!cliOptions.hideUnstaged,
  maxArgLength: cliOptions.maxArgLength || undefined,
  quiet: !!cliOptions.quiet,
  relative: !!cliOptions.relative,
  revert: !!cliOptions.revert, // commander inverts `no-<x>` flags to `!x`
  stash: !!cliOptions.stash, // commander inverts `no-<x>` flags to `!x`
  verbose: !!cliOptions.verbose,
}

try {
  const { shell } = userInfo()
  debugLog('Using shell: %s', shell)
} catch {
  debugLog('Could not determine current shell')
}

debugLog('Options parsed from command-line: %o', options)

if (options.configPath === '-') {
  delete options.configPath
  try {
    debugLog('Reading config from stdin')
    options.config = JSON.parse(await readStdin())
  } catch (error) {
    debugLog(CONFIG_STDIN_ERROR, error)
    console.error(CONFIG_STDIN_ERROR)
    process.exit(1)
  }
}

const passed = await lintStaged(options)
if (!passed) {
  process.exitCode = 1
}
