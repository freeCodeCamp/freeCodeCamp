---
id: 612e813b3ba67633222cbe54
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Remember, a `class` attribute can hold multiple values. To differentiate between your white and black keys, add a second `class` value of `black--key` to your second, third, fifth, sixth, and seventh `.key` elements.

# --hints--

Your second `.key` element should also have a `class` of `black--key`.

```js
const key = document.querySelectorAll('.key')[1];
assert.isTrue(key?.className.includes('black--key'));
```

Your third `.key` should have `black--key` in the `class`.

```js
const third = document.querySelectorAll('.key')?.[2];
assert.isTrue(third?.classList?.contains('black--key'));
```

Your fifth `.key` should have `black--key` in the `class`.

```js
const fifth = document.querySelectorAll('.key')?.[4];
assert.isTrue(fifth?.classList?.contains('black--key'));
```

Your sixth `.key` should have `black--key` in the `class`.

```js
const sixth = document.querySelectorAll('.key')?.[5];
assert.isTrue(sixth?.classList.contains('black--key'));
```

Your seventh `.key` should have `black--key` in the `class`.

```js
const seventh = document.querySelectorAll('.key')?.[6];
assert.isTrue(seventh?.classList?.contains('black--key'));
```

You should have five `.black--key` elements.

```js
const blackKeys = document.querySelectorAll('.black--key');
assert.lengthOf(blackKeys, 5);
```

You should have seven `.key` elements.

```js
const keys = document.querySelectorAll('.key');
assert.lengthOf(keys, 7);
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
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys">
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
      </div>
    </div>
    --fcc-editable-region--
  </body>
</html>
```

```css

```
