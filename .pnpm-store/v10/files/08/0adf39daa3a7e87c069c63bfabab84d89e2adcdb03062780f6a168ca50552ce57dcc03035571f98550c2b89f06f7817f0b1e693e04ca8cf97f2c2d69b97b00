## [Unreleased]

## [2.1.4] - 2017-06-16

### Fixed
- `inline-requires` works with named imports and no longer leaks paths after use.

## [2.1.3] - 2017-06-08

### Fixed
- `inline-requires` will stop unintentionally using Flow declarations as bindings.

## [2.1.2] - 2017-05-02

### Fixed
- `inline-requires` works better with other transforms (eg 'babel-plugin-transform-es2015-modules-commonjs').

## [2.1.1] - 2017-04-26

### Fixed
- `inline-requires` transform properly handles identifiers within functions whose definitions appear earlier in the file than the require call.

## [2.1.0] - 2016-10-07

### Added
- Modules using `__DEV__` will have the declaration inlined for `.js.flow` file generation.

### Fixed
- `typeof` imports are properly rewritten.


## [2.0.0] - 2016-05-25

### Added
- More syntaxes are parsed for `.js.flow` file generation: `babel-plugin-syntax-class-properties` & `babel-plugin-syntax-jsx`
- More transforms are applied for ES2015 and React support: `babel-plugin-transform-es2015-function-name`, `babel-plugin-transform-react-display-name`, `babel-plugin-transform-react-jsx`
- New custom transform to convert `Object.assign` to `require('object-assign')`, ensuring the use of a ponyfill that checks for a spec-compliant `Object.assign`.

### Fixed
- Type imports are properly rewritten with the rewrite-modules transform.


## [1.0.0] - 2016-04-28

### Added
- Initial release as a separate module.
