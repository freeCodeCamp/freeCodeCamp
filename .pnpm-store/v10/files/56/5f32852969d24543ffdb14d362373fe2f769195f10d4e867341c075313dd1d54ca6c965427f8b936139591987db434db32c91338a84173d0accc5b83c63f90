import { Packr } from './pack.js'
import { Unpackr } from './unpack.js'

/**
 * Given an Iterable first argument, returns an Iterable where each value is packed as a Buffer
 * If the argument is only Async Iterable, the return value will be an Async Iterable.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterator} objectIterator - iterable source, like a Readable object stream, an array, Set, or custom object
 * @param {options} [options] - msgpackr pack options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator>}
 */
export function packIter (objectIterator, options = {}) {
  if (!objectIterator || typeof objectIterator !== 'object') {
    throw new Error('first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable')
  } else if (typeof objectIterator[Symbol.iterator] === 'function') {
    return packIterSync(objectIterator, options)
  } else if (typeof objectIterator.then === 'function' || typeof objectIterator[Symbol.asyncIterator] === 'function') {
    return packIterAsync(objectIterator, options)
  } else {
    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise')
  }
}

function * packIterSync (objectIterator, options) {
  const packr = new Packr(options)
  for (const value of objectIterator) {
    yield packr.pack(value)
  }
}

async function * packIterAsync (objectIterator, options) {
  const packr = new Packr(options)
  for await (const value of objectIterator) {
    yield packr.pack(value)
  }
}

/**
 * Given an Iterable/Iterator input which yields buffers, returns an IterableIterator which yields sync decoded objects
 * Or, given an Async Iterable/Iterator which yields promises resolving in buffers, returns an AsyncIterableIterator.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterableIterator} bufferIterator
 * @param {object} [options] - unpackr options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator}
 */
export function unpackIter (bufferIterator, options = {}) {
  if (!bufferIterator || typeof bufferIterator !== 'object') {
    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise')
  }

  const unpackr = new Unpackr(options)
  let incomplete
  const parser = (chunk) => {
    let yields
    // if there's incomplete data from previous chunk, concatinate and try again
    if (incomplete) {
      chunk = Buffer.concat([incomplete, chunk])
      incomplete = undefined
    }

    try {
      yields = unpackr.unpackMultiple(chunk)
    } catch (err) {
      if (err.incomplete) {
        incomplete = chunk.slice(err.lastPosition)
        yields = err.values
      } else {
        throw err
      }
    }
    return yields
  }

  if (typeof bufferIterator[Symbol.iterator] === 'function') {
    return (function * iter () {
      for (const value of bufferIterator) {
        yield * parser(value)
      }
    })()
  } else if (typeof bufferIterator[Symbol.asyncIterator] === 'function') {
    return (async function * iter () {
      for await (const value of bufferIterator) {
        yield * parser(value)
      }
    })()
  }
}
export const decodeIter = unpackIter
export const encodeIter = packIter