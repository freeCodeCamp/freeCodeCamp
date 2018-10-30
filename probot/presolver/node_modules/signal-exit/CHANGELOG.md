# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.1"></a>
## [3.0.1](https://github.com/tapjs/signal-exit/compare/v3.0.0...v3.0.1) (2016-09-08)


### Bug Fixes

* do not listen on SIGBUS, SIGFPE, SIGSEGV and SIGILL ([#40](https://github.com/tapjs/signal-exit/issues/40)) ([5b105fb](https://github.com/tapjs/signal-exit/commit/5b105fb))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/tapjs/signal-exit/compare/v2.1.2...v3.0.0) (2016-06-13)


### Bug Fixes

* get our test suite running on Windows ([#23](https://github.com/tapjs/signal-exit/issues/23)) ([6f3eda8](https://github.com/tapjs/signal-exit/commit/6f3eda8))
* hooking SIGPROF was interfering with profilers see [#21](https://github.com/tapjs/signal-exit/issues/21) ([#24](https://github.com/tapjs/signal-exit/issues/24)) ([1248a4c](https://github.com/tapjs/signal-exit/commit/1248a4c))


### BREAKING CHANGES

* signal-exit no longer wires into SIGPROF
