const objectKeys =
  Object.keys ||
  function (obj) {
    const keys = [];
    for (const key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) keys.push(key);
    }
    return keys;
  };

export default function assign<T extends object, K extends keyof T>(
  obj: T,
  newKey: K,
  newValue: T[K],
): T {
  const keys = objectKeys(obj);
  const copy: T = {} as T;

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    copy[key as keyof T] = obj[key as keyof T];
  }

  copy[newKey] = newValue;
  return copy;
}
