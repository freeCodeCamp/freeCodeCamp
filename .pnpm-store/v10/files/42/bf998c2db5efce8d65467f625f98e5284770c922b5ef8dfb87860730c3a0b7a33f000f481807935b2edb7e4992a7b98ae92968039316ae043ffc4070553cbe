export function assert(
  condition: any,
  msg = 'Assertion failed!'
): asserts condition {
  if (!condition) {
    console.error(msg)
    throw new Error(msg)
  }
}
