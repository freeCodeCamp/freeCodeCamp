---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: ''
localeTitle: 'ملء الفراغات بإستخدام النص النائب'
---

## الوصف
<section id='description'>
عادة ما يستخدم مطورو الويب النص <code>lorem ipsum text</code> كنص بديل. وهو نص عشوائي مأخوذ من فقرة مشهورة لكاتب روما القديمة شيشرون.
وقد استخدم هذا النص من قبل الطابعيين منذ القرن السادس عشر واستمر هذا التقليد في الويب.
حسنا، خمسة قرون طويلة بما فيه الكفاية. بما اننا سنقوم ببناء تطبيق صور القطط (CatPhotoApp)، لنستخدم شيء مثل <code>kitty ipsum text</code>.
</section>


## التعليمات
<section id="instructions">
 استبدال النص الموجود بداخل العنصر <code>p</code> بالكلمات الأولى من النص التالي: 
<code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code>
 </section>


## الاختبارات
<section id='tests'>

```yml
tests:
  - text: يجب ان يحتوي العنصر <code>p</code> على الكلمات الأولى من  النص<code>kitty ipsum text</code>.
    testString: 'assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
