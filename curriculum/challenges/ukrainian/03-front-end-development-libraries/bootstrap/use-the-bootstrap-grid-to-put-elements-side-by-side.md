---
id: bad88fee1348ce8acef08815
title: Використовуйте Bootstrap сітку, щоб розмістити елементи поряд
challengeType: 0
forumTopicId: 18371
dashedName: use-the-bootstrap-grid-to-put-elements-side-by-side
---

# --description--

Bootstrap використовує систему адаптивної сітки в 12 стовпців, що полегшує розміщення елементів рядками та визначення ширини кожного елементу. Більшість Bootstrap класів можна застосувати до елементу `div`.

Bootstrap має різні атрибути ширини стовпчика, які він використовує залежно від ширини екрану користувача. Наприклад, у телефонів екрани вузькі, а у ноутбуків- широкі.

Наприклад, візьмемо клас `col-md-*` Bootstrap- у. Тут `md` означає середину, а `*`- це число, що визначає, скільки колонок має займати елемент. В такому разі вказується ширина колонки елементу на екрані середнього розміру, на кшталт екрану ноутбука.

Для роботи над додатком Cat Photo, ми використовуватимемо `col-xs-*`, де `xs` означає "дуже маленький" (дуже маленький екран телефону), а `*`- це число колонок, що вказує скільки колонок має займати елемент.

Послідовно додайте кнопки `Like`, `Info` і `Delete`, укладіть їх в один елемент `<div class="row">`, а потім кожен окремо в елемент `<div class="col-xs-4">`.

Клас `row` застосовують до `div`, а самі кнопки можна вкласти в нього.

# --hints--

Ваші кнопки мають знаходитися в одному й тому ж самому елементі `div` з класом `row`.

```js
assert($('div.row:has(button)').length > 0);
```

Кожна кнопка Bootstrap має вкладатися в свій власний елемент `div` з класом `col-xs-4`.

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

Кожен з елементів `button` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

Кожен елемент `div` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
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

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>

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
