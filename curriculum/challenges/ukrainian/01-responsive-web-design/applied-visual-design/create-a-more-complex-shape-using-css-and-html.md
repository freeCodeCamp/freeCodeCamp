---
id: 587d78a6367417b2b2512ade
title: Створіть складнішу форму за допомогою CSS і HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

Однією з найпопулярніших форм у світі є серце, і в цьому завданні ви створите його за допомогою CSS. Проте, спочатку вам потрібно зрозуміти, що собою являють псевдоелементи `::before` і `::after`. `::before` створює псевдоелемент, який є першим обраним дочірнім елементом, `::after` створює псевдоелемент, який є останнім обраним дочірнім елементом. У наступному прикладі псевдоелемент `::before` використовується, щоб додати прямокутник до елемента класу `heart`:

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

Для нормального функціонування псевдоелементів `::before` і `::after` необхідно, щоб вони мали визначену властивість `content`. Ця властивість зазвичай використовується, щоб додавати об'єкти на кшталт світлин або тексту до обраного елемента. Коли псевдоелементи `::before` і `::after` використовуються для створення форм, властивість `content` також необхідна, але вона встановлена як порожній рядок. У попередньому прикладі елемент з класом `heart` має псевдоелемент `::before`, що створює жовтий прямокутник зі значеннями висоти та ширини `50px` і `70px` відповідно. Цей прямокутник має заокруглені кути завдяки значенню `border-radius`, рівним 25%, і розташований на `5px` ліворуч від елемента і на `50px` над вершиною елемента.

# --instructions--

Перетворіть елемент на екрані на серце. У селекторі `.heart::after` змініть `background-color` на `pink` та `border-radius` на 50%.

Потім оберіть елемент з класом `heart` (тільки `heart`) і заповніть властивість `transform`. Використовуйте функцію `rotate()` з -45 градусами.

Зрештою, у селекторі `.heart::before` встановіть властивість `content` на порожній рядок.

# --hints--

Селектор `.heart::after` повинен мати властивість `background-color` зі значенням `pink`.

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

Властивість `border-radius` селектора `.heart::after` повинна мати значення 50%.

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

Властивість `transform` класу `heart` повинна використовувати функцію `rotate()`, встановлену на -45 градусів.

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`content` селектора `.heart::before` повинен бути порожнім рядком.

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
