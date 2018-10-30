# babel-jest

[Babel](https://github.com/babel/babel) [jest](https://github.com/facebook/jest)
plugin

## Usage

If you are already using `jest-cli`, just add `babel-jest` and it will
automatically compile JavaScript code using babel.

```bash
yarn add --dev babel-jest babel-core
```

> Note: If you are using babel version 7 you have to install `babel-jest` with
>
> ```bash
> yarn add --dev babel-jest babel-core@^7.0.0-0 @babel/core
> ```

If you would like to write your own preprocessor, uninstall and delete
babel-jest and set the
[config.transform](http://facebook.github.io/jest/docs/configuration.html#transform-object-string-string)
option to your preprocessor.

## Setup

_Note: this step is only required if you are using `babel-jest` with additional
code preprocessors._

To explicitly define `babel-jest` as a transformer for your JavaScript code, map
_.js_ files to the `babel-jest` module.

```json
"transform": {
  "^.+\\.jsx?$": "babel-jest"
},
```
