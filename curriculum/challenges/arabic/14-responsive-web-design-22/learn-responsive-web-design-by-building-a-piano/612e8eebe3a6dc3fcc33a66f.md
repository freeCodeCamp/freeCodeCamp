---
id: 612e8eebe3a6dc3fcc33a66f
title: الخطوة 11
challengeType: 0
dashedName: step-11
---

# --description--

الآن استهدف عنصر `#piano` الخاص بك بمنتقي `id`. قم بتعيين خاصية `background-color` إلى `#00471b` و الخاصية `width` إلى `992px` والخاصية `height` إلى `290px`.

# --hints--

يجب أن يكون لديك منتقي `#piano`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

يجب أن يحتوي منتقي `#piano` على خاصية `background-color` بقيمة `#00471b`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

يجب أن يكون لمنتقي `#piano` الخاص بك خاصية `width` بقيمة `992px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

يجب أن يكون لمنتقي `#piano` الخاص بك `height` تم تعيينه إلى `290px`.

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
