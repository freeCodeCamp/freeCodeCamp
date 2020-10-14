---
id: 5f3cade9fa77275d9f4efe62
title: Part 41
challengeType: 0
---

## Description
<section id='description'>

That worked, but there is still a little space on the right of the price. 

You could keep trying various percentages for the widths.  Instead,  simply move the price `p` element to be on the same line and make sure there is no space between them.

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
          <article class="item">
            --fcc-editable-region--
            <p class="flavor">French Vanilla</p>
            <p class="price">3.00</p>
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

.item p {
  display: inline-block;
}

.flavor {
  text-align: left;
  width: 49%;
}

.price {
  text-align: right;
  width: 49%;
}
```

</div>

</section>
