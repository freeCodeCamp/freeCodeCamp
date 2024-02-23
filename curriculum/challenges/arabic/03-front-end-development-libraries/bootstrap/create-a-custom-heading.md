---
id: bad87fee1348bd9aede08845
title: إنشاء Heading مخصص
challengeType: 0
forumTopicId: 16816
dashedName: create-a-custom-heading
---

# --description--

صنع عنوان بسيط لتطبيق Cat Photo App عن طريق وضع العنوان وإرخاء صورة القطط في الصف نفسه.

تذكر، Bootstrap يستخدم نظام شبكة مستجيبة (responsive grid)، مما يجعل من السهل وضع العناصر في صفوف وتحديد العرض النسبي لكل عنصر. يمكن تطبيق معظم فئات Bootstrap على عنصر `div`.

أدخل صورتك الأولى و عنصر `h2` الخاص بك ضمن عنصر واحد `<div class="row">`. أدخل عنصر `h2` الخاص بك داخل `<div class="col-xs-8">` وصورتك في `<div class="col-xs-4">` بحيث تكون على نفس الخط.

لاحظ كيف أن حجم الصورة يتناسب مع النص بشكل صحيح الآن؟

# --hints--

عنصر `h2` الخاص بك و أعلى `img` يجب أن يتداخل مع عنصر `div` مع `row`.

```js
assert($('div.row:has(h2)').length > 0 && $('div.row:has(img)').length > 0);
```

يجب أدخال أعلى عنصر `img` الخاصة بك في `div` مع فئة يسمي `col-xs-4`.

```js
assert(
  $('div.col-xs-4:has(img)').length > 0 &&
    $('div.col-xs-4:has(div)').length === 0
);
```

يجب أدخال عنصر `h2` الخاصة بك في `div` مع فئة يسمي `col-xs-8`.

```js
assert(
  $('div.col-xs-8:has(h2)').length > 0 &&
    $('div.col-xs-8:has(div)').length === 0
);
```

لا بد أن يوجد وسم إغلاق لكل عناصر `div`.

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
  <p>Things cats <span class="text-danger">love:</span></p>
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary  text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
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
  <p>Things cats <span class="text-danger">love:</span></p>
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
