import {isUnknownObject} from './guards';
import {isEqual} from './isEqual';

export type UnknownOptions = {[k: string]: unknown};

export const extractAllowedOptionsUpdates = (
  options: unknown | void,
  prevOptions: unknown | void,
  immutableKeys: string[]
): UnknownOptions | null => {
  if (!isUnknownObject(options)) {
    return null;
  }

  return Object.keys(options).reduce(
    (newOptions: null | UnknownOptions, key) => {
      const isUpdated =
        !isUnknownObject(prevOptions) ||
        !isEqual(options[key], prevOptions[key]);

      if (immutableKeys.includes(key)) {
        if (isUpdated) {
          console.warn(
            `Unsupported prop change: options.${key} is not a mutable property.`
          );
        }

        return newOptions;
      }

      if (!isUpdated) {
        return newOptions;
      }

      return {...(newOptions || {}), [key]: options[key]};
    },
    null
  );
};
