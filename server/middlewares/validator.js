import validator from 'express-validator';
import { isPoly } from '../../common/utils/polyvinyl';

const isObject = val => !!val && typeof val === 'object';

export default function() {
  return validator({
    customValidators: {
      matchRegex(param, regex) {
        return regex.test(param);
      },
      isString(value) {
        return typeof value === 'string';
      },
      isNumber(value) {
        return typeof value === 'number';
      },
      isFiles(value) {
        if (!isObject(value)) {
          return false;
        }
        const keys = Object.keys(value);
        return !!keys.length &&
          // every key is a file
          keys.every(key => isObject(value[key])) &&
          // every file has contents
          keys.map(key => value[key]).every(file => isPoly(file));
      }
    }
  });
}
