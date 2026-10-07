'use strict'

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************

const isErrorLike = (err) => {
  return err && typeof err.message === 'string'
}

/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */
const getErrorCause = (err) => {
  if (!err) return

  /** @type {unknown} */
  // @ts-ignore
  const cause = err.cause

  // VError / NError style causes
  if (typeof cause === 'function') {
    // @ts-ignore
    const causeResult = err.cause()

    return isErrorLike(causeResult)
      ? causeResult
      : undefined
  } else {
    return isErrorLike(cause)
      ? cause
      : undefined
  }
}

/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */
const _stackWithCauses = (err, seen) => {
  if (!isErrorLike(err)) return ''

  const stack = err.stack || ''

  // Ensure we don't go circular or crazily deep
  if (seen.has(err)) {
    return stack + '\ncauses have become circular...'
  }

  const cause = getErrorCause(err)

  if (cause) {
    seen.add(err)
    return (stack + '\ncaused by: ' + _stackWithCauses(cause, seen))
  } else {
    return stack
  }
}

/**
 * @param {Error} err
 * @returns {string}
 */
const stackWithCauses = (err) => _stackWithCauses(err, new Set())

/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */
const _messageWithCauses = (err, seen, skip) => {
  if (!isErrorLike(err)) return ''

  const message = skip ? '' : (err.message || '')

  // Ensure we don't go circular or crazily deep
  if (seen.has(err)) {
    return message + ': ...'
  }

  const cause = getErrorCause(err)

  if (cause) {
    seen.add(err)

    // @ts-ignore
    const skipIfVErrorStyleCause = typeof err.cause === 'function'

    return (message +
      (skipIfVErrorStyleCause ? '' : ': ') +
      _messageWithCauses(cause, seen, skipIfVErrorStyleCause))
  } else {
    return message
  }
}

/**
 * @param {Error} err
 * @returns {string}
 */
const messageWithCauses = (err) => _messageWithCauses(err, new Set())

module.exports = {
  isErrorLike,
  getErrorCause,
  stackWithCauses,
  messageWithCauses
}
