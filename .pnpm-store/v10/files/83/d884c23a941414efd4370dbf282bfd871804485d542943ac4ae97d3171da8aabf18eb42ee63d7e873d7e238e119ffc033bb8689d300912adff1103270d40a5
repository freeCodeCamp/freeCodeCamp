'use strict'

exports.waitForCb = function (options) {
  let count = null
  let done = false
  let iResolve
  let iReject

  function stepIn () {
    if (done) {
      iReject(new Error('Unexpected done call'))
      return
    }

    if (--count) {
      return
    }

    done = true
    iResolve()
  }

  const patience = new Promise((resolve, reject) => {
    iResolve = resolve
    iReject = reject
  })

  count = options.steps || 1
  done = false

  return { stepIn, patience }
}

exports.partialDeepStrictEqual = function partialDeepStrictEqual (actual, expected) {
  if (typeof expected !== 'object' || expected === null) {
    return actual === expected
  }

  if (typeof actual !== 'object' || actual === null) {
    return false
  }

  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return false
    if (expected.length > actual.length) return false

    for (let i = 0; i < expected.length; i++) {
      if (!partialDeepStrictEqual(actual[i], expected[i])) {
        return false
      }
    }
    return true
  }

  for (const key of Object.keys(expected)) {
    if (!(key in actual)) return false
    if (!partialDeepStrictEqual(actual[key], expected[key])) {
      return false
    }
  }

  return true
}
