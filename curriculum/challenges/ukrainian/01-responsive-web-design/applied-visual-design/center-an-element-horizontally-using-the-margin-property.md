---
id: 587d78a3367417b2b2512ad0
title: Вирівнювання елемента горизонтально по центру з використанням властивості margin
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Ще однією технікою вирівнювання є розташувати блок-елемент горизонтально по центру. Одним зі способів це зробити є встановити властивість `margin` для значення "auto".

Цей метод працює і для зображень. Зображення є вбудованими (inline) елементами за замовчуванням, але їх можна зробити елементами-блоками, якщо надати властивості `display` значення `block`.

# --instructions--

Відцентруйте `div` на сторінці, додавши `margin` властивість із значенням `auto`.

# --hints--

Властивість `margin` для `div` потрібно встановити на `auto`.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
