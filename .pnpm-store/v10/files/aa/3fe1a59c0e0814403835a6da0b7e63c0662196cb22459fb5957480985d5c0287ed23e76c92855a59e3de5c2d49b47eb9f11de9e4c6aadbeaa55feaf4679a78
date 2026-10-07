# ![common-tags](media/logo.svg)

🔖 A set of **well-tested**, commonly used template literal tag functions for use in ES2015+.

🌟 Plus some extra goodies for easily making your own tags.

## Example

```js
import { html } from 'common-tags';

html`
  <div id="user-card">
    <h2>${user.name}</h2>
  </div>
`
```

## Project Status

| Info       | Badges                                   |
| ---------- | ---------------------------------------- |
| Version    | [![github release](https://img.shields.io/github/release/declandewet/common-tags.svg?style=flat-square)](https://github.com/declandewet/common-tags/releases/latest) [![npm version](https://img.shields.io/npm/v/common-tags.svg?style=flat-square)](http://npmjs.org/package/common-tags) |
| License    | [![npm license](https://img.shields.io/npm/l/common-tags.svg?style=flat-square)](https://github.com/declandewet/common-tags/blob/master/license.md) |
| Popularity | [![npm downloads](https://img.shields.io/npm/dm/common-tags.svg?style=flat-square)](http://npm-stat.com/charts.html?package=common-tags) |
| Testing    | [![Build status](https://ci.appveyor.com/api/projects/status/75eiommx0llt3sgd?svg=true)](https://ci.appveyor.com/project/declandewet/common-tags) [![build status](https://img.shields.io/travis/declandewet/common-tags.svg?style=flat-square)](https://travis-ci.org/declandewet/common-tags) [![codecov.io](https://img.shields.io/codecov/c/gh/declandewet/common-tags.svg?style=flat-square)](https://codecov.io/gh/declandewet/common-tags?branch=master) |
| Quality    | [![bitHound Overall Score](https://www.bithound.io/github/declandewet/common-tags/badges/score.svg)](https://www.bithound.io/github/declandewet/common-tags) [![dependency status](https://img.shields.io/david/declandewet/common-tags.svg?style=flat-square)](https://david-dm.org/declandewet/common-tags) [![dev dependency status](https://img.shields.io/david/dev/declandewet/common-tags.svg?style=flat-square)](https://david-dm.org/declandewet/common-tags#info=devDependencies) |
| Style      | [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) |

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Why You Should Care](#why-you-should-care)
- [See Who Is Using `common-tags`](#see-who-is-using-common-tags)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Instructions](#instructions)
  - [With unpkg](#with-unpkg)
- [Usage](#usage)
  - [Imports](#imports)
  - [Available Tags](#available-tags)
    - [`html`](#html)
      - [Aliases: `source`, `codeBlock`](#aliases-source-codeblock)
    - [`safeHtml`](#safehtml)
    - [`oneLine`](#oneline)
    - [`oneLineTrim`](#onelinetrim)
    - [`stripIndent`](#stripindent)
    - [`stripIndents`](#stripindents)
    - [`inlineLists`](#inlinelists)
    - [`oneLineInlineLists`](#onelineinlinelists)
    - [`commaLists`](#commalists)
    - [`commaListsOr`](#commalistsor)
    - [`commaListsAnd`](#commalistsand)
    - [`oneLineCommaLists`](#onelinecommalists)
    - [`oneLineCommaListsOr`](#onelinecommalistsor)
    - [`oneLineCommaListsAnd`](#onelinecommalistsand)
- [Advanced Usage](#advanced-usage)
  - [Tail Processing](#tail-processing)
  - [Using Tags on Regular String Literals](#using-tags-on-regular-string-literals)
  - [Type Definitions](#type-definitions)
  - [Make Your Own Template Tag](#make-your-own-template-tag)
    - [Class is in Session: TemplateTag](#class-is-in-session-templatetag)
    - [The Anatomy of a Transformer](#the-anatomy-of-a-transformer)
    - [Plugin Transformers](#plugin-transformers)
    - [Plugin Pipeline](#plugin-pipeline)
    - [Returning Other Values from a Transformer](#returning-other-values-from-a-transformer)
    - [List of Built-in Transformers](#list-of-built-in-transformers)
      - [`trimResultTransformer([side])`](#trimresulttransformerside)
      - [`stripIndentTransformer([type='initial'])`](#stripindenttransformertypeinitial)
      - [`replaceResultTransformer(replaceWhat, replaceWith)`](#replaceresulttransformerreplacewhat-replacewith)
      - [`replaceSubstitutionTransformer(replaceWhat, replaceWith)`](#replacesubstitutiontransformerreplacewhat-replacewith)
      - [`replaceStringTransformer(replaceWhat, replaceWith)`](#replacestringtransformerreplacewhat-replacewith)
      - [`inlineArrayTransformer(opts)`](#inlinearraytransformeropts)
      - [`splitStringTransformer(splitBy)`](#splitstringtransformersplitby)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Other ES2015 Template Tag Modules](#other-es2015-template-tag-modules)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

`common-tags` initially started out as two template tags I'd always find myself writing - one for stripping indents, and one for trimming multiline strings down to a single line. In it's prime, I was an avid user of [CoffeeScript](http://coffeescript.org), which had this behaviour by default as part of it's block strings feature. I also started out programming in Ruby, which has a similar mechanism called Heredocs.

Over time, I found myself needing a few more template tags to cover edge cases - ones that supported including arrays, or ones that helped to render out tiny bits of HTML not large enough to deserve their own file or an entire template engine. So I packaged all of these up into this module.

As more features were proposed, and I found myself needing a way to override the default settings to cover even more edge cases, I realized that my initial implementation wouldn't be easy to scale.

So I re-wrote this module on top of a core architecture that makes use of transformer plugins which can be composed, imported independently and re-used.

## Why You Should Care

Tagged templates in ES2015 are a welcome feature. But, they have their downsides. One such downside is that they preserve all whitespace by default - which makes multiline strings in source code look terrible.

Source code is not just for computers to interpret. Humans have to read it too 😁. If you care at all about how neat your source code is, or come from a [CoffeeScript](http://coffeescript.org/) background and miss the [block string syntax](http://coffeescript.org/#strings), then you will love `common-tags`, as it was initially intended to bring this feature "back" to JS since it's [initial commit](https://github.com/declandewet/common-tags/commit/2595288d6c276439d98d1bcbbb0aa113f4f7cd86).

`common-tags` also [exposes a means of composing pipelines of dynamic transformer plugins](#plugin-transformers). As someone with a little experience writing tagged templates, I can admit that it is often the case that one tag might need to do the same thing as another tag before doing any further processing; for example - a typical tag that renders out HTML could strip initial indents first, then worry about handling character escapes. Both steps could easily be useful as their own separate template tags, but there isn't an immediately obvious way of composing the two together for maximum re-use. `common-tags` offers not [one](#tail-processing), but [two](#plugin-pipeline) ways of doing this.

Furthermore, I try to keep this project as transparently stable and updated as frequently as I possibly can. As you may have already seen by the [project status table](#project-status), `common-tags` is linted, well tested, tests are well covered, tests pass on both Unix and Windows operating systems, the popularity bandwidth is easily referenced and dependency health is in plain sight 😄. `common-tags` is also already [used in production on a number of proprietary sites and dependent projects](#see-who-is-using-common-tags), and [contributions are always welcome](#how-to-contribute), as are [suggestions](issues).

## See Who Is Using `common-tags`

- **[Slack](https://slack.com/)** ([ref](https://slack.com/libs/desktop))
- **[Discord](https://discordapp.com)** ([ref](https://discordapp.com/acknowledgements))
- **[CircleCI](https://circleci.com)** ([ref](https://circleci.com/docs/2.0/open-source/))
- **[Confluent](https://www.confluent.io/)** ([ref](https://www.confluent.io/third_party_software/))
- **[Tessel](https://tessel.io/)** ([ref](https://github.com/tessel/t2-cli/blob/575ddb23f432d10f86b76f5cdca866d1146dedf5/package.json#L56))
- **[Ember.js](https://www.emberjs.com/)** ([ref](https://github.com/emberjs/ember.js/blob/cacefee49ea4be2621a0ced3e4ceb0010d6cd841/package.json#L93))
- **[Angular](https://angularjs.org/)** ([ref](https://github.com/angular/angular-cli/blob/90e2e805aae6e0bd2e00e52063221736a8d9cb0c/package.json#L50))
- **[Prettier](https://prettier.io/)** ([ref](https://github.com/prettier/prettier-eslint/blob/49b762b57b7e7af3b06bd933050c614a91b6742d/package.json#L18))
- **[Apollo](https://www.apollographql.com)** ([ref](https://github.com/apollographql/apollo-codegen/blob/b9b9a2afd851fa3cba786b26684b26378b1a6f53/package.json#L48))
- **[Workbox](https://developers.google.com/web/tools/workbox/)** ([ref](https://github.com/GoogleChrome/workbox/blob/d391a0cb51b3e89121c5274fb15f05988233b57e/package.json#L64))
- **[Gatsby](https://www.gatsbyjs.org/)** ([ref](https://github.com/gatsbyjs/gatsby/blob/3af191c9961b6da1cc04e9cb0a03787af25878db/packages/gatsby-cli/package.json#L16))
- **[Storybook](https://storybook.js.org/)** ([ref](https://github.com/storybooks/storybook/blob/c275e5c508714bd1a49342e51ddf00bbdb54d277/app/react/package.json#L46))
- **[Cypress](https://www.cypress.io/)** ([ref](https://github.com/cypress-io/cypress/blob/5d761630f233abb30b9b2e3fede9a4c4887cf880/cli/package.json#L44))
- **[stylelint](http://stylelint.io/)** ([ref](https://github.com/stylelint/stylelint/blob/5dc5db5599a00cabc875cf99c56d60f93fbbbd2d/package.json#L82))
- **[pnpm](https://pnpm.js.org/)** ([ref](https://github.com/pnpm/pnpm/blob/36be3d3f0c75992a1f3ff14b60c99115547d0fcc/package.json#L36))
- **[jss](http://cssinjs.org/)** ([ref](https://github.com/cssinjs/jss/blob/7b9c1222893495c585b4b61d7ca9af05077cefec/package.json#L44))

## Installation

### Requirements

The official recommendation for running `common-tags` is as follows:

- [Node.js](https://nodejs.org/en/download/) v5.0.0 or higher
- In order to use `common-tags`, your environment will also need to support ES2015 tagged templates ([pssst… check Babel out](http://babeljs.io))
- You might also want to [polyfill some features](https://github.com/zloirock/core-js) if you plan on supporting older browsers: `Array.prototype.includes`

It might work with below versions of Node, but this is not a guarantee.

### Instructions

`common-tags` is a [Node](https://nodejs.org/) module. So, as long as you have Node.js and NPM installed, installing `common-tags` is as simple as running this in a terminal at the root of your project:

```sh
npm install common-tags
```

### With unpkg

`common-tags` is also available at [unpkg](https://unpkg.com/common-tags). Just put this code in your HTML:

```html
<script src="https://unpkg.com/common-tags"></script>
```

This will make the library available under a global variable `commonTags`.

## Usage

### Imports

Like all modules, `common-tags` begins with an `import`. In fact, `common-tags` supports two styles of import:

**Named imports:**

```js
import {stripIndent} from 'common-tags'
```

**Direct module imports:**

*(Useful if your bundler doesn't support [tree shaking](https://medium.com/@roman01la/dead-code-elimination-and-tree-shaking-in-javascript-build-systems-fb8512c86edf#.p30lbjm94) but you still want to only include modules you need).*

```js
import stripIndent from 'common-tags/lib/stripIndent'
```

### Available Tags

`common-tags` exports a bunch of wonderful pre-cooked template tags for your eager consumption. They are as follows:

#### `html`

##### Aliases: `source`, `codeBlock`

You'll often find that you might want to include an array in a template. Typically, doing something like `${array.join(', ')}` would work - but what if you're printing a list of items in an HTML template and want to maintain the indentation? You'd have to count the spaces manually and include them in the `.join()` call - which is a bit *ugly* for my taste. This tag properly indents arrays, as well as newline characters in string substitutions, by converting them to an array split by newline and re-using the same array inclusion logic:

```js
import {html} from 'common-tags'
let fruits = ['apple', 'orange', 'watermelon']
html`
  <div class="list">
    <ul>
      ${fruits.map(fruit => `<li>${fruit}</li>`)}
      ${'<li>kiwi</li>\n<li>guava</li>'}
    </ul>
  </div>
`
```

Outputs:

```html
<div class="list">
  <ul>
    <li>apple</li>
    <li>orange</li>
    <li>watermelon</li>
    <li>kiwi</li>
    <li>guava</li>
  </ul>
</div>
```

#### `safeHtml`

A tag very similar to `html` but it does safe HTML escaping for strings coming from substitutions. When combined with regular `html` tag, you can do basic HTML templating that is safe from XSS (Cross-Site Scripting) attacks.

```js
import {html, safeHtml} from 'common-tags'
let userMessages = ['hi', 'what are you up to?', '<script>alert("something evil")</script>']
html`
  <div class="chat-list">
    <ul>
      ${userMessages.map(message => safeHtml`<li>${message}</li>`)}
    </ul>
  </div>
`
```

Outputs:

```html
<div class="chat-list">
  <ul>
    <li>hi</li>
    <li>what are you up to?</li>
    <li>&lt;script&gt;alert(&quot;something evil&quot;)&lt;/script&gt;</li>
  </ul>
</div>
```

#### `oneLine`

Allows you to keep your single-line strings under 80 characters without resorting to crazy string concatenation.

```js
import {oneLine} from 'common-tags'

oneLine`
  foo
  bar
  baz
`
// "foo bar baz"
```

#### `oneLineTrim`

Allows you to keep your single-line strings under 80 characters while trimming the new lines:

```js
import {oneLineTrim} from 'common-tags'

oneLineTrim`
  https://news.com/article
  ?utm_source=designernews.co
`
// https://news.com/article?utm_source=designernews.co
```

#### `stripIndent`

If you want to strip the initial indentation from the beginning of each line in a multiline string:

```js
import {stripIndent} from 'common-tags'

stripIndent`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    But we do want to keep this line indented.
`
// This is a multi-line string.
// You'll notice that it is indented.
// We don't want to output this indentation.
//   But we do want to keep this line indented.
```

Important note: this tag will not indent multiline strings coming from the substitutions. If you want that behavior, use the `html` tag (aliases: `source`, `codeBlock`).

#### `stripIndents`

If you want to strip *all* of the indentation from the beginning of each line in a multiline string:

```js
import {stripIndents} from 'common-tags'

stripIndents`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    We don't want to keep this line indented either.
`
// This is a multi-line string.
// You'll notice that it is indented.
// We don't want to output this indentation.
// We don't want to keep this line indented either.
```

#### `inlineLists`

Allows you to inline an array substitution as a list:

```js
import {inlineLists} from 'common-tags'

inlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples bananas watermelons
// They're good!
```

#### `oneLineInlineLists`

Allows you to inline an array substitution as a list, rendered out on a single line:

```js
import {oneLineInlineLists} from 'common-tags'

oneLineInlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples bananas watermelons They're good!
```

#### `commaLists`

Allows you to inline an array substitution as a comma-separated list:

```js
import {commaLists} from 'common-tags'

commaLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas, watermelons
// They're good!
```

#### `commaListsOr`

Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "or":

```js
import {commaListsOr} from 'common-tags'

commaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas or watermelons
// They're good!
```

#### `commaListsAnd`

Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "and":

```js
import {commaListsAnd} from 'common-tags'

commaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas and watermelons
// They're good!
```

#### `oneLineCommaLists`

Allows you to inline an array substitution as a comma-separated list, and is rendered out on to a single line:

```js
import {oneLineCommaLists} from 'common-tags'

oneLineCommaLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas or watermelons They're good!
```

#### `oneLineCommaListsOr`

Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "or", and is rendered out on to a single line:

```js
import {oneLineCommaListsOr} from 'common-tags'

oneLineCommaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas or watermelons They're good!
```

#### `oneLineCommaListsAnd`

Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "and", and is rendered out on to a single line:

```js
import {oneLineCommaListsAnd} from 'common-tags'

oneLineCommaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`
// I like apples, bananas and watermelons They're good!
```

## Advanced Usage

### Tail Processing

It's possible to pass the output of a tagged template to another template tag in pure ES2015+:

```js
import {oneLine} from 'common-tags'

oneLine`
  ${String.raw`
    foo
    bar\nbaz
  `}
`
// "foo bar\nbaz"
```

We can make this neater. Every tag `common-tags` exports can delay execution if it receives a function as it's first argument. This function is assumed to be a template tag, and is called via an intermediary tagging process before the result is passed back to our tag. Use it like so (this code is equivalent to the previous code block):

```js
import {oneLine} from 'common-tags'

oneLine(String.raw)`
  foo
  bar\nbaz
`
// "foo bar\nbaz"
```

### Using Tags on Regular String Literals

Sometimes you might want to use a tag on a normal string (e.g. for stripping the indentation). For that purpose just call a tag as a function with the passed string:

```js
import {stripIndent} from 'common-tags'

stripIndent("  foo\n    bar")
// "foo\n  bar"
```

### Type Definitions

There are third-party type definitions for `common-tags` on [npm](https://www.npmjs.com/package/@types/common-tags). Just install them like so:

```sh
npm install @types/common-tags
```

Please note that these type definitions are not officially maintained by the authors of
`common-tags` - they are maintained by the TypeScript community.

### Make Your Own Template Tag

`common-tags` exposes an interface that allows you to painlessly create your own template tags.

#### Class is in Session: TemplateTag

`common-tags` exports a `TemplateTag` class. This class is the foundation of `common-tags`. The concept of the class works on the premise that transformations occur on a template either when the template is finished being processed (`onEndResult`), or when the tag encounters a string (`onString`) or a substitution (`onSubstitution`). Any tag produced by this class supports [tail processing](#tail-processing).

The easiest tag to create is a tag that does nothing:

```js
import {TemplateTag} from 'common-tags'

const doNothing = new TemplateTag()

doNothing`foo bar`
// 'foo bar'
```

#### The Anatomy of a Transformer

`TemplateTag` receives either an array or argument list of `transformers`. A `transformer` is just a plain object with three optional methods - `onString`, `onSubstitution` and `onEndResult` - it looks like this:

```js
{
  onString (str) {
    // optional. Called when the tag encounters a string.
    // (a string is whatever's not inside "${}" in your template literal)
    // `str` is the value of the current string
  },
  onSubstitution (substitution, resultSoFar) {
    // optional. Called when the tag encounters a substitution.
    // (a substitution is whatever's inside "${}" in your template literal)
    // `substitution` is the value of the current substitution
    // `resultSoFar` is the end result up to the point of this substitution
  },
  onEndResult (endResult) {
    // optional. Called when all substitutions have been parsed
    // `endResult` is the final value.
  }
}
```

#### Plugin Transformers

You can wrap a transformer in a function that receives arguments in order to create a dynamic plugin:

```js
const substitutionReplacer = (oldValue, newValue) => ({
  onSubstitution(substitution, resultSoFar) {
    if (substitution === oldValue) {
      return newValue
    }
    return substitution
  }
})

const replaceFizzWithBuzz = new TemplateTag(substitutionReplacer('fizz', 'buzz'))

replaceFizzWithBuzz`foo bar ${"fizz"}`
// "foo bar buzz"
```

> **note** - if you call `new TemplateTag(substitutionReplacer)`, `substitutionReplacer` will automatically be initiated with no arguments.

#### Plugin Pipeline

You can pass a list of transformers, and `TemplateTag` will call them on your tag in the order they are specified:

```js
// note: passing these as an array also works
const replace = new TemplateTag(
  substitutionReplacer('fizz', 'buzz'),
  substitutionReplacer('foo', 'bar')
)

replace`${"foo"} ${"fizz"}`
// "bar buzz"
```

When multiple transformers are passed to `TemplateTag`, they will be iterated three times - first, all transformer `onString` methods will be called. Once they are done processing, `onSubstitution` methods will be called. Finally, all transformer `onEndResult` methods will be called.

#### Returning Other Values from a Transformer

This is super easy. Transformers are just objects, after all. They have full access to `this`:

```js
const listSubs = {
  onString(str) {
    this.ctx = this.ctx || { strings: [], subs: [] }
    this.ctx.strings.push(str);
    return str
  },
  onSubstitution(sub, res) {
    this.ctx.subs.push({ sub, precededBy: res })
    return sub
  },
  onEndResult(res) {
    return this.ctx
  }
}

const toJSON = {
  onEndResult(res) {
    return JSON.stringify(res, null, 2)
  }
}

const log = {
  onEndResult(res) {
    console.log(res)
    return res
  }
}

const process = new TemplateTag([listSubs, toJSON, log])

process`
  foo ${'bar'}
  fizz ${'buzz'}
`
// {
//  "strings": [
//    "\n  foo ",
//    "\n  foo bar\n  fizz ",
//    "\n" 
//  ],
//  "subs": [
//    {
//      "sub": "bar",
//      "precededBy": "\n  foo "
//    },
//    {
//      "sub": "buzz",
//      "precededBy": "\n  foo bar\n  fizz "
//    }
//  ]
// }
```

#### List of Built-in Transformers

Since `common-tags` is built on the foundation of this TemplateTag class, it comes with its own set of built-in transformers:

##### `trimResultTransformer([side])`

Trims the whitespace surrounding the end result. Accepts an optional `side` (can be `"start"` or `"end"` or alternatively `"left"` or `"right"`) that when supplied, will only trim whitespace from that side of the string.

##### `stripIndentTransformer([type='initial'])`

Strips the indents from the end result. Offers two types: `all`, which removes all indentation from each line, and `initial`, which removes the shortest indent level from each line. Defaults to `initial`.

##### `replaceResultTransformer(replaceWhat, replaceWith)`

Replaces a value or pattern in the end result with a new value. `replaceWhat` can be a string or a regular expression, `replaceWith` is the new value.

##### `replaceSubstitutionTransformer(replaceWhat, replaceWith)`

Replaces the result of all substitutions (results of calling `${ ... }`) with a new value. Same as for `replaceResultTransformer`, `replaceWhat` can be a string or regular expression and `replaceWith` is the new value.

##### `replaceStringTransformer(replaceWhat, replaceWith)`

Replaces the result of all strings (what's not in `${ ... }`) with a new value. Same as for `replaceResultTransformer`, `replaceWhat` can be a string or regular expression and `replaceWith` is the new value.

##### `inlineArrayTransformer(opts)`

Converts any array substitutions into a string that represents a list. Accepts an options object:

```js
opts = {
  separator: ',', // what to separate each item with (always followed by a space)
  conjunction: 'and', // replace the last separator with this value
  serial: true // should the separator be included before the conjunction? As in the case of serial/oxford commas
}
```

##### `splitStringTransformer(splitBy)`

Splits a string substitution into an array by the provided `splitBy` substring, **only** if the string contains the `splitBy` substring.

## How to Contribute

Please see the [Contribution Guidelines](contributing.md).

## License

MIT. See [license.md](license.md).

## Other ES2015 Template Tag Modules

If `common-tags` doesn't quite fit your bill, and you just can't seem to find what you're looking for - perhaps these might be of use to you?

- [tage](https://www.npmjs.com/package/tage) - make functions work as template tags too
- [is-tagged](https://www.npmjs.com/package/is-tagged) - Check whether a function call is initiated by a tagged template string or invoked in a regular way
- [es6-template-strings](https://www.npmjs.com/package/es6-template-strings) - Compile and resolve template strings notation as specified in ES6
- [t7](https://github.com/trueadm/t7) - A light-weight virtual-dom template library
- [html-template-tag](https://www.npmjs.com/package/html-template-tag) - ES6 Tagged Template for compiling HTML template strings.
- [clean-tagged-string](https://www.npmjs.com/package/clean-tagged-string) - A simple utility function to clean ES6 template strings.
- [multiline-tag](https://www.npmjs.com/package/multiline-tag) - Tags for template strings making them behave like coffee multiline strings
- [deindent](https://www.npmjs.com/package/deindent) - ES6 template string helper for deindentation.
- [heredoc-tag](https://www.npmjs.com/package/heredoc-tag) - Heredoc helpers for ES2015 template strings
- [regx](https://www.npmjs.com/package/regx) - Tagged template string regular expression compiler.
- [regexr](https://www.npmjs.org/package/regexr) - Provides an ES6 template tag function that makes it easy to compose regexes out of template strings without double-escaped hell.
- [url-escape-tag](https://www.npmjs.com/package/url-escape-tag) - A template tag for escaping url parameters based on ES2015 tagged templates.
- [shell-escape-tag](https://www.npmjs.com/package/shell-escape-tag) - An ES6+ template tag which escapes parameters for interpolation into shell commands.
- [sql-tags](https://www.npmjs.com/package/sql-tags) - ES6 tagged template string functions for SQL statements.
- [sql-tag](https://www.npmjs.com/package/sql-tag) - A template tag for writing elegant sql strings.
- [sequelize-sql-tag](https://www.npmjs.com/package/sequelize-sql-tag) - A sequelize plugin for sql-tag
- [pg-sql-tag](https://www.npmjs.com/package/pg-sql-tag) - A pg plugin for sql-tag
- [sql-template-strings](https://www.npmjs.com/package/sql-template-strings) - ES6 tagged template strings for prepared statements with mysql and postgres
- [sql-composer](https://www.npmjs.com/package/sql-composer) - Composable SQL template strings for Node.js
- [pg-template-tag](https://www.npmjs.com/package/pg-template-tag) - ECMAScript 6 (2015) template tag function to write queries for node-postgres.
- [digraph-tag](https://www.npmjs.com/package/digraph-tag) - ES6 string template tag for quickly generating directed graph data
- [es2015-i18n-tag](https://www.npmjs.com/package/es2015-i18n-tag) - ES2015 template literal tag for i18n and l10n translation and localization
