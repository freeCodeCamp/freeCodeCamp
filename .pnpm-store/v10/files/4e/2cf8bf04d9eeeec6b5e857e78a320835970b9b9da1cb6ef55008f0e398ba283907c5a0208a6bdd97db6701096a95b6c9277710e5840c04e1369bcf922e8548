export const assertFunction: (
  func: unknown,
  expected: string,
) => asserts func is (...args: unknown[]) => unknown = (
  func: unknown,
  expected: string,
) => {
  if (typeof func !== 'function') {
    throw new TypeError(`${expected} is not a function`)
  }
}

export const noop = () => {}

export const catchRejection = <T>(
  promise: Promise<T>,
  onError = noop,
): Promise<T> => {
  promise.catch(onError)

  return promise
}

export const addAbortSignalListener = (
  abortSignal: AbortSignal,
  callback: (evt: Event) => void,
) => {
  abortSignal.addEventListener('abort', callback, { once: true })
  return () => abortSignal.removeEventListener('abort', callback)
}
