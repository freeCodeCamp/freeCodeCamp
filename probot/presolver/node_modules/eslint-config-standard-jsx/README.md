# eslint-config-standard-jsx [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/eslint-config-standard-jsx/master.svg
[travis-url]: https://travis-ci.org/feross/eslint-config-standard-jsx
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard-jsx.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard-jsx
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard-jsx.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard-jsx
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JSX support in [JavaScript Standard Style](http://standardjs.com)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install

This module is for advanced users. You probably want to use [`standard`](http://standardjs.com) instead :)

```bash
npm install eslint-config-standard-jsx
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

This Shareable Config adds extra JSX style rules to the baseline JavaScript Standard Style
rules provided in
[`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard).
It doesn't assume that you're using React, so other virtual DOM libraries like
`virtual-dom` and `deku` are supported.

Even though this config is JSX only (no React), it makes use of
[`eslint-plugin-react`](https://npmjs.com/package/eslint-plugin-react) for its generic
JSX rules.

(If you want React-specific rules too, consider using
[`eslint-config-standard-react`](https://www.npmjs.com/package/eslint-config-standard-react)
instead.)

Here's how to install everything you need:

```bash
npm install --save-dev eslint-config-standard eslint-config-standard-jsx eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["standard", "standard-jsx"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Standard Style to check your code is to use the
[`standard`](http://standardjs.com) package. This comes with a global
Node command line program (`standard`) that you can run or add to your `npm test` script
to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

```markdown
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](http://standardjs.com).

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
