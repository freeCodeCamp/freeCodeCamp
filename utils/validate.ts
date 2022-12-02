interface ErrorInterface {
  valid: boolean;
  error: null | string;
}

export const invalidCharError: ErrorInterface = {
  valid: false,
  error: 'contains invalid characters'
};
export const validationSuccess = { valid: true, error: null };
export const usernameTooShort = { valid: false, error: 'is too short' };
export const usernameIsHttpStatusCode = {
  valid: false,
  error: 'is a reserved error code'
};

export const isNumeric = (num: string | number) => !isNaN(num);
const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
export const isHttpStatusCode = (str: string) =>
  isNumeric(str) && parseInt(str, 10) >= 100 && parseInt(str, 10) <= 599;

export const isValidUsername = (str: string) => {
  if (!validCharsRE.test(str)) return invalidCharError;
  if (str.length < 3) return usernameTooShort;
  if (isHttpStatusCode(str)) return usernameIsHttpStatusCode;
  return validationSuccess;
};
