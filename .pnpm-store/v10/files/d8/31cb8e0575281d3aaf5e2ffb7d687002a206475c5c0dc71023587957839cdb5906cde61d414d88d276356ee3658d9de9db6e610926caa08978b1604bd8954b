// Fast method for counting an object's keys
// without resorting to `Object.keys(obj).length
// Will this make a big difference in perf? Probably not
// But we can save a few allocations.

export function countObjectKeys(obj: Record<any, any>) {
  let count = 0

  for (const _key in obj) {
    count++
  }

  return count
}
