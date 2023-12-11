---
id: 612e8eebe3a6dc3fcc33a66f
title: Hatua ya 11
challengeType: 0
dashedName: step-11
---

# --description--

Sasa lenga kipengele chako cha `#piano` kwa kichaguzi cha `id`. Weka sifa ya `background-color` kuwa `#00471b`, sifa ya `width` kuwa`992px` na sifa ya `height` kuwa`290px`.

# --hints--

Unapaswa kuwa na kichaguzi cha `#piano`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

Kichaguzi chako cha `#piano` kinafaa kuwa na sifa ya `background-color` iliyowekwa kuwa `#00471b`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

Kichaguzi chako cha `#piano` kinafaa kuwa na sifa ya `width` iliyowekwa kuwa `992px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

Kichaguzi chako cha `#piano` kinafaa kuwa na sifa ya `height` iliyowekwa kuwa `290px`.

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
