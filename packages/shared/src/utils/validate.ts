type Valid = {
  valid: true;
  error: null;
};

type Invalid = {
  valid: false;
  error: string;
};

type Validated = Valid | Invalid;

export const invalidCharError: Invalid = {
  valid: false,
  error: 'contains invalid characters'
};
export const validationSuccess: Valid = { valid: true, error: null };
export const usernameTooShort: Invalid = {
  valid: false,
  error: 'is too short'
};
export const usernameIsHttpStatusCode: Invalid = {
  valid: false,
  error: 'is a reserved error code'
};

const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
// The whole string has to be a status code. parseInt would stop at the first
// non-digit, making '500px' look like the status code 500.
const httpStatusCodeRE = /^[1-5][0-9]{2}$/;
export const isHttpStatusCode = (str: string): boolean =>
  httpStatusCodeRE.test(str);

export const isValidUsername = (str: string): Validated => {
  if (!validCharsRE.test(str)) return invalidCharError;
  if (str.length < 3) return usernameTooShort;
  if (isHttpStatusCode(str)) return usernameIsHttpStatusCode;
  return validationSuccess;
};

// link template:
// https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID
export const isMicrosoftTranscriptLink = (value: string): boolean => {
  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const correctDomain = url.hostname === 'learn.microsoft.com';
  const correctPath = !!url.pathname.match(
    /^\/[^/]+\/users\/[^/]+\/transcript\/[^/]+$/
  );
  const notPlaceholder = !url.pathname.match(
    '/LOCALE/users/USERNAME/transcript/ID'
  );
  return correctDomain && correctPath && notPlaceholder;
};
