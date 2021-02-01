---
id: 5f7691dafd882520797cd2f0
title: Part 44
challengeType: 0
dashedName: part-44
---

# --description--

Next, position the other `p` elements to be on the same line with no space between them.

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
          <h2>Coffees</h2>
          <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">3.00</p>
          </article>
--fcc-editable-region--
          <article class="item">
            <p>Carmel Macchiato</p>
            <p>3.75</p>
          </article>
          <article class="item">
            <p>Pumpkin Spice</p>
            <p>3.50</p>
          </article>
          <article class="item">
            <p>Hazelnut</p>
            <p>4.00</p>
          </article>
          <article class="item">
            <p>Mocha</p>
            <p>4.50</p>
          </article>
--fcc-editable-region--
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

.item p {
  display: inline-block;
}

.flavor {
  text-align: left;
  width: 50%;
}

.price {
  text-align: right;
  width: 50%;
}
```

