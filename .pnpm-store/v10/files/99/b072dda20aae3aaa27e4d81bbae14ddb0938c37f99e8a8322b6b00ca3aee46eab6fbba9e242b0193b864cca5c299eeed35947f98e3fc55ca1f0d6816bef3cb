# cssnano-preset-default

> Safe defaults for cssnano which require minimal configuration.

## Table of Contents

- [Overview](#overview)

- [Usage](#usage)

  - [Install](#install)
  - [Configuration](#configuration)

- [Plugins](#plugins)

  - [css-declaration-sorter (external)](#css-declaration-sorter-external)
  - [cssnano-utils](#cssnano-utils)
  - [postcss-calc (external)](#postcss-calc-external)
  - [postcss-colormin](#postcss-colormin)
  - [postcss-convert-values](#postcss-convert-values)
  - [postcss-discard-comments](#postcss-discard-comments)
  - [postcss-discard-duplicates](#postcss-discard-duplicates)
  - [postcss-discard-empty](#postcss-discard-empty)
  - [postcss-discard-overridden](#postcss-discard-overridden)
  - [postcss-merge-longhand](#postcss-merge-longhand)
  - [postcss-merge-rules](#postcss-merge-rules)
  - [postcss-minify-font-values](#postcss-minify-font-values)
  - [postcss-minify-gradients](#postcss-minify-gradients)
  - [postcss-minify-params](#postcss-minify-params)
  - [postcss-minify-selectors](#postcss-minify-selectors)
  - [postcss-normalize-charset](#postcss-normalize-charset)
  - [postcss-normalize-display-values](#postcss-normalize-display-values)
  - [postcss-normalize-positions](#postcss-normalize-positions)
  - [postcss-normalize-repeat-style](#postcss-normalize-repeat-style)
  - [postcss-normalize-string](#postcss-normalize-string)
  - [postcss-normalize-timing-functions](#postcss-normalize-timing-functions)
  - [postcss-normalize-unicode](#postcss-normalize-unicode)
  - [postcss-normalize-url](#postcss-normalize-url)
  - [postcss-normalize-whitespace](#postcss-normalize-whitespace)
  - [postcss-ordered-values](#postcss-ordered-values)
  - [postcss-reduce-initial](#postcss-reduce-initial)
  - [postcss-reduce-transforms](#postcss-reduce-transforms)
  - [postcss-svgo](#postcss-svgo)
  - [postcss-unique-selectors](#postcss-unique-selectors)

- [Contributors](#contributors)

- [License](#license)

## Overview

This default preset for cssnano only includes transforms that make no
assumptions about your CSS other than what is passed in. In previous
iterations of cssnano, assumptions were made about your CSS which caused
output to look different in certain use cases, but not others. These
transforms have been moved from the defaults to other presets, to make
this preset require only minimal configuration.

## Usage

### Install

Note that this preset comes bundled with cssnano _by default_, so you don't need to install it separately.

### Configuration

If you would like to use the default configuration, then you don't need to add anything to your `package.json`.

But should you wish to customise this, you can pass an array with the second parameter as the options object to use. For example, to remove all comments:

```diff
 {
   "name": "awesome-application",
+  "cssnano": {
+    "preset": [
+      "default",
+      {"discardComments": {"removeAll": true}}
+    ]
+  }
 }
```

Depending on your usage, the JSON configuration might not work for you, such as in cases where you would like to use options with customisable function parameters. For this use case, we recommend a `cssnano.config.js` at the same location as your `package.json`. You can then load a preset and export it with your custom parameters:

```js
const defaultPreset = require('cssnano-preset-default');

module.exports = defaultPreset({
  discardComments: {
    remove: (comment) => comment[0] === '@',
  },
});
```

Note that you may wish to publish your own preset to npm for reusability, should it differ a lot from this one. This is highly encouraged!

## Plugins

### [`css-declaration-sorter`](https://github.com/Siilwyn/css-declaration-sorter) (external)

> Sorts CSS declarations fast and automatically in a certain order.

This plugin is loaded with the following configuration:

```js
{
	keepOverrides: true
}
```

### [`cssnano-utils`](https://github.com/cssnano/cssnano/tree/master/packages/cssnano-utils)

> Utility methods used by cssnano

### [`postcss-calc`](https://github.com/postcss/postcss-calc) (external)

> PostCSS plugin to reduce calc()

This plugin is loaded with its default configuration.

### [`postcss-colormin`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-colormin)

> Minify colors in your CSS files with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-convert-values`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-convert-values)

> Convert values with PostCSS (e.g. ms -> s)

This plugin is loaded with the following configuration:

```js
{
  length: false;
}
```

### [`postcss-discard-comments`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-comments)

> Discard comments in your CSS files with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-discard-duplicates`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-duplicates)

> Discard duplicate rules in your CSS files with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-discard-empty`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-empty)

> Discard empty rules and values with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-discard-overridden`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-overridden)

> PostCSS plugin to discard overridden @keyframes or @counter-style.

This plugin is loaded with its default configuration.

### [`postcss-merge-longhand`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-merge-longhand)

> Merge longhand properties into shorthand with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-merge-rules`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-merge-rules)

> Merge CSS rules with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-minify-font-values`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-minify-font-values)

> Minify font declarations with PostCSS

This plugin is loaded with its default configuration.

### [`postcss-minify-gradients`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-minify-gradients)

> Minify gradient parameters with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-minify-params`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-minify-params)

> Minify at-rule params with PostCSS

This plugin is loaded with its default configuration.

### [`postcss-minify-selectors`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-minify-selectors)

> Minify selectors with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-normalize-charset`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-charset)

> Add necessary or remove extra charset with PostCSS

This plugin is loaded with the following configuration:

```js
{
  add: false;
}
```

### [`postcss-normalize-display-values`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-display-values)

> Normalize multiple value display syntaxes into single values.

This plugin is loaded with its default configuration.

### [`postcss-normalize-positions`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-positions)

> Normalize keyword values for position into length values.

This plugin is loaded with its default configuration.

### [`postcss-normalize-repeat-style`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-repeat-style)

> Convert two value syntax for repeat-style into one value.

This plugin is loaded with its default configuration.

### [`postcss-normalize-string`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-string)

> Normalize wrapping quotes for CSS string literals.

This plugin is loaded with its default configuration.

### [`postcss-normalize-timing-functions`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-timing-functions)

> Normalize CSS animation/transition timing functions.

This plugin is loaded with its default configuration.

### [`postcss-normalize-unicode`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-unicode)

> Normalize unicode-range descriptors, and can convert to wildcard ranges.

This plugin is loaded with its default configuration.

### [`postcss-normalize-url`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-url)

> Normalize URLs with PostCSS

This plugin is loaded with its default configuration.

### [`postcss-normalize-whitespace`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-normalize-whitespace)

> Trim whitespace inside and around CSS rules & declarations.

This plugin is loaded with its default configuration.

### [`postcss-ordered-values`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-ordered-values)

> Ensure values are ordered consistently in your CSS.

This plugin is loaded with its default configuration.

### [`postcss-reduce-initial`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-reduce-initial)

> Reduce initial definitions to the actual initial value, where possible.

This plugin is loaded with its default configuration.

### [`postcss-reduce-transforms`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-reduce-transforms)

> Reduce transform functions with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-svgo`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-svgo)

> Optimise inline SVG with PostCSS.

This plugin is loaded with its default configuration.

### [`postcss-unique-selectors`](https://github.com/cssnano/cssnano/tree/master/packages/postcss-unique-selectors)

> Ensure CSS selectors are unique.

This plugin is loaded with its default configuration.

## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).

## License

MIT © [Ben Briggs](http://beneb.info)
