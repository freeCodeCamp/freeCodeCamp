export function insertInto<T>(arr: T[], index: number, elem: T): T[] {
  if (index >= arr.length) return [...arr, elem];
  if (index <= 0) return [elem, ...arr];

  return arr.flatMap((x, id) => {
    return id === index ? [elem, x] : x;
  });
}

// fs Promise functions return errors, but no stack trace.  This adds back in
// the stack trace.
export function withTrace<Args extends unknown[], Result>(
  fn: (...x: Args) => Promise<Result>,
  ...args: Args
): Promise<Result> {
  return fn(...args).catch((reason: Error) => {
    throw Error(reason.message);
  });
}
