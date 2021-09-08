---
id: 612e98f3245c98475e49cfc6
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

Give the `.keys` a `padding-left` of `2px` and a `background-color` property of `#040404`

# --hints--

Your `.keys` selector should have a `padding-left` property set to `2px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.paddingLeft === '2px');
```

Your `.keys` selector should have a `background-color` property set to `#040404`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.backgroundColor === 'rgb(4, 4, 4)');
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
  background-color: #00471b;
}

--fcc-editable-region--
.keys {
  width: 949px;
  height: 180px;
}
--fcc-editable-region--
```
