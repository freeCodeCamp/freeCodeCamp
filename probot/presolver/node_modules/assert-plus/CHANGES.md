# assert-plus Changelog

## 1.0.0

- *BREAKING* assert.number (and derivatives) now accept Infinity as valid input
- Add assert.finite check.  Previous assert.number callers should use this if
  they expect Infinity inputs to throw.

## 0.2.0

- Fix `assert.object(null)` so it throws
- Fix optional/arrayOf exports for non-type-of asserts
- Add optiona/arrayOf exports for Stream/Date/Regex/uuid
- Add basic unit test coverage
