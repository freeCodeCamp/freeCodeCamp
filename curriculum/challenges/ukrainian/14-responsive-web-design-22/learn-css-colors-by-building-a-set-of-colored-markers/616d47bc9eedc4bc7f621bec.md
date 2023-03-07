---
id: 616d47bc9eedc4bc7f621bec
title: Крок 10
challengeType: 0
dashedName: step-10
---

# --description--

Потім додайте інший елемент `div` в межах елемента `div` та надайте йому клас `marker`.

# --hints--

Ваш новий елемент `div` повинен мати початковий теґ.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

Ваш новий елемент `div` повинен мати кінцевий теґ.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Ви повинні вкласти свій новий елемент `div` в `div` класу `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Ви повинні надати вашому новому елементу `div` клас `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
--fcc-editable-region--
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
    </div>
  </body>
--fcc-editable-region--
</html>
```

```css
h1 {
  text-align: center;
}
```
