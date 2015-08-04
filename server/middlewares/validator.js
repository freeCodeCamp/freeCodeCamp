import validator from 'express-validator';

export default validator.bind(validator, {
  customValidators: {
    matchRegex: function matchRegex(param, regex) {
      return regex.test(param);
    }
  }
});
