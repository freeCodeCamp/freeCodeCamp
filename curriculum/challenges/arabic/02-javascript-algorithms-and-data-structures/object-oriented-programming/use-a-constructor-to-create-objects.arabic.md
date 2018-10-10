---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
videoUrl: ''
localeTitle: استخدم منشئ لإنشاء كائنات
---

## Description
<section id="description"> هنا منشئ <code>Bird</code> من التحدي السابق: <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور () { <br> this.name = &quot;Albert&quot;؛ <br> this.color = &quot;blue&quot;؛ <br> this.numLegs = 2 ، <br> // &quot;هذا&quot; داخل المنشئ يشير دائمًا إلى الكائن الذي يتم إنشاؤه <br> } <br><br> واسمحوا blueBird = الطيور الجديدة () ؛ </blockquote> لاحظ أن المشغل <code>new</code> يستخدم عند استدعاء منشئ. هذا يخبر JavaScript لإنشاء <code>instance</code> جديد من <code>Bird</code> باسم <code>blueBird</code> . بدون المشغل <code>new</code> ، لا يشير <code>this</code> داخل المُنشئ إلى الكائن الذي تم إنشاؤه حديثًا ، مما يعطي نتائج غير متوقعة. الآن <code>blueBird</code> لديه كل الخصائص التي تم تعريفها داخل منشئ <code>Bird</code> : <blockquote style=";text-align:right;direction:rtl"> blueBird.name. // =&gt; ألبرت <br> blueBird.color. // =&gt; أزرق <br> blueBird.numLegs. // =&gt; 2 </blockquote> تمامًا مثل أي كائن آخر ، يمكن الوصول إلى خصائصه وتعديلها: <blockquote style=";text-align:right;direction:rtl"> blueBird.name = &#39;Elvira&#39; ، <br> blueBird.name. // =&gt; إلفيرا </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب إنشاء <code>hound</code> باستخدام منشئ <code>Dog</code> .
    testString: 'assert(hound instanceof Dog, "<code>hound</code> should be created using the <code>Dog</code> constructor.");'
  - text: يجب أن تستخدم شفرتك المشغل <code>new</code> لإنشاء <code>instance</code> <code>Dog</code> .
    testString: 'assert(code.match(/new/g), "Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
