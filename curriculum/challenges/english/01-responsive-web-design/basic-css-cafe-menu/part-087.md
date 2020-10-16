---
id: 5f46e270702a8456a664f0df
title: Part 87
challengeType: 0
---

## Description
<section id='description'>

To remove some of the vertical space between the `h1` element and the text `Est. 2020`, change the bottom margin of the `h1` to `15px`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Test 1
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
          <h2>Desserts</h2>
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
        <p>123 Free Code Camp Drive</p>
      </footer>
    </div>
  </body>
<html>
```

</div>

<div id='css-seed'>

```css
body {
  background-image: url(https://tinyurl.com/coffee-beans-fcc);
  font-family: sans-serif;
  padding: 20px;
}

--fcc-editable-region--
h1 {
  font-size: 40px;
  margin-top: 0;
}
--fcc-editable-region--

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
  width: 25%
}

/* FOOTER */

footer {
  font-size: 14px;
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

</div>

</section>
