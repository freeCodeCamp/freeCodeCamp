# @codemirror/autocomplete [![NPM version](https://img.shields.io/npm/v/@codemirror/autocomplete.svg)](https://www.npmjs.org/package/@codemirror/autocomplete)

[ [**WEBSITE**](https://codemirror.net/) | [**DOCS**](https://codemirror.net/docs/ref/#autocomplete) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/autocomplete/blob/main/CHANGELOG.md) ]

This package implements autocompletion for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/autocomplete/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## Usage

```javascript
import {EditorView} from "@codemirror/view"
import {autocompletion} from "@codemirror/autocomplete"
import {jsonLanguage} from "@codemirror/lang-json"

const view = new EditorView({
  parent: document.body,
  extensions: [
    jsonLanguage,
    autocompletion(),
    jsonLanguage.data.of({
      autocomplete: ["id", "name", "address"]
    })
  ]
})
```

This configuration will just complete the given words anywhere in JSON
context. Most language modules come with more refined autocompletion
built-in, but you can also write your own custom autocompletion
[sources](https://codemirror.net/docs/ref/#autocomplete.CompletionSource)
and associate them with your language this way.
