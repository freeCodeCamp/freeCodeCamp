---
id: 612e8eebe3a6dc3fcc33a66f
title: Schritt 11
challengeType: 0
dashedName: step-11
---

# --description--

Wähle nun dein `#piano`-Element mit einem `id`-Selektor aus. Setze die `background-color`-Eigenschaft auf `#00471b`, die `width`-Eigenschaft auf `992px` und die `height`-Eigenschaft auf `290px`.

# --hints--

Du solltest einen `#piano`-Selektor haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

Dein `#piano`-Selektor sollte die `background-color`-Eigenschaft auf `#00471b` gesetzt haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

Dein `#piano`-Selektor sollte eine `width`-Eigenschaft auf `992px` gesetzt haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

Dein `#piano`-Selektor sollte die `height` auf `290px` gesetzt haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.height === '290px');
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

--fcc-editable-region--

--fcc-editable-region--
```
