# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.1.2"></a>
## [4.1.2](https://github.com/moxystudio/node-proper-lockfile/compare/v4.1.1...v4.1.2) (2021-01-25)


### Bug Fixes

* fix node 14 updating graceful-fs ([#102](https://github.com/moxystudio/node-proper-lockfile/issues/102)) ([b0d988e](https://github.com/moxystudio/node-proper-lockfile/commit/b0d988e))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/moxystudio/node-proper-lockfile/compare/v4.1.0...v4.1.1) (2019-04-03)


### Bug Fixes

* fix mtime precision on some filesystems ([#88](https://github.com/moxystudio/node-proper-lockfile/issues/88)) ([f266158](https://github.com/moxystudio/node-proper-lockfile/commit/f266158)), closes [#82](https://github.com/moxystudio/node-proper-lockfile/issues/82) [#87](https://github.com/moxystudio/node-proper-lockfile/issues/87)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/moxystudio/node-proper-lockfile/compare/v4.0.0...v4.1.0) (2019-03-18)


### Features

* allow second precision in mtime comparison ([#78](https://github.com/moxystudio/node-proper-lockfile/issues/78)) ([b2816a6](https://github.com/moxystudio/node-proper-lockfile/commit/b2816a6))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/moxystudio/node-proper-lockfile/compare/v3.2.0...v4.0.0) (2019-03-12)


### Bug Fixes

* fix typo in error message ([#68](https://github.com/moxystudio/node-proper-lockfile/issues/68)) ([b91cb55](https://github.com/moxystudio/node-proper-lockfile/commit/b91cb55))


### Features

* make staleness check more robust ([#74](https://github.com/moxystudio/node-proper-lockfile/issues/74)) ([9cc0973](https://github.com/moxystudio/node-proper-lockfile/commit/9cc0973)), closes [#71](https://github.com/moxystudio/node-proper-lockfile/issues/71) [/github.com/ipfs/js-ipfs-repo/issues/188#issuecomment-468682971](https://github.com//github.com/ipfs/js-ipfs-repo/issues/188/issues/issuecomment-468682971)


### BREAKING CHANGES

* We were marking the lock as compromised when system went into sleep or if the event loop was busy taking too long to run the internals timers, Now we keep track of the mtime updated by the current process, and if we lose some cycles in the update process but recover and the mtime is still ours we do not mark the lock as compromised.



<a name="3.2.0"></a>
# [3.2.0](https://github.com/moxystudio/node-proper-lockfile/compare/v3.1.0...v3.2.0) (2018-11-19)


### Features

* add lock path option ([#66](https://github.com/moxystudio/node-proper-lockfile/issues/66)) ([32f1b8d](https://github.com/moxystudio/node-proper-lockfile/commit/32f1b8d))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/moxystudio/node-proper-lockfile/compare/v3.0.2...v3.1.0) (2018-11-15)


### Bug Fixes

* **package:** update retry to version 0.12.0 ([#50](https://github.com/moxystudio/node-proper-lockfile/issues/50)) ([d400b98](https://github.com/moxystudio/node-proper-lockfile/commit/d400b98))


### Features

* add signal exit ([#65](https://github.com/moxystudio/node-proper-lockfile/issues/65)) ([f20bc45](https://github.com/moxystudio/node-proper-lockfile/commit/f20bc45))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/moxystudio/node-proper-lockfile/compare/v3.0.1...v3.0.2) (2018-01-30)



<a name="3.0.1"></a>
## [3.0.1](https://github.com/moxystudio/node-proper-lockfile/compare/v3.0.0...v3.0.1) (2018-01-20)


### Bug Fixes

* restore ability to use lockfile() directly ([0ef8fbc](https://github.com/moxystudio/node-proper-lockfile/commit/0ef8fbc))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/moxystudio/node-proper-lockfile/compare/v2.0.1...v3.0.0) (2018-01-20)


### Chores

* update project to latest node lts ([b1d43e5](https://github.com/moxystudio/node-proper-lockfile/commit/b1d43e5))


### BREAKING CHANGES

* remove callback support
* use of node lts language features such as object spread
* compromised function in lock() has been moved to an option
