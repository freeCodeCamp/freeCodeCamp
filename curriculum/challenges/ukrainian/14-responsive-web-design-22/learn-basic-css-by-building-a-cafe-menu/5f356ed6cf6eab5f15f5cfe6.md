---
id: 5f356ed6cf6eab5f15f5cfe6
title: Крок 20
challengeType: 0
dashedName: step-20
---

# --description--

Переважно елемент `div` використовують для дизайну розкладки, на відміну від вже використаних вами елементів. Додайте елемент `div` всередині елемента `body`, а потім перемістіть всі інші елементи всередину нового `div`.

# --hints--

Ви повинні мати початковий теґ `<div>`.

```js
assert(code.match(/<div>/i));
```

Ви повинні мати кінцевий теґ `</div>`.

```js
assert(code.match(/<\/div>/i));
```

Ви не повинні змінювати наявний елемент `body`. Переконайтеся, що не видалили кінцевий теґ.

```js
assert($('body').length === 1);
```

Ваш теґ `div` повинен бути вкладеним в `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

