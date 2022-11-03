---
id: bad87fee1348bd9acde08712
title: تصميم Fluid Containers بشكل مستجيب بواسطة Bootstrap
challengeType: 0
forumTopicId: 18362
dashedName: use-responsive-design-with-bootstrap-fluid-containers
---

# --description--

في قسم HTML5 و CSS من freeCodeCamp بنيت Cat Photo App. الآن دعونا نعود إليها. هذه المرة، سوف تبنيها باستخدام Bootstrap responsive CSS framework.

سوف يكتشف Bootstrap مدى اتساع شاشتك ويستجيب عن طريق تغيير حجم عناصر HTML الخاصة بك - ومن اجل هذه يسمى <dfn>التصميم المستجيب</dfn>.

مع التصميم المستجيب، لا حاجة لتصميم نسخة محمولة من موقعك. ستبدو جيدة على الأجهزة التي بها شاشات من أي عرض.

يمكنك إضافة Bootstrap إلى أي تطبيق بواسطة إضافة التعليمات البرمجية التالية إلى الجزء العلوي من HTML:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

في هذه الاختبارات، لقد أضفنا لك فعلًا إلى هذه الصفحة خلف الكواليس. لاحظ أن استخدام الوسم إما `>` أو `/>` لإغلاق `link` مقبول.

للبدء، يجب أن نضع جميع HTML الخاص بنا (باستثناء عنصر `link` وعنصر `style`) في عنصر `div` مع الفئة `container-fluid`.

# --hints--

يجب أن يمتلك عنصر `div` الخاص بك فئة `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

يجب أن يحتوى عنصر `div` على علامة إغلاق.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

جميع عناصر HTML بعد الإغلاق `style` يجب أن تكون داخل `.container-fluid`.

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
