---
id: 5f76967fad478126d6552b0d
title: Part 35
challengeType: 0
---

## Description
<section id='description'>

Next, you want to align the price to the right. Add a class named `price` to your `p` element that has `3.00` as its text.

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
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffees</h2>
          <article>
            <p class="flavor">French Vanilla</p>
            --fcc-editable-region--
            <p>3.00</p>
            --fcc-editable-region--
          </article>
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

</div>

<div id='css-seed'>

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
```

</div>

</section>
