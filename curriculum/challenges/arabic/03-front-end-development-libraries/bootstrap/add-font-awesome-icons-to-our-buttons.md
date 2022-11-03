---
id: bad87fee1348bd9aedd08845
title: إضافة أيقونات الخط الرائع (Font Awesome) إلى الأزرار
challengeType: 0
forumTopicId: 16638
required:
  - 
    link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
dashedName: add-font-awesome-icons-to-our-buttons
---

# --description--

الخط الرائع (Font Awesome) هي مكتبة عملية من الأيقونات. تكون هذه الأيقونات خطوط ويب أو رُسُوم تشكلية. هن الأيقونات تتعامل مثل الخطوط. يمكنك تحديد حجمها باستخدام وحدات بكسل، وسيفترض الأيقونات حجم الخط لعناصر الأساسية الخاصة بهم (their parent HTML).

يمكنك إضافة الخط الرائع (Font Awesome) في أي تطبيق خلال إضافة الرمز التالي إلى الجزء العلوي من HTML:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

في هذه الاختبارات، لقد أضفنا لك فعلًا إلى هذه الصفحة خلف الكواليس.

تم استخدام عنصر `i` في الأصل لجعل عناصر أخرى مائلة (italic) ولكن يشيع استخدامه الآن للأيقونات. يمكنك إضافة فئات الخط الرائع (Font Awesome) إلى عنصر `i` لتحويله إلى أيقونة، على سبيل المثال:

```html
<i class="fas fa-info-circle"></i>
```

لاحظ يقبل أستخدام عنصر `span` أيضا مع الأيقونات.

# --instructions--

استخدم الخط الرائع (Font Awesome) لإضافة أيقونة `thumbs-up` إلى زر الإعجاب الخاص بك بواسطة إعطائه عنصر `i` مع الفصول `fas` و`fa-thumbs-up`. تحقق أن النص بقي `Like` بجانب الأيقونة.

# --hints--

يجب عليك إضافة عنصر `i` مع الفئات `fas` و `fa-thumbs-up`.

```js
assert($('i').is('.fas.fa-thumbs-up') || $('span').is('.fas.fa-thumbs-up'));
```

أيقونة `fa-thumbs-up`. الخاصة بك يجب أن تكون داخل زر الإعجاب.

```js
assert(
  ($('i.fa-thumbs-up').parent().text().match(/Like/gi) &&
    $('.btn-primary > i').is('.fas.fa-thumbs-up')) ||
    ($('span.fa-thumbs-up').parent().text().match(/Like/gi) &&
      $('.btn-primary > span').is('.fas.fa-thumbs-up'))
);
```

عنصر `i` الخاص بك يجب أن يكون داخل عنصر `button` الخاص بك.

```js
assert(
  $('button').children('i').length > 0 ||
    $('button').children('span').length > 0
);
```

يجب أن يكون عنصر الأيقونة الخاص بك علامة إغلاق.

```js
assert(code.match(/<\/i>|<\/span>/g));
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
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
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
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
