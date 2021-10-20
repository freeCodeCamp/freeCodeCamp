---
id: 5f3477cb2e27333b1ab2b955
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

Now you need to link the `styles.css` file so the styles will be applied again. Nest a self-closing `link` element in the `head` element. Give it a `rel` attribute value `stylesheet`, a `type` attribute value of `text/css`, and an `href` attribute value of `styles.css`.

# --hints--

Your code should have a `link` element.

```js
// link is removed -> if exists, replaced with style
const link = document.querySelector('body > style');
assert(link);
```

You should not change your existing `head` element. Make sure you did not delete the closing tag.

```js
assert($('head').length === 1);
```

Your `link` element should be a self-closing element.

```js
assert(code.match(/<link[\w\W\s]+\/>/i));
```

Your `link` element should be within your `head` element.

```js
assert(code.match(/<head>[\w\W\s]*<link[\w\W\s]*\/>[\w\W\s]*<\/head>/i))
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
assert(code.match(/rel=('|")stylesheet\1/i));
```

Your `link` element should have a `type` attribute with the value `text/css`.

```js
assert(code.match(/type=('|")text\/css\1/i));
```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
assert(code.match(/href=('|")styles.css\1/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
--fcc-editable-region--
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
<html>
```

```css
h1, h2, p {
  text-align: center;
}
```
