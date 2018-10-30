# eslint-config-standard [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/eslint-config-standard/master.svg
[travis-url]: https://travis-ci.org/feross/eslint-config-standard
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com)

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install

This module is for advanced users. You probably want to use [`standard`](http://standardjs.com) instead :)

```bash
npm install eslint-config-standard
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Then, add this to your .eslintrc file:

```
{
  "extends": "standard"
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
