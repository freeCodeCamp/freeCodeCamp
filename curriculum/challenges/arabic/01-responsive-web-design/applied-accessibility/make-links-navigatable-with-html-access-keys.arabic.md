---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: جعل الروابط نافيجيتابل مع مفاتيح الوصول إلى HTML
---

## Description
<section id="description"> تقدم HTML و <code>accesskey</code> السمة لتحديد مفتاح الاختصار لتنشيط أو إحضار التركيز إلى عنصر. هذا يمكن أن يجعل التنقل أكثر كفاءة لمستخدمي لوحة المفاتيح فقط. تسمح HTML5 باستخدام هذه السمة على أي عنصر ، ولكنها مفيدة بشكل خاص عند استخدامها مع تلك التفاعلية. ويشمل ذلك الروابط والأزرار وعناصر التحكم في النموذج. إليك مثالاً: <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> يريد Camper Cat أن تحتوي الروابط الموجودة حول عنوان مقالتي المدونة على اختصارات لوحة المفاتيح حتى يتمكن مستخدمو موقعه من الانتقال سريعًا إلى القصة الكاملة. إضافة سمة <code>accesskey</code> إلى كلا الارتباطين وتعيين أول واحد إلى &quot;g&quot; (لـ Garfield) والثاني إلى &quot;c&quot; (لـ Chuck Norris). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: التعليمات البرمجية يجب إضافة و <code>accesskey</code> السمة إلى <code>a</code> العلامة مع <code>id</code> من &quot;لأول مرة&quot;.
    testString: 'assert($("#first").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "first".");'
  - text: التعليمات البرمجية يجب إضافة و <code>accesskey</code> السمة إلى <code>a</code> العلامة مع <code>id</code> من &quot;الثاني&quot;.
    testString: 'assert($("#second").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "second".");'
  - text: التعليمات البرمجية يجب تعيين <code>accesskey</code> السمة على <code>a</code> العلامة مع <code>id</code> من &quot;الأولى&quot; إلى &quot;ز&quot;. لاحظ أن القضية مهمة.
    testString: 'assert($("#first").attr("accesskey") == "g", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "first" to "g". Note that case matters.");'
  - text: التعليمات البرمجية يجب تعيين <code>accesskey</code> السمة على <code>a</code> العلامة مع <code>id</code> من ل&quot;ج&quot; &quot;ثانية&quot;. لاحظ أن القضية مهمة.
    testString: 'assert($("#second").attr("accesskey") == "c", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "second" to "c". Note that case matters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
