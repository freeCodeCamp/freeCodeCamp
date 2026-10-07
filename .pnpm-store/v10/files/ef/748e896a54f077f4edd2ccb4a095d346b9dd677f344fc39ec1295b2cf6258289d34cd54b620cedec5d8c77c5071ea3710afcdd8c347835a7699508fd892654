<!-- NOTE: README.md is generated from src/README.md -->

# @codemirror/lang-javascript [![NPM version](https://img.shields.io/npm/v/@codemirror/lang-javascript.svg)](https://www.npmjs.org/package/@codemirror/lang-javascript)

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/lang-javascript/blob/main/CHANGELOG.md) ]

This package implements JavaScript language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/lang-javascript/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## Usage

```javascript
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

const view = new EditorView({
  parent: document.body,
  doc: `console.log("Hello world")`,
  extensions: [basicSetup, javascript()]
})
```

## API Reference

<dl>
<dt id="user-content-javascript">
  <code><strong><a href="#user-content-javascript">javascript</a></strong>(<a id="user-content-javascript^config" href="#user-content-javascript^config">config</a>&#8288;?: {jsx&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, typescript&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>} = {}) → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>JavaScript support. Includes <a href="#user-content-snippets">snippet</a>
and local variable completion.</p>
</dd>
<dt id="user-content-javascriptlanguage">
  <code><strong><a href="#user-content-javascriptlanguage">javascriptLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>A language provider based on the <a href="https://github.com/lezer-parser/javascript">Lezer JavaScript
parser</a>, extended with
highlighting and indentation information.</p>
</dd>
<dt id="user-content-typescriptlanguage">
  <code><strong><a href="#user-content-typescriptlanguage">typescriptLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>A language provider for TypeScript.</p>
</dd>
<dt id="user-content-jsxlanguage">
  <code><strong><a href="#user-content-jsxlanguage">jsxLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>Language provider for JSX.</p>
</dd>
<dt id="user-content-tsxlanguage">
  <code><strong><a href="#user-content-tsxlanguage">tsxLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>Language provider for JSX + TypeScript.</p>
</dd>
<dt id="user-content-autoclosetags">
  <code><strong><a href="#user-content-autoclosetags">autoCloseTags</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>Extension that will automatically insert JSX close tags when a <code>&gt;</code> or
<code>/</code> is typed.</p>
</dd>
<dt id="user-content-snippets">
  <code><strong><a href="#user-content-snippets">snippets</a></strong>: readonly <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a>[]</code></dt>

<dd><p>A collection of JavaScript-related
<a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a>.</p>
</dd>
<dt id="user-content-typescriptsnippets">
  <code><strong><a href="#user-content-typescriptsnippets">typescriptSnippets</a></strong>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a>[]</code></dt>

<dd><p>A collection of snippet completions for TypeScript. Includes the
JavaScript <a href="#user-content-snippets">snippets</a>.</p>
</dd>
<dt id="user-content-localcompletionsource">
  <code><strong><a href="#user-content-localcompletionsource">localCompletionSource</a></strong>(<a id="user-content-localcompletionsource^context" href="#user-content-localcompletionsource^context">context</a>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionContext">CompletionContext</a>) → <a href="https://codemirror.net/docs/ref#autocomplete.CompletionResult">CompletionResult</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code></dt>

<dd><p>Completion source that looks up locally defined names in
JavaScript code.</p>
</dd>
<dt id="user-content-completionpath">
  <code><strong><a href="#user-content-completionpath">completionPath</a></strong>(<a id="user-content-completionpath^context" href="#user-content-completionpath^context">context</a>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionContext">CompletionContext</a>) → {path: readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[], name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>} | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code></dt>

<dd><p>Helper function for defining JavaScript completion sources. It
returns the completable name and object path for a completion
context, or null if no name/property completion should happen at
that position. For example, when completing after <code>a.b.c</code> it will
return <code>{path: [&quot;a&quot;, &quot;b&quot;], name: &quot;c&quot;}</code>. When completing after <code>x</code>
it will return <code>{path: [], name: &quot;x&quot;}</code>. When not in a property or
name, it will return null if <code>context.explicit</code> is false, and
<code>{path: [], name: &quot;&quot;}</code> otherwise.</p>
</dd>
<dt id="user-content-scopecompletionsource">
  <code><strong><a href="#user-content-scopecompletionsource">scopeCompletionSource</a></strong>(<a id="user-content-scopecompletionsource^scope" href="#user-content-scopecompletionsource^scope">scope</a>: any) → <a href="https://codemirror.net/docs/ref#autocomplete.CompletionSource">CompletionSource</a></code></dt>

<dd><p>Defines a <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionSource">completion source</a> that
completes from the given scope object (for example <code>globalThis</code>).
Will enter properties of the object when completing properties on
a directly-named path.</p>
</dd>
<dt id="user-content-eslint">
  <code><strong><a href="#user-content-eslint">esLint</a></strong>(<a id="user-content-eslint^eslint" href="#user-content-eslint^eslint">eslint</a>: any, <a id="user-content-eslint^config" href="#user-content-eslint^config">config</a>&#8288;?: any) → fn(<a id="user-content-eslint^returns^view" href="#user-content-eslint^returns^view">view</a>: <a href="https://codemirror.net/docs/ref#view.EditorView">EditorView</a>) → <a href="https://codemirror.net/docs/ref#lint.Diagnostic">Diagnostic</a>[]</code></dt>

<dd><p>Connects an <a href="https://eslint.org/">ESLint</a> linter to CodeMirror's
<a href="https://codemirror.net/docs/ref/#lint">lint</a> integration. <code>eslint</code> should be an instance of the
<a href="https://eslint.org/docs/developer-guide/nodejs-api#linter"><code>Linter</code></a>
class, and <code>config</code> an optional ESLint configuration. The return
value of this function can be passed to <a href="https://codemirror.net/docs/ref/#lint.linter"><code>linter</code></a>
to create a JavaScript linting extension.</p>
<p>Note that ESLint targets node, and is tricky to run in the
browser. The
<a href="https://github.com/UziTech/eslint-linter-browserify">eslint-linter-browserify</a>
package may help with that (see
<a href="https://github.com/UziTech/eslint-linter-browserify/blob/master/example/script.js">example</a>).</p>
</dd>
</dl>
