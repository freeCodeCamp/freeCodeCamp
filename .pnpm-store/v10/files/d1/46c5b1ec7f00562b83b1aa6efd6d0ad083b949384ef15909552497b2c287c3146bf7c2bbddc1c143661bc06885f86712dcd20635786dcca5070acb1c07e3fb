// @flow strict-local

export default function debounce<TArgs: Array<mixed>>(
  fn: (...args: TArgs) => mixed,
  delay: number,
): (...args: TArgs) => void {
  let timeout;

  return function (...args: TArgs) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      fn(...args);
    }, delay);
  };
}
