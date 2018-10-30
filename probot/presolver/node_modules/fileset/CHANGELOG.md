# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/mklabs/node-fileset/compare/v1.0.1...v2.0.2) (2016-06-27)



<a name="2.0.0"></a>
## [2.0.0](https://github.com/mklabs/node-fileset/compare/v1.0.1...v2.0.0) (2016-06-26)

<a name="1.0.1"></a>
## [1.0.1](https://github.com/mklabs/node-fileset/compare/v1.0.0...v1.0.1) (2016-06-01)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mklabs/node-fileset/compare/v0.2.1...v1.0.0) (2016-06-01)


### Bug Fixes

* update old tests to use mocha instead ([f4e0d8e](https://github.com/mklabs/node-fileset/commit/f4e0d8e))


### Features

* **sync:** always ignore node_modules in sync mode ([c6593c0](https://github.com/mklabs/node-fileset/commit/c6593c0))
* update glob 7 ([954bab5](https://github.com/mklabs/node-fileset/commit/954bab5))


### BREAKING CHANGES

* Includes an update to glob / minimatch. As described in
  378de99522caf7b665c53472a34a41a0b295b489

> Since glob 6 removes support for comment and negation patterns, this may
> or may not be a breaking change from fileset's pov.

## Changelog

- Releases: https://github.com/mklabs/node-fileset/releases

### 0.2.1

- Sync API

### 0.2.0

- Drop support for 0.8
- PR mklabs/node-fileset#14 reapplied
- [Minor code style changes](bf8afae22a49cf64720177d6036090db2852d744)

### 0.1.8

- PR mklabs/node-fileset#17 - Reverts PR#14

### 0.1.6 / 0.1.7

- PR mklabs/node-fileset#14

### 0.1.x

- Initial commit
