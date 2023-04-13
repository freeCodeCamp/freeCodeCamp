---
id: 64367cb9facaa32bacfbff2b
title: Step 1
challengeType: 0
dashedName: step-1
---
# --description--

Before starting the project, you need to set up the HTML document with some basic structure. Imagine the web page as a house, and HTML as the foundation. You'll need a strong foundation, so let's add a `DOCTYPE`, `html`, `head`, and `body` tags. Think of them as the pillars that hold up the roof of the website. 

Next up, add a `meta` tag inside the `head` tag that sets the character encoding. Don't worry, it's not as complicated as it sounds! Think of it as the spice that brings out the flavor in your favorite dish.

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

Your `html` element should have an opening tag. Don't forget the `lang` attribute.

```js
assert(code.match(/<html\s+lang\s*=\s*('|")en\1\s*>/gi));
```

Your `html` element should have a closing tag.

```js
assert(code.match(/<\/html\s*>/));
```

Your `DOCTYPE` declaration should be at the beginning of your HTML.

```js
assert(__helpers.removeHtmlComments(code).match(/^\s*<!DOCTYPE\s+html\s*>/i));
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

Your code should have a `meta` element.

```js
const meta = document.querySelector('meta');
assert.exists(meta);
```

Your `meta` element should have a `charset` attribute with the value `UTF-8`.

```js
assert.match(code, /<meta[\s\S]+?charset=('|"|`)UTF-8\1/i)
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```
