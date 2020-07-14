---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
videoUrl: ''
localeTitle: استخدام تصميم متجاوب مع حاويات السوائل Bootstrap
---

## Description
<section id="description"> في قسم HTML5 و CSS من برنامج FreeCodeCamp ، أنشأنا تطبيق صور Cat. الآن دعونا نعود إليها. في هذه المرة ، سنقوم بإعداده باستخدام إطار عمل Bootstrap المتجاوب لـ CSS. سيحدد Bootstrap مدى اتساع الشاشة ويستجيب عن طريق تغيير حجم عناصر HTML - ومن هنا يكون اسم <code>Responsive Design</code> . مع تصميم متجاوب ، ليست هناك حاجة لتصميم نسخة محمولة من موقع الويب الخاص بك. سوف تبدو جيدة على الأجهزة ذات الشاشات من أي عرض. يمكنك إضافة Bootstrap إلى أي تطبيق بإضافة التعليمة البرمجية التالية إلى أعلى HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot; integrity=&quot;sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u&quot; crossorigin=&quot;anonymous&quot;/&gt;</code> في هذه الحالة ، قمنا بالفعل بإضافته لك إلى هذه الصفحة من وراء الكواليس. لاحظ أن استخدام <code>&gt;</code> أو <code>/&gt;</code> لإغلاق علامة <code>link</code> أمر مقبول. للبدء ، يجب علينا تضمين جميع HTML (باستثناء علامة <code>link</code> وعنصر <code>style</code> ) في عنصر <code>div</code> باستخدام <code>container-fluid</code> للفئة. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>div</code> <code>container-fluid</code> الفصل.
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: تأكد من أن عنصر <code>div</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'
  - text: تأكد من تداخل جميع عناصر HTML بعد علامة <code>style</code> الإغلاق في <code>.container-fluid</code> .
    testString: 'assert($(".container-fluid").children().length >= 8, "Make sure you have nested all HTML elements after the closing <code>style</code> tag in <code>.container-fluid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
