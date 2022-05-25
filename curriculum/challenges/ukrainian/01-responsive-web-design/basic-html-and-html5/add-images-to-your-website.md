---
id: bad87fee1348bd9aedf08812
title: Додаємо зображення до свого вебсайту
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

Ви можете додати зображення до свого вебсайту, якщо використаєте елемент `img` та вкажете чітку URL-адресу зображення, використовуючи атрибут `src`.

Ось приклад:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

Зауважте, що елементи `img` автоматично закриваються.

Усі елементи `img` **повинні** мати атрибут `alt`. Текст всередині атрибуту `alt` використовують для покращення доступності для користувачів. Він з'являється замість зображення, якщо воно не завантажується.

**Зверніть увагу:** якщо зображення декоративне, краще за все використовувати пустий атрибут `alt`.

В ідеалі атрибут `alt` не повинен містити спеціальні символи (окрім ситуацій, де вони обов'язкові).

Додамо атрибут `alt` до нашого `img` прикладу вище:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

Спробуймо додати зображення до нашого вебсайту:

Вставте елемент `img` перед чинними елементами `p` у вашому елементі `main`.

Тепер встановіть атрибут `src` так, щоб він вказував на URL-адресу `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

І не забудьте дати вашому елементу `img` атрибут `alt` з відповідним текстом.

# --hints--

На вашій сторінці має бути зображення.

```js
assert($('img').length);
```

Ваше зображення має містити атрибут `src`, який вказує на зображення кошеня.

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

Атрибут `alt` вашого елементу зображення не має бути порожнім.

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
