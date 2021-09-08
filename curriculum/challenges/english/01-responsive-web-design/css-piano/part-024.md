---
id: 612eb75153591b5e3b1ab65e
title: Part 24
challengeType: 0
dashedName: part-24
---

# --description--

The `img` element needs its parent to have a `position` set as a point of reference. Set the `position` of the `#piano` selector to `relative`.

# --hints--

Your `#piano` selector should have a `position` property set to `relative`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.position === 'relative');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Responsive Web Design Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div id="piano">
      <img class="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
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

--fcc-editable-region--
#piano {
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
  background-color: #00471b;
}
--fcc-editable-region--

.keys {
  width: 949px;
  height: 180px;
  padding-left: 2px;
  background-color: #040404;
}

.key {
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
  background-color: #ffffff;
}

.key.black--key::after {
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
  background-color: #1d1e22;
}

.logo {
  width: 200px;
  position: absolute;
  top: 23px;
}
```
