# Custom Rules

In addition to its built-in rules, `markdownlint` lets you enhance the linting
experience by passing an array of custom rules using the [`options.customRules`
property][options-custom-rules]. Custom rules can do everything the built-in
rules can and are defined inline or imported from another package ([keyword
`markdownlint-rule` on npm][markdownlint-rule]). When defined by a file or
package, the export can be a single rule object (see below) or an array of them.
Custom rules can be disabled, enabled, and customized using the same syntax as
built-in rules.

## Implementing Simple Rules

For simple requirements like disallowing certain characters or patterns,
the community-developed
[markdownlint-rule-search-replace][markdownlint-rule-search-replace]
plug-in can be used. This plug-in allows anyone to create a set of simple
text-replacement rules without needing to write code.

[markdownlint-rule-search-replace]: https://www.npmjs.com/package/markdownlint-rule-search-replace

## Authoring

Rules are defined by a name (or multiple names), a description, an optional link
to more information, one or more tags, and a function that implements the rule's
behavior. That function is called once for each file/string input and is passed
the parsed input and a function to log any violations.

Custom rules can (should) operate on a structured set of tokens based on the
[`micromark`][micromark] `parser` (this is preferred). Alternatively, custom
rules can operate on a structured set of tokens based on the
[`markdown-it`][markdown-it] `parser` (legacy support). Finally, custom rules
can operate directly on text with the `none` `parser`.

A simple rule implementation using the `micromark` parser to report a violation
for any use of blockquotes might look like:

```javascript
/** @type {import("markdownlint").Rule} */
module.exports = {
  "names": [ "any-blockquote-micromark" ],
  "description": "Rule that reports an error for any blockquote",
  "information": new URL("https://example.com/rules/any-blockquote"),
  "tags": [ "test" ],
  "parser": "micromark",
  "function": (params, onError) => {
    const blockquotes = params.parsers.micromark.tokens
      .filter((token) => token.type === "blockQuote");
    for (const blockquote of blockquotes) {
      const lines = blockquote.endLine - blockquote.startLine + 1;
      onError({
        "lineNumber": blockquote.startLine,
        "detail": "Blockquote spans " + lines + " line(s).",
        "context": params.lines[blockquote.startLine - 1]
      });
    }
  }
}
```

That same rule implemented using the `markdown-it` parser might look like:

```javascript
/** @type {import("markdownlint").Rule} */
module.exports = {
  "names": [ "any-blockquote-markdown-it" ],
  "description": "Rule that reports an error for any blockquote",
  "information": new URL("https://example.com/rules/any-blockquote"),
  "tags": [ "test" ],
  "parser": "markdownit",
  "function": (params, onError) => {
    const blockquotes = params.parsers.markdownit.tokens
      .filter((token) => token.type === "blockquote_open");
    for (const blockquote of blockquotes) {
      const [ startIndex, endIndex ] = blockquote.map;
      const lines = endIndex - startIndex;
      onError({
        "lineNumber": blockquote.lineNumber,
        "detail": "Blockquote spans " + lines + " line(s).",
        "context": blockquote.line
      });
    }
  }
}
```

A rule is implemented as an `Object`:

- `names` is a required `Array` of `String` values that identify the rule in
  output messages and config.
- `description` is a required `String` value that describes the rule in output
  messages.
- `information` is an optional (absolute) `URL` of a link to more information
  about the rule.
- `tags` is a required `Array` of `String` values that groups related rules for
  easier customization.
- `parser` is a required `String` value `"markdownit" | "micromark" | "none"`
  that specifies the parser data used via `params.parsers` (see below).
- `asynchronous` is an optional `Boolean` value that indicates whether the rule
  returns a `Promise` and runs asynchronously.
