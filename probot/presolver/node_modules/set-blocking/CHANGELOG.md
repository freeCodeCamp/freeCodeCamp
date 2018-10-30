# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/yargs/set-blocking/compare/v1.0.0...v2.0.0) (2016-05-17)


### Features

* add an isTTY check ([#3](https://github.com/yargs/set-blocking/issues/3)) ([66ce277](https://github.com/yargs/set-blocking/commit/66ce277))


### BREAKING CHANGES

* stdio/stderr will not be set to blocking if isTTY === false



<a name="1.0.0"></a>
# 1.0.0 (2016-05-14)


### Features

* implemented shim for stream._handle.setBlocking ([6bde0c0](https://github.com/yargs/set-blocking/commit/6bde0c0))
