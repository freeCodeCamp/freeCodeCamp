---
id: 612eaf56b7ba3257fdbfb0db
title: Step 21
challengeType: 0
dashedName: step-21
---

# --description--

The piano needs the freeCodeCamp logo to make it official.

Add an `img` element before your `.keys` element. Give the `img` a `class` of `logo`, and set the `src` to `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`. Give it an `alt` text of `freeCodeCamp Logo`.

# --hints--

You should add a new `img` element.

```js
assert(document.querySelectorAll('img')?.length === 1);
```

Your `img` element should come before your first `.keys` element.

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

Your `img` element should have a `class` set to `logo`.

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

Your `img` element should have a `src` set to `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`.

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

Your `img` element should have an `alt` attribute set to `freeCodeCamp Logo`.

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

Remember that casing and spelling matter.

```js
assert(document.querySelector('img')?.getAttribute('alt') === 'freeCodeCamp Logo');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys">
    --fcc-editable-region--
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}
```
