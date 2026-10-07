# markdownlint

> A Node.js style checker and lint tool for Markdown/CommonMark files.

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

## Install

```bash
npm install markdownlint --save-dev
```

## Overview

The [Markdown][markdown] markup language is designed to be easy to read, write,
and understand. It succeeds - and its flexibility is both a benefit and a
drawback. Many styles are possible, so formatting can be inconsistent; some
constructs don't work well in all parsers and should be avoided.

`markdownlint` is a [static analysis][static-analysis] tool for
[Node.js][nodejs] with a library of rules to enforce standards and consistency
for Markdown files. It was inspired by - and heavily influenced by - Mark
Harrison's [markdownlint][markdownlint-ruby] for Ruby. The initial rules, rule
documentation, and test cases came from that project.

`markdownlint` uses the [`micromark` parser][micromark] and honors the
[CommonMark][commonmark] specification for Markdown. It additionally supports
popular [GitHub Flavored Markdown (GFM)][gfm] syntax like autolinks and tables
as well as directives, footnotes, and math syntax - all implemented by
[`micromark` extensions][micromark-extensions].

[commonmark]: https://commonmark.org/
[gfm]: https://github.github.com/gfm/
[markdown]: https://en.wikipedia.org/wiki/Markdown
[markdownlint-ruby]: https://github.com/markdownlint/markdownlint
[micromark]: https://github.com/micromark/micromark
[micromark-extensions]: https://github.com/micromark/micromark?tab=readme-ov-file#list-of-extensions
[nodejs]: https://nodejs.org/
[static-analysis]: https://en.wikipedia.org/wiki/Static_program_analysis

### Related

- CLI
  - [markdownlint-cli][markdownlint-cli] command-line interface for Node.js
    ([works with pre-commit][markdownlint-cli-precommit])
  - [markdownlint-cli2][markdownlint-cli2] command-line interface for Node.js
    ([works with pre-commit][markdownlint-cli2-precommit])
- GitHub
  - [GitHub Action for markdownlint-cli2][markdownlint-cli2-action]
  - [GitHub Super-Linter Action][super-linter]
  - [GitHub Actions problem matcher for
    markdownlint-cli][markdownlint-problem-matcher]
- Editor
  - [vscode-markdownlint extension for VS Code][vscode-markdownlint]
  - [Sublime Text markdownlint for Sublime Text][sublimelinter]
  - [coc-markdownlint extension for Vim/Neovim][coc]
  - [flymake-markdownlint-cli2 extension for Emacs][emacs-flymake]
- Tooling
  - [eslint-plugin-markdownlint for the ESLint analyzer][eslint-plugin]
  - [grunt-markdownlint for the Grunt task runner][grunt-markdownlint]
  - [Cake.Markdownlint addin for Cake build automation system][cake]
  - [Lombiq Node.js Extensions for MSBuild (.NET builds)][nodejs-extensions]
- Ruby
  - [markdownlint/mdl gem for Ruby][rubygems-mdl]

