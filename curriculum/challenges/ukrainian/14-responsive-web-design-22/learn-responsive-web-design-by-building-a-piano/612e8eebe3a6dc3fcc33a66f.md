---
id: 612e8eebe3a6dc3fcc33a66f
title: Крок 11
challengeType: 0
dashedName: step-11
---

# --description--

Тепер націльте свій елемент `#piano`, використовуючи селектор `id`. Встановіть властивість `background-color` на `#00471b`, властивість `width` на `992px` та властивість `height` на `290px`.

# --hints--

Ви повинні мати селектор `#piano`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

Ваш селектор `#piano` повинен мати властивість `background-color` зі значенням `#00471b`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

Ваш селектор `#piano` повинен мати властивість `width` зі значенням `992px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

Ваш селектор `#piano` повинен мати `height` зі значенням `290px`.

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
