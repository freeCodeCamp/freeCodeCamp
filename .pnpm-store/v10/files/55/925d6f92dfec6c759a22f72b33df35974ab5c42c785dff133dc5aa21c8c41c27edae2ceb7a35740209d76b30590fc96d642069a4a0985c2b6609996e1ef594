# Change Log

All notable changes to this project will be documented in this file.

## [4.0.1]

### Changed

- Fix advisory GHSA-869p-cjfg-cm3x: createSign and createVerify now require
  that a non empty secret is provided (via opts.secret, opts.privateKey or opts.key)
  when using HMAC algorithms.
- Upgrading JWA version to 2.0.1, adressing a compatibility issue for Node >= 25.

## [3.2.3]

### Changed

- Fix advisory GHSA-869p-cjfg-cm3x: createSign and createVerify now require
  that a non empty secret is provided (via opts.secret, opts.privateKey or opts.key)
  when using HMAC algorithms.
- Upgrading JWA version to 1.4.2, adressing a compatibility issue for Node >= 25.

## [3.0.0]

### Changed

- **BREAKING**: `jwt.verify` now requires an `algorithm` parameter, and
  `jws.createVerify` requires an `algorithm` option. The `"alg"` field
  signature headers is ignored. This mitigates a critical security flaw
  in the library which would allow an attacker to generate signatures with
  arbitrary contents that would be accepted by `jwt.verify`. See
  https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
  for details.

## [2.0.0] - 2015-01-30

### Changed

- **BREAKING**: Default payload encoding changed from `binary` to
  `utf8`. `utf8` is a is a more sensible default than `binary` because
  many payloads, as far as I can tell, will contain user-facing
  strings that could be in any language. (<code>[6b6de48]</code>)

- Code reorganization, thanks [@fearphage]! (<code>[7880050]</code>)

### Added

- Option in all relevant methods for `encoding`. For those few users
  that might be depending on a `binary` encoding of the messages, this
  is for them. (<code>[6b6de48]</code>)

[unreleased]: https://github.com/brianloveswords/node-jws/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/brianloveswords/node-jws/compare/v1.0.1...v2.0.0
[7880050]: https://github.com/brianloveswords/node-jws/commit/7880050
[6b6de48]: https://github.com/brianloveswords/node-jws/commit/6b6de48
[@fearphage]: https://github.com/fearphage
