---
id: bad87fee1348bd9aedf08845
title: Використання інтервалів для вибору вбудованих елементів
challengeType: 0
forumTopicId: 18370
dashedName: use-a-span-to-target-inline-elements
---

# --description--

Ви можете використовувати інтервали для того, щоб створити вбудовані елементи. Пам'ятаєте, коли ми використовували клас `btn-block` для того, щоб кнопка заповнювала весь рядок?

<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>звичайна кнопка</button>

<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>кнопка блокування btn</button>

Це ілюструє різницю між "вбудованим" та "блок" елементом.

Використовуючи вбудований елемент `span`, ви можете поставити декілька елементів в один рядок, і навіть стилізувати його частини по-різному.

Використовуючи елемент `span`, вкладіть слово `love` у елемент `p`, що містить речення `Things cats love`. Після цього надайте елементу `span` клас `text-danger` для того, щоб змінити колір тексту на червоний.

Ось як ви можете зробити це для елемента `p`, що містить текст `Top 3 things cats hate`:

```html
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
```

# --hints--

Ваш елемент `span` має знаходитись у елементі `p`.

```js
assert($('p span') && $('p span').length > 0);
```

Ваш елемент `span` має містити текст `love`.

```js
assert(
  $('p span') &&
    $('p span').text().match(/love/i) &&
    !$('p span')
      .text()
      .match(/Things cats/i)
);
```

Ваш елемент `span` повинен мати клас `text-danger`.

```js
assert($('span').hasClass('text-danger'));
```

Ваш елемент `span` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/span>/g) &&
    code.match(/<span/g) &&
    code.match(/<\/span>/g).length === code.match(/<span/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <p>Things cats <span class="text-danger">love</span>:</p>
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
