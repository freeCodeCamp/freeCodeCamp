# gray-matter [![NPM version](https://img.shields.io/npm/v/gray-matter.svg?style=flat)](https://www.npmjs.com/package/gray-matter) [![NPM monthly downloads](https://img.shields.io/npm/dm/gray-matter.svg?style=flat)](https://npmjs.org/package/gray-matter) [![NPM total downloads](https://img.shields.io/npm/dt/gray-matter.svg?style=flat)](https://npmjs.org/package/gray-matter) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/gray-matter.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/gray-matter)

> Parse front-matter from a string or file. Fast, reliable and easy to use. Parses YAML front matter by default, but also has support for YAML, JSON, TOML or Coffee Front-Matter, with options to set custom delimiters. Used by metalsmith, assemble, verb and many other projects.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gray-matter
```

## Heads up!

Please see the [changelog](CHANGELOG.md) to learn about breaking changes that were made in v3.0.

## What does this do?

<details>
<summary><strong>Run this example</strong></summary>

Add the HTML in the following example to `example.html`, then add the following code to `example.js` and run `$ node example` (without the `$`):

```js
const fs = require('fs');
const matter = require('gray-matter');
const str = fs.readFileSync('example.html', 'utf8');
console.log(matter(str));
```

</details>

Converts a string with front-matter, like this:

```handlebars
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
```

Into an object like this:

```js
{
  content: '<h1>Hello world!</h1>',
  data: { 
    title: 'Hello', 
    slug: 'home' 
  }
}
```

## Why use gray-matter?

* **simple**: main function takes a string and returns an object
* **accurate**: better at catching and handling edge cases than front-matter parsers that rely on regex for parsing
* **fast**: faster than other front-matter parsers that use regex for parsing
* **flexible**: By default, gray-matter is capable of parsing [YAML](https://github.com/nodeca/js-yaml), [JSON](http://en.wikipedia.org/wiki/Json) and JavaScript front-matter. But other [engines](#optionsengines) may be added.
* **extensible**: Use [custom delimiters](#optionsdelimiters), or add support for [any language](#optionsengines), like [TOML](http://github.com/mojombo/toml), [CoffeeScript](http://coffeescript.org), or [CSON](https://github.com/bevry/cson)
* **battle-tested**: used by [assemble](https://github.com/assemble/assemble), [metalsmith](https://github.com/segmentio/metalsmith), [phenomic](https://github.com/phenomic/phenomic), [verb](https://github.com/assemble/verb), [generate](https://github.com/generate/generate), [update](https://github.com/update/update) and many others.

<details>
<summary><strong>Rationale</strong></summary>

**Why did we create gray-matter in the first place?**

We created gray-matter after trying out other libraries that failed to meet our standards and requirements.

Some libraries met most of the requirements, but _none met all of them_.

**Here are the most important**:

* Be usable, if not simple
* Use a dependable and well-supported library for parsing YAML
* Support other languages besides YAML
* Support stringifying back to YAML or another language
* Don't fail when no content exists
* Don't fail when no front matter exists
* Don't use regex for parsing. This is a relatively simple parsing operation, and regex is the slowest and most error-prone way to do it.
* Have no problem reading YAML files directly
* Have no problem with complex content, including **non-front-matter** fenced code blocks that contain examples of YAML front matter. Other parsers fail on this.
* Support stringifying back to front-matter. This is useful for linting, updating properties, etc.
* Allow custom delimiters, when it's necessary for avoiding delimiter collision.
* Should return an object with at least these three properties:
  - `data`: the parsed YAML front matter, as a JSON object
  - `content`: the contents as a string, without the front matter
  - `orig`: the "original" content (for debugging)

</details>

## Usage

Using Node's `require()` system:

```js
const matter = require('gray-matter');
```

Or with [typescript](https://www.typescriptlang.org)

```js
import matter = require('gray-matter');
// OR
import * as matter from 'gray-matter';
```

Pass a string and [options](#options) to gray-matter:

```js
console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'));
```

Returns:

```js
{
  content: '\nThis is content.',
  data: { 
    title: 'Front Matter' 
  } 
}
```

More about the returned object in the following section.

***

## Returned object

gray-matter returns a `file` object with the following properties.

**Enumerable**

* `file.data` **{Object}**: the object created by parsing front-matter
* `file.content` **{String}**: the input string, with `matter` stripped
* `file.excerpt` **{String}**: an excerpt, if [defined on the options](#optionsexcerpt)
* `file.empty` **{String}**: when the front-matter is "empty" (either all whitespace, nothing at all, or just comments and no data), the original string is set on this property. See [#65](https://github.com/jonschlinkert/gray-matter/issues/65) for details regarding use case.
* `file.isEmpty` **{Boolean}**: true if front-matter is empty.

**Non-enumerable**

In addition, the following non-enumberable properties are added to the object to help with debugging.

* `file.orig` **{Buffer}**: the original input string (or buffer)
* `file.language` **{String}**: the front-matter language that was parsed. `yaml` is the default
* `file.matter` **{String}**: the _raw_, un-parsed front-matter string
* `file.stringify` **{Function}**: [stringify](#stringify) the file by converting `file.data` to a string in the given language, wrapping it in delimiters and prepending it to `file.content`.

## Run the examples

If you'd like to test-drive the examples, first clone gray-matter into `my-project` (or wherever you want):

```sh
$ git clone https://github.com/jonschlinkert/gray-matter my-project
```

CD into `my-project` and install dependencies:

```sh
$ cd my-project && npm install
```

Then run any of the [examples](./examples) to see how gray-matter works:

```sh
$ node examples/<example_name>
```

**Links to examples**

* [coffee](examples/coffee.js)
* [excerpt-separator](examples/excerpt-separator.js)
* [excerpt-stringify](examples/excerpt-stringify.js)
* [excerpt](examples/excerpt.js)
* [javascript](examples/javascript.js)
* [json-stringify](examples/json-stringify.js)
* [json](examples/json.js)
* [restore-empty](examples/restore-empty.js)
* [sections-excerpt](examples/sections-excerpt.js)
* [sections](examples/sections.js)
* [toml](examples/toml.js)
* [yaml-stringify](examples/yaml-stringify.js)
* [yaml](examples/yaml.js)

## API

### [matter](index.js#L29)

Takes a string or object with `content` property, extracts and parses front-matter from the string, then returns an object with `data`, `content` and other [useful properties](#returned-object).

**Params**

* `input` **{Object|String}**: String, or object with `content` string
* `options` **{Object}**
* `returns` **{Object}**

**Example**

```js
const matter = require('gray-matter');
console.log(matter('---\ntitle: Home\n---\nOther stuff'));
//=> { data: { title: 'Home'}, content: 'Other stuff' }
```

### [.stringify](index.js#L160)

Stringify an object to YAML or the specified language, and append it to the given string. By default, only YAML and JSON can be stringified. See the [engines](#engines) section to learn how to stringify other languages.

**Params**

* `file` **{String|Object}**: The content string to append to stringified front-matter, or a file object with `file.content` string.
* `data` **{Object}**: Front matter to stringify.
* `options` **{Object}**: [Options](#options) to pass to gray-matter and [js-yaml](https://github.com/nodeca/js-yaml).
* `returns` **{String}**: Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.

**Example**

```js
console.log(matter.stringify('foo bar baz', {title: 'Home'}));
// results in:
// ---
// title: Home
// ---
// foo bar baz
```

### [.read](index.js#L178)

Synchronously read a file from the file system and parse front matter. Returns the same object as the [main function](#matter).

**Params**

* `filepath` **{String}**: file path of the file to read.
* `options` **{Object}**: [Options](#options) to pass to gray-matter.
* `returns` **{Object}**: Returns [an object](#returned-object) with `data` and `content`

**Example**

```js
const file = matter.read('./content/blog-post.md');
```

### [.test](index.js#L193)

Returns true if the given `string` has front matter.

**Params**

* `string` **{String}**
* `options` **{Object}**
* `returns` **{Boolean}**: True if front matter exists.

## Options

### options.excerpt

**Type**: `Boolean|Function`

**Default**: `undefined`

Extract an excerpt that directly follows front-matter, or is the first thing in the string if no front-matter exists.

If set to `excerpt: true`, it will look for the frontmatter delimiter, `---` by default and grab everything leading up to it.

**Example**

```js
const str = '---\nfoo: bar\n---\nThis is an excerpt.\n---\nThis is content';
const file = matter(str, { excerpt: true });
```

Results in:

```js
{ 
  content: 'This is an excerpt.\n---\nThis is content',
  data: { foo: 'bar' },
  excerpt: 'This is an excerpt.\n' 
}
```

You can also set `excerpt` to a function. This function uses the 'file' and 'options' that were initially passed to gray-matter as parameters, so you can control how the excerpt is extracted from the content.

**Example**

```js
// returns the first 4 lines of the contents
function firstFourLines(file, options) {
  file.excerpt = file.content.split('\n').slice(0, 4).join(' ');
}

