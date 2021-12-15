---
id: 61695ab9f6ffe951c16d03dd
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Nest a `head` element within the `html` element. Just after the `head` element, add a `body` element.

# --hints--

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

Your `head` and `body` elements should be siblings.

```js
assert(document.querySelector('head')?.nextElementSibling?.localName === 'body');
```

Your `head` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'head'));
```

Your `body` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'body'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--

--fcc-editable-region--
</html>
```
