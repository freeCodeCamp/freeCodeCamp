import { inspect } from 'util';

export function format(x) {
  // we're trying to mimic console.log, so we avoid wrapping strings in quotes:
  if (typeof x === 'string') return x;
  return inspect(x);
}
