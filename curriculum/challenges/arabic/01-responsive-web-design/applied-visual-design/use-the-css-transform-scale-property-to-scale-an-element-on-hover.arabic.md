---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية مقياس تحويل CSS لقياس عنصر على التحويم
---

## Description
<section id="description"> تحتوي خاصية <code>transform</code> على مجموعة متنوعة من الوظائف التي تسمح لك بتوسيع نطاق عناصرك أو تحريكها أو تدويرها أو إمالتها ، إلخ. عند استخدامها مع فئات زائفة مثل <code>:hover</code> الذي يحدد حالة معينة لعنصر ما ، يمكن لعقار <code>transform</code> بسهولة إضافة تفاعلية إلى العناصر الخاصة بك. في ما يلي مثال لقياس عناصر الفقرة إلى 2.1 مرة حجمها الأصلي عندما يمرر المستخدم فوقها: <blockquote style=";text-align:right;direction:rtl"> p: hover { <br> transform: scale (2.1)؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> إضافة قاعدة CSS ل <code>hover</code> حالة <code>div</code> واستخدام <code>transform</code> الملكية لقياس <code>div</code> عنصر إلى 1.1 مرات حجمها الأصلي عند مرور مستخدم أكثر من ذلك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتراوح حجم عنصر <code>div</code> 1.1 مرة عندما يمرر المستخدم فوقها.
    testString: 'assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi), "The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
