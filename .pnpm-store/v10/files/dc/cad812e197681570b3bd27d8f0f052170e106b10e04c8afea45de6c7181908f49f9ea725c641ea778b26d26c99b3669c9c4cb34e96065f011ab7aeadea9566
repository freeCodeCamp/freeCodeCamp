# mdast-builder

[![Build Status](https://travis-ci.com/mike-north/mdast-builder.svg?branch=master)](https://travis-ci.com/mike-north/mdast-builder)

Use composable functions to buld up a [`mdast`](https://github.com/syntax-tree/mdast) structure

## Use

```sh
yarn add mdast-builder
```

```ts
import {
  root,
  paragraph,
  text,
  heading,
  list,
  listItem,
  brk
} from 'mdast-builder';
import * as stringify from 'remark-stringify';
import * as unified from 'unified';

const processor = unified().use(stringify, {
  bullet: '-',
  fence: '`',
  fences: true,
  incrementListMarker: false
});

const output = processor.stringify(
  root([
    heading(2, text('Begin')),
    paragraph([
      paragraph(text('these are the starting instructions')),
      brk,
      brk,
      list('unordered', [
        listItem(text('one')),
        listItem(text('two')),
        listItem(text('three'))
      ])
    ])
  ])
);
```

`output` will equal

```md
## Begin

these are the starting instructions

- one
- two
- three
```

## Legal

&copy; 2019 LinkedIn
