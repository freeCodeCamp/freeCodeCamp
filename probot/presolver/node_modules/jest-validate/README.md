# jest-validate

Generic configuration validation tool that helps you with warnings, errors and
deprecation messages as well as showing users examples of correct configuration.

```bash
npm install --save jest-validate
```

## Usage

```js
import {validate} from 'jest-validate';

validate((config: Object), (options: ValidationOptions)); // => {hasDeprecationWarnings: boolean, isValid: boolean}
```

Where `ValidationOptions` are:

```js
type ValidationOptions = {
  comment?: string,
  condition?: (option: any, validOption: any) => boolean,
  deprecate?: (
    config: Object,
    option: string,
    deprecatedOptions: Object,
    options: ValidationOptions,
  ) => true,
  deprecatedConfig?: {[key: string]: Function},
  error?: (
    option: string,
    received: any,
    defaultValue: any,
    options: ValidationOptions,
  ) => void,
  exampleConfig: Object,
  title?: Title,
  unknown?: (
    config: Object,
    exampleConfig: Object,
    option: string,
    options: ValidationOptions,
  ) => void,
};

type Title = {|
  deprecation?: string,
  error?: string,
  warning?: string,
|};
```

`exampleConfig` is the only option required.

## API

By default `jest-validate` will print generic warning and error messages. You
can however customize this behavior by providing `options: ValidationOptions`
object as a second argument:

Almost anything can be overwritten to suite your needs.

### Options

* `comment` – optional string to be rendered below error/warning message.
* `condition` – an optional function with validation condition.
* `deprecate`, `error`, `unknown` – optional functions responsible for
  displaying warning and error messages.
* `deprecatedConfig` – optional object with deprecated config keys.
* `exampleConfig` – the only **required** option with configuration against
  which you'd like to test.
* `title` – optional object of titles for errors and messages.

You will find examples of `condition`, `deprecate`, `error`, `unknown`, and
`deprecatedConfig` inside source of this repository, named respectively.

## Examples

Minimal example:

```js
validate(config, {exampleConfig});
```

Example with slight modifications:

```js
validate(config, {
  comment: '  Documentation: http://custom-docs.com',
  deprecatedConfig,
  exampleConfig,
  title: {
    deprecation: 'Custom Deprecation',
    // leaving 'error' and 'warning' as default
  },
});
```

This will output:

#### Warning:

```bash
● Validation Warning:

  Unknown option transformx with value "<rootDir>/node_modules/babel-jest" was found.
  This is either a typing error or a user mistake. Fixing it will remove this message.

  Documentation: http://custom-docs.com
```

#### Error:

```bash
● Validation Error:

  Option transform must be of type:
    object
  but instead received:
    string

  Example:
  {
    "transform": {"^.+\\.js$": "<rootDir>/preprocessor.js"}
  }

  Documentation: http://custom-docs.com
```

#### Deprecation

Based on `deprecatedConfig` object with proper deprecation messages. Note custom
title:

```bash
Custom Deprecation:

  Option scriptPreprocessor was replaced by transform, which support multiple preprocessors.

  Jest now treats your current configuration as:
  {
    "transform": {".*": "xxx"}
  }

  Please update your configuration.

  Documentation: http://custom-docs.com
```
