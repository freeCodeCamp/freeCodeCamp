/**
 * What is the default action for this signal when it is not handled.
 */
export type SignalAction = 'terminate' | 'core' | 'ignore' | 'pause' | 'unpause'

/**
 * Which standard defined that signal.
 */
export type SignalStandard = 'ansi' | 'posix' | 'bsd' | 'systemv' | 'other'

/**
 * Standard name of the signal, for example 'SIGINT'.
 */
export type SignalName = `SIG${string}`

/**
 * Code number of the signal, for example 2.
 * While most number are cross-platform, some are different between different
 * OS.
 */
export type SignalNumber = number

export interface Signal {
  /**
   * Standard name of the signal, for example 'SIGINT'.
   */
  name: SignalName

  /**
   * Code number of the signal, for example 2.
   * While most number are cross-platform, some are different between different
   * OS.
   */
  number: SignalNumber

  /**
   * Human-friendly description for the signal, for example
   * 'User interruption with CTRL-C'.
   */
  description: string

  /**
   * Whether the current OS can handle this signal in Node.js using
   * `process.on(name, handler)`. The list of supported signals is OS-specific.
   */
  supported: boolean

  /**
   * What is the default action for this signal when it is not handled.
   */
  action: SignalAction

  /**
   * Whether the signal's default action cannot be prevented.
   * This is true for SIGTERM, SIGKILL and SIGSTOP.
   */
  forced: boolean

  /**
   * Which standard defined that signal.
   */
  standard: SignalStandard
}

/**
 * Object whose keys are signal names and values are signal objects.
 */
export declare const signalsByName: { [signalName: SignalName]: Signal }

/**
 * Object whose keys are signal numbers and values are signal objects.
 */
export declare const signalsByNumber: { [signalNumber: SignalNumber]: Signal }
