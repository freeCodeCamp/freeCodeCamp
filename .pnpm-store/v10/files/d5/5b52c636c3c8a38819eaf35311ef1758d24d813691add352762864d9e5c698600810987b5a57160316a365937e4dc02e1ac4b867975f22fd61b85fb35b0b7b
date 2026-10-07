# parse-latin

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Chat][chat-badge]][chat]

A Latin-script language parser for [**retext**][retext] producing **[nlcst][]**
nodes.

Whether Old-English (“þā gewearþ þǣm hlāforde and þǣm hȳrigmannum wiþ ānum
penninge”), Icelandic (“Hvað er að frétta”), French (“Où sont les toilettes?”),
`parse-latin` does a good job at tokenizing it.

Note also that `parse-latin` does a decent job at tokenizing Latin-like scripts,
Cyrillic (“Добро пожаловать!”), Georgian (“როგორა ხარ?”), Armenian (“Շատ հաճելի
է”), and such.

## Install

[npm][]:

```sh
npm install parse-latin
```

## Use

```js
var inspect = require('unist-util-inspect')
var Latin = require('parse-latin')

var tree = new Latin().parse('A simple sentence.')

console.log(inspect(tree))
```

Which, when inspecting, yields:

```txt
RootNode[1] (1:1-1:19, 0-18)
└─ ParagraphNode[1] (1:1-1:19, 0-18)
   └─ SentenceNode[6] (1:1-1:19, 0-18)
      ├─ WordNode[1] (1:1-1:2, 0-1)
      │  └─ TextNode: "A" (1:1-1:2, 0-1)
      ├─ WhiteSpaceNode: " " (1:2-1:3, 1-2)
      ├─ WordNode[1] (1:3-1:9, 2-8)
      │  └─ TextNode: "simple" (1:3-1:9, 2-8)
      ├─ WhiteSpaceNode: " " (1:9-1:10, 8-9)
      ├─ WordNode[1] (1:10-1:18, 9-17)
      │  └─ TextNode: "sentence" (1:10-1:18, 9-17)
      └─ PunctuationNode: "." (1:18-1:19, 17-18)
```

## API

### `ParseLatin(value)`

Exposes the functionality needed to tokenize natural Latin-script languages into
a syntax tree.
If `value` is passed here, it’s not needed to give it to `#parse()`.

#### `ParseLatin#tokenize(value)`

Tokenize `value` (`string`) into letters and numbers (words), white space, and
everything else (punctuation).
The returned nodes are a flat list without paragraphs or sentences.

###### Returns

[`Array.<Node>`][nlcst] — Nodes.

#### `ParseLatin#parse(value)`

Tokenize `value` (`string`) into an [NLCST][] tree.
The returned node is a `RootNode` with in it paragraphs and sentences.

###### Returns

[`Node`][nlcst] — Root node.

## Algorithm

> Note: The easiest way to see **how parse-latin tokenizes and parses**, is by
> using the [online parser demo][demo], which
> shows the syntax tree corresponding to the typed text.

`parse-latin` splits text into white space, word, and punctuation tokens.
`parse-latin` starts out with a pretty easy definition, one that most other
tokenizers use:

*   A “word” is one or more letter or number characters
*   A “white space” is one or more white space characters
*   A “punctuation” is one or more of anything else

Then, it manipulates and merges those tokens into a ([nlcst][]) syntax tree,
adding sentences and paragraphs where needed.

*   Some punctuation marks are part of the word they occur in, such as
    `non-profit`, `she’s`, `G.I.`, `11:00`, `N/A`, `&c`, `nineteenth- and…`
*   Some full-stops do not mark a sentence end, such as `1.`, `e.g.`, `id.`
*   Although full-stops, question marks, and exclamation marks (sometimes) end a
    sentence, that end might not occur directly after the mark, such as `.)`,
    `."`
*   And many more exceptions

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/parse-latin.svg

[build]: https://travis-ci.org/wooorm/parse-latin

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/parse-latin.svg

[coverage]: https://codecov.io/github/wooorm/parse-latin

[downloads-badge]: https://img.shields.io/npm/dm/parse-latin.svg

[downloads]: https://www.npmjs.com/package/parse-latin

[size-badge]: https://img.shields.io/bundlephobia/minzip/parse-latin.svg

[size]: https://bundlephobia.com/result?p=parse-latin

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/retext

[npm]: https://docs.npmjs.com/cli/install

[demo]: https://wooorm.com/parse-latin/

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[nlcst]: https://github.com/syntax-tree/nlcst
