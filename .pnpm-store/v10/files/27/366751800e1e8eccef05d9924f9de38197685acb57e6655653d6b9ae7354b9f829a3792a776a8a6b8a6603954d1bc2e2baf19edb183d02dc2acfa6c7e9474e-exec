// @flow
const getGlob = () => {
  if (
    typeof window !== 'undefined' &&
    window.setImmediate &&
    window.setTimeout &&
    window.setTimeout.apply
  ) {
    return window;
  }
  return global;
};

const setImmediate = (glob =>
  glob.setImmediate || ((fn, ...args) => glob.setTimeout(fn, 0, ...args)))(
  getGlob(),
);

export function schedule(fn: Function, args?: any[] = []): Promise<any> {
  return new Promise(resolve => {
    setImmediate(() => {
      const result = fn(...args);
      resolve(result);
    });
  });
}

export function delay(time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
