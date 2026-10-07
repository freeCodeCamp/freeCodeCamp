# import/no-webpack-loader-syntax

<!-- end auto-generated rule header -->

Forbid Webpack loader syntax in imports.

[Webpack](https://webpack.js.org) allows specifying the [loaders](https://webpack.js.org/concepts/loaders/) to use in the import source string using a special syntax like this:

```js
var moduleWithOneLoader = require("my-loader!./my-awesome-module");
```

This syntax is non-standard, so it couples the code to Webpack. The recommended way to specify Webpack loader configuration is in a [Webpack configuration file](https://webpack.js.org/concepts/loaders/#configuration).

## Rule Details

### Fail

```js
import myModule from 'my-loader!my-module';
import theme from 'style!css!./theme.css';

var myModule = require('my-loader!./my-module');
var theme = require('style!css!./theme.css');
```

### Pass

```js
import myModule from 'my-module';
import theme from './theme.css';

var myModule = require('my-module');
var theme = require('./theme.css');
```

## When Not To Use It

If you have a project that doesn't use Webpack you can safely disable this rule.
