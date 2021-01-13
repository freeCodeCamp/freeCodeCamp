---
id: 5f3c866d5414453fc2d7b480
title: Part 32
challengeType: 0
dashedName: part-32
---

# --description--

Starting below the existing coffee/price pair, add the following coffees and prices using an `article` element with two nested `p` elements inside each. As before, the first `p` element's text should contain the coffee flavor and the second `p` element's text should contain the price.

```bash
Carmel Macchiato 3.75
Pumpkin Spice 3.50
Hazelnut 4.00
Mocah 4.50
```

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
--fcc-editable-region--
          <article>
            <p>French Vanilla</p>
            <p>3.00</p>
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
```