[cake]: https://github.com/cake-contrib/Cake.Markdownlint
[coc]: https://github.com/fannheyward/coc-markdownlint
[emacs-flymake]: https://github.com/ewilderj/flymake-markdownlint-cli2
[eslint-plugin]: https://github.com/paweldrozd/eslint-plugin-markdownlint
[grunt-markdownlint]: https://github.com/sagiegurari/grunt-markdownlint
[markdownlint-cli]: https://github.com/igorshubovych/markdownlint-cli
[markdownlint-cli-precommit]: https://github.com/igorshubovych/markdownlint-cli#use-with-pre-commit
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[markdownlint-cli2-action]: https://github.com/marketplace/actions/markdownlint-cli2-action
[markdownlint-cli2-precommit]: https://github.com/DavidAnson/markdownlint-cli2#pre-commit
[markdownlint-problem-matcher]: https://github.com/xt0rted/markdownlint-problem-matcher
[nodejs-extensions]: https://github.com/Lombiq/NodeJs-Extensions
[rubygems-mdl]: https://rubygems.org/gems/mdl
[sublimelinter]: https://github.com/jonlabelle/SublimeLinter-contrib-markdownlint
[super-linter]: https://github.com/super-linter/super-linter
[vscode-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint

### References

The following specifications are considered authoritative in cases of ambiguity:

- [CommonMark](https://spec.commonmark.org/current/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

## Demonstration

[`markdownlint` demo](https://dlaa.me/markdownlint/), an interactive, in-browser
playground for learning and exploring.

## Rules / Aliases

<!-- markdownlint-disable line-length -->

- **[MD001](doc/md001.md)** *heading-increment* - Heading levels should only increment by one level at a time
- **[MD003](doc/md003.md)** *heading-style* - Heading style
- **[MD004](doc/md004.md)** *ul-style* - Unordered list style
- **[MD005](doc/md005.md)** *list-indent* - Inconsistent indentation for list items at the same level
- **[MD007](doc/md007.md)** *ul-indent* - Unordered list indentation
- **[MD009](doc/md009.md)** *no-trailing-spaces* - Trailing spaces
- **[MD010](doc/md010.md)** *no-hard-tabs* - Hard tabs
- **[MD011](doc/md011.md)** *no-reversed-links* - Reversed link syntax
- **[MD012](doc/md012.md)** *no-multiple-blanks* - Multiple consecutive blank lines
- **[MD013](doc/md013.md)** *line-length* - Line length
- **[MD014](doc/md014.md)** *commands-show-output* - Dollar signs used before commands without showing output
- **[MD018](doc/md018.md)** *no-missing-space-atx* - No space after hash on atx style heading
- **[MD019](doc/md019.md)** *no-multiple-space-atx* - Multiple spaces after hash on atx style heading
- **[MD020](doc/md020.md)** *no-missing-space-closed-atx* - No space inside hashes on closed atx style heading
- **[MD021](doc/md021.md)** *no-multiple-space-closed-atx* - Multiple spaces inside hashes on closed atx style heading
- **[MD022](doc/md022.md)** *blanks-around-headings* - Headings should be surrounded by blank lines
- **[MD023](doc/md023.md)** *heading-start-left* - Headings must start at the beginning of the line
- **[MD024](doc/md024.md)** *no-duplicate-heading* - Multiple headings with the same content
- **[MD025](doc/md025.md)** *single-title/single-h1* - Multiple top-level headings in the same document
- **[MD026](doc/md026.md)** *no-trailing-punctuation* - Trailing punctuation in heading
- **[MD027](doc/md027.md)** *no-multiple-space-blockquote* - Multiple spaces after blockquote symbol
- **[MD028](doc/md028.md)** *no-blanks-blockquote* - Blank line inside blockquote
- **[MD029](doc/md029.md)** *ol-prefix* - Ordered list item prefix
- **[MD030](doc/md030.md)** *list-marker-space* - Spaces after list markers
- **[MD031](doc/md031.md)** *blanks-around-fences* - Fenced code blocks should be surrounded by blank lines
- **[MD032](doc/md032.md)** *blanks-around-lists* - Lists should be surrounded by blank lines
- **[MD033](doc/md033.md)** *no-inline-html* - Inline HTML
- **[MD034](doc/md034.md)** *no-bare-urls* - Bare URL used
- **[MD035](doc/md035.md)** *hr-style* - Horizontal rule style
- **[MD036](doc/md036.md)** *no-emphasis-as-heading* - Emphasis used instead of a heading
- **[MD037](doc/md037.md)** *no-space-in-emphasis* - Spaces inside emphasis markers
- **[MD038](doc/md038.md)** *no-space-in-code* - Spaces inside code span elements
- **[MD039](doc/md039.md)** *no-space-in-links* - Spaces inside link text
- **[MD040](doc/md040.md)** *fenced-code-language* - Fenced code blocks should have a language specified
- **[MD041](doc/md041.md)** *first-line-heading/first-line-h1* - First line in a file should be a top-level heading
- **[MD042](doc/md042.md)** *no-empty-links* - No empty links
- **[MD043](doc/md043.md)** *required-headings* - Required heading structure
- **[MD044](doc/md044.md)** *proper-names* - Proper names should have the correct capitalization
- **[MD045](doc/md045.md)** *no-alt-text* - Images should have alternate text (alt text)
- **[MD046](doc/md046.md)** *code-block-style* - Code block style
- **[MD047](doc/md047.md)** *single-trailing-newline* - Files should end with a single newline character
- **[MD048](doc/md048.md)** *code-fence-style* - Code fence style
- **[MD049](doc/md049.md)** *emphasis-style* - Emphasis style
- **[MD050](doc/md050.md)** *strong-style* - Strong style
- **[MD051](doc/md051.md)** *link-fragments* - Link fragments should be valid
- **[MD052](doc/md052.md)** *reference-links-images* - Reference links and images should use a label that is defined
- **[MD053](doc/md053.md)** *link-image-reference-definitions* - Link and image reference definitions should be needed
- **[MD054](doc/md054.md)** *link-image-style* - Link and image style
- **[MD055](doc/md055.md)** *table-pipe-style* - Table pipe style
- **[MD056](doc/md056.md)** *table-column-count* - Table column count
- **[MD058](doc/md058.md)** *blanks-around-tables* - Tables should be surrounded by blank lines
- **[MD059](doc/md059.md)** *descriptive-link-text* - Link text should be descriptive
- **[MD060](doc/md060.md)** *table-column-style* - Table column style

<!-- markdownlint-restore -->

See [Rules.md](doc/Rules.md) for more details.

### Custom Rules

In addition to built-in rules, custom rules can be used to address
project-specific requirements. To find community-developed rules use
[keyword `markdownlint-rule` on npm][markdownlint-rule].
To implement your own rules, refer to [CustomRules.md](doc/CustomRules.md).

[markdownlint-rule]: https://www.npmjs.com/search?q=keywords:markdownlint-rule

## Tags

Tags group related rules and can be used to enable/disable multiple
rules at once.

- **`accessibility`** - `MD045`, `MD059`
- **`atx`** - `MD018`, `MD019`
- **`atx_closed`** - `MD020`, `MD021`
- **`blank_lines`** - `MD012`, `MD022`, `MD031`, `MD032`, `MD047`
- **`blockquote`** - `MD027`, `MD028`
- **`bullet`** - `MD004`, `MD005`, `MD007`, `MD032`
- **`code`** - `MD014`, `MD031`, `MD038`, `MD040`, `MD046`, `MD048`
- **`emphasis`** - `MD036`, `MD037`, `MD049`, `MD050`
- **`hard_tab`** - `MD010`
- **`headings`** - `MD001`, `MD003`, `MD018`, `MD019`, `MD020`, `MD021`,
  `MD022`, `MD023`, `MD024`, `MD025`, `MD026`, `MD036`, `MD041`, `MD043`
- **`hr`** - `MD035`
- **`html`** - `MD033`
- **`images`** - `MD045`, `MD052`, `MD053`, `MD054`
- **`indentation`** - `MD005`, `MD007`, `MD027`
- **`language`** - `MD040`
- **`line_length`** - `MD013`
- **`links`** - `MD011`, `MD034`, `MD039`, `MD042`, `MD051`, `MD052`, `MD053`,
  `MD054`, `MD059`
- **`ol`** - `MD029`, `MD030`, `MD032`
- **`spaces`** - `MD018`, `MD019`, `MD020`, `MD021`, `MD023`
- **`spelling`** - `MD044`
- **`table`** - `MD055`, `MD056`, `MD058`, `MD060`
- **`ul`** - `MD004`, `MD005`, `MD007`, `MD030`, `MD032`
- **`url`** - `MD034`
- **`whitespace`** - `MD009`, `MD010`, `MD012`, `MD027`, `MD028`, `MD030`,
  `MD037`, `MD038`, `MD039`

## Configuration

Text passed to `markdownlint` is parsed as Markdown, analyzed, and any
issues reported. Two kinds of text are ignored by most rules:

- [HTML comments](https://www.w3.org/TR/html5/syntax.html#comments)
- [Front matter](https://jekyllrb.com/docs/frontmatter/) (see
  `options.frontMatter` below)

All rules are enabled by default. Rules can be enabled, disabled, and configured
for each call to the `lint` API by passing an `options.config` object (described
below). To enable or disable rules within a file, use one of the following HTML
comments (which are not rendered):

- Disable all rules: `<!-- markdownlint-disable -->`
- Enable all rules: `<!-- markdownlint-enable -->`
- Disable all rules for the current line: `<!-- markdownlint-disable-line -->`
- Disable all rules for the next line: `<!-- markdownlint-disable-next-line -->`
- Disable one or more rules by name: `<!-- markdownlint-disable MD001 MD005 -->`
- Enable one or more rules by name: `<!-- markdownlint-enable MD001 MD005 -->`
- Disable one or more rules by name for the current line:
  `<!-- markdownlint-disable-line MD001 MD005 -->`
- Disable one or more rules by name for the next line:
  `<!-- markdownlint-disable-next-line MD001 MD005 -->`
- Capture the current rule configuration: `<!-- markdownlint-capture -->`
- Restore the captured rule configuration: `<!-- markdownlint-restore -->`

For example:

```markdown
<!-- markdownlint-disable-next-line no-space-in-emphasis -->
space * in * emphasis
```

Or:

```markdown
space * in * emphasis <!-- markdownlint-disable-line no-space-in-emphasis -->
```

Or:

```markdown
<!-- markdownlint-disable no-space-in-emphasis -->
space * in * emphasis
<!-- markdownlint-enable no-space-in-emphasis -->
```

To temporarily disable rule(s), then restore the former configuration:

```markdown
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
any violations you want
<!-- markdownlint-restore -->
```

The initial configuration is captured by default (as if every document
began with `<!-- markdownlint-capture -->`), so the pattern above can
be expressed more simply:

```markdown
<!-- markdownlint-disable -->
any violations you want
<!-- markdownlint-restore -->
```

Changes take effect starting with the line a comment is on, so the following
has no effect:

```markdown
space * in * emphasis <!-- markdownlint-disable --> <!-- markdownlint-enable -->
```

To apply changes to an entire file regardless of where the comment is located,
the following syntax is supported:

- Disable all rules: `<!-- markdownlint-disable-file -->`
- Enable all rules: `<!-- markdownlint-enable-file -->`
- Disable one or more rules by name: `<!-- markdownlint-disable-file MD001 -->`
- Enable one or more rules by name: `<!-- markdownlint-enable-file MD001 -->`

This can be used to "hide" `markdownlint` comments at the bottom of a file.

In cases where it is desirable to change the configuration of one or
more rules for a file, the following more advanced syntax is supported:

- Configure: `<!-- markdownlint-configure-file { options.config JSON } -->`

For example:

```markdown
<!-- markdownlint-configure-file { "hr-style": { "style": "---" } } -->
```

or

```markdown
<!-- markdownlint-configure-file
{
  "hr-style": {
    "style": "---"
  },
  "no-trailing-spaces": false
}
-->
```

These changes apply to the entire file regardless of where the comment is
located. Multiple such comments (if present) are applied top-to-bottom. By
default, content of `markdownlint-configure-file` is assumed to be JSON, but
[`options.configParsers`](#optionsconfigparsers) can be used to support
alternate formats.

## API

### Linting

Asynchronous API via `import { lint } from "markdownlint/async"`:

```javascript
/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lint(options, callback) { ... }
```

Synchronous API via `import { lint } from "markdownlint/sync"`:

```javascript
/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {LintResults} Results object.
 */
function lint(options) { ... }
```

Promise API via `import { lint } from "markdownlint/promise"`:

```javascript
/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {Promise<LintResults>} Results object.
 */
function lint(options) { ... }
```

#### options

Type: `Object`

Configures the function. All properties are optional, but at least one
of `files` or `strings` should be set to provide input.

##### options.config

Type: `Object` mapping `String` to `Boolean | "error" | "warning" | Object`

Configures the rules to use.

Object keys are rule names/aliases; object values are the rule's configuration.
The value `false` disables a rule. The values `true` or `"error"` enable a rule
in its default configuration and report violations as errors. The value
`"warning"` enables a rule in its default configuration and reports violations
as warnings. Passing an object enables *and* customizes the rule; the properties
`severity` (`"error" | "warning"`) and `enabled` (`false | true`) can be used in
this context. The special `default` rule assigns the default for all rules.
Using a tag name (e.g., `whitespace`) and a setting of `false`, `true`,
`"error"`, or `"warning"` applies that setting to all rules with that tag. When
no configuration object is passed or the optional `default` setting is not
present, all rules are enabled.

The following syntax disables the specified rule, tag, or `default`:

```javascript
{
  "rule_tag_or_default": false
}
```

The following syntax enables the specified rule, tag, or `default` to report
violations as errors:

```javascript
{
  "rule_tag_or_default": true
  // OR
  "rule_tag_or_default": "error"
}
```

The following syntax enables the specified rule, tag, or `default` to report
violations as warnings:

```javascript
{
  "rule_tag_or_default": "warning"
}
```

The following syntax enables and configures the specified rule to report
violations as errors:

```javascript
{
  "rule": {
    "severity": "error"
  }
  // OR
  "rule": {
    "rule_parameter": "value"
  }
  // OR
  "rule": {
    "severity": "error",
    "rule_parameter": "value"
  }
}
```

The following syntax enables and configures the specified rule to report
violations as warnings:

```javascript
{
  "rule": {
    "severity": "warning"
  }
  // OR
  "rule": {
    "severity": "warning",
    "rule_parameter": "value"
  }
}
```

> Note that values `"error"` and `"warning"` and the property `severity` are not
> supported by library versions earlier than `0.39.0`. However, the examples
> above behave the same there, with warnings being reported as errors.

The following syntax disables and configures the specified rule:

```javascript
{
  "rule": {
    "enabled": false,
    "rule_parameter": "value"
  }
  // OR
  "rule": {
    "enabled": false,
    "severity": "warning",
    "rule_parameter": "value"
  }
}
```

> Note that this example behaves **differently** with library versions earlier
> than `0.39.0` because the property `enabled` is not supported: it **enables**
> the rule instead of **disabling** it. As such, this syntax is discouraged when
> interoperability is important.

To evaluate a configuration object, the `default` setting is applied first, then
keys are processed in order from top to bottom. If multiple values apply to a
rule (because of tag names or duplication), later values override earlier ones.
Keys (including rule names, aliases, tags, or `default`) are not case-sensitive.

Example using `default`, rule names, and tag names together:

```json
{
  "default": true,
  "MD003": { "style": "atx_closed" },
  "MD007": { "indent": 4 },
  "no-hard-tabs": false,
  "whitespace": false
}
```

See [.markdownlint.jsonc](schema/.markdownlint.jsonc) and/or
[.markdownlint.yaml](schema/.markdownlint.yaml) for an example
configuration object with all properties set to the default value.

Sets of rules (known as a "style") can be stored separately and loaded
as [JSON](https://en.wikipedia.org/wiki/JSON).

Example of referencing a built-in style from JavaScript:

```javascript
const options = {
  "files": [ "..." ],
  "config": require("style/relaxed.json")
};
```

Example doing so from `.markdownlint.json` via `extends` (more on this below):

```json
{
  "extends": "markdownlint/style/relaxed"
}
```

See the [style](style) directory for more samples.

See [markdownlint-config-schema.json](schema/markdownlint-config-schema.json)
for the [JSON Schema](https://json-schema.org/) of the `options.config`
object.

See [ValidatingConfiguration.md](schema/ValidatingConfiguration.md) for ways to
use the JSON Schema to validate configuration.

For more advanced scenarios, styles can reference and build upon other styles
via the `extends` keyword and a file path or (installed) package name. The
`readConfig` function can be used to read such aggregate styles from code.

For example, assuming a `base.json` configuration file:

```json
{
  "default": true
}
```

And a `custom.json` configuration file:

```json
{
  "extends": "base.json",
  "line-length": false
}
```

Then code like the following:

```javascript
const options = {
  "config": markdownlint.readConfigSync("./custom.json")
};
```

Merges `custom.json` and `base.json` and is equivalent to:

```javascript
const options = {
  "config": {
    "default": true,
    "line-length": false
  }
};
```

##### options.configParsers

Type: *Optional* `Array` of `Function` taking (`String`) and returning `Object`

Array of functions to parse the content of `markdownlint-configure-file` blocks.

As shown in the [Configuration](#configuration) section, inline comments can be
used to customize the [configuration object](#optionsconfig) for a document. By
default, the `JSON.parse` built-in is used, but custom parsers can be specified.
Content is passed to each parser function until one returns a value (vs.
throwing an exception). As such, strict parsers should come before flexible
ones.

For example:

```javascript
[ JSON.parse, require("toml").parse, require("js-yaml").load ]
```

##### options.customRules

Type: `Array` of `Object`

List of custom rules to include with the default rule set for linting.

Each array element should define a rule. Rules are typically exported
by another package, but can be defined locally.

Example:

```javascript
const extraRules = require("extraRules");
const options = {
  "customRules": [ extraRules.one, extraRules.two ]
};
```

See [CustomRules.md](doc/CustomRules.md) for details about authoring
custom rules.

##### options.files

Type: `Array` of `String`

List of files to lint.

Each array element should be a single file (via relative or absolute path);
[globbing](https://en.wikipedia.org/wiki/Glob_%28programming%29) is the
caller's responsibility.

Example: `[ "one.md", "dir/two.md" ]`

##### options.frontMatter

Type: `RegExp`

Matches any [front matter](https://jekyllrb.com/docs/frontmatter/)
found at the beginning of a file.

Some Markdown content begins with metadata; the default `RegExp` for
this option ignores common forms of "front matter". To match differently,
specify a custom `RegExp` or use the value `null` to disable the feature.

The default value:

```javascript
/((^---[^\S\r\n\u2028\u2029]*$[\s\S]+?^---\s*)|(^\+\+\+[^\S\r\n\u2028\u2029]*$[\s\S]+?^(\+\+\+|\.\.\.)\s*)|(^\{[^\S\r\n\u2028\u2029]*$[\s\S]+?^\}\s*))(\r\n|\r|\n|$)/m
```

Ignores [YAML](https://en.wikipedia.org/wiki/YAML),
[TOML](https://en.wikipedia.org/wiki/TOML), and
[JSON](https://en.wikipedia.org/wiki/JSON) front matter such as:

```text
---
layout: post
title: Title
---
```

Note: Matches must occur at the start of the file.

##### options.fs

Type: `Object` implementing the [file system API][node-fs-api]

In advanced scenarios, it may be desirable to bypass the default file system
API. If a custom file system implementation is provided, `markdownlint` will use
that instead of using `node:fs`.

Note: The only methods called are `readFile` and `readFileSync`.

[node-fs-api]: https://nodejs.org/api/fs.html

##### options.handleRuleFailures

Type: `Boolean`

Catches exceptions thrown during rule processing and reports the problem
as a rule violation.

By default, exceptions thrown by rules (or the library itself) are unhandled
and bubble up the stack to the caller in the conventional manner. By setting
`handleRuleFailures` to `true`, exceptions thrown by failing rules will
be handled by the library and the exception message logged as a rule violation.
This setting can be useful in the presence of (custom) rules that encounter
unexpected syntax and fail. By enabling this option, the linting process
is allowed to continue and report any violations that were found.

##### options.markdownItFactory

Type: `Function` returning an instance of a [`markdown-it` parser][markdown-it]

Provides a factory function for creating instances of the `markdown-it` parser.

Previous versions of the `markdownlint` library declared `markdown-it` as a
direct dependency. This function makes it possible to avoid that dependency
entirely. In cases where `markdown-it` is needed, the caller is responsible for
declaring the dependency and returning an instance from this factory. If any
[`markdown-it` plugins][markdown-it-plugin] are needed, they should be `use`d by
the caller before returning the `markdown-it` instance.

For compatibility with previous versions of `markdownlint`, this function should
be similar to:

```javascript
import markdownIt from "markdown-it";
const markdownItFactory = () => markdownIt({ "html": true });
```

When an asynchronous implementation of `lint` is being invoked (e.g., via
`markdownlint/async` or `markdownlint/promise`), this function can return a
`Promise` in order to defer the import of `markdown-it`:

```javascript
const markdownItFactory = () => import("markdown-it").then((module) => module.default({ "html": true }));
```

> Note that this function is only invoked when a `markdown-it` parser is
> needed. None of the built-in rules use the `markdown-it` parser, so it is only
> invoked when one or more [custom rules][custom-rules] are present that use the
> `markdown-it` parser.

[custom-rules]: #custom-rules
[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it-plugin]: https://www.npmjs.com/search?q=keywords:markdown-it-plugin

##### options.noInlineConfig

Type: `Boolean`

Disables the use of HTML comments like `<!-- markdownlint-enable -->` to toggle
rules within the body of Markdown content.

By default, properly-formatted inline comments can be used to create exceptions
for parts of a document. Setting `noInlineConfig` to `true` ignores all such
comments.

##### ~~options.resultVersion~~

This property is *deprecated* and should be removed. The default format of the
`result` object remains the same as setting `resultVersion` to `3`. For
continued access to other (previously *deprecated*) formats:

```javascript
import { convertToResultVersion0, convertToResultVersion1, convertToResultVersion2 } from "markdownlint/helpers";
```

##### options.strings

Type: `Object` mapping `String` to `String`

Map of identifiers to strings for linting.

When Markdown content is not available as files, it can be passed as
strings. The keys of the `strings` object are used to identify each
input value in the `result` summary.

Example:

```json
{
  "readme": "# README\n...",
  "changelog": "# CHANGELOG\n..."
}
```

#### callback

Type: `Function` taking (`Error`, `Object`)

Standard completion callback.

#### result

Type: `Object`

Map of input file names and string identifiers to issues within.

See the [Usage section](#usage) for an example of the structure of this object.

### Config

The `options.config` configuration object is simple and can be stored in a file
for readability and easy reuse. The `readConfig` function loads configuration
settings and supports the `extends` keyword for referencing files or packages
(see above).

By default, configuration files are parsed as JSON (and named
`.markdownlint.json`). Custom parsers can be provided to handle other formats
like JSONC, YAML, and TOML.

Asynchronous API via `import { readConfig } from "markdownlint/async"`:

```javascript
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | ReadConfigCallback} [parsers] Parsing function(s).
 * @param {Object} [fs] File system implementation.
 * @param {ReadConfigCallback} [callback] Callback (err, result) function.
 * @returns {void}
 */
function readConfig(file, parsers, fs, callback) { ... }
```

Synchronous API via `import { readConfig } from "markdownlint/sync"`:

```javascript
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {Object} [fs] File system implementation.
 * @returns {Configuration} Configuration object.
 */
function readConfig(file, parsers, fs) { ... }
```

Promise API via `import { readConfig } from "markdownlint/promise"`:

```javascript
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {Object} [fs] File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
function readConfig(file, parsers, fs) { ... }
```

#### file

Type: `String`

Location of configuration file to read.

The `file` is resolved relative to the current working directory. If an
`extends` key is present once read, its value will be resolved as a path
relative to `file` and loaded recursively. Settings from a file referenced by
`extends` are applied first, then those of `file` are applied on top (overriding
any of the same keys appearing in the referenced file). If either the `file` or
`extends` path begins with the `~` directory, it will act as a placeholder for
the home directory.

#### parsers

Type: *Optional* `Array` of `Function` taking (`String`) and returning `Object`

Array of functions to parse configuration files.

The contents of a configuration file are passed to each parser function until
one of them returns a value (vs. throwing an exception). Consequently, strict
parsers should come before flexible parsers.

For example:

```javascript
[ JSON.parse, require("toml").parse, require("js-yaml").load ]
```

#### fs

Type: *Optional* `Object` implementing the [file system API][file-system-api]

[file-system-api]: https://nodejs.org/api/fs.html

In advanced scenarios, it may be desirable to bypass the default file system
API. If a custom file system implementation is provided, `markdownlint` will use
that instead of invoking `node:fs`.

Note: The only methods called are `readFile`, `readFileSync`, `access`, and
`accessSync`.

#### callback

Type: `Function` taking (`Error`, `Object`)

Standard completion callback.

#### result

Type: `Object`

Configuration object.

### Fixing

Rules that can be fixed automatically include a `fixInfo` property which is
outlined in the [documentation for custom rules](doc/CustomRules.md#authoring).
To apply fixes consistently, the `applyFix`/`applyFixes` methods may be used via
`import { applyFix, applyFixes } from "markdownlint"`:

```javascript
/**
 * Applies the specified fix to a Markdown content line.
 *
 * @param {string} line Line of Markdown content.
 * @param {RuleOnErrorFixInfo} fixInfo RuleOnErrorFixInfo instance.
 * @param {string} [lineEnding] Line ending to use.
 * @returns {string | null} Fixed content or null if deleted.
 */
function applyFix(line, fixInfo, lineEnding = "\n") { ... }

/**
 * Applies as many of the specified fixes as possible to Markdown content.
 *
 * @param {string} input Lines of Markdown content.
 * @param {RuleOnErrorInfo[]} errors RuleOnErrorInfo instances.
 * @returns {string} Fixed content.
 */
function applyFixes(input, errors) { ... }
```

Invoking `applyFixes` with the results of a call to lint can be done like so:

```javascript
import { applyFixes } from "markdownlint";
import { lint as lintSync } from "markdownlint/sync";

const results = lintSync({ "strings": { "content": original } });
const fixed = applyFixes(original, results.content);
```

### Miscellaneous

To get the [semantic version][semver] of the library, the `getVersion` method
can be used:

```javascript
/**
 * Gets the (semantic) version of the library.
 *
 * @returns {string} SemVer string.
 */
function getVersion() { ... }
```

Invoking `getVersion` is simple:

```javascript
import { getVersion } from "markdownlint";

// Displays the library version
console.log(getVersion());
```

[semver]: https://semver.org

## Usage

Invoke `lint` as an asynchronous call:

```javascript
import { lint as lintAsync } from "markdownlint/async";

const options = {
  "files": [ "good.md", "bad.md" ],
  "strings": {
    "good.string": "# good.string\n\nThis string passes all rules.",
    "bad.string": "#bad.string\n\n#This string fails\tsome rules."
  }
};

lintAsync(options, function callback(error, results) {
  if (!error && results) {
    console.dir(results, { "colors": true, "depth": null });
  }
});
```

Or as a synchronous call:

```javascript
import { lint as lintSync } from "markdownlint/sync";

const results = lintSync(options);
console.dir(results, { "colors": true, "depth": null });
```

Or as a `Promise`-based call:

```javascript
import { lint as lintPromise } from "markdownlint/promise";

const results = await lintPromise(options);
console.dir(results, { "colors": true, "depth": null });
```

All of which return an object like:

```json
{
  "good.md": [],
  "bad.md": [
    { "lineNumber": 3,
      "ruleNames": [ "MD010", "no-hard-tabs" ],
      "ruleDescription": "Hard tabs",
      "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.40.0/doc/md010.md",
      "errorDetail": "Column: 17",
      "errorContext": null,
      "errorRange": [ 17, 1 ],
      "fixInfo": { "editColumn": 17, "deleteCount": 1, "insertText": " " },
      "severity": "error" },
    { "lineNumber": 1,
      "ruleNames": [ "MD018", "no-missing-space-atx" ],
      "ruleDescription": "No space after hash on atx style heading",
      "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.40.0/doc/md018.md",
      "errorDetail": null,
      "errorContext": "#bad.md",
      "errorRange": [ 1, 2 ],
      "fixInfo": { "editColumn": 2, "insertText": " " },
      "severity": "error" },
    { "lineNumber": 3,
      "ruleNames": [ "MD018", "no-missing-space-atx" ],
      "ruleDescription": "No space after hash on atx style heading",
      "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.40.0/doc/md018.md",
      "errorDetail": null,
      "errorContext": "#This file fails\tsome rules.",
      "errorRange": [ 1, 2 ],
      "fixInfo": { "editColumn": 2, "insertText": " " },
      "severity": "error" },
    { "lineNumber": 1,
      "ruleNames": [ "MD041", "first-line-heading", "first-line-h1" ],
      "ruleDescription": "First line in a file should be a top-level heading",
      "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.40.0/doc/md041.md",
      "errorDetail": null,
      "errorContext": "#bad.md",
      "errorRange": null,
      "fixInfo": null,
      "severity": "error" }
  ]
}
```

## Browser

`markdownlint` also works in the browser.

Generate normal and minified scripts with:

```bash
npm run build-demo
```

Then reference the `markdownlint-browser` script:

```html
<script src="demo/markdownlint-browser.min.js"></script>
```

And call it like so:

```javascript
const options = {
  "strings": {
    "content": "Some Markdown to lint."
  }
};

const results = globalThis.markdownlint.lintSync(options);
```

## Examples

For ideas how to integrate `markdownlint` into your workflow, refer to the
following projects or one of the tools in the [Related section](#related):

- [.NET Documentation][dot-net-doc] ([Search repository][dot-net-doc-search])
- [ally.js][ally-js] ([Search repository][ally-js-search])
- [Apache Airflow][airflow] ([Search repository][airflow-search])
- [CodiMD][codimd] ([Search repository][codimd-search])
- [Electron][electron] ([Search repository][electron-search])
- [ESLint][eslint] ([Search repository][eslint-search])
- [Garden React Components][garden] ([Search repository][garden-search])
- [MDN Web Docs][mdn] ([Search repository][mdn-search])
- [MkDocs][mkdocs] ([Search repository][mkdocs-search])
- [Mocha][mocha] ([Search repository][mocha-search])
- [Pi-hole documentation][pi-hole] ([Search repository][pi-hole-search])
- [Reactable][reactable] ([Search repository][reactable-search])
- [V8][v8] ([Search repository][v8-search])
- [webhint][webhint] ([Search repository][webhint-search])
- [webpack][webpack] ([Search repository][webpack-search])
- [WordPress][wordpress] ([Search repository][wordpress-search])

For more advanced integration scenarios:

- [GitHub Docs content linter][content-linter]
- [GitHub's `markdownlint-github` repository][markdownlint-github]

[ally-js]: https://allyjs.io/
[ally-js-search]: https://github.com/medialize/ally.js/search?q=markdownlint
[airflow]: https://airflow.apache.org
[airflow-search]: https://github.com/apache/airflow/search?q=markdownlint
[codimd]: https://github.com/hackmdio/codimd
[codimd-search]: https://github.com/hackmdio/codimd/search?q=markdownlint
[content-linter]: https://docs.github.com/en/contributing/collaborating-on-github-docs/using-the-content-linter
[dot-net-doc]: https://docs.microsoft.com/en-us/dotnet/
[dot-net-doc-search]: https://github.com/dotnet/docs/search?q=markdownlint
[electron]: https://www.electronjs.org
[electron-search]: https://github.com/electron/electron/search?q=markdownlint
[eslint]: https://eslint.org/
[eslint-search]: https://github.com/eslint/eslint/search?q=markdownlint
[garden]: https://zendeskgarden.github.io/react-components/
[garden-search]: https://github.com/zendeskgarden/react-components/search?q=markdownlint
[markdownlint-github]: https://github.com/github/markdownlint-github
[mdn]: https://developer.mozilla.org/
[mdn-search]: https://github.com/mdn/content/search?q=markdownlint
[mkdocs]: https://www.mkdocs.org/
[mkdocs-search]: https://github.com/mkdocs/mkdocs/search?q=markdownlint
[mocha]: https://mochajs.org/
[mocha-search]: https://github.com/mochajs/mocha/search?q=markdownlint
[pi-hole]: https://docs.pi-hole.net
[pi-hole-search]: https://github.com/pi-hole/docs/search?q=markdownlint
[reactable]: https://glittershark.github.io/reactable/
[reactable-search]: https://github.com/glittershark/reactable/search?q=markdownlint
[v8]: https://v8.dev/
[v8-search]: https://github.com/v8/v8.dev/search?q=markdownlint
[webhint]: https://webhint.io/
[webhint-search]: https://github.com/webhintio/hint/search?q=markdownlint
[webpack]: https://webpack.js.org/
[webpack-search]: https://github.com/webpack/webpack.js.org/search?q=markdownlint
[wordpress]: https://wordpress.org/gutenberg/
[wordpress-search]: https://github.com/WordPress/gutenberg/search?q=markdownlint

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Releasing

See [ReleaseProcess.md](doc/ReleaseProcess.md) for more information.

## History

See [CHANGELOG.md](CHANGELOG.md).

[npm-image]: https://img.shields.io/npm/v/markdownlint.svg
[npm-url]: https://www.npmjs.com/package/markdownlint
[license-image]: https://img.shields.io/npm/l/markdownlint.svg
[license-url]: https://opensource.org/licenses/MIT
