---
id: 612eaf56b7ba3257fdbfb0db
title: Schritt 21
challengeType: 0
dashedName: step-21
---

# --description--

Das Klavier benötigt das freeCodeCamp-Logo, um es offiziell aussehen zu lassen.

Füge ein `img`-Element vor deinem `.keys`-Element ein. Weise dem `img` eine `class` von `logo` zu und setze die `src` auf `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`. Weise ihm den `alt`-Text `freeCodeCamp Logo` zu.

# --hints--

Du solltest ein neues `img`-Element hinzufügen.

```js
assert(document.querySelectorAll('img')?.length === 1);
```

Dein `img`-Element sollte vor deinem ersten `.keys`-Element stehen.

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

Dein `img`-Element sollte eine `class` auf `logo` gesetzt haben.

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

Dein `img`-Element sollte einen `src` auf `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg` gesetzt haben.

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

Dein `img`-Element sollte ein `alt`-Attribut auf `freeCodeCamp Logo` gesetzt haben.

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

Denke daran, dass Groß- und Kleinschreibung sowie Rechtschreibung wichtig sind.

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
