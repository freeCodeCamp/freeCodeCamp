# parse-english

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Chat][chat-badge]][chat]

English language parser for [**retext**][retext] producing **[nlcst][]** nodes.

## Install

[npm][]:

```sh
npm install parse-english
```

## Use

```js
var inspect = require('unist-util-inspect')
var English = require('parse-english')

var tree = new English().parse(
  'Mr. Henry Brown: A hapless but friendly City of London worker.'
)

console.log(inspect(tree))
```

Yields:

```txt
RootNode[1] (1:1-1:63, 0-62)
└─ ParagraphNode[1] (1:1-1:63, 0-62)
   └─ SentenceNode[23] (1:1-1:63, 0-62)
      ├─ WordNode[2] (1:1-1:4, 0-3)
      │  ├─ TextNode: "Mr" (1:1-1:3, 0-2)
      │  └─ PunctuationNode: "." (1:3-1:4, 2-3)
      ├─ WhiteSpaceNode: " " (1:4-1:5, 3-4)
      ├─ WordNode[1] (1:5-1:10, 4-9)
      │  └─ TextNode: "Henry" (1:5-1:10, 4-9)
      ├─ WhiteSpaceNode: " " (1:10-1:11, 9-10)
      ├─ WordNode[1] (1:11-1:16, 10-15)
      │  └─ TextNode: "Brown" (1:11-1:16, 10-15)
      ├─ PunctuationNode: ":" (1:16-1:17, 15-16)
      ├─ WhiteSpaceNode: " " (1:17-1:18, 16-17)
      ├─ WordNode[1] (1:18-1:19, 17-18)
      │  └─ TextNode: "A" (1:18-1:19, 17-18)
      ├─ WhiteSpaceNode: " " (1:19-1:20, 18-19)
      ├─ WordNode[1] (1:20-1:27, 19-26)
      │  └─ TextNode: "hapless" (1:20-1:27, 19-26)
      ├─ WhiteSpaceNode: " " (1:27-1:28, 26-27)
      ├─ WordNode[1] (1:28-1:31, 27-30)
      │  └─ TextNode: "but" (1:28-1:31, 27-30)
      ├─ WhiteSpaceNode: " " (1:31-1:32, 30-31)
      ├─ WordNode[1] (1:32-1:40, 31-39)
      │  └─ TextNode: "friendly" (1:32-1:40, 31-39)
      ├─ WhiteSpaceNode: " " (1:40-1:41, 39-40)
      ├─ WordNode[1] (1:41-1:45, 40-44)
      │  └─ TextNode: "City" (1:41-1:45, 40-44)
      ├─ WhiteSpaceNode: " " (1:45-1:46, 44-45)
      ├─ WordNode[1] (1:46-1:48, 45-47)
      │  └─ TextNode: "of" (1:46-1:48, 45-47)
      ├─ WhiteSpaceNode: " " (1:48-1:49, 47-48)
      ├─ WordNode[1] (1:49-1:55, 48-54)
      │  └─ TextNode: "London" (1:49-1:55, 48-54)
      ├─ WhiteSpaceNode: " " (1:55-1:56, 54-55)
      ├─ WordNode[1] (1:56-1:62, 55-61)
      │  └─ TextNode: "worker" (1:56-1:62, 55-61)
      └─ PunctuationNode: "." (1:62-1:63, 61-62)
```

## API

`parse-english` has [the same API as `parse-latin`][latin].

## Algorithm

All of [`parse-latin`][latin] is included, and the following support for the
English natural language:

*   Unit abbreviations (`tsp.`, `tbsp.`, `oz.`, `ft.`, and more)
*   Time references (`sec.`, `min.`, `tues.`, `thu.`, `feb.`, and more)
*   Business Abbreviations (`Inc.` and `Ltd.`)
*   Social titles (`Mr.`, `Mmes.`, `Sr.`, and more)
*   Rank and academic titles (`Dr.`, `Rep.`, `Gen.`, `Prof.`, `Pres.`, and more)
*   Geographical abbreviations (`Ave.`, `Blvd.`, `Ft.`, `Hwy.`, and more)
*   American state abbreviations (`Ala.`, `Minn.`, `La.`, `Tex.`, and more)
*   Canadian province abbreviations (`Alta.`, `Qué.`, `Yuk.`, and more)
*   English county abbreviations (`Beds.`, `Leics.`, `Shrops.`, and more)
*   Common elision (omission of letters) (`’n’`, `’o`, `’em`, `’twas`, `’80s`,
    and more)

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/parse-english.svg

[build]: https://travis-ci.org/wooorm/parse-english

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/parse-english.svg

[coverage]: https://codecov.io/github/wooorm/parse-english

[downloads-badge]: https://img.shields.io/npm/dm/parse-english.svg

[downloads]: https://www.npmjs.com/package/parse-english

[size-badge]: https://img.shields.io/bundlephobia/minzip/parse-english.svg

[size]: https://bundlephobia.com/result?p=parse-english

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/retext

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[nlcst]: https://github.com/syntax-tree/nlcst

[latin]: https://github.com/wooorm/parse-latin
