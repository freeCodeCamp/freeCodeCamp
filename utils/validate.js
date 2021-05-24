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
const usernameUpperCase = { valid: false, error: 'must be lowercase' };

const isNumeric = num => !isNaN(num);
const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
const isHttpStatusCode = str =>
  isNumeric(str) && parseInt(str, 10) >= 100 && parseInt(str, 10) <= 599;
const isUsernameLowercase = str => {
  return str === str.toLowerCase();
};
const isValidUsername = str => {
  if (!validCharsRE.test(str)) return invalidCharError;
  if (str.length < 3) return usernameTooShort;
  if (isHttpStatusCode(str)) return usernameIsHttpStatusCode;
  if (!isUsernameLowercase(str)) return usernameUpperCase;
  return validationSuccess;
};

module.exports = {
  isNumeric,
  isHttpStatusCode,
  isValidUsername,
  isUsernameLowercase,
  validationSuccess,
  usernameTooShort,
  usernameIsHttpStatusCode,
  invalidCharError,
  usernameUpperCase
};
