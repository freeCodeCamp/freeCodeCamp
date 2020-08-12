---
id: 
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
          <header>
            <h2>Coffee</h2>
            <img class="menu-icon coffee-icon" src="https://static.thenounproject.com/png/200139-200.png" />
          </header>
          <article class="item">
            <p class="name">French Vanilla</p>
            <p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="name">Carmel Macchiato</p>
            <p class="price">3.75</p>
          </article>
          <article class="item">
            <p class="name">Pumpkin Spice</p>
            <p class="price">3.50</p>
          </article>
          <article class="item">
            <p class="name">Hazelnut</p>
            <p class="price">4.00</p>
          </article>
          <article class="item">
            <p class="name">Mocha</p>
            <p class="price">4.50</p>
          </article>
        </section>
        <section>
          <header>
            <h2>Desserts</h2>
            <img
              class="menu-icon"
              src="https://static.thenounproject.com/png/28036-200.png"
            />
          </header>
          <article class="item">
            <p class="name">Donut</p>
            <p class="price">1.50</p>
          </article>
          <article class="item">
            <p class="name">Cherry Pie</p>
            <p class="price">2.75</p>
          </article>
          <article class="item">
            <p class="name">Cheesecake</p>
            <p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="name">Cinammon Roll</p>
            <p class="price">2.50</p>
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
  background-image: url(https://images.unsplash.com/photo-1573883844855-f364441ac463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}

.menu {
  margin: auto;
  width: 80%;
  max-width: 500px; /* add near end and explain how it makes the menu look better on wider screens */
  padding: 20px;
  background-color: burlywood;
}

hr {
  height: 3px;
  background-color: brown;
  border: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

header {
  text-align: center;
}

h1 {
  font-size: 40px;
  margin-bottom: 15px;
}

.established {
  font-style: italic;
}

h2 {
  margin-bottom: 20px;
  font-size: 30px;
}

h1,
h2 {
  font-family: "Impact", serif;
}

section {
  margin: 20px 0;
}

.menu-icon {
  margin-top: -15px;
  height: 50px;
}

.coffee-icon {
  height: 45px;
}

.item p {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
}

.name {
  width: 69%;
}

.price {
  width: 29%;
  text-align: right;
}

/* FOOTER */

footer {
  text-align: center;
}

footer p,
foot a {
  font-size: 14px;
}


a {
  color: black;
}

/* The following will be taught as a step just to make camper understands
the effect the visited pseudo-class has on a link.  The final color will be black.

a:visited {
  color: grey;
} */

a:visited {
  color: black;
}

a:hover {
  color: brown;
}

/* 
The following will be taught as a step just to make camper understands
the effect the active pseudo-class has on a link.  The final color will be brown.

a:active {
  color: white;
} */

a:active {
  color: brown;
}
```

</div>

</section>

