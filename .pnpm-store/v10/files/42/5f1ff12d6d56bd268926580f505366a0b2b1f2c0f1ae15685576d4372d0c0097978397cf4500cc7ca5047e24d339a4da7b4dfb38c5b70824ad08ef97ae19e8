# dom-serializer [![Build Status](https://travis-ci.com/cheeriojs/dom-serializer.svg?branch=master)](https://travis-ci.com/cheeriojs/dom-serializer)

Renders a [domhandler](https://github.com/fb55/domhandler) DOM node or an array of domhandler DOM nodes to a string.

```js
import render from "dom-serializer";

// OR

const render = require("dom-serializer").default;
```

# API

## `render`

▸ **render**(`node`: Node \| Node[], `options?`: [_Options_](#Options)): _string_

Renders a DOM node or an array of DOM nodes to a string.

Can be thought of as the equivalent of the `outerHTML` of the passed node(s).

#### Parameters:

| Name      | Type                               | Default value | Description                    |
| :-------- | :--------------------------------- | :------------ | :----------------------------- |
| `node`    | Node \| Node[]                     | -             | Node to be rendered.           |
| `options` | [_DomSerializerOptions_](#Options) | {}            | Changes serialization behavior |

**Returns:** _string_

## Options

### `encodeEntities`

• `Optional` **decodeEntities**: _boolean | "utf8"_

Encode characters that are either reserved in HTML or XML.

If `xmlMode` is `true` or the value not `'utf8'`, characters outside of the utf8 range will be encoded as well.

**`default`** `decodeEntities`

---

### `decodeEntities`

• `Optional` **decodeEntities**: _boolean_

Option inherited from parsing; will be used as the default value for `encodeEntities`.

**`default`** true

---

### `emptyAttrs`

• `Optional` **emptyAttrs**: _boolean_

Print an empty attribute's value.

**`default`** xmlMode

**`example`** With <code>emptyAttrs: false</code>: <code>&lt;input checked&gt;</code>

**`example`** With <code>emptyAttrs: true</code>: <code>&lt;input checked=""&gt;</code>

---

### `selfClosingTags`

• `Optional` **selfClosingTags**: _boolean_

Print self-closing tags for tags without contents.

**`default`** xmlMode

**`example`** With <code>selfClosingTags: false</code>: <code>&lt;foo&gt;&lt;/foo&gt;</code>

**`example`** With <code>selfClosingTags: true</code>: <code>&lt;foo /&gt;</code>

---

### `xmlMode`

• `Optional` **xmlMode**: _boolean_ \| _"foreign"_

Treat the input as an XML document; enables the `emptyAttrs` and `selfClosingTags` options.

If the value is `"foreign"`, it will try to correct mixed-case attribute names.

**`default`** false

---

## Ecosystem

| Name                                                          | Description                                             |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| [htmlparser2](https://github.com/fb55/htmlparser2)            | Fast & forgiving HTML/XML parser                        |
| [domhandler](https://github.com/fb55/domhandler)              | Handler for htmlparser2 that turns documents into a DOM |
| [domutils](https://github.com/fb55/domutils)                  | Utilities for working with domhandler's DOM             |
| [css-select](https://github.com/fb55/css-select)              | CSS selector engine, compatible with domhandler's DOM   |
| [cheerio](https://github.com/cheeriojs/cheerio)               | The jQuery API for domhandler's DOM                     |
| [dom-serializer](https://github.com/cheeriojs/dom-serializer) | Serializer for domhandler's DOM                         |

---

LICENSE: MIT
