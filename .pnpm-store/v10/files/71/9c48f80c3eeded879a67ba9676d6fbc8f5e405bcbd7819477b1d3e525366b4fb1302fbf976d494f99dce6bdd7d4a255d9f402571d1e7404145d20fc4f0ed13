# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.4.4] - 2025-07-22

### Changed
- Switch from yarn to npm for package management
- Switch from eslint to biome for code formatting and linting
- Reformat codebase to comply with biome recommendations
- Switch from webpack to rollup for bundling

### Fixed
- Fix module exports to ensure proper compatibility with bundlers
- Add validation check to prevent future export issues

## [4.4.3] - 2025-05-15

### Security
- Fix polynomial regular expression vulnerability on uncontrolled data
- Refactor code to enable GitHub security static analysis

### Performance
- Improve parsing performance with minor optimizations
- Replace regex patterns with string search (indexOf-based) for better performance

### Added
- Add new utility functions with comprehensive unit tests
- Add improved formatting for CSS Grid template areas (#283 by @jogibear9988)

### Fixed
- Fix TypeScript error with ConstructorParameters in Parcel bundler (#444)

## [4.4.2] - 2025-02-12

### Fixed
- Fix regular expression for parsing quoted values in parentheses

## [4.4.0] - 2024-06-05

### Added
- Add support for CSS `@starting-style` at-rule (#319)

## [4.3.3] - 2024-01-24

### Changed
- Update package export configuration (#271)

## [4.3.2] - 2023-11-28

### Security
- Fix ReDoS vulnerability with crafted CSS strings - CVE-2023-48631

### Fixed
- Fix parsing issues with `:is()` and nested `:nth-child()` selectors (#211)

## [4.3.1] - 2023-03-14

### Security
- Fix ReDoS vulnerability with crafted CSS strings - CVE-2023-26364

## [4.3.0] - 2023-03-07

### Changed
- Update build toolchain and dependencies
- Update package exports configuration and file structure

## [4.2.0] - 2023-02-21

### Added
- Add support for CSS `@container` at-rule
- Add support for CSS `@layer` at-rule

## [4.1.0] - 2023-01-25

### Added
- Add support for ES Modules (ESM)

## [4.0.2] - 2023-01-12

### Fixed
- Fix `@import` parsing when URL contains semicolons (#71)
- Fix regression in selector parsing for attribute selectors (#77)

## [4.0.1] - 2022-08-03

### Fixed
- Fix `globalThis` configuration for webpack to enable UMD module usage in Node.js environments

## [4.0.0] - 2022-06-09

### Changed
- Fork from original css library to Adobe's `@adobe/css-tools` package
- Convert codebase from JavaScript to TypeScript
- Improve parsing performance by approximately 25%
- Update all dependencies to latest versions
- Remove source map support

---

## Legacy Versions (Pre-Adobe Fork)

## [3.0.0] - 2020-07-01

### Changed
- Bump major version due to major dependency updates and Node.js version requirement changes

## [2.2.1] - 2015-06-17

### Fixed
- Fix parsing of escaped quotes in quoted strings

## [2.2.0] - 2015-02-18

### Added
- Add `parsingErrors` property to list errors when parsing with `silent: true`
- Accept EOL characters and all whitespace characters in at-rules such as `@media`

## [2.1.0] - 2014-08-05

### Added
- Add `inputSourcemaps` option to disable input source map processing
- Add `sourcemap: 'generator'` option to return the `SourceMapGenerator` object
- Use `inherits` package for inheritance (fixes browser compatibility issues)

### Changed
- Change error message format and add `.reason` property to error objects

## [2.0.0] - 2014-06-18

### Added
- Add non-enumerable parent reference to each AST node
- Add support for `@custom-media`, `@host`, and `@font-face` at-rules
- Allow commas inside selector functions
- Allow empty property values
- Add `node.position.content` property
- Integrate css-parse and css-stringify libraries
- Apply original source maps from source files

### Changed
- Change default `options.position` value to `true`
- Remove comments from properties and values

### Removed
- Drop Component(1) support

### Fixed
- Fix assertion errors when selectors are missing

## [1.6.1] - 2014-01-02

### Fixed
- Fix component.json configuration

## [1.6.0] - 2013-12-21

### Changed
- Update dependencies

## [1.5.0] - 2013-12-03

### Changed
- Update dependencies

## [1.1.0] - 2013-04-04

### Changed
- Update dependencies

## [1.0.7] - 2012-11-21

### Fixed
- Fix component.json configuration

## [1.0.4] - 2012-11-15

### Changed
- Update css-stringify dependency

## [1.0.3] - 2012-09-01

### Added
- Add Component support

## [0.0.1] - 2010-01-03

### Added
- Initial release
