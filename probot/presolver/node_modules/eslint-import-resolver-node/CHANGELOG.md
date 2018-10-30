# Change Log
All notable changes to this resolver will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## v0.2.3 - 2016-08-20
### Added
- debug logging (use `DEBUG=eslint-plugin-import:resolver:node eslint [...]`)

## v0.2.2 - 2016-07-14
### Fixed
- Node resolver no longer declares the import plugin as a `peerDependency`. See [#437]
  for a well-articulated and thoughtful expression of why this doesn't make sense.
  Thanks [@jasonkarns] for the issue and the PR to fix it ([#438]).

  Also, apologies to the others who expressed this before, but I never understood
  what the problem was.😅

## v0.2.1
### Fixed
- find files with `.json` extensions (#333, thanks for noticing @jfmengels)

[#438]: https://github.com/benmosher/eslint-plugin-import/pull/438

[#437]: https://github.com/benmosher/eslint-plugin-import/issues/437

[@jasonkarns]: https://github.com/jasonkarns
