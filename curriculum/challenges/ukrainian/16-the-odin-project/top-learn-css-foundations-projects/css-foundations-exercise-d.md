---
id: 63ee3ff1381756f9716727f2
title: Основи CSS. Вправа D
challengeType: 14
dashedName: css-foundations-exercise-d
---

# --description--

У цій вправі ми надали вам готовий файл HTML, тому вам потрібно відредагувати лише файл CSS. У цій вправі важливіше зрозуміти, як об’єднувати різні селектори, а не додавати атрибути.

1. Ви повинні бачити `width` зі значенням `300px` на класах `avatar` та `proportioned`.
1. Ви повинні надати таку висоту, щоб вона зберігала вихідне квадратне співвідношення сторін (не вказуйте піксельне значення для висоти!).
1. Ви повинні надати елементам з класами `avatar` та `distorted` властивість `width` зі значенням `200px`.
1. Ви повинні надати їм `height` у два рази більше ширини.

# --hints--

Ви повинні мати `width` зі значенням `300px` на класах `avatar` та `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style?.width === '300px');
```

Ви повинні мати висоту зі значенням `auto` на класах `avatar` та `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`)
assert(style?.height === 'auto');
```

Ви повинні використати об’єднуючий селектор на класах `avatar` та `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style);
```

Ви повинні мати `width` зі значенням `200px` на класах `avatar` та `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.width === '200px');
```

Ви повинні використати об’єднуючий селектор на класах `avatar` та `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style);
```

Ви повинні мати `height` у два рази більше ширини на класах `avatar` та `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.height === '400px');
```

# --seed--

## --seed-contents--

```css

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="original proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="original distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
  </body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
  </body>
</html>
```

```css
.avatar.proportioned {
  height: auto;
  width: 300px;
}

.avatar.distorted {
  height: 400px;
  width: 200px;
}
```

