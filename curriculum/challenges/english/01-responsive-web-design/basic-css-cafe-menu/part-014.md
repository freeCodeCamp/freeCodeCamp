---
id: 5f3477ae34c1239cafe128be
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

You now have three type selectors with the exact same styling. You can add the same group of styles to many elements by separating the selectors with commas like this:

```css
selector1, selector2 {
  property: value;
}
```

Use a single type selector to center the `h1`, `h2` and `p` elements at the same time.

# --hints--

You should use a single type selector for all three elements.

```js
assert(code.match(/(h1|h2|p), (h1|h2|p), (h1|h2|p) {/))
```

You should only have one selector in your `style` element.

```js
assert(code.match(/text-align/g).length === 1);
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
      h1 {
        text-align: center;
      }
      h2 {
        text-align: center;
      }
      p {
        text-align: center;
      }
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

