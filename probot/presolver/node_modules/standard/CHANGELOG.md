# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 10.0.3 - 2017-08-06

- Internal changes (incremented dependency versions)

## 10.0.2 - 2017-04-14

### Changed rules

- Relax rule: Disallow import of modules using absolute paths ([import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)) [#861](https://github.com/standard/standard/issues/861)
  - This rule was responsible for up to 25% of the running time of `standard`, so we are disabling it until its performance improves.

## 10.0.1 - 2017-04-06

- Internal changes (incremented dependency versions)

## 10.0.0 - 2017-04-04

**`standard` just turned 10.0.0!** 🎉

As with every new major release, there are lots of new rules in 10.0.0 designed to
help catch bugs and make programmer intent more explicit.

`standard` is more popular than ever – **330,000 downloads per month!** It's even
more popular – **670,000 downloads per month** – if you include the
[shareable ESLint config](https://www.npmjs.com/package/eslint-config-standard)
that we also publish.

The most important change in 10.0.0 is that **using deprecated Node.js APIs is now
considered an error**. It's finally time to update those dusty old APIs!

Deprecated APIs are problematic because they may print warning messages in the
console in recent versions of Node.js. This often confuses users and leads to
unnecessary support tickets for project maintainers.

Some deprecated APIs are even insecure (or at least prone to incorrect usage) which
can have serious security implications. For that reason, `standard` now considers
usage of `Buffer(num)` to be an error, since this function returns uninitialized
program memory which could contain confidential information like passwords or keys.

Instead of `Buffer(num)`, consider using `Buffer.alloc(num)` or `Buffer.from(obj)`
which make the programmer's intent clearer. These functions exist in all currently
supported versions of Node.js, including Node.js 4.x. For more background,
[see this Node.js issue](https://github.com/nodejs/node/issues/4660).

We also improved some rules to support common patterns in code bases that use
React, JSX, and Flow.

When you upgrade, consider running `standard --fix` to automatically fix some of
the issues caught by this new version.

### New features

- Update ESLint from 3.15.x to 3.19.x.
- Node.js API: Add `standard.lintTextSync` method

### New rules

*(Estimated % of affected standard users, based on test suite in parens)*

- Disallow using deprecated Node.js APIs ([node/no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)) [#693](https://github.com/standard/standard/issues/693) (13%)
  - Ensures that code always runs without warnings on the latest versions of Node.js
  - Ensures that safe Buffer methods (`Buffer.from()`, `Buffer.alloc()`) are used instead of `Buffer()`
- Enforce callbacks always called with Node.js-style error first ([standard/no-callback-literal](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)) [#623](https://github.com/standard/standard/issues/623) (3%)
  - Functions named `callback` or `cb` must be invoked with `null`, `undefined`, or an `Error` as the first argument
  - Disallows using a string instead of an `Error` object
  - Disallows confusing callbacks that do not follow the standard Node.js pattern
- Disallow any imports that come after non-import statements ([import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)) [#806](https://github.com/standard/standard/issues/806) (1%)
- Disallow unnecessary return await ([no-return-await](http://eslint.org/docs/rules/no-return-await)) [#695](https://github.com/standard/standard/issues/695) (0%)
- Disallow comma-dangle in functions ([comma-dangle](http://eslint.org/docs/rules/comma-dangle)) [#787](https://github.com/standard/standard/issues/787) (0%)
- Disallow repeated exports of names or defaults ([import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)) [#806](https://github.com/standard/standard/issues/806) (0%)
- Disallow import of modules using absolute paths ([import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)) [#806](https://github.com/standard/standard/issues/806) (0%)
- Disallow Webpack loader syntax in imports ([import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)) [#806](https://github.com/standard/standard/issues/806) (0%)
- Disallow comparing against -0 ([no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero)) [#812](https://github.com/standard/standard/issues/812) (0%)

### Changed rules

- Relax rule: allow using `...rest` to omit properties from an object ([no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)) [#800](https://github.com/standard/standard/issues/800)
  - This is a common and useful pattern in React/JSX apps!
- Relax rule: allow Flow `import type` statements ([import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)) [#599](https://github.com/standard/standard/issues/599)
  - These are no longer considered to be "duplicate imports"
- Relax rule: Treat `process.exit()` the same as `throw` in code path analysis ([node/process-exit-as-throw](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md)) [#699](https://github.com/standard/standard/issues/699)
  - Makes certain other rules work better and give fewer false positives
- Relax rule: allow Unnecessary Labels ([no-extra-label](http://eslint.org/docs/rules/no-extra-label))
  - Redundant, since "no-labels" is already enabled, which is more restrictive

## 9.0.2 - 2017-03-17

### Changed rules

- Relax rule: Allow tagged template string expressions ([no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)) [#822](https://github.com/standard/standard/issues/822)

## 9.0.1 - 2017-03-07

### Changed rules

- Relax rule: Allow mixing basic operators without parens ([no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators)) [#816](https://github.com/standard/standard/issues/816)
  - Specifically, these operators: `+`, `-`, `*`, `/`, `%`, and `**`

## 9.0.0 - 2017-02-28

It's time for a new major version of `standard`! As usual, this release contains a
bunch of awesomeness to help you keep your code in tip-top shape!

We've added several new rules designed to **catch potential programmer errors**
(i.e. bugs), as well as rules to make programmer intent **more explicit** in
certain circumstances.

This release continues our trend of tightening up rules so that, wherever possible,
there's one "right" way to do things. This design goal is intended to reduce the
time that teams and maintainers spend giving code review feedback in pull requests.

When you upgrade, consider running `standard --fix` to automatically fix some of the
errors caught by the new rules in this version.

*Note: If you use the Chai test framework, you will need to make some changes to
your tests to improve their robustness. [Read about the changes you need to make](https://github.com/standard/standard/issues/690#issuecomment-278533482).*

### New features

- Update ESLint from 3.10.x to 3.15.x
- 3 additional rules are now fixable with `standard --fix`

### New rules

*(Estimated % of affected standard users, based on test suite in parens)*

- Disallow mixing different operators without parens ([no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators)) [#566](https://github.com/standard/standard/issues/566) (5%)
- Enforce 1 newline at end of file (previously 1 or 2 were ok) ([no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)) [#733](https://github.com/standard/standard/issues/733) (3%)
- Disallow Unused Expressions ([no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)) [#690](https://github.com/standard/standard/issues/690) (3%)
  - Note: this affects users of the Chai test framework. [Read about the changes you need to make](https://github.com/standard/standard/issues/690#issuecomment-278533482).
- Disallow redundant return statements ([no-useless-return](http://eslint.org/docs/rules/no-useless-return)) [#694](https://github.com/standard/standard/issues/694) (1%)
- Disallow Incorrect Early Use ([no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)) [#636](https://github.com/standard/standard/issues/636) (0%)
- Enforce that Promise rejections are passed an Error object as a reason ([prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors)) [#777](https://github.com/standard/standard/issues/777) (0%)
- Enforce comparing `typeof` expressions against string literals ([valid-typeof](http://eslint.org/docs/rules/valid-typeof)) [#629](https://github.com/standard/standard/issues/629) (0%)
- Enforce spacing around * in generator functions ([generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)) [#724](https://github.com/standard/standard/issues/724) (0%)
- Disallow Unnecessary Labels ([no-extra-label](http://eslint.org/docs/rules/no-extra-label)) [#736](https://github.com/standard/standard/issues/736) (0%)
- Disallow spacing between template tags and their literals ([template-tag-spacing](http://eslint.org/docs/rules/template-tag-spacing)) [#755](https://github.com/standard/standard/issues/775) (0%)
- Disallow padding within switch statements and classes ([padded-blocks](http://eslint.org/docs/rules/padded-blocks)) [#610](https://github.com/standard/standard/issues/610) (0%)
- Enforce that Symbols are passed a description ([symbol-description](http://eslint.org/docs/rules/symbol-description)) [#630](https://github.com/standard/standard/issues/630) (0%)

### Changed rules

- Relax rule: allow TypeScript Triple-Slash Directives ([spaced-comment](http://eslint.org/docs/rules/spaced-comment)) [#660](https://github.com/standard/standard/issues/660)
- Relax rule: allow Flow Comments ([spaced-comment](http://eslint.org/docs/rules/spaced-comment)) [#661](https://github.com/standard/standard/issues/661)

## 8.6.0 - 2016-11-22

- Update ESLint from 3.8.x to 3.10.x
- 3 additional rules are now fixable with `standard --fix`

## 8.5.0 - 2016-10-25

- Update ESLint from 3.7.x to 3.8.x
- 2 additional rules are now fixable with `standard --fix`

## 8.4.0 - 2016-10-10

- Update ESLint from 3.6.x to 3.7.x
- 5 additional rules are now fixable with `standard --fix`
- Use more conservative semver ranges [#654](https://github.com/standard/standard/issues/654)

## 8.3.0 - 2016-09-29

The last release (`8.2.0`) added ES7 support. This release (`8.3.0`) adds ES8
support ...just 3 days later!

This release should eliminate the need to specify `babel-eslint` as a custom
parser, since `standard` can now parse ES8 (i.e. ES2017) syntax out of the box.
That means `async` and `await` will just work.

- Support ES8 (i.e. ES2017) syntax.

## 8.2.0 - 2016-09-26

For many users, this release should eliminate the need to specify `babel-eslint` as
a custom parser, since `standard` can now parse ES7 (i.e. ES2016) syntax out of the
box.

- Support ES7 (i.e. ES2016) syntax.
- Update ESLint from 3.5.x to 3.6.x
- 4 additional rules are now fixable with `standard --fix`

## 8.1.0 - 2016-09-17

- Update ESLint from 3.3.x to 3.5.x
- Around 10 additional rules are now fixable with `standard --fix`

## 8.0.0 - 2016-08-23

This release contains a bunch of goodies, including new rules that catch potential
programmer errors (i.e. bugs) and enforce additional code consistency.

However, the best feature is surely the new `--fix` command line flag to
automatically fix problems. If you ever used
[`standard-format`](https://www.npmjs.com/package/standard-format)
and ran into issues with the lack of ES2015+ support, you'll be happy about
`--fix`.

`standard --fix` is built into `standard` v8.0.0 for maximum convenience, it
supports ES2015, and it's lightweight (no additional dependencies since it's part
of ESLint which powers `standard`). Lots of problems are already fixable, and more
are getting added with each ESLint release.

`standard` also outputs a message ("Run `standard --fix` to automatically fix
some problems.") when it detects problems that can be fixed automatically so you
can save time!

With `standard` v8.0.0, we are also dropping support for Node.js versions prior to
v4. Node.js 0.10 and 0.12 are in maintenance mode and will be unsupported at the
end of 2016. Node.js 4 is the current LTS version. If you are using an older
version of Node.js, we recommend upgrading to at least Node.js 4 as soon as
possible. If you are unable to upgrade to Node.js 4 or higher, then we recommend
continuing to use `standard` v7.x until you are ready to upgrade Node.js.

**Important:** We will not be updating the `standard` v7.x versions going forward.
All bug fixes and enhancements will land in `standard` v8.x.

Full changelog below. Cheers!

### New features

- Upgrade to ESLint v3 (http://eslint.org/docs/user-guide/migrating-to-3.0.0) [#565](https://github.com/standard/standard/pull/565)
  - **BREAKING:** Drop support for node < 4 (this was a decision made by the ESLint team)
- Expose ESLint's `--fix` command line flag [#540](https://github.com/standard/standard/issues/540) [standard-engine/#107](https://github.com/Flet/standard-engine/issues/107)
  - Lightweight, no additional dependencies, fixes dozens of rules automatically

### New rules

*(Estimated % of affected standard users, based on test suite in parens)*

- Enforce placing object properties on separate lines ([object-property-newline](http://eslint.org/docs/rules/object-property-newline)) [#524](https://github.com/standard/standard/issues/524) (2%)
- Require block comments to be balanced ([spaced-comment "balanced"](http://eslint.org/docs/rules/spaced-comment)) [#572](https://github.com/standard/standard/issues/572) (2%)
- Disallow constant expressions in conditions ([no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)) [#563](https://github.com/standard/standard/issues/563) (1%)
- Disallow renaming import, export, and destructured assignments to the same name ([no-useless-rename](http://eslint.org/docs/rules/no-useless-rename)) [#537](https://github.com/standard/standard/issues/537) (0%)
- Disallow spacing between rest and spread operators and their expressions ([rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing)) [#567](https://github.com/standard/standard/issues/567) (0%)
- Disallow the Unicode Byte Order Mark (BOM) ([unicode-bom](http://eslint.org/docs/rules/unicode-bom)) [#538](https://github.com/standard/standard/issues/538) (0%)
- Disallow assignment to native objects/global variables ([no-global-assign](http://eslint.org/docs/rules/no-global-assign)) [#596](https://github.com/standard/standard/issues/596) (0%)
- Disallow negating the left operand of relational operators ([no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)) [#595](https://github.com/standard/standard/issues/595) (0%)
- Disallow template literal placeholder syntax in regular strings ([no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)) [#594](https://github.com/standard/standard/issues/594) (0%)
- Disallow tabs in file ([no-tabs](http://eslint.org/docs/rules/no-tabs)) [#593](https://github.com/standard/standard/issues/593) (0%)

### Changed rules

- Relax rule: Allow template literal strings (backtick strings) to avoid escaping  [#421](https://github.com/standard/standard/issues/421)
- Relax rule: Do not enforce spacing around * in generator functions (https://github.com/standard/standard/issues/564#issuecomment-234699126)
  - This is a temporary workaround for `babel` users who use async generator functions.

## 7.1.2 - 2016-06-03

- Fix install errors for some users by updating eslint peer dependency

## 7.1.1 - 2016-05-26

- Add back full node 0.10, 0.12 support

## 7.1.0 - 2016-05-16

- Upgrade eslint to version ~2.10.2

## 7.0.1 - 2016-05-04

- Relax "no-duplicate-imports" rule to not include `export` so the following is allowed:

```js
import { foo } from 'bar'
export * from 'bar'
```

## 7.0.0 - 2016-05-02

### Changes

- Upgrade eslint to version ~2.9.0
- Remove "rules" configuration option [#367](https://github.com/standard/standard/issues/367) from `package.json` (Reasoning is [here](https://github.com/standard/standard/issues/399#issuecomment-180961891))

### New rules

*Estimated % of affected standard users, based on test suite*

- Require camelCase ([camelcase](http://eslint.org/docs/rules/camelcase)) [4%]
- Disallow unnecessary escape usage ([no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)) [4% -- but, including many bugs]
- Disallow duplicate imports ([no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)) [0%]
- Disallow unmodified conditions of loops ([no-unmodified-loop-condition](http://eslint.org/docs/2.0.0/rules/no-unmodified-loop-condition)) [0%]
- Disallow whitespace before properties ([no-whitespace-before-property](http://eslint.org/docs/2.0.0/rules/no-whitespace-before-property)) [0%]
- Disallow control flow statements in `finally` blocks ([no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)) [0%]
- Disallow unnecessary computed property keys on objects ([no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key)) [0%]
- Validate spacing before closing bracket in JSX ([react/jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)) [0%]

### Removed rules

- Require parens in arrow function arguments ([arrow-parens](http://eslint.org/docs/rules/arrow-parens))

## 6.0.8 - 2016-03-07

- Pin eslint to version ~2.2.0
- Update eslint-plugin-react to version 4.0.0

## 6.0.7 - 2016-02-18

- Revert: Use install location of standard as eslint `cwd` (fixes [#429](https://github.com/standard/standard/issues/429))

## 6.0.6 - 2016-02-18

- Use eslint 2.1.0
- Fix: Use install location of standard as eslint `cwd` (fixes [snazzy/#8](https://github.com/standard/snazzy/issues/8))

## 6.0.5 - 2016-02-12

- Use eslint 2.0.0 stable

## 6.0.4 - 2016-02-07

- Relax rule: Validate closing bracket location in JSX ([jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md))

## 6.0.3 - 2016-02-06

- Fix "Error: Cannot find module 'eslint-config-standard-jsx'" with npm 2 (node 0.10, 0.12, 4)

## 6.0.2 - 2016-02-06

- Internal change: Remove .eslintrc file, and use inline config

## 6.0.1 - 2016-02-05

- Internal change: Move .eslintrc file to root folder

## 6.0.0 - 2016-02-05

The goal of this release is to make `standard` faster to install, and simpler to use.

### Remove `standard-format` ([#340](https://github.com/standard/standard/issues/340)) ([#397](https://github.com/standard/standard/issues/397))

- Eliminates 250 packages, and cuts install time in half!
- For npm 2, install time goes from 20 secs —> 10 secs.
- For npm 3, install time goes from 24 secs —> 12 secs.
- To continue using `standard-format`, just install it separately: `npm install -g standard-format`

### React-specific linting rules are removed ([#351](https://github.com/standard/standard/issues/351)) ([#367](https://github.com/standard/standard/issues/367)) ([eslint-config-standard-react/#13](https://github.com/standard/eslint-config-standard-react/pull/13))

- JSX is still supported, and it continues to be checked for style.
- There were only a few React-specific rules, but they made it extremely difficult for users of alternatives like `virtual-dom` or `deku`, and unecessarily tied `standard` to a single library.
- JSX rules come from `eslint-config-standard-jsx`. The `eslint-config-standard-react` dependency was removed.

### New Rules

*The percentage (%) of users that rule changes will effect, based on real-world testing of the top ~400 npm packages is denoted in brackets.*

- Disallow `__dirname`/`__filename` string concatenation ([#403](https://github.com/standard/standard/issues/403)) ([no-path-concat](http://eslint.org/docs/2.0.0/rules/no-path-concat)) [5%]
- Require parens in arrow function arguments  ([#309](https://github.com/standard/standard/issues/309)) ([arrow-parens](http://eslint.org/docs/2.0.0/rules/arrow-parens.html)) [5%]
- Ensure that `new Promise()` is instantiated with the parameter names
`resolve`, `reject` ([#282](https://github.com/standard/standard/issues/282)) ([promise/param-names](https://github.com/xjamundx/eslint-plugin-promise#param-names)) [1%]
- Enforce Usage of Spacing in Template Strings ([template-curly-spacing](http://eslint.org/docs/2.0.0/rules/template-curly-spacing)) [1%]
- Template strings are only allowed when necessary, i.e. template string features are being used (eslint got stricter: https://github.com/eslint/eslint/issues/5147) [1%]
- Better dead code detection after conditional statements (eslint got stricter) [1%]
- Enforce spaces around `*` in `yield * something` ([#335](https://github.com/standard/standard/issues/335)) ([yield-star-spacing](http://eslint.org/docs/2.0.0/rules/yield-star-spacing)) [0%]
- Disallow labels on loops/switch statements too (made rule stricter) ([no-labels](http://eslint.org/docs/2.0.0/rules/no-labels.html)) [0%]
- Disallow unnecessary constructor ([no-useless-constructor](http://eslint.org/docs/2.0.0/rules/no-useless-constructor)) [0%]
- Disallow empty destructuring patterns ([no-empty-pattern](http://eslint.org/docs/2.0.0/rules/no-empty-pattern)) [0%]
- Disallow Symbol Constructor ([no-new-symbol](http://eslint.org/docs/2.0.0/rules/no-new-symbol)) [0%]
- Disallow Self Assignment ([no-self-assign](http://eslint.org/docs/2.0.0/rules/no-self-assign)) [0%]

### Removed Rules

- `parseInt()` radix rule because ES5 fixes this issue ([#384](https://github.com/standard/standard/issues/384))  ([radix](http://eslint.org/docs/2.0.0/rules/radix.html)) [0%]

### Expose eslint configuration via command line options and `package.json`

For power users, it might be easier to use one of these new hooks instead of forking
`standard`, though that's still encouraged, too!

- Set eslint "plugins" ([#386](https://github.com/standard/standard/issues/386))
- Set eslint "rules" ([#367](https://github.com/standard/standard/issues/367))
- Set eslint "env" ([#371](https://github.com/standard/standard/issues/371))

To set custom ESLint plugins, rules, or envs, use the command line `--plugin`, `--rules`, and `--env` flags.

In `package.json`, use the "standard" property:

```json
{
  "standard": {
    "plugins": [ "my-plugin" ]
  }
}
```

### Upgrade to ESLint v2
- There may be slight behavior changes to existing rules. When possible, we've noted these in the "New Rules" and "Removed Rules" section.

### Improve test suite

- Rule changes can be tested against every package on npm. For sanity, this is limited to packages with at least 4 dependents. Around ~400 packages.

### Known Issues

- Using prerelease eslint version (2.0.0-rc.0). There may be breaking changes before the stable release.
- `no-return-assign` behavior changed with arrow functions (https://github.com/eslint/eslint/issues/5150)

### Relevant diffs

- standard ([v5.4.1...v6.0.0](https://github.com/standard/standard/compare/v5.4.1...v6.0.0))
- eslint-config-standard ([v4.4.0...v5.0.0](https://github.com/standard/eslint-config-standard/compare/v4.4.0...v5.0.0))
- eslint-config-standard-jsx ([v1.0.0](https://github.com/standard/eslint-config-standard-jsx/commit/47d5e248e2e078eb87619493999e3e74d4b7e70e))
- standard-engine ([v2.2.4...v3.2.1](https://github.com/Flet/standard-engine/compare/v2.2.4...v3.2.1))

## 5.4.1 - 2015-11-16
[view diff](https://github.com/standard/standard/compare/v5.4.0...v5.4.1)

### Fixed

* Fix for `standard-engine` change. Fix error tagline.

## 5.4.0 - 2015-11-16
[view diff](https://github.com/standard/standard/compare/v5.3.1...v5.4.0)

### Added

* eslint-config-standard-react@1.2.0 ([history](eslint-config-standard-react))
  * Disallow duplicate JSX properties

## 5.3.1 - 2015-09-18
[view diff](https://github.com/standard/standard/compare/v5.3.0...v5.3.1)

### Changed
* eslint-plugin-react@3.4.2 ([history](eslint-plugin-react))

## 5.3.0 - 2015-09-16
[view diff](https://github.com/standard/standard/compare/v5.2.2...v5.3.0)

### Changed
* eslint-config-standard@4.4.0 ([history][eslint-config-standard])
  * **New rule:** must have space after semicolon in for-loop ([commit](https://github.com/standard/eslint-config-standard/commit/6e5025eef8900f686e19b4a31836743d98323119))
  * **New rule:** No default assignment with ternary operator ([commit](https://github.com/standard/eslint-config-standard/commit/0903c19ca6a8bc0c8625c41ca844ee69968bf948))
  * **New rule:** Require spaces before keywords ([commit](https://github.com/standard/eslint-config-standard/commit/656ba93cda9cd4ab38e032649aafb795993d5176))
* eslint-config-standard-react@1.1.0 ([history][eslint-config-standard-react])
* eslint-plugin-react@3.4.0 ([history][eslint-plugin-react])
* eslint-plugin-standard@1.3.1 ([history][eslint-plugin-standard])

## 5.2.2
[view diff](https://github.com/standard/standard/compare/v5.2.1...v5.2.2)

### Fixed
* We have a changelog now, and you're reading it!
* Minor README update
* Removed direct dependency on `eslint` (its now moved to [standard-engine](https://github.com/flet/standard-engine))

## 5.2.1 - 2015-09-03
[view diff](https://github.com/standard/standard/compare/v5.2.0...v5.2.1)

### Changed
* eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  * **Revert rule**: Disallow unncessary concatenation of strings

### Fixed
* eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  * fix regression with ternary operator handling

## 5.2.0 - 2015-09-03
[view diff](https://github.com/standard/standard/compare/v5.1.1...v5.2.0)

### Added
* eslint-config-standard@4.3.0 ([history][eslint-config-standard])
  * **New rule:** Disallow unncessary concatenation of strings
  * **New rule:** Disallow duplicate name in class members
  * **New rule:** enforce spaces inside of single line blocks
  * **Re-add rule:** padded-blocks ([Closes #170](https://github.com/standard/standard/issues/170))

### Changed
* Bump `eslint` from 1.1.0 to 1.3.1 ([CHANGELOG][eslint])
* eslint-plugin-standard@1.3.0 ([history][eslint-plugin-standard])
  * A small change to make the plugin compatible with browserify which does not affect behavior.

### Fixed
* eslint-plugin-react@3.3.1 ([CHANGELOG][eslint-plugin-react])
  * Fix object rest/spread handling.
* Added white background to badge.svg to make it work with dark backgrounds ([Closes #234](https://github.com/standard/standard/issues/234))
* Minor updates to README.md

## 5.1.1 - 2015-08-28
[view diff](https://github.com/standard/standard/compare/v5.1.0...v5.1.1)

### Fixed
* Update to RULES.md to remove a missing hyperlink
* Add atom linter information to README.md
* Fixed duplicated word in the tagline message on the CLI
* Removed failing repository from tests (yoshuawuyts/initialize)

## 5.1.0 - 2015-08-14
[view diff](https://github.com/standard/standard/compare/v5.0.2...v5.1.0)

## Fixed
* eslint-config-standard@4.1.0 ([history][eslint-config-standard])
  * Added rest/spread feature to `eslintrc.json` to fix [#226](https://github.com/standard/standard/issues/226) and [eslint-plugin-standard#3](https://github.com/xjamundx/eslint-plugin-standard/issues/3)
* eslint-plugin-react@3.2.2 ([CHANGELOG][eslint-plugin-react])
  * Fix crash when propTypes don't have any parent
  * Fix jsx-no-literals reporting errors outside JSX

### Changed
* Bump eslint from 1.0.0 to 1.2.0 ([CHANGELOG][eslint])
* Added more test repositories and disabled some that were failing
* Update bikeshedding link on README.md

## 5.0.2 - 2015-08-06
[view diff](https://github.com/standard/standard/compare/v5.0.1...v5.0.2)

### Changed
* eslint-config-standard-react@1.0.4 ([history][eslint-config-standard-react])
  - **Disable Rule:** react/wrap-multilines
* Minor README updates

## 5.0.1 - 2015-08-05
[view diff](https://github.com/standard/standard/compare/v5.0.0...v5.0.1)

## 5.0.0 - 2015-08-03
[view diff](https://github.com/standard/standard/compare/v4.5.4...v5.0.0)

## 4.5.4 - 2015-07-13
[view diff](https://github.com/standard/standard/compare/v4.5.3...v4.5.4)

## 4.5.3 - 2015-07-10
[view diff](https://github.com/standard/standard/compare/v4.5.2...v4.5.3)

## 4.5.2 - 2015-07-02
[view diff](https://github.com/standard/standard/compare/v4.5.1...v4.5.2)

## 4.5.1 - 2015-06-30
[view diff](https://github.com/standard/standard/compare/v4.5.0...v4.5.1)

## 4.5.0 - 2015-06-30
[view diff](https://github.com/standard/standard/compare/v4.4.1...v4.5.0)

## 4.4.1 - 2015-06-29
[view diff](https://github.com/standard/standard/compare/v4.4.0...v4.4.1)

## 4.4.0 - 2015-06-27
[view diff](https://github.com/standard/standard/compare/v4.3.3...v4.4.0)

## 4.3.3 - 2015-06-26
[view diff](https://github.com/standard/standard/compare/v4.3.2...v4.3.3)

## 4.3.2 - 2015-06-23
[view diff](https://github.com/standard/standard/compare/v4.3.1...v4.3.2)

## 4.3.1 - 2015-06-18
[view diff](https://github.com/standard/standard/compare/v4.3.0...v4.3.1)

## 4.3.0 - 2015-06-16
[view diff](https://github.com/standard/standard/compare/v4.2.1...v4.3.0)

## 4.2.1 - 2015-06-12
[view diff](https://github.com/standard/standard/compare/v4.2.0...v4.2.1)

## 4.2.0 - 2015-06-11
[view diff](https://github.com/standard/standard/compare/v4.1.1...v4.2.0)

## 4.1.1 - 2015-06-11
[view diff](https://github.com/standard/standard/compare/v4.1.0...v4.1.1)

## 4.1.0 - 2015-06-10
[view diff](https://github.com/standard/standard/compare/v4.0.1...v4.1.0)

## 4.0.1 - 2015-06-01
[view diff](https://github.com/standard/standard/compare/v4.0.0...v4.0.1)

## 4.0.0 - 2015-05-30
[view diff](https://github.com/standard/standard/compare/v3.9.0...v4.0.0)

[eslint-config-standard-react]: https://github.com/standard/eslint-config-standard-react/commits/master
[eslint-config-standard]: https://github.com/standard/eslint-config-standard/commits/master
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md
[eslint-plugin-standard]: https://github.com/xjamundx/eslint-plugin-standard/commits/master
[eslint]: https://github.com/eslint/eslint/blob/master/CHANGELOG.md
