---
id: 5f475e1c7f71a61d913836c6
title: Part 92
challengeType: 0
dashedName: part-92
---

# --description--

Add one last image under the `Desserts` heading using the url `https://tinyurl.com/cafe-pie-fcc`. Give the image an `alt` value of `pie icon`.

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
        <p class="established">Est. 2020</p>
      </header>
      <hr>
      <main>
        <section>
          <h2>Coffees</h2>
          <img src="https://tinyurl.com/cafe-coffee-fcc" alt="coffee icon"/>
          <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="flavor">Carmel Macchiato</p><p class="price">3.75</p>
          </article>
          <article class="item">
            <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
          </article>
          <article class="item">
            <p class="flavor">Hazelnut</p><p class="price">4.00</p>
          </article>
          <article class="item">
            <p class="flavor">Mocha</p><p class="price">4.50</p>
          </article>
        </section>
        <section>
--fcc-editable-region--
          <h2>Desserts</h2>
--fcc-editable-region--
          <article class="item">
            <p class="dessert">Donut</p><p class="price">1.50</p>
          </article>
          <article class="item">
            <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
          </article>
          <article class="item">
            <p class="dessert">Cheesecake</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="dessert">Cinammon Roll</p><p class="price">2.50</p>
          </article>
        </section>
      </main>
      <hr class="bottom-line">
      <footer>
        <p>
          <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <p class="address">123 Free Code Camp Drive</p>
      </footer>
    </div>
  </body>
<html>
```

```css
body {
  background-image: url(https://tinyurl.com/coffee-beans-fcc);
  font-family: sans-serif;
  padding: 20px;
}

h1 {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
}

h2 {
  font-size: 30px;
}

.established {
  font-style: italic;
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 500px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

hr {
  height: 2px;
  background-color: brown;
  border-color: brown;
}

.bottom-line {
  margin-top: 25px;
}

h1, h2 {
  font-family: Impact, serif;
}

.item p {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
}

.flavor, .dessert {
  text-align: left;
  width: 75%;
}

.price {
  text-align: right;
  width: 25%;
}

/* FOOTER */

footer {
  font-size: 14px;
}

.address {
  margin-bottom: 5px;
}

a {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  color: brown;
}

a:active {
  color: brown;
}
```