const file =  matter([
  '---',
  'foo: bar',
  '---',
  'Only this',
  'will be',
  'in the',
  'excerpt',
  'but not this...'
].join('\n'), {excerpt: firstFourLines});
```

Results in:

```js
{ 
  content: 'Only this\nwill be\nin the\nexcerpt\nbut not this...',
  data: { foo: 'bar' },
  excerpt: 'Only this will be in the excerpt'
}
```

### options.excerpt_separator

**Type**: `String`

**Default**: `undefined`

Define a custom separator to use for excerpts.

```js
console.log(matter(string, {excerpt_separator: '<!-- end -->'}));
```

**Example**

The following HTML string:

```html
---
title: Blog
---
My awesome blog.
<!-- end -->
<h1>Hello world</h1>
```

Results in:

```js
{ 
  data: { title: 'Blog'}, 
  excerpt: 'My awesome blog.', 
  content: 'My awesome blog.\n<!-- end -->\n<h1>Hello world</h1>' 
}
```

### options.engines

Define custom engines for parsing and/or stringifying front-matter.

**Type**: `Object` Object of engines

**Default**: `JSON`, `YAML` and `JavaScript` are already handled by default.

**Engine format**

Engines may either be an object with `parse` and (optionally) `stringify` methods, or a function that will be used for parsing only.

**Examples**

```js
const toml = require('toml');