- `function` is a required `Function` that implements the rule and is passed two
  parameters:
  - `params` is an `Object` with properties that describe the content being
    analyzed:
    - `name` is a `String` that identifies the input file/string.
    - `parsers` is an `Object` with properties corresponding to the value of
      `parser` in the rule definition (see above).
      - `markdownit` is an `Object` that provides access to output from the
        [`markdown-it`][markdown-it] parser.
        - `tokens` is an `Array` of [`markdown-it` `Token`s][markdown-it-token]
          with added `line` and `lineNumber` properties. (This property was
          previously on the `params` object.)
      - `micromark` is an `Object` that provides access to output from the
        [`micromark`][micromark] parser.
        - `tokens` is an `Array` of [`MicromarkToken`][micromark-token] objects.
      - Samples for both `tokens` are available via [test snapshots][tokens].
    - `lines` is an `Array` of `String` values corresponding to the lines of the
      input file/string.
    - `frontMatterLines` is an `Array` of `String` values corresponding to any
      front matter (not present in `lines`).
    - `config` is an `Object` corresponding to the rule's entry in
      `options.config` (if present).
    - `version` is a `String` that corresponds to the version of `markdownlint`
  - `onError` is a function that takes a single `Object` parameter with one
    required and four optional properties:
    - `lineNumber` is a required `Number` specifying the 1-based line number of
      the error.
    - `detail` is an optional `String` with information about what caused the
      error.
    - `context` is an optional `String` with relevant text surrounding the error
      location.
    - `information` is an optional (absolute) `URL` of a link to override the
      same-named value provided by the rule definition. (Uncommon)
    - `range` is an optional `Array` with two `Number` values identifying the
      1-based column and length of the error.
    - `fixInfo` is an optional `Object` with information about how to fix the
      error (all properties are optional, but at least one of `deleteCount` and
      `insertText` should be present; when applying a fix, the delete should be
      performed before the insert):
      - `lineNumber` is an optional `Number` specifying the 1-based line number
        of the edit.
      - `editColumn` is an optional `Number` specifying the 1-based column
        number of the edit.
      - `deleteCount` is an optional `Number` specifying the number of
        characters to delete (the value `-1` is used to delete the line).
      - `insertText` is an optional `String` specifying the text to insert. `\n`
        is the platform-independent way to add a line break; line breaks should
        be added at the beginning of a line instead of at the end.

The collection of helper functions shared by the built-in rules is available for
use by custom rules in the [markdownlint-rule-helpers package][rule-helpers].

### Asynchronous Rules

If a rule needs to perform asynchronous operations (such as fetching a network
resource), it can specify the value `true` for its `asynchronous` property.
Asynchronous rules should return a `Promise` from their `function`
implementation that is resolved when the rule completes. (The value passed to
`resolve(...)` is ignored.) Linting violations from asynchronous rules are
reported via the `onError` function just like for synchronous rules.

**Note**: Asynchronous rules cannot be referenced in a synchronous calling
context (i.e., `import { lint } from "markdownlint/sync"`). Attempting to do so
throws an exception.

## Examples

- [Simple rules used by the project's test cases][test-rules]
- [Code for all `markdownlint` built-in rules][lib]
- [Complete example rule including npm configuration][extended-ascii]
- [Custom rules from the github/docs repository][github-docs]
- [Custom rules from the electron/lint-roller repository][electron]
- [Custom rules from the webhintio/hint repository][hint]

## References

- [CommonMark documentation and specification][commonmark]
- [`markdown-it` Markdown parser project page][markdown-it]

[commonmark]: https://commonmark.org/
[electron]: https://github.com/electron/lint-roller/tree/main/markdownlint-rules
[extended-ascii]: https://github.com/DavidAnson/markdownlint-rule-extended-ascii
[github-docs]: https://github.com/github/docs/tree/main/src/content-linter/lib/linting-rules
[hint]: https://github.com/webhintio/hint/blob/main/scripts/lint-markdown.js
[lib]: ../lib
[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it-token]: https://markdown-it.github.io/markdown-it/#Token
[markdownlint-rule]: https://www.npmjs.com/search?q=keywords:markdownlint-rule
[micromark]: https://github.com/micromark/micromark
[micromark-token]: ../lib/markdownlint.d.mts
[rule-helpers]: https://www.npmjs.com/package/markdownlint-rule-helpers
[options-custom-rules]: ../README.md#optionscustomrules
[test-rules]: ../test/rules
[tokens]: ../test/snapshots/markdownlint-test-custom-rules.mjs.md
