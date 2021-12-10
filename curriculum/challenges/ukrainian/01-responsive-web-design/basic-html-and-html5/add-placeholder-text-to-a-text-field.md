---
id: bad87fee1348bd9aedf08830
title: Додаємо заповнювач (плейсхолдер) до текстового поля
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Заповнювач (плейсхолдер) – це текст, який демонструється у вашому елементі `input`, перш ніж користувач щось введе.

Ви можете створити заповнювач (плейсхолдер) таким чином:

```html
<input type="text" placeholder="this is placeholder text">
```

**Зверніть увагу:** пам'ятайте, що елементи `input` закриваються автоматично.

# --instructions--

Зробіть значенням `placeholder` вашого тексту `input` "URL світлини кота".

# --hints--

Вам треба додати атрибут `placeholder` до чинного елемента тексту `input`.

```js
assert($('input[placeholder]').length > 0);
```

Зробіть `cat photo URL` значенням вашого атрибуту `placeholder`.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

Готовий елемент `input` не повинен мати кінцевий теґ.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

Готовий елемент `input` повинен мати дійсний синтаксис.

```js
assert($('input[type=text]').length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>
```
