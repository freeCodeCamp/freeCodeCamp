---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
videoUrl: ''
localeTitle: إضافة الصور إلى موقع الويب الخاص بك
---

## الوصف
<section id="description">
يمكنك إضافة الصور إلى موقع الويب الخاص بك باستخدام العنصر <code>img</code> ، والإشارة إلى رابط الصورة المحددة باستخدام السمة <code>src</code> .
مثال على ذلك:
<code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code> 
لاحظ أن العنصر <code>img</code> ذاتي الإغلاق.
<strong>يجب أن</strong> تحتوي جميع عناصر <code>img</code> على السمة <code>alt</code> . يستخدم النص داخل السمة <code>alt</code> لقارئات الشاشة لتحسين إمكانية الوصول، ويظهر في حالة فشل تحميل الصورة. 
ملاحظة: إذا كانت الصورة مزخرفة تمامًا ، فإن استخدام السمة <code>alt</code> بلا نص هو أفضل ممارسة. 
من الناحية المثالية ، يجب ألا تحتوي السمة <code>alt</code> على أحرف خاصة ما لم تكن هناك حاجة إليها. 
دعنا نضيف السمة <code>alt</code> إلى مثال العنصر <code>img</code> أعلاه: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code>
</section>

## التعليمات
<section id="instructions">
لنحاول إضافة صورة إلى موقعنا على الويب:
إدراج الوسم <code>img</code> ، قبل العنصر <code>h2</code>.
الآن قم بتعيين قيمة السمة <code>src</code> بحيث تشير إلى هذا العنوان: 
<code>https://bit.ly/fcc-relaxing-cat</code>
أخيرا لا تنس أن تعطي صورتك نص بديل <code>alt</code> .
</section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي صفحتك على عنصر صورة.
    testString: 'assert($("img").length > 0, "Your page should have an image element.");'
  - text: يجب أن تحتوي صورتك على سمة <code>src</code> تشير إلى صورة القطة الصغيرة.
    testString: 'assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), "Your image should have a <code>src</code> attribute that points to the kitten image.");'
  - text: <strong>يجب أن</strong> يحتوي عنصر الصورة على السمة <code>alt</code> .
    testString: 'assert(code.match(/alt\s*?=\s*?(\"|\").*(\"|\")/), "Your image element <strong>must</strong> have an <code>alt</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


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
