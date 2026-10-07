import * as _codemirror_state from '@codemirror/state';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { Completion, CompletionContext, CompletionResult, CompletionSource } from '@codemirror/autocomplete';
import { Diagnostic } from '@codemirror/lint';
import { EditorView } from '@codemirror/view';

/**
A language provider based on the [Lezer JavaScript
parser](https://github.com/lezer-parser/javascript), extended with
highlighting and indentation information.
*/
declare const javascriptLanguage: LRLanguage;
/**
A language provider for TypeScript.
*/
declare const typescriptLanguage: LRLanguage;
/**
Language provider for JSX.
*/
declare const jsxLanguage: LRLanguage;
/**
Language provider for JSX + TypeScript.
*/
declare const tsxLanguage: LRLanguage;
/**
JavaScript support. Includes [snippet](https://codemirror.net/6/docs/ref/#lang-javascript.snippets)
and local variable completion.
*/
declare function javascript(config?: {
    jsx?: boolean;
    typescript?: boolean;
}): LanguageSupport;
/**
Extension that will automatically insert JSX close tags when a `>` or
`/` is typed.
*/
declare const autoCloseTags: _codemirror_state.Extension;

/**
A collection of JavaScript-related
[snippets](https://codemirror.net/6/docs/ref/#autocomplete.snippet).
*/
declare const snippets: readonly Completion[];
/**
A collection of snippet completions for TypeScript. Includes the
JavaScript [snippets](https://codemirror.net/6/docs/ref/#lang-javascript.snippets).
*/
declare const typescriptSnippets: Completion[];

/**
Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
[lint](https://codemirror.net/6/docs/ref/#lint) integration. `eslint` should be an instance of the
[`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
class, and `config` an optional ESLint configuration. The return
value of this function can be passed to [`linter`](https://codemirror.net/6/docs/ref/#lint.linter)
to create a JavaScript linting extension.

Note that ESLint targets node, and is tricky to run in the
browser. The
[eslint-linter-browserify](https://github.com/UziTech/eslint-linter-browserify)
package may help with that (see
[example](https://github.com/UziTech/eslint-linter-browserify/blob/master/example/script.js)).
*/
declare function esLint(eslint: any, config?: any): (view: EditorView) => Diagnostic[];

/**
Completion source that looks up locally defined names in
JavaScript code.
*/
declare function localCompletionSource(context: CompletionContext): CompletionResult | null;
/**
Helper function for defining JavaScript completion sources. It
returns the completable name and object path for a completion
context, or null if no name/property completion should happen at
that position. For example, when completing after `a.b.c` it will
return `{path: ["a", "b"], name: "c"}`. When completing after `x`
it will return `{path: [], name: "x"}`. When not in a property or
name, it will return null if `context.explicit` is false, and
`{path: [], name: ""}` otherwise.
*/
declare function completionPath(context: CompletionContext): {
    path: readonly string[];
    name: string;
} | null;
/**
Defines a [completion source](https://codemirror.net/6/docs/ref/#autocomplete.CompletionSource) that
completes from the given scope object (for example `globalThis`).
Will enter properties of the object when completing properties on
a directly-named path.
*/
declare function scopeCompletionSource(scope: any): CompletionSource;

export { autoCloseTags, completionPath, esLint, javascript, javascriptLanguage, jsxLanguage, localCompletionSource, scopeCompletionSource, snippets, tsxLanguage, typescriptLanguage, typescriptSnippets };
