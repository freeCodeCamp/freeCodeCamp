---
id: 5f344f9c805cd193c33d829c
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

You can add style to an element by specifying it in the `style` element and setting a property for it like this:

```css
element {
 property: value;
}
```

Center your `h1` element by setting its `text-align` property to the value `center`.

# --hints--

You should have an `h1` selector in your `style` element.

```js
const style = document.querySelector('style');
assert(style.innerText.includes('h1'));
```

Your `h1` selector should have a `text-align` property.

```js
assert(code.match(/h1\s*{\s*text-align:/i));
```

Your `text-align` property should set a value of `center`.

```js
assert(code.match(/text-align:\s*center;?/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
--fcc-editable-region--
    <style>
    </style>
--fcc-editable-region--
  </head>
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

