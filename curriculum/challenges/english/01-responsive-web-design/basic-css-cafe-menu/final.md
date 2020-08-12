---
id: 5f3f612aada8ecb48a141e32
title: Final Prototype
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Final Prototype

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
      <header class="title-header">
        <h1>CAMPER CAFE</h1>
        <p class="established">Est. 2020</p>
      </header>
      <hr />
      <main>
        <section>
          <h2>Coffees</h2>
          <img class="menu-icon coffee-icon" src="https://tinyurl.com/cafe-coffee-fcc" />
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
          <img src="https://tinyurl.com/cafe-pie-fcc" />
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
      <hr />
      <footer>
        <p>
          <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <p>123 Free Code Camp Drive</p>
      </footer>
    </div>
  </body>
</html>
```

</div>

<div id='css-seed'>

```css
body {
  font-family: sans-serif;
  padding: 20px;
  background-image: url(https://tinyurl.com/coffee-beans-fcc);
}

.menu {
  width: 80%;
  background-color: burlywood;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
}

hr {
  height: 2px;
  background-color: brown;
  border-color: brown;
}

header {
  text-align: center;
}

h1 {
  margin-top: 0;
  font-size: 40px;
  margin-bottom: 15px;
}

.established {
  font-style: italic;
}

h2 {
  /* margin-bottom: 20px; */
  font-size: 30px;
}

h1,
h2 {
  font-family: "Impact", serif;
}

.item p {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
}

.flavor, .dessert {
  text-align: left;
  width: 70%;
}

.price {
  width: 30%;
  text-align: right;
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

</div>

</section>

