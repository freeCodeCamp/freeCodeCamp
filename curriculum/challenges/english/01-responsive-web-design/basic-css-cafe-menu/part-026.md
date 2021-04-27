---
id: 5f356ed656a336993abd9f7c
title: Part 26
challengeType: 0
dashedName: part-26
---

# --description--

Next, you want to center the `div` horizontally. You can do this by setting its `margin-left` and `margin-right` properties to `auto`. Think of the margin as invisible space around an element. Using these two margin properties, center the `div` element within the `body` element.

# --hints--

You should set the `margin-left` property to `auto`.

```js
assert(code.match(/margin-left:\s*auto;?/i));
```

You should set the `margin-right` property to `auto`.

```js
assert(code.match(/margin-right:\s*auto;?/i));
```

Your `div` should be horizontally centered.

```js
const divLeft = $('div').css('margin-left');
const divRight = $('div').css('margin-right');
console.log(parseInt(divLeft))
assert(parseInt(divLeft) === parseInt(divRight));
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
  width: 80%;
  background-color: burlywood;
}
--fcc-editable-region--
```

