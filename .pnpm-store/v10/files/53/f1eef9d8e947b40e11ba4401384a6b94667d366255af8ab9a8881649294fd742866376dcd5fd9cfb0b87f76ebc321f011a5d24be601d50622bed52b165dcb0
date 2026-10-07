<a name="user-content-eslint-plugin-jsdoc"></a>
<a name="eslint-plugin-jsdoc"></a>
# eslint-plugin-jsdoc

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-jsdoc.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-jsdoc)
[![Travis build status](https://img.shields.io/travis/gajus/eslint-plugin-jsdoc/master.svg?style=flat-square)](https://travis-ci.org/gajus/eslint-plugin-jsdoc)
[![js-canonical-style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Discord Chat](https://img.shields.io/badge/chat-on%20disord-green.svg?logo=discord)](https://discord.gg/kFFy3nc)

JSDoc linting rules for ESLint.

* [eslint-plugin-jsdoc](#user-content-eslint-plugin-jsdoc)
    * [Installation](#user-content-eslint-plugin-jsdoc-installation)
    * [Configuration](#user-content-eslint-plugin-jsdoc-configuration)
        * [Flat config](#user-content-eslint-plugin-jsdoc-configuration-flat-config)
        * [`eslintrc`](#user-content-eslint-plugin-jsdoc-configuration-eslintrc)
    * [Options](#user-content-eslint-plugin-jsdoc-options)
    * [Settings](#user-content-eslint-plugin-jsdoc-settings)
    * [Advanced](#user-content-eslint-plugin-jsdoc-advanced)
    * [Processors](#user-content-eslint-plugin-jsdoc-processors)
    * [Rules](#user-content-eslint-plugin-jsdoc-rules)


<a name="user-content-eslint-plugin-jsdoc-installation"></a>
<a name="eslint-plugin-jsdoc-installation"></a>
## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or
globally.

```sh
npm install --save-dev eslint
```

If you have installed `ESLint` globally, you have to install JSDoc plugin
globally too. Otherwise, install it locally.

```sh
npm install --save-dev eslint-plugin-jsdoc
```

<a name="user-content-eslint-plugin-jsdoc-configuration"></a>
<a name="eslint-plugin-jsdoc-configuration"></a>
## Configuration

<a name="user-content-eslint-plugin-jsdoc-configuration-flat-config"></a>
<a name="eslint-plugin-jsdoc-configuration-flat-config"></a>
### Flat config

```js
import jsdoc from 'eslint-plugin-jsdoc';

const config = [
  // configuration included in plugin
  jsdoc.configs['flat/recommended'],
  // other configuration objects...
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'warn'
    }
  }
];

export default config;
```

<a name="user-content-eslint-plugin-jsdoc-configuration-eslintrc"></a>
<a name="eslint-plugin-jsdoc-configuration-eslintrc"></a>
### <code>eslintrc</code>

Add `plugins` section to [.eslintrc.*](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)
and specify `eslint-plugin-jsdoc` as a plugin.

```json
{
    "plugins": [
        "jsdoc"
    ]
}
```

Finally, enable all of the rules that you would like to use.

```javascript
{
    "rules": {
        "jsdoc/check-access": 1, // Recommended
        "jsdoc/check-alignment": 1, // Recommended
        "jsdoc/check-examples": 1,
        "jsdoc/check-indentation": 1,
        "jsdoc/check-line-alignment": 1,
        "jsdoc/check-param-names": 1, // Recommended
        "jsdoc/check-template-names": 1,
        "jsdoc/check-property-names": 1, // Recommended
        "jsdoc/check-syntax": 1,
        "jsdoc/check-tag-names": 1, // Recommended
        "jsdoc/check-types": 1, // Recommended
        "jsdoc/check-values": 1, // Recommended
        "jsdoc/empty-tags": 1, // Recommended
        "jsdoc/implements-on-classes": 1, // Recommended
        "jsdoc/informative-docs": 1,
        "jsdoc/match-description": 1,
        "jsdoc/multiline-blocks": 1, // Recommended
        "jsdoc/no-bad-blocks": 1,
        "jsdoc/no-blank-block-descriptions": 1,
        "jsdoc/no-defaults": 1,
        "jsdoc/no-missing-syntax": 1,
        "jsdoc/no-multi-asterisks": 1, // Recommended
        "jsdoc/no-restricted-syntax": 1,
        "jsdoc/no-types": 1,
        "jsdoc/no-undefined-types": 1, // Recommended
        "jsdoc/require-asterisk-prefix": 1,
        "jsdoc/require-description": 1,
        "jsdoc/require-description-complete-sentence": 1,
        "jsdoc/require-example": 1,
        "jsdoc/require-file-overview": 1,
        "jsdoc/require-hyphen-before-param-description": 1,
        "jsdoc/require-jsdoc": 1, // Recommended
        "jsdoc/require-param": 1, // Recommended
        "jsdoc/require-param-description": 1, // Recommended
        "jsdoc/require-param-name": 1, // Recommended
        "jsdoc/require-param-type": 1, // Recommended
        "jsdoc/require-property": 1, // Recommended
        "jsdoc/require-property-description": 1, // Recommended
        "jsdoc/require-property-name": 1, // Recommended
        "jsdoc/require-property-type": 1, // Recommended
        "jsdoc/require-returns": 1, // Recommended
        "jsdoc/require-returns-check": 1, // Recommended
        "jsdoc/require-returns-description": 1, // Recommended
        "jsdoc/require-returns-type": 1, // Recommended
        "jsdoc/require-template": 1,
        "jsdoc/require-throws": 1,
        "jsdoc/require-yields": 1, // Recommended
        "jsdoc/require-yields-check": 1, // Recommended
        "jsdoc/sort-tags": 1,
        "jsdoc/tag-lines": 1, // Recommended
        "jsdoc/valid-types": 1 // Recommended
    }
}
```

Or you can simply add the following to [.eslintrc.*](https://eslint.org/docs/user-guide/configuring#configuration-file-formats),
which enables the rules commented above as "recommended":


```json
{
  "extends": ["plugin:jsdoc/recommended"]
}
```

You can then selectively add to or override the recommended rules.

Alternatively, if you wish to have all linting issues reported
as failing errors, you may use the "recommended-error" config:

```json
{
  "extends": ["plugin:jsdoc/recommended-error"]
}
```

If you plan to use TypeScript syntax (and not just "typescript"
`mode` to indicate the JSDoc flavor is TypeScript), you can use:

```json
{
  "extends": ["plugin:jsdoc/recommended-typescript"]
}
```

...or to report with failing errors instead of mere warnings:

```json
{
  "extends": ["plugin:jsdoc/recommended-typescript-error"]
}
```

If you are not using TypeScript syntax (your source files are still `.js` files)
but you are using the TypeScript flavor within JSDoc (i.e., the default
"typescript" `mode` in `eslint-plugin-jsdoc`) and you are perhaps using
`allowJs` and `checkJs` options of TypeScript's `tsconfig.json`), you may
use:

```json
{
  "extends": ["plugin:jsdoc/recommended-typescript-flavor"]
}
```

...or to report with failing errors instead of mere warnings:

```json
{
  "extends": ["plugin:jsdoc/recommended-typescript-flavor-error"]
}
```

<a name="user-content-eslint-plugin-jsdoc-options"></a>
<a name="eslint-plugin-jsdoc-options"></a>
## Options

Rules may, as per the [ESLint user guide](https://eslint.org/docs/user-guide/configuring), have their own individual options. In `eslint-plugin-jsdoc`, a few options,
such as, `exemptedBy` and `contexts`, may be used across different rules.

`eslint-plugin-jsdoc` options, if present, are generally in the form of an
object supplied as the second argument in an array after the error level
(any exceptions to this format are explained within that rule's docs).

```js
// `.eslintrc.js`
{
  rules: {
    'jsdoc/require-example': [
        // The Error level should be `error`, `warn`, or `off` (or 2, 1, or 0)
        'error',
        // The options vary by rule, but are generally added to an options
        //  object as follows:
        {
          checkConstructors: true,
          exemptedBy: ['type']
        }
    ]
  }
}
```

<a name="user-content-eslint-plugin-jsdoc-settings"></a>
<a name="eslint-plugin-jsdoc-settings"></a>
## Settings

See [Settings](./docs/settings.md#readme).

<a name="user-content-eslint-plugin-jsdoc-advanced"></a>
<a name="eslint-plugin-jsdoc-advanced"></a>
## Advanced

See [Advanced](./docs/advanced.md#readme).

<a name="user-content-eslint-plugin-jsdoc-processors"></a>
<a name="eslint-plugin-jsdoc-processors"></a>
## Processors

See our `@example` and other item [processors](./docs/processors.md#readme).

<a name="user-content-eslint-plugin-jsdoc-rules"></a>
<a name="eslint-plugin-jsdoc-rules"></a>
## Rules

Problems reported by rules which have a wrench :wrench: below can be fixed automatically by running ESLint on the command line with `--fix` option.

Note that a number of fixable rules have an `enableFixer` option which can
be set to `false` to disable the fixer (or in the case of `check-param-names`,
`check-property-names`, and `no-blank-blocks`, set to `true` to enable a
non-default-recommended fixer).

|recommended|fixable|rule|description|
|-|-|-|-|
|:heavy_check_mark:|| [check-access](./docs/rules/check-access.md#readme) | Enforces valid `@access` tags|
|:heavy_check_mark:|:wrench:| [check-alignment](./docs/rules/check-alignment.md#readme)|Enforces alignment of JSDoc block asterisks|
|||[check-examples](./docs/rules/check-examples.md#readme)|Linting of JavaScript within `@example`|
|||[check-indentation](./docs/rules/check-indentation.md#readme)|Checks for invalid padding inside JSDoc blocks|
||:wrench:|[check-line-alignment](./docs/rules/check-line-alignment.md#readme)|Reports invalid alignment of JSDoc block lines.|
|:heavy_check_mark:|:wrench:|[check-param-names](./docs/rules/check-param-names.md#readme)|Checks for dupe `@param` names, that nested param names have roots, and that parameter names in function declarations match jsdoc param names.|
|:heavy_check_mark:|:wrench:|[check-property-names](./docs/rules/check-property-names.md#readme)|Checks for dupe `@property` names, that nested property names have roots|
|||[check-syntax](./docs/rules/check-syntax.md#readme)|Reports use against current mode (currently only prohibits Closure-specific syntax)|
|:heavy_check_mark:|:wrench:|[check-tag-names](./docs/rules/check-tag-names.md#readme)|Reports invalid jsdoc (block) tag names|
| || [check-template-names](./docs/rules/check-template-names.md#readme)|Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
|:heavy_check_mark:|:wrench:|[check-types](./docs/rules/check-types.md#readme)|Reports types deemed invalid (customizable and with defaults, for preventing and/or recommending replacements)|
|:heavy_check_mark:||[check-values](./docs/rules/check-values.md#readme)|Checks for expected content within some miscellaneous tags (`@version`, `@since`, `@license`, `@author`)|
| || [convert-to-jsdoc-comments](./docs/rules/convert-to-jsdoc-comments.md#readme) | Converts line and block comments preceding or following specified nodes into JSDoc comments|
|:heavy_check_mark:|:wrench:|[empty-tags](./docs/rules/empty-tags.md#readme)|Checks tags that are expected to be empty (e.g., `@abstract` or `@async`), reporting if they have content|
|:heavy_check_mark:||[implements-on-classes](./docs/rules/implements-on-classes.md#readme)|Prohibits use of `@implements` on non-constructor functions (to enforce the tag only being used on classes/constructors)|
|||[informative-docs](./docs/rules/informative-docs.md#readme)|Reports on JSDoc texts that serve only to restate their attached name.|
|||[match-description](./docs/rules/match-description.md#readme)|Defines customizable regular expression rules for your tag descriptions|
||:wrench:|[match-name](./docs/rules/match-name.md#readme)|Reports the name portion of a JSDoc tag if matching or not matching a given regular expression|
|:heavy_check_mark:|:wrench:|[multiline-blocks](./docs/rules/multiline-blocks.md#readme)|Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks|
||:wrench:|[no-bad-blocks](./docs/rules/no-bad-blocks.md#readme)|This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block|
||:wrench:|[no-blank-block-descriptions](./docs/rules/no-blank-block-descriptions.md#readme)|If tags are present, this rule will prevent empty lines in the block description. If no tags are present, this rule will prevent extra empty lines in the block description.|
||:wrench:|[no-blank-blocks](./docs/rules/no-blank-blocks.md#readme)|Reports and optionally removes blocks with whitespace only|
|:heavy_check_mark:|:wrench:|[no-defaults](./docs/rules/no-defaults.md#readme)|This rule reports defaults being used on the relevant portion of `@param` or `@default`|
|||[no-missing-syntax](./docs/rules/no-missing-syntax.md#readme)|This rule lets you report if certain always expected comment structures are missing.|
|:heavy_check_mark:|:wrench:|[no-multi-asterisks](./docs/rules/no-multi-asterisks.md#readme)|Prevents use of multiple asterisks at the beginning of lines|
|||[no-restricted-syntax](./docs/rules/no-restricted-syntax.md#readme)|Reports when certain comment structures are present|
|On in TS|:wrench:|[no-types](./docs/rules/no-types.md#readme)|Prohibits types on `@param` or `@returns` (redundant with TypeScript)|
|:heavy_check_mark: (off in TS and TS flavor)||[no-undefined-types](./docs/rules/no-undefined-types.md#readme)|Besides some expected built-in types, prohibits any types not specified as globals or within `@typedef` |
||:wrench:|[require-asterisk-prefix](./docs/rules/require-asterisk-prefix.md#readme)|Requires that each JSDoc line starts with an `*`|
|||[require-description](./docs/rules/require-description.md#readme)|Requires that all functions (and potentially other contexts) have a description.|
||:wrench:|[require-description-complete-sentence](./docs/rules/require-description-complete-sentence.md#readme)|Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences|
||:wrench:|[require-example](./docs/rules/require-example.md#readme)|Requires that all functions (and potentially other contexts) have examples.|
|||[require-file-overview](./docs/rules/require-file-overview.md#readme)|By default, requires a single `@file` tag at the beginning of each linted file|
||:wrench:|[require-hyphen-before-param-description](./docs/rules/require-hyphen-before-param-description.md#readme)|Requires a hyphen before `@param` descriptions (and optionally before `@property` descriptions)|
|:heavy_check_mark:|:wrench:|[require-jsdoc](./docs/rules/require-jsdoc.md#readme)|Checks for presence of jsdoc comments, on functions and potentially other contexts (optionally limited to exports).|
|:heavy_check_mark:|:wrench:|[require-param](./docs/rules/require-param.md#readme)|Requires that all function parameters are documented with a `@param` tag.|
|:heavy_check_mark:||[require-param-description](./docs/rules/require-param-description.md#readme)|Requires that each `@param` tag has a `description` value.|
|:heavy_check_mark:||[require-param-name](./docs/rules/require-param-name.md#readme)|Requires that all `@param` tags have names.|
|:heavy_check_mark: (off in TS)||[require-param-type](./docs/rules/require-param-type.md#readme)|Requires that each `@param` tag has a type value (within curly brackets).|
|:heavy_check_mark:|:wrench:|[require-property](./docs/rules/require-property.md#readme)|Requires that all `@typedef` and `@namespace` tags have `@property` tags when their type is a plain `object`, `Object`, or `PlainObject`.|
|:heavy_check_mark:||[require-property-description](./docs/rules/require-property-description.md#readme)|Requires that each `@property` tag has a `description` value.|
|:heavy_check_mark:||[require-property-name](./docs/rules/require-property-name.md#readme)|Requires that all `@property` tags have names.|
|:heavy_check_mark: (off in TS)||[require-property-type](./docs/rules/require-property-type.md#readme)|Requires that each `@property` tag has a type value (within curly brackets).|
|:heavy_check_mark:||[require-returns](./docs/rules/require-returns.md#readme)|Requires that return statements are documented.|
|:heavy_check_mark:||[require-returns-check](./docs/rules/require-returns-check.md#readme)|Requires a return statement be present in a function body if a `@returns` tag is specified in the jsdoc comment block (and reports if multiple `@returns` tags are present).|
|:heavy_check_mark:||[require-returns-description](./docs/rules/require-returns-description.md#readme)|Requires that the `@returns` tag has a `description` value (not including `void`/`undefined` type returns).|
|:heavy_check_mark: (off in TS)||[require-returns-type](./docs/rules/require-returns-type.md#readme)|Requires that `@returns` tag has a type value (in curly brackets).|
| || [require-template](./docs/rules/require-template.md#readme) | Requires `@template` tags be present when type parameters are used.|
|||[require-throws](./docs/rules/require-throws.md#readme)|Requires that throw statements are documented|
|:heavy_check_mark:||[require-yields](./docs/rules/require-yields.md#readme)|Requires that yields are documented|
|:heavy_check_mark:||[require-yields-check](./docs/rules/require-yields-check.md#readme)|Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the function body (or that if a `@next` is present that there is a `yield` with a return value present)|
|||[sort-tags](./docs/rules/sort-tags.md#readme)|Sorts tags by a specified sequence according to tag name, optionally adding line breaks between tag groups|
|:heavy_check_mark:|:wrench:|[tag-lines](./docs/rules/tag-lines.md#readme)|Enforces lines (or no lines) between tags|
||:wrench:|[text-escaping](./docs/rules/text-escaping.md#readme)|This rule can auto-escape certain characters that are input within block and tag descriptions|
|:heavy_check_mark:||[valid-types](./docs/rules/valid-types.md#readme)|Requires all types/namepaths to be valid JSDoc, Closure compiler, or TypeScript types (configurable in settings)|
