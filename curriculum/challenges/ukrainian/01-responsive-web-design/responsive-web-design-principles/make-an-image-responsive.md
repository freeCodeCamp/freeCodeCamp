---
id: 587d78b1367417b2b2512b09
title: Зробити адаптивне зображення
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

Створення адаптивних зображень із CSS насправді дуже просто. Вам просто потрібно додати ці властивості до зображення:

```css
img {
  max-width: 100%;
  height: auto;
}
```

`max-width` в `100%` гарантує, що зображення не буде ширше, аніж контейнер, в якому воно знаходиться, а `height` `auto` збереже вихідне співвідношення сторін зображення.

# --instructions--

Додайте правила стилю до класу `responsive-img`, щоб зробити його адаптивним. Він ніколи не повинен бути ширшим за контейнер (в цьому випадку це вікно попереднього перегляду) та зберігати вихідне співвідношення сторін. Після додавання коду, змініть розмір вікна попереднього перегляду, щоб подивитись як ведуть себе ваші зображення.

# --hints--

Клас `responsive-img` повинен мати `max-width` встановлений на `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

Клас `responsive-img` повинен мати `height` встановлений на `auto`.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
