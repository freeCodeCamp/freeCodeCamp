---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: ''
localeTitle: إضافة التعليقات في HTML
---

## الوصف
<section id="description">
 تذكر أنه لبدء التعليق تحتاج إلى استخدام الوسم <code>&lt;!--</code> ، ولإنهاء التعليق تحتاج إلى استخدام الوسم <code>--&gt;</code>. هنا سوف تحتاج إلى إنهاء التعليق قبل بدء العنصر <code>h2</code> الخاص بك.
 </section>


## التعليمات
<section id="instructions"> قم بتعليق العنصرين <code>h1</code> و<code>p</code> ، اما العنصر <code>h2</code> فاتركه دون تعليق. </section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: قم بتعليق العنصر <code>h1</code> بحيث لا يكون مرئيًا على صفحتك.
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: اترك العنصر <code>h2</code> دون تعليق ليكون مرئيا على صفحتك.
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: قم بتعليق العنصر <code>p</code> بحيث لا يكون مرئيًا على صفحتك.
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: تأكد من إغلاق كل تعليقاتك باستخدام <code>--&gt;</code> .
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: لا تقم بتغيير ترتيب <code>h1</code> أو <code>h2</code> أو <code>p</code> في الكود البرمجي.
    testString: 'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , "Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
