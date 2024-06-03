---
id: 612e9f1e7e5ccd4fa9ada0be
title: Schritt 17
challengeType: 0
dashedName: step-17
---

# --description--

Weise dem `.key` eine `margin` von `2px` und eine `float`-Eigenschaft von `left` zu.

# --hints--

Dein `.key`-Selektor sollte eine `margin`-Eigenschaft von `2px` enthalten.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.margin === '2px');
```

Dein `.key`-Selektor sollte eine `float`-Eigenschaft auf `left` gesetzt haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.float === 'left');
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
    <div id="piano">
      <div class="keys">
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

--fcc-editable-region--
.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
}
--fcc-editable-region--
```
