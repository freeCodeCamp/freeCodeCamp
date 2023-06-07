---
id: bad87fee1347bd9aedf08845
title: حذف مخصص CSS في Bootstrap
challengeType: 0
forumTopicId: 17565
dashedName: ditch-custom-css-for-bootstrap
---

# --description--

يمكننا تنظيف تعليماتنا البرمجية وجعل Cat Photo App أكثر تقليدية باستخدام الأنماط المدمجة في Bootstrap، بدلاً من الأنماط المخصصة التي أنشأناها سابقاً.

لا تقلق - سيكون هناك الكثير من الوقت لتخصيص CSS في وقت لاحق.

حذف `.red-text` و`p` و`.smaller-image` تعريفات CSS من عنصر `style` بحيث تكون تعريغات الوحيدة المتبقية داخل عنصر `style` هي `h2` و `thick-green-border`.

ثم قم بحذف عنصر `p` الذي يحتوي على رابط زائد. ثم إزال فئة `red-text` من عنصر `h2` الخاص بك واستبداله بفئة Bootstrap باسم `text-primary`.

أخيراً، إزال فئة `smaller-image` في أول العنصر `img` الخاص بك واستبداله بفئة `img-responsive` الخاص بك.

# --hints--

عُنصر `h2` يجب ألّا يحتوي على فئة باسم `red-text`.

```js
assert(!$('h2').hasClass('red-text'));
```

عُنصر `h2` يجب يحتوي فئة باسم `text-primary` حالياً.

```js
assert($('h2').hasClass('text-primary'));
```

عناصر الفِقْرة الخاصة بك يجب ألّا يستخدم خط `Monospace`.

```js
assert(
  !$('p')
    .css('font-family')
    .match(/monospace/i)
);
```

يجب إزالة فئة `smaller-image` من أعلى صورتك.

```js
assert(!$('img').hasClass('smaller-image'));
```

يجب عليك إضافة فئة `img-responsive` إلى أعلى صورتك.

```js
assert($('.img-responsive').length > 1);
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
