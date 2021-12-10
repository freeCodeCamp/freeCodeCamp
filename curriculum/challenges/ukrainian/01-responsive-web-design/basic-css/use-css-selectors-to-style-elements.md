---
id: bad87fee1348bd9aedf08805
title: Використовуйте селектори CSS для стилізації елементів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

У CSS існує сотні функцій, які можна використовувати для редагування вигляду елемента на вашій сторінці.

Коли ви вводите `<h2 style="color: red;">CatPhotoApp</h2>`, ви стилізуєте окремий елемент `h2` за допомогою вбудованих CSS (Cascading Style Sheets, укр. Каскадні таблиці стилів).

Це один зі варіантів, як вказати стиль елемента, але є кращий спосіб застосування CSS.

У верхній частині коду створіть блок `style` на зразок цього:

```html
<style>
</style>
```

Всередині цього стильового блоку можна створити <dfn>CSS selector</dfn> для всіх елементів `h2`. Наприклад, якщо ви хочете, щоб усі елементи `h2` були червоними, потрібно додати правило стилю, яке виглядатиме приблизно так:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Зауважте, що правило стилю кожного елемента важливо взяти у фігурні дужки: (`{` і `}`). Також переконайтеся, що назва стилю вашого елемента знаходиться між початковим і кінцевим стильовими тегами. Не забудьте додати крапку з комою вкінці правила стилю кожного елемента.

# --instructions--

Видаліть атрибут стилю елемента `h2` і замініть його на блок CSS `style`. Додайте необхідні CSS, щоб перетворити всі елементи `h2` на сині.

# --hints--

Атрибут `style` слід видалити з елементу `h2`.

```js
assert(!$('h2').attr('style'));
```

Створіть елемент `style`.

```js
assert($('style') && $('style').length >= 1);
```

Елемент `h2` має бути синім.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

Ваша таблиця стилів `h2` має бути завершена крапкою з комою і закритою дужкою.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

Всі елементи `style` повинні бути завершеними й мати кінцеві теги.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
