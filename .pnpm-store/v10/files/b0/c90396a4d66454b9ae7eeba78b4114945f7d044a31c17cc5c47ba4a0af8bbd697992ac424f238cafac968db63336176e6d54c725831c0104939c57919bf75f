<!-- NOTE: README.md is generated from src/README.md -->

# @codemirror/lang-html [![NPM version](https://img.shields.io/npm/v/@codemirror/lang-html.svg)](https://www.npmjs.org/package/@codemirror/lang-html)

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/lang-html/blob/main/CHANGELOG.md) ]

This package implements HTML language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/lang-html/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## Usage

```javascript
import {EditorView, basicSetup} from "codemirror"
import {html} from "@codemirror/lang-html"

const view = new EditorView({
  parent: document.body,
  doc: `<!doctype html>\n<title>HTML</title>`,
  extensions: [basicSetup, html()]
})
```

## API Reference

<dl>
<dt id="user-content-html">
  <code><strong><a href="#user-content-html">html</a></strong>(<a id="user-content-html^config" href="#user-content-html^config">config</a>&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a> = {}) → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>Language support for HTML, including
<a href="#user-content-htmlcompletion"><code>htmlCompletion</code></a> and JavaScript and
CSS support extensions.</p>
<dl><dt id="user-content-html^config">
  <code><strong><a href="#user-content-html^config">config</a></strong></code></dt>

<dd><dl><dt id="user-content-html^config.matchclosingtags">
  <code><strong><a href="#user-content-html^config.matchclosingtags">matchClosingTags</a></strong>&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></code></dt>

<dd><p>By default, the syntax tree will highlight mismatched closing
tags. Set this to <code>false</code> to turn that off (for example when you
expect to only be parsing a fragment of HTML text, not a full
document).</p>
</dd><dt id="user-content-html^config.selfclosingtags">
  <code><strong><a href="#user-content-html^config.selfclosingtags">selfClosingTags</a></strong>&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></code></dt>

<dd><p>By default, the parser does not allow arbitrary self-closing tags.
Set this to <code>true</code> to turn on support for <code>/&gt;</code> self-closing tag
syntax.</p>
</dd><dt id="user-content-html^config.autoclosetags">
  <code><strong><a href="#user-content-html^config.autoclosetags">autoCloseTags</a></strong>&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></code></dt>

<dd><p>Determines whether <a href="#user-content-autoclosetags"><code>autoCloseTags</code></a>
is included in the support extensions. Defaults to true.</p>
</dd><dt id="user-content-html^config.extratags">
  <code><strong><a href="#user-content-html^config.extratags">extraTags</a></strong>&#8288;?: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype">Record</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, <a href="#user-content-tagspec">TagSpec</a>&gt;</code></dt>

<dd><p>Add additional tags that can be completed.</p>
</dd><dt id="user-content-html^config.extraglobalattributes">
  <code><strong><a href="#user-content-html^config.extraglobalattributes">extraGlobalAttributes</a></strong>&#8288;?: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype">Record</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[] | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>&gt;</code></dt>

<dd><p>Add additional completable attributes to all tags.</p>
</dd><dt id="user-content-html^config.nestedlanguages">
  <code><strong><a href="#user-content-html^config.nestedlanguages">nestedLanguages</a></strong>&#8288;?: {tag: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, attrs&#8288;?: fn(<a id="user-content-html^config.nestedlanguages.attrs^attrs" href="#user-content-html^config.nestedlanguages.attrs^attrs">attrs</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>&gt;) → <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, parser: <a href="https://lezer.codemirror.net/docs/ref/#common.Parser">Parser</a>}[]</code></dt>

<dd><p>Register additional languages to parse the content of specific
tags. If given, <code>attrs</code> should be a function that, given an
object representing the tag's attributes, returns <code>true</code> if this
language applies.</p>
</dd><dt id="user-content-html^config.nestedattributes">
  <code><strong><a href="#user-content-html^config.nestedattributes">nestedAttributes</a></strong>&#8288;?: {name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, tagName&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, parser: <a href="https://lezer.codemirror.net/docs/ref/#common.Parser">Parser</a>}[]</code></dt>

