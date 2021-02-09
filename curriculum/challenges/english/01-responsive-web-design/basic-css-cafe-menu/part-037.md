---
id: 5f3c866de7a5b784048f94b1
title: Part 37
challengeType: 0
dashedName: part-37
---

# --description--

That is kind of what you want, but now it would be nice if the flavor and price were on the same line. `p` elements are <dfn>block-level</dfn> elements, so they take up the entire width of their parent element.

To get them on the same line, you need to apply some styling to the `p` elements, so they behave more like `inline` elements. Add a `class` attribute with the value `item` to first `article` element under the `Coffees` heading.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="menu">
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
--fcc-editable-region--
          <h2>Coffees</h2>
          <article>
            <p class="flavor">French Vanilla</p>
            <p class="price">3.00</p>
          </article>
--fcc-editable-region--
          <article>
            <p>Carmel Macchiato</p>
            <p>3.75</p>
          </article>
          <article>
            <p>Pumpkin Spice</p>
            <p>3.50</p>
          </article>
          <article>
            <p>Hazelnut</p>
            <p>4.00</p>
          </article>
          <article>
            <p>Mocha</p>
            <p>4.50</p>
          </article>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  background-image: url(https://tinyurl.com/coffee-beans-fcc);
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}

.flavor {
  text-align: left;
}

.price {
  text-align: right;
}
```

