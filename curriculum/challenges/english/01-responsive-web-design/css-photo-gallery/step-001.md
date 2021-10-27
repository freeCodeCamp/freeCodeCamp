---
id: 61537485c4f2a624f18d7794
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

Begin with your standard HTML boilerplate. Add a `DOCTYPE` declaration, an `html` element, a `head` element, and a `body` element.

# --hints--

Your code should contain the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE/gi));
```

You should include a space after the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE\s+/gi));
```

You should define the document type to be `html`.

```js
assert(code.match(/<!DOCTYPE\s+html/gi));
```

You should close the `DOCTYPE` declaration with a `>` after the type.

```js
assert(code.match(/<!DOCTYPE\s+html\s*>/gi));
```

Your `html` element should have an opening tag.

```js
assert(code.match(/<html\s*>/gi));
```

Your `html` element should have a closing tag.

```js
assert(code.match(/<\/html\s*>/));
```

Your `html` element should be below the `DOCTYPE` declaration.

```js
assert(code.match(/(?<!<html\s*>)<!DOCTYPE\s+html\s*>/gi));
```

You should have an opening `head` tag.

```js
assert(code.match(/<head\s*>/i));
```

You should have a closing `head` tag.

```js
assert(code.match(/<\/head\s*>/i));
```

You should have an opening `body` tag.

```js
assert(code.match(/<body\s*>/i));
```

You should have a closing `body` tag.

```js
assert(code.match(/<\/body\s*>/i));
```

The `head` and `body` elements should be siblings.

```js
assert(document.querySelector('head')?.nextElementSibling?.localName === 'body');
```

The `head` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'head'));
```

The `body` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'body'));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```

```css

```
