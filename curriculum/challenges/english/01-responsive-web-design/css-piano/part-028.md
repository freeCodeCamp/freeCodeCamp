---
id: 612ebcba99bfa46a15370b11
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

Now you need to make it responsive. Add a `@media` query with a `max-width` of `768px`.

# --hints--

You should add a new `@media` query.

```js
assert(new __helpers.CSSHelp(document).getCSSRules('media')?.length === 1);
```

Your `@media` query should have a `max-width` of `768px`.

```js
console.log(new __helpers.CSSHelp(document).getCSSRules('media')[0]?.media?.mediaText)
assert(new __helpers.CSSHelp(document).getCSSRules('media')[0]?.media?.mediaText === '(max-width: 768px)');
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

--fcc-editable-region--
```
