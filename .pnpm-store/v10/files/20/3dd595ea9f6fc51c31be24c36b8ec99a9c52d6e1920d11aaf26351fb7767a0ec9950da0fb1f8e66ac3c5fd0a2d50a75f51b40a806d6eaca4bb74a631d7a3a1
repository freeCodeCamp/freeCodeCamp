import nodeTty from 'node:tty'

/**
 * @example NO_COLOR
 * @example NO_COLOR=1
 * @example NO_COLOR=true
 */
const TRUTHRY_ENV_VAR_VALUES = ['', '1', 'true']

/**
 * @example FORCE_COLOR=0
 * @example FORCE_COLOR=false
 */
const FALSY_ENV_VAR_VALUES = ['0', 'false']

/**
 * @returns `true` if ANSI colors are supported
 *
 * @param {NodeJS.Process} [p]
 * @param {boolean} [isTty]
 */
export const supportsAnsiColors = (p = process, isTty = nodeTty.isatty(1)) => {
  const noColor = p?.env?.NO_COLOR?.toLowerCase()
  if (TRUTHRY_ENV_VAR_VALUES.includes(noColor)) {
    return false
  }

  const forceColor = p?.env?.FORCE_COLOR?.toLowerCase()
  if (TRUTHRY_ENV_VAR_VALUES.includes(forceColor)) {
    return true
  } else if (FALSY_ENV_VAR_VALUES.includes(forceColor)) {
    return false
  }

  const forceTty = p?.env?.FORCE_TTY
  if (TRUTHRY_ENV_VAR_VALUES.includes(forceTty)) {
    return true
  } else if (FALSY_ENV_VAR_VALUES.includes(forceTty)) {
    return false
  }

  if (isTty) {
    return true
  }

  /**
   * Assume CI supports color
   * @see {@link https://github.com/alexeyraspopov/picocolors/blob/0e7c4af2de299dd7bc5916f2bddd151fa2f66740/picocolors.js#L4}
   * @see {@link https://github.com/tinylibs/tinyrainbow/blob/071034bf2eafa28d91ef0ba48a3837420d81a40a/src/index.ts#L91}
   */
  if (TRUTHRY_ENV_VAR_VALUES.includes(p?.env?.CI)) {
    return true
  }

  if (p?.env?.TERM && p.env.TERM === 'dumb') {
    return false
  }

  /**
   * Assume Windows supports color
   * @see {@link https://github.com/alexeyraspopov/picocolors/blob/0e7c4af2de299dd7bc5916f2bddd151fa2f66740/picocolors.js#L4}
   * @see {@link https://github.com/tinylibs/tinyrainbow/blob/071034bf2eafa28d91ef0ba48a3837420d81a40a/src/index.ts#L89}
   */
  if (p?.platform === 'win32') {
    return true
  }

  return false
}

/**
 * @deprecated replace this with Node.js builtin after minimum supported version is >=20.18.0
 * @example util.styleText('red', 'test') !== 'text'
 */
export const SUPPORTS_COLOR = supportsAnsiColors()

const ANSI_RESET = '\u001B[0m'

/**
 * @callback WrapAnsi
 * @param {string} text
 * @returns {string}
 */
/**
 * @deprecated replace this with Node.js builtin after minimum supported version is >=20.18.0
 * @example (format) => (text) => util.styleText(format, text)
 *
 * @param {string} code
 * @param {boolean} [supported]
 * @returns {WrapAnsi}
 *
 */
export const wrapAnsiColor = (code, supported = SUPPORTS_COLOR) => {
  if (supported) {
    return (text) => code + text + ANSI_RESET
  }

  return (text) => text
}

export const red = wrapAnsiColor('\u001B[0;31m')
export const green = wrapAnsiColor('\u001B[0;32m')
export const yellow = wrapAnsiColor('\u001B[0;33m')
export const blue = wrapAnsiColor('\u001B[0;34m')
export const blackBright = wrapAnsiColor('\u001B[0;90m')
export const bold = wrapAnsiColor('\u001b[1m')