/**
 * defined as a function
 */

const file = matter(str, {
  engines: {
    toml: toml.parse.bind(toml),
  }
});

/**
 * Or as an object
 */

const file = matter(str, {
  engines: {
    toml: {
      parse: toml.parse.bind(toml),

      // example of throwing an error to let users know stringifying is
      // not supported (a TOML stringifier might exist, this is just an example)
      stringify: function() {
        throw new Error('cannot stringify to TOML');
      }
    }
  }
});

console.log(file);
```

### options.language

**Type**: `String`

**Default**: `yaml`

Define the engine to use for parsing front-matter.

```js
console.log(matter(string, {language: 'toml'}));
```

**Example**

The following HTML string:

```html
---
title = "TOML"
description = "Front matter"
categories = "front matter toml"
---
This is content
```

Results in:

```js
{ content: 'This is content',
  excerpt: '',
  data:
   { title: 'TOML',
     description: 'Front matter',
     categories: 'front matter toml' } }
```

**Dynamic language detection**

Instead of defining the language on the options, gray-matter will automatically detect the language defined after the first delimiter and select the correct engine to use for parsing.

```html
---toml
title = "TOML"
description = "Front matter"
categories = "front matter toml"
---
This is content
```

### options.delimiters

**Type**: `String`

**Default**: `---`

Open and close delimiters can be passed in as an array of strings.

**Example:**

```js
// format delims as a string
matter.read('file.md', {delims: '~~~'});
// or an array (open/close)
matter.read('file.md', {delims: ['~~~', '~~~']});
```

would parse:

```html
~~~
title: Home
~~~
This is the {{title}} page.
```

## Deprecated options

### options.lang

Decrecated, please use [options.language](#optionslanguage) instead.

### options.delims

Decrecated, please use [options.delimiters](#optionsdelimiters) instead.

### options.parsers

Decrecated, please use [options.engines](#optionsengines) instead.

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [metalsmith](https://www.npmjs.com/package/metalsmith): An extremely simple, pluggable static site generator. | [homepage](https://github.com/segmentio/metalsmith#readme "An extremely simple, pluggable static site generator.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")
* [gray-matter-loader](https://github.com/atlassian/gray-matter-loader): A webpack loader for gray-matter. [homepage](https://github.com/atlassian/gray-matter-loader#gray-matter-loader)

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 174 | [jonschlinkert](https://github.com/jonschlinkert) |
| 7 | [RobLoach](https://github.com/RobLoach) |
| 5 | [heymind](https://github.com/heymind) |
| 4 | [doowb](https://github.com/doowb) |
| 3 | [aljopro](https://github.com/aljopro) |
| 2 | [reccanti](https://github.com/reccanti) |
| 2 | [onokumus](https://github.com/onokumus) |
| 2 | [moozzyk](https://github.com/moozzyk) |
| 1 | [Ajedi32](https://github.com/Ajedi32) |
| 1 | [caesar](https://github.com/caesar) |
| 1 | [ianstormtaylor](https://github.com/ianstormtaylor) |
| 1 | [qm3ster](https://github.com/qm3ster) |
| 1 | [zachwhaley](https://github.com/zachwhaley) |

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on April 01, 2018._