---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: ''
localeTitle: جعل الروابط الميتة باستخدام رمز التجزئة
---

## Description
<section id="description"> أحيانا كنت ترغب في إضافة <code>a</code> عناصر لموقع الويب الخاص بك قبل ان تعرفه حيث سيربط. هذا مفيد أيضًا عند تغيير سلوك الارتباط باستخدام <code>JavaScript</code> ، والذي سنتعرف عليه لاحقًا. </section>

## Instructions
<section id="instructions"> القيمة الحالية لسمة <code>href</code> عبارة عن رابط يشير إلى &quot;https://freecatphotoapp.com&quot;. استبدل قيمة السمة <code>href</code> بـ <code>#</code> ، والمعروف أيضًا باسم رمز التجزئة ، لإنشاء رابط ميت. على سبيل المثال: <code>href=&quot;#&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يكون العنصر الخاص بك <code>a</code> وصلة ميتة مع تعيين قيمة <code>href</code> على &quot;#&quot;.'
    testString: 'assert($("a").attr("href") === "#", "Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
