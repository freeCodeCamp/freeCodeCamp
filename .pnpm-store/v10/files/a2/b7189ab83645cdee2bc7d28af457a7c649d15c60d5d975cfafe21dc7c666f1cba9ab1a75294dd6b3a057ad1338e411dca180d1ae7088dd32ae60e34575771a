# @codemirror/language [![NPM version](https://img.shields.io/npm/v/@codemirror/language.svg)](https://www.npmjs.org/package/@codemirror/language)

[ [**WEBSITE**](https://codemirror.net/) | [**DOCS**](https://codemirror.net/docs/ref/#language) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/language/blob/main/CHANGELOG.md) ]

This package implements the language support infrastructure for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/language/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## Usage

Setting up a language from a [Lezer](https://lezer.codemirror.net)
parser looks like this:

```javascript
import {parser} from "@lezer/json"
import {LRLanguage, continuedIndent, indentNodeProp,
        foldNodeProp, foldInside} from "@codemirror/language"

export const jsonLanguage = LRLanguage.define({
  name: "json",
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Object: continuedIndent({except: /^\s*\}/}),
        Array: continuedIndent({except: /^\s*\]/})
      }),
      foldNodeProp.add({
        "Object Array": foldInside
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["[", "{", '"']},
    indentOnInput: /^\s*[\}\]]$/
  }
})
```

Often, you'll also use this package just to access some specific
language-related features, such as accessing the editor's syntax
tree...

```javascript
import {syntaxTree} from "@codemirror/language"

const tree = syntaxTree(view)
```

... or computing the appriate indentation at a given point.

```javascript
import {getIndentation} from "@codemirror/language"

console.log(getIndentation(view.state, view.state.selection.main.head))
```
