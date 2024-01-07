---
id: bad87fee1348bd9aecf08806
title: Використання класу CSS для стилізації елементів
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Класи - це повторно використовувані стилі, котрі можуть бути доданими в елементи HTML.

Ось приклад об'яви класу CSS:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Ви можете побачити, що ми створили клас CSS під назвою `blue-text` в межах тегу `<style>`. Ви можете застосувати клас до елемента HTML ось так: `<h2 class="blue-text">CatPhotoApp</h2>`. Зверніть увагу, що в елементі CSS `style`, назви класів починаються з крапки. В атрибуті класу елемента HTML назва класу не містить крапки.

# --instructions--

Всередині елемента `style`, змініть селектор `h2` на `.red-text` й оновіть значення кольору з `blue` на `red`.

Задайте елементу `h2` атрибут `class` зі значенням `red-text`.

# --hints--

Елемент `h2` повинен бути червоним.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Елемент `h2` повинен мати клас `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Таблиця стилів повинна об'явити клас `red-text` і встановити його колір на `red` (червоний).

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

Ви не повинні використовувати вбудовані об'яви стилів, такі як `style="color: red"` в елементі `h2`.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
