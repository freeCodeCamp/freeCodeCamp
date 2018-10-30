## History

### key

Changelog entries are classified using the following labels _(from [keep-a-changelog][]_):

- `added`: for new features
- `changed`: for changes in existing functionality
- `deprecated`: for once-stable features removed in upcoming releases
- `removed`: for deprecated features removed in this release
- `fixed`: for any bug fixes
- `bumped`: updated dependencies, only minor or higher will be listed.

### [1.1.0] - 2017-04-11

**Fixed**

- adds support for unclosed quotes

**Added**

- adds support for `options.noglobstar`

### [1.0.4] - 2017-04-06

Housekeeping updates. Adds documentation section about escaping, cleans up utils.

### [1.0.3] - 2017-04-06

This release includes fixes for windows path edge cases and other improvements for stricter adherence to bash spec. 

**Fixed**

- More windows path edge cases

**Added**

- Support for bash-like quoted strings for escaping sequences of characters, such as `foo/"**"/bar` where `**` should be matched literally and not evaluated as special characters.

### [1.0.1] - 2016-12-12

**Added**

- Support for windows path edge cases where backslashes are used in brackets or other unusual combinations.

### [1.0.0] - 2016-12-12

Stable release.

### [0.1.0] - 2016-10-08

First release.

[Unreleased]: https://github.com/jonschlinkert/nanomatch/compare/0.1.0...HEAD
[0.2.0]: https://github.com/jonschlinkert/nanomatch/compare/0.1.0...0.2.0

[keep-a-changelog]: https://github.com/olivierlacan/keep-a-changelog
