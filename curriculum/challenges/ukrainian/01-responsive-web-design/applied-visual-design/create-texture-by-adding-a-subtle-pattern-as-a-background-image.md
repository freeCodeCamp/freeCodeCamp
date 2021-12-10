---
id: 587d78a5367417b2b2512ad8
title: Створити текстуру, додавши тонкий шаблон у вигляді фонового зображення
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Один із варіантів додати текстуру та надати фону цікавості і, щоб зробити його ще більше - це додати тонкий шаблон. Головне - це баланс, так як ви ж не не хочете, щоб фон дуже виділявся, заберіть його з переднього плану. Властивість `background` підтримує функцію `url()` для того, щоб посилатися на зображення вибраної текстури або шаблону. Посилання загорнуте в лапки всередині дужок.

# --instructions--

Використання URL-адреси `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`, встановіть `background` для всієї сторінки селектора `body`.

# --hints--

Ваш елемент `body` повинен містити властивості `background`, встановленого за заданим посиланням `url()`.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
