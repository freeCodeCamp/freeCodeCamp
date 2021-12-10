---
id: bad87fee1348bd9acde08712
title: Дотримуйтесь принципу Адаптивного веб дизайну при роботі із Fluid Containers у Bootstrap
challengeType: 0
forumTopicId: 18362
dashedName: use-responsive-design-with-bootstrap-fluid-containers
---

# --description--

У розділі freeCodeCamp, що стосувався роботи із HTML5 та CSS ми створили додаток Cat Photo. Тож давайте повернемося саме до нього. Цього разу, ми створюватимемо його дизайн, використовуючи популярний шаблон Bootstrap - фреймворк CSS із швидким реагуванням.

Bootstrap автоматично визначить ширину екрану і підлаштує розмір елементів HTML. Звідси і назва <dfn>адаптивний дизайн</dfn>.

З адаптивним дизайном немає необхідності розробляти мобільну версію вашого веб-сайту. Картинка адекватно відображатиметься на екранах з будь-якою шириною.

Можна внести Bootstrap до будь-якого додатка, додавши нижчезазначений код на початку вашого HTML:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

У цьому випадку ми вже додали його для вас на цю сторінку за замовчуванням. Зауважимо, що можна використати як `>`, так і `/>`, щоб закрити теґ `link`.

Для початку слід вкласти весь HTML (окрім теґу `link` та елемента `style`) в елемент `div` з класом `container-fluid`.

# --hints--

Ваш елемент `div` має мати клас `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

Ваш елемент `div` має мати кінцевий теґ.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

Всі елементи HTML після кінцевого теґу `style` треба вкласти в `.container-fluid`.

```js
assert($('.container-fluid').children().length >= 8 && !$('.container-fluid').has("style").length && !$('.container-fluid').has("link").length);
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
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
<form action="https://freecatphotoapp.com/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>
<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
<form action="https://freecatphotoapp.com/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
</div>
```
