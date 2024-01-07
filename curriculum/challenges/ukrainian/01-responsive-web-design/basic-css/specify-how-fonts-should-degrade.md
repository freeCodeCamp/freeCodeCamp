---
id: bad87fee1348bd9aedf08808
title: Вкажіть як правильно використовувати шрифти в порядку їх доступності
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

У всіх браузерах є декілька доступних шрифтів за замовчуванням. Ці основні групи шрифтів включають `monospace`, `serif` and `sans-serif`.

Якщо один шрифт недоступний, на браузері ви можете натиснути "degrade", щоб обрати інший шрифт.

Наприклад, ви б хотіли, щоб елемент використав шрифт `Helvetica`, але якщо шрифт`Helvetica` недоступний, тоді переходив на `sans-serif`, вам слід записати інструкцію таким чином:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

Звичайні назви типів шрифтів не є чутливими до регістру символів. Також, вони не потребують лапок, тому що є ключовими словами CSS.

# --instructions--

Спершу, застосуйте шрифт `monospace` до елемента `h2`, так щоб тепер у ньому було два шрифти - `Lobster` і `monospace`.

В останньому завданні, ви завантажили шрифт `Lobster`, використовуючи тег `link`. Тепер прокоментуйте імпорт шрифту `Lobster` (з коментарями HTML, які ти вивчив раніше) в Google шрифтах так, щоб він більше не був доступним. Зверніть увагу на те, як ваш елемент `h2` перетворюється у шрифт `monospace`.

**Note:** Якщо ви маєте шрифт `Lobster`, встановлений на вашому комп'ютері, ви не побачите заміни шрифту, тому що ваш браузер може знайти цей шрифт.

# --hints--

Ваш h2 елемент повинен використовувати шрифт `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

Ваш елемент h2 повинен знижуватися до шрифту `monospace`, коли `Lobster` недоступний.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

Закоментуйте своє підключення в Google за шрифтом `Lobster`, помістивши перед тим `<!--`.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

Вам потрібно закрити ваш коментар, додавши `-->`.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
