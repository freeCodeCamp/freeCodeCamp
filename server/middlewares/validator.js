import validator from 'express-validator';

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
      }
    }
  });
}