<dd><p>Register additional languages to parse attribute values with.</p>
</dd></dl></dd></dl></dd>
<dt id="user-content-htmllanguage">
  <code><strong><a href="#user-content-htmllanguage">htmlLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>A language provider based on the <a href="https://github.com/lezer-parser/html">Lezer HTML
parser</a>, extended with the
JavaScript and CSS parsers to parse the content of <code>&lt;script&gt;</code> and
<code>&lt;style&gt;</code> tags.</p>
</dd>
<dt id="user-content-htmlcompletionsource">
  <code><strong><a href="#user-content-htmlcompletionsource">htmlCompletionSource</a></strong>(<a id="user-content-htmlcompletionsource^context" href="#user-content-htmlcompletionsource^context">context</a>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionContext">CompletionContext</a>) → <a href="https://codemirror.net/docs/ref#autocomplete.CompletionResult">CompletionResult</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code></dt>

<dd><p>HTML tag completion. Opens and closes tags and attributes in a
context-aware way.</p>
</dd>
<dt id="user-content-tagspec">
  <h4>
    <code>interface</code>
    <a href="#user-content-tagspec">TagSpec</a></h4>
</dt>

<dd><p>Type used to specify tags to complete.</p>
<dl><dt id="user-content-tagspec.attrs">
  <code><strong><a href="#user-content-tagspec.attrs">attrs</a></strong>&#8288;?: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype">Record</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[] | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>&gt;</code></dt>

<dd><p>Define tag-specific attributes. Property names are attribute
names, and property values can be null to indicate free-form
attributes, or a list of strings for suggested attribute values.</p>
</dd><dt id="user-content-tagspec.globalattrs">
  <code><strong><a href="#user-content-tagspec.globalattrs">globalAttrs</a></strong>&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></code></dt>

<dd><p>When set to false, don't complete global attributes on this tag.</p>
</dd><dt id="user-content-tagspec.children">
  <code><strong><a href="#user-content-tagspec.children">children</a></strong>&#8288;?: readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[]</code></dt>

<dd><p>Can be used to specify a list of child tags that are valid
inside this tag. The default is to allow any tag.</p>
</dd></dl>

</dd>
<dt id="user-content-htmlcompletionsourcewith">
  <code><strong><a href="#user-content-htmlcompletionsourcewith">htmlCompletionSourceWith</a></strong>(<a id="user-content-htmlcompletionsourcewith^config" href="#user-content-htmlcompletionsourcewith^config">config</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a>) → fn(<a id="user-content-htmlcompletionsourcewith^returns^context" href="#user-content-htmlcompletionsourcewith^returns^context">context</a>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionContext">CompletionContext</a>) → <a href="https://codemirror.net/docs/ref#autocomplete.CompletionResult">CompletionResult</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code></dt>

<dd><p>Create a completion source for HTML extended with additional tags
or attributes.</p>
<dl><dt id="user-content-htmlcompletionsourcewith^config">
  <code><strong><a href="#user-content-htmlcompletionsourcewith^config">config</a></strong></code></dt>

<dd><dl><dt id="user-content-htmlcompletionsourcewith^config.extratags">
  <code><strong><a href="#user-content-htmlcompletionsourcewith^config.extratags">extraTags</a></strong>&#8288;?: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype">Record</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, <a href="#user-content-tagspec">TagSpec</a>&gt;</code></dt>

<dd><p>Define extra tag names to complete.</p>
</dd><dt id="user-content-htmlcompletionsourcewith^config.extraglobalattributes">
  <code><strong><a href="#user-content-htmlcompletionsourcewith^config.extraglobalattributes">extraGlobalAttributes</a></strong>&#8288;?: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype">Record</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[] | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>&gt;</code></dt>

<dd><p>Add global attributes that are available on all tags.</p>
</dd></dl></dd></dl></dd>
<dt id="user-content-autoclosetags">
  <code><strong><a href="#user-content-autoclosetags">autoCloseTags</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>Extension that will automatically insert close tags when a <code>&gt;</code> or
<code>/</code> is typed.</p>
</dd>
</dl>
