const validCharsRE = /^[a-zA-Z0-9\-_+]+$/;
const invalidCharError = {
  valid: false,
  error: 'contains invalid characters'
};
const validationSuccess = { valid: true, error: null };
const usernameTooShort = { valid: false, error: 'is too short' };

exports.validate = str => {
  if (str.length < 3) return usernameTooShort;
  if (!validCharsRE.test(str)) return invalidCharError;
  return validationSuccess;
};
