---
id: 612eaf56b7ba3257fdbfb0db
title: الخطوة 21
challengeType: 0
dashedName: step-21
---

# --description--

البيانو يحتاج شعار freeCodeCamp لجعله رسميا.

أضف عنصر `img` قبل عنصر `.keys` الخاص بك. امنح `img` الـ `class` بقيمة `logo`، وقم بتعيين `src` إلى `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`. أعطيه نص `alt` بقيمة `freeCodeCamp Logo`.

# --hints--

يجب عليك إضافة عنصر `img` جديد.

```js
assert(document.querySelectorAll('img')?.length === 1);
```

عنصر `img` الخاص بك يجب أن يأتي قبل عنصر `.key` الخاص بك.

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

يجب ان يكون لعنصر `img` الخاص بك `class` بقيمة `logo`.

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

يجب أن يكون لعنصر `img` الخاص بك `src` بقيمة `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`.

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

يجب أن يكون لعنصر `img` الخاص بك السمة `alt` بقيمة `freeCodeCamp Logo`.

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

تذكر أن الـ casing و الاملاء مهمان.

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
