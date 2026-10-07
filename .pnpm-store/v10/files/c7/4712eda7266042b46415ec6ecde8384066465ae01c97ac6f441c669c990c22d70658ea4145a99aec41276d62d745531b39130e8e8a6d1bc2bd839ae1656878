const fc = require('fast-check');

// Function under test
function isSubstring(pattern, text) {
  return text.indexOf(pattern) !== -1;
}

// Property based test
fc.assert(
  fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
    // For any a, b, c strings
    // b is a substring of a + b + c
    return isSubstring(b, a + b + c);
  }),
);
