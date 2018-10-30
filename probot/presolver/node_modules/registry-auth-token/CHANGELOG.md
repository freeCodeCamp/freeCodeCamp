# Change Log

All notable changes will be documented in this file.

## [3.3.2] - 2018-01-26

### Changes

- Support password with ENV variable tokens (Nowell Strite)

## [3.3.1] - 2017-05-02

### Fixes

- Auth legacy token is basic auth (Hutson Betts)

## [3.3.0] - 2017-04-24

### Changes

- Support legacy auth token config key (Zoltan Kochan)
- Use safe-buffer module for backwards-compatible base64 encoding/decoding (Espen Hovlandsdal)
- Change to standard.js coding style (Espen Hovlandsdal)

## [3.2.0] - 2017-04-20

### Changes

- Allow passing parsed npmrc from outside (Zoltan Kochan)

## [3.1.2] - 2017-04-07

### Changes

- Avoid infinite loop on invalid URL (Zoltan Kochan)

## [3.1.1] - 2017-04-06

### Changes

- Nerf-dart URLs even if recursive is set to false (Espen Hovlandsdal)

## [3.1.0] - 2016-10-19

### Changes

- Return the password and username for Basic authorization (Zoltan Kochan)

## [3.0.1] - 2016-08-07

### Changes

- Fix recursion bug (Lukas Eipert)
- Implement alternative base64 encoding/decoding implementation for Node 6 (Lukas Eipert)

## [3.0.0] - 2016-08-04

### Added

- Support for Basic Authentication (username/password) (Lukas Eipert)

### Changes

- The result format of the output changed from a simple string to an object which contains the token type

```js
  // before: returns 'tokenString'
  // after: returns {token: 'tokenString', type: 'Bearer'}
  getAuthToken()
```

## [2.1.1] - 2016-07-10

### Changes

- Fix infinite loop when recursively resolving registry URLs on Windows (Espen Hovlandsdal)

## [2.1.0] - 2016-07-07

### Added

- Add feature to find configured registry URL for a scope (Espen Hovlandsdal)

## [2.0.0] - 2016-06-17

### Changes

- Fix tokens defined by reference to environment variables (Dan MacTough)

## [1.1.1] - 2016-04-26

### Changes

- Fix for registries with port number in URL (Ryan Day)

[1.1.1]: https://github.com/rexxars/registry-auth-token/compare/a5b4fe2f5ff982110eb8a813ba1b3b3c5d851af1...v1.1.1
[2.0.0]: https://github.com/rexxars/registry-auth-token/compare/v1.1.1...v2.0.0
[2.1.0]: https://github.com/rexxars/registry-auth-token/compare/v2.0.0...v2.1.0
[2.1.1]: https://github.com/rexxars/registry-auth-token/compare/v2.1.0...v2.1.1
[3.0.0]: https://github.com/rexxars/registry-auth-token/compare/v2.1.1...v3.0.0
[3.0.1]: https://github.com/rexxars/registry-auth-token/compare/v3.0.0...v3.0.1
[3.1.0]: https://github.com/rexxars/registry-auth-token/compare/v3.0.1...v3.1.0
[3.1.1]: https://github.com/rexxars/registry-auth-token/compare/v3.1.0...v3.1.1
[3.1.2]: https://github.com/rexxars/registry-auth-token/compare/v3.1.1...v3.1.2
[3.2.0]: https://github.com/rexxars/registry-auth-token/compare/v3.1.2...v3.2.0
[3.3.0]: https://github.com/rexxars/registry-auth-token/compare/v3.2.0...v3.3.0
