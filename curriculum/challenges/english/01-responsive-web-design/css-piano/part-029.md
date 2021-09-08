---
id: 612ebe7fe6d07e6b76d1cae2
title: Part 29
challengeType: 0
dashedName: part-29
---

# --description--

Add a new `#piano` selector within your `@media` query, and set the `width` to `335px`.

# --hints--

Your `@media` rule should have a `#piano` selector.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 768px)');
const piano = rules?.find(rule => rule.selectorText === '#piano');
assert(piano);
```

Your new `#piano` selector should have a `width` of `335px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 768px)');
const piano = rules?.find(rule => rule.selectorText === '#piano');
assert(piano?.style.width === '335px');
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

#piano {
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
  background-color: #00471b;
  position: relative;
  border-radius: 10px;
}

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
  border-radius: 0 0 3px 3px;
}

.key.black--key::after {
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
  background-color: #1d1e22;
  border-radius: 0 0 3px 3px;
}

.logo {
  width: 200px;
  position: absolute;
  top: 23px;
}

--fcc-editable-region--
@media (max-width: 768px) {
  
}
--fcc-editable-region--
```
