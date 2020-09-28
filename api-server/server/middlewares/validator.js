import validator from 'express-validator';
import { isPoly } from '../../../utils/polyvinyl';

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
        return (
          !!keys.length &&
          // every key is a file
          keys.every(key => isObject(value[key])) &&
          // every file has contents
          keys.map(key => value[key]).every(file => isPoly(file))
        );
      }
    },
    customSanitizers: {
      // Refer : http://stackoverflow.com/a/430240/1932901
      trimTags(value) {
        const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        const tagOrComment = new RegExp(
          '<(?:' +
            // Comment body.
            '!--(?:(?:-*[^->])*--+|-?)' +
            // Special "raw text" elements whose content should be elided.
            '|script\\b' +
            tagBody +
            '>[\\s\\S]*?</script\\s*' +
            '|style\\b' +
            tagBody +
            '>[\\s\\S]*?</style\\s*' +
            // Regular name
            '|/?[a-z]' +
            tagBody +
            ')>',
          'gi'
        );
        let rawValue;
        do {
          rawValue = value;
          value = value.replace(tagOrComment, '');
        } while (value !== rawValue);

        return value.replace(/</g, '&lt;');
      }
    }
  });
}
