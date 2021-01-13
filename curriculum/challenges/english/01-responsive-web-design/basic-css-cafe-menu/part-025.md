---
id: 5f356ed60785e1f3e9850b6e
title: Part 25
challengeType: 0
dashedName: part-25
---

# --description--

Now it's easy to see that the text is centered inside the `div` element. Currently, the width of the `div` element is specified in pixels (`px`). Change the `width` property's value to be `80%`, to make it is 80% the width of its parent element (`body`).

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
    <div>
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffees</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  /*
  background-color: burlywood;
  */
}

h1, h2, p {
  text-align: center;
}
--fcc-editable-region--
div {
  width: 300px;
  background-color: burlywood;
}
--fcc-editable-region--
```

