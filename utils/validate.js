const invalidCharError = {
  valid: false,
  error: 'contains invalid characters'
};
const validationSuccess = { valid: true, error: null };
const usernameTooShort = { valid: false, error: 'is too short' };
const usernameIsHttpStatusCode = {
  valid: false,
  error: 'is a reserved error code'
};

const isNumeric = num => !isNaN(num);
const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
const isHttpStatusCode = str =>
  isNumeric(str) && parseInt(str, 10) >= 100 && parseInt(str, 10) <= 599;

const isValidUsername = str => {
  if (!validCharsRE.test(str)) return invalidCharError;
  if (str.length < 3) return usernameTooShort;
  if (isHttpStatusCode(str)) return usernameIsHttpStatusCode;
  return validationSuccess;
};

module.exports = {
  isNumeric,
  isHttpStatusCode,
  isValidUsername,
  validationSuccess,
  usernameTooShort,
  usernameIsHttpStatusCode,
  invalidCharError
};
