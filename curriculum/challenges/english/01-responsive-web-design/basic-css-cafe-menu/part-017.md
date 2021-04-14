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
const link = $('link')[1];
assert(link);
```

Your `link` element should be within your `head` element.

```js
assert(code.match(/<head>[\w\W\s]*<link[\w\W\s]*>[\w\W\s]*<\/head>/i))
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
const link = $('link')[1];
assert(link.outerHTML.match(/rel=['"]stylesheet['"]/i));
```

Your `link` element should have a `type` attribute with the value `text/css`.

```js
const link = $('link')[1];
assert(link.outerHTML.match(/type=['"]text\/css['"]/i));
```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
const link = $('link')[1];
assert(link.outerHTML.match(/href=['"]styles.css['"]/i));
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
        <h2>Coffees</h2>
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

