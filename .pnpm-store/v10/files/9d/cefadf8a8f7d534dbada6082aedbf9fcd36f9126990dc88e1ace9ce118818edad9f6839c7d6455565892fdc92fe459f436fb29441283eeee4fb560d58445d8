# comment-parser

`comment-parser` is a library helping to handle Generic JSDoc-style comments. It is

- **language-agnostic** – no semantics enforced. You decide what tags are and what they mean. And it can be used with any language supporting `/** */` source comments.
- **no dependencies** – it is compact and environment-agnostic, can be run on both the server and browser sides
- **highly customizable** – with a little code you can deeply customize how comments are parsed
- **bidirectional** - you can write comment blocks back to the source after updating or formatting
- **strictly typed** - comes with generated `d.ts` data definitions since written in TypeScript

```sh
npm install comment-parser
```

> 💡 Check out the [Playground](https://syavorsky.github.io/comment-parser)

> 💡 Previous version lives in [0.x](https://github.com/syavorsky/comment-parser/tree/0.x) branch

Lib mainly provides two pieces [Parser](#Parser) and [Stringifier](#Stringifier).

## Parser

Let's go over string parsing:

```js
const { parse } = require('comment-parser/lib')

const source = `
/**
 * Description may go
 * over few lines followed by @tags
 * @param {string} name the name parameter
 * @param {any} value the value of any type
 */`

const parsed = parse(source)
```

Lib source code is written in TypeScript and all data shapes are conveniently available for your IDE of choice. All types described below can be found in [primitives.ts](src/primitives.ts)

The input source is first parsed into lines, then lines split into tokens, and finally, tokens are processed into blocks of tags

### Block

```js
/**
 * Description may go
 * over multiple lines followed by @tags
 * @param {string} name the name parameter
 * @param {any} value the value parameter
 */
```

### Description

```js
/**
 * Description may go
 * over multiple lines followed by @tags
```

### Tags

```js
 * @param {string} name the name parameter
```

```js
 * @param {any} value the value parameter
 */
```

### Tokens

```
|line|start|delimiter|postDelimiter|tag   |postTag|name |postName|type    |postType|description                     |end|
|----|-----|---------|-------------|------|-------|-----|--------|--------|--------|--------------------------------|---|
|   0|{2}  |/**      |             |      |       |     |        |        |        |                                |   |
|   1|{3}  |*        |{1}          |      |       |     |        |        |        |Description may go              |   |
|   2|{3}  |*        |{1}          |      |       |     |        |        |        |over few lines followed by @tags|   |
|   3|{3}  |*        |{1}          |@param|{1}    |name |{1}     |{string}|{1}     |the name parameter              |   |
|   4|{3}  |*        |{1}          |@param|{1}    |value|{1}     |{any}   |{1}     |the value of any type           |   |
|   5|{3}  |         |             |      |       |     |        |        |        |                                |*/ |
```

### Result

The result is an array of Block objects, see the full output on the [playground](https://syavorsky.github.io/comment-parser)

```js
[{
  // uppper text of the comment, overall block description
  description: 'Description may go over multiple lines followed by @tags',
  // list of block tags: @param, @param
  tags: [{
    // tokens.tag without "@"
    tag: 'param',
    // unwrapped tokens.name
    name: 'name',
    // unwrapped tokens.type
    type: 'string',
    // true, if tokens.name is [optional]
    optional: false,
    // default value if optional [name=default] has one
    default: undefined,
    // tokens.description assembled from a siongle or multiple lines
    description: 'the name parameter',
    // problems occured while parsing this tag section, subset of ../problems array
    problems: [],
    // source lines processed for extracting this tag, "slice" of the ../source item reference
    source: [ ... ],
  }, ... ],
  // source is an array of `Line` items having the source
  // line number and `Tokens` that can be assembled back into
  // the line string preserving original formatting
  source: [{
    // source line number
    number: 1,
    // source line string
    source: "/**",
    // source line tokens
    tokens: {
      // indentation
      start: "",
      // delimiter, either '/**', '*/', '*', or ''. Mid lines may have no delimiters
      delimiter: "/**",
      // space between delimiter and tag
      postDelimiter: "",
      // tag starting with "@"
      tag: "",
      // space between tag and type
      postTag: "",
      // name with no whitespaces or "multiple words" wrapped into quotes. May occure in [name] and [name=default] forms
      name: "",
      // space between name and type
      postName: "",
      // type is has to be {wrapped} into curlies otherwise will be omitted
      type: "",
      // space between type and description
      postType: "",
      // description is basicaly rest of the line
      description: "",
      // closing */ marker if present
      end: ""
    }
  }, ... ],
  // problems occured while parsing the block
  problems: [],
}];
```

While `.source[].tokens` are not providing readable annotation information, they are essential for tracing data origins and assembling string blocks with `stringify`

### options

```ts
interface Options {
  // start count for source line numbers
  startLine: number;
  // escaping chars sequence marking wrapped content literal for the parser
  fence: string;
  // block and comment description compaction strategy
  spacing: 'compact' | 'preserve';
  // tokenizer functions extracting name, type, and description out of tag, see Tokenizer
  tokenizers: Tokenizer[];
}
```

examples
- [default config](https://syavorsky.github.io/comment-parser/#parse-defaults)
- [line numbers control](https://syavorsky.github.io/comment-parser/#parse-line-numbering)
- [description spacing](https://syavorsky.github.io/comment-parser/#parse-spacing)
- [escaping](https://syavorsky.github.io/comment-parser/#parse-escaping)
- [explore the origin source](https://syavorsky.github.io/comment-parser/#parse-source-exploration)

[suggest more examples](https://github.com/syavorsky/comment-parser/issues/new?title=example+suggestion%3A+...&labels=example,parser)

## Stringifier

The stringifier is an important piece used by other tools updating the source code. It goes over `Block.source[].tokens` items and assembles them back to the string. It might be used with various transforms applied before stringifying.

```js
const { parse, stringify, transforms: {flow, align, indent} } = require('comment-parser');

const source = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   *
* @my-tag {my.type} my-name description line 1
      description line 2
    * description line 3
   */`;

const parsed = parse(source);
const transform = flow(align(), indent(0))
console.log(stringify(transform(parsed[0])));
```

### Result

```js
/**
 * Description may go
 * over multiple lines followed by @tags
 *
 * @my-tag {my.type} my-name description line 1
                             description line 2
 *                           description line 3
 */
```

examples
- [format comments](https://syavorsky.github.io/comment-parser/#stringify-formatting)

[suggest more examples](https://github.com/syavorsky/comment-parser/issues/new?title=example+suggestion%3A+...&labels=example,stringifier)

## Migrating from 0.x version

Code of pre-1.0 version is forked into [0.x](https://github.com/syavorsky/comment-parser/tree/0.x) and will phase out eventually. Please file the issue if you find some previously existing functionality can't be achieved with 1.x API. Check out [migration notes](migrate-1.0.md).
