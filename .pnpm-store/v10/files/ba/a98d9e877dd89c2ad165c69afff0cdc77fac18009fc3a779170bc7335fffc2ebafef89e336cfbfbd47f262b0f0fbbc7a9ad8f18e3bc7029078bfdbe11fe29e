import { parseArgsStringToArgv } from 'string-argv'
import { exec } from 'tinyexec'

import { blackBright, red } from './colors.js'
import { createDebug } from './debug.js'
import { error, info } from './figures.js'
import { Signal } from './getAbortController.js'
import { killSubProcesses } from './killSubprocesses.js'
import { getInitialState } from './state.js'
import { TaskError } from './symbols.js'

const debugLog = createDebug('lint-staged:getSpawnedTask')

/**
 * Handle task console output.
 *
 * @param {string} command
 * @param {string} output
 * @param {ReturnType<typeof getInitialState>} ctx context
 * @param {keyof typeof Signal | undefined} signal
 * @param {import('tinyexec').Result} [errorResult]
 */
const handleTaskOutput = (command, output, ctx, signal, errorResult) => {
  if (output) {
    const outputTitle = errorResult ? red(`${error} ${command}:`) : `${info} ${command}:`
    ctx.output.push([...(ctx.quiet ? [] : ['', outputTitle]), output].join('\n'))
    return
  }

  if (ctx.quiet) {
    return
  }

  if (signal === 'SIGINT') {
    ctx.output.push(red(`\n${error} Task interrupted: ${command}`))
  } else if (signal === 'SIGKILL') {
    ctx.output.push(red(`\n${error} Task killed: ${command}`))
  } else if (errorResult) {
    ctx.output.push(red(`\n${error} Task failed to spawn: ${command}`), signal)
  }
}

/**
 * Create a error output depending on process result.
 *
 * @param {string} command
 * @param {import('tinyexec').Result} result
 * @param {ReturnType<typeof getInitialState>} ctx context
 * @param {keyof typeof Signal | undefined} signal
 * @returns {Error}
 */
export const createTaskError = (command, result, ctx, signal = 'FAILED') => {
  ctx.errors.add(TaskError)
  return new Error(`${red(command)} ${blackBright(`[${signal}]`)}`, { cause: result })
}

/**
 * Returns the task function for the linter.
 *
 * @param {Object} options
 * @param {AbortController} options.abortController
 * @param {boolean} [options.color]
 * @param {string} options.command — Linter task
 * @param {string} [options.continueOnError]
 * @param {string} [options.cwd]
 * @param {String} options.topLevelDir - Current git repo top-level path
 * @param {Boolean} options.isFn - Whether the linter task is a function
 * @param {string[]} options.files — Filepaths to run the linter task against
 * @param {Boolean} [options.verbose] — Always show task verbose
 * @returns {() => Promise<Array<string>>}
 */
export const getSpawnedTask = ({
  abortController,
  color,
  command,
  continueOnError = false,
  cwd = process.cwd(),
  files,
  topLevelDir,
  isFn,
  verbose = false,
}) => {
  const [cmd, ...args] = parseArgsStringToArgv(command)
  debugLog('cmd:', cmd)
  debugLog('args:', args)

  /** @type {import('tinyexec').Options}*/
  const tinyExecOptions = {
    nodeOptions: {
      // Only use topLevelDir as CWD if we are using the git binary
      // e.g `npm` should run tasks in the actual CWD
      cwd: /^git(\.exe)?/i.test(cmd) ? topLevelDir : cwd,
      env: color ? { FORCE_COLOR: 'true' } : { NO_COLOR: 'true' },
      stdio: ['ignore'],
    },
  }

  debugLog('Tinyexec options:', tinyExecOptions)

  /** @param {ReturnType<typeof getInitialState>} ctx context */
  return async (ctx = getInitialState()) => {
    const result = exec(cmd, isFn ? args : args.concat(files), tinyExecOptions)

    const taskFailed = () => result.exitCode > 0 || result.process?.signalCode

    /** @type {keyof typeof Signal | undefined} */
    let signal

    abortController.signal.addEventListener(
      'abort',
      async () => {
        if (taskFailed() || !result.process) return

        signal = abortController.signal.reason
        const pid = result.process.pid
        result.process.kill(abortController.signal.reason)
        await killSubProcesses(pid)
      },
      { once: true }
    )

    let output = ''
    try {
      for await (const line of result) {
        output += line + '\n'
      }
    } catch (error) {
      /** Probably failed to spawn (ENOENT) */
      const errorSignal = (error instanceof Error && error.code) || 'FAILED'

      if (continueOnError !== true) {
        /** Other tasks should be killed */
        abortController.abort(Signal.SIGKILL)
      }

      handleTaskOutput(command, output, ctx, errorSignal, result)
      throw createTaskError(command, result, ctx, errorSignal)
    }

    output = output.trimEnd()

    if (taskFailed()) {
      if (continueOnError !== true) {
        /** Other tasks should be killed */
        abortController.abort(Signal.SIGKILL)
      }

      if (result.process?.pid) {
        await killSubProcesses(result.process.pid)
      }

      handleTaskOutput(command, output, ctx, signal, result)
      throw createTaskError(command, result, ctx, result.process?.signalCode ?? signal)
    }

    if (verbose) {
      handleTaskOutput(command, output, ctx, signal)
    }
  }
}
