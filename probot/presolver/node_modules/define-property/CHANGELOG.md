# Release history

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<details>
  <summary><strong>Guiding Principles</strong></summary>

- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each versions is displayed.
- Mention whether you follow Semantic Versioning.

</details>

<details>
  <summary><strong>Types of changes</strong></summary>

Changelog entries are classified using the following labels _(from [keep-a-changelog](http://keepachangelog.com/)_):

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

</details>

## [2.0.0] - 2017-04-20

### Changed

- Now supports data descriptors in addition to accessor descriptors.
- Now uses [Reflect.defineProperty][reflect] when available, otherwise falls back to [Object.defineProperty][object]. 

## [1.0.0] - 2017-04-20

- stable release

## [0.2.5] - 2015-08-31

- use is-descriptor

## [0.2.3] - 2015-08-29

- check keys length

## [0.2.2] - 2015-08-27

- ensure val is an object

## [0.2.1] - 2015-08-27

- support functions

## [0.2.0] - 2015-08-27

- support get/set
- update docs

## [0.1.0] - 2015-08-12

- first commit

[2.0.0]: https://github.com/jonschlinkert/define-property/compare/1.0.0...2.0.0
[1.0.0]: https://github.com/jonschlinkert/define-property/compare/0.2.5...1.0.0
[0.2.5]: https://github.com/jonschlinkert/define-property/compare/0.2.3...0.2.5
[0.2.3]: https://github.com/jonschlinkert/define-property/compare/0.2.2...0.2.3
[0.2.2]: https://github.com/jonschlinkert/define-property/compare/0.2.1...0.2.2
[0.2.1]: https://github.com/jonschlinkert/define-property/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/jonschlinkert/define-property/compare/0.1.3...0.2.0

[keep-a-changelog]: https://github.com/olivierlacan/keep-a-changelog

[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[reflect]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
