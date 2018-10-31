---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: ''
localeTitle: دفع عناصر اليسار أو اليمين مع الخاصية العائمة
---

## Description
<section id="description"> الأداة المواقع التالية لا فعلا استخدام <code>position</code> ، ولكن يحدد <code>float</code> الملكية عنصر. تتم إزالة العناصر العائمة من التدفق العادي للمستند ودفعها إما إلى <code>left</code> أو <code>right</code> من عنصرها الأصلي المحتوي على العناصر. يتم استخدامه بشكل شائع مع خاصية <code>width</code> لتحديد مقدار المساحة الأفقية التي يتطلبها العنصر المضمن. </section>

## Instructions
<section id="instructions"> إن العلامات نظرا يعمل كذلك تخطيط عمودين، مع <code>section</code> و <code>aside</code> عناصر بجانب بعضها البعض. امنح العنصر <code>#left</code> <code>float</code> من <code>left</code> <code>#right</code> <code>float</code> على <code>right</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي العنصر ذو المعرف <code>left</code> على قيمة <code>float</code> <code>left</code> .
    testString: 'assert($("#left").css("float") == "left", "The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.");'
  - text: يجب أن يكون للعنصر الذي له <code>right</code> معرف قيمة <code>float</code> من <code>right</code> .
    testString: 'assert($("#right").css("float") == "right", "The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  #left {

    width: 50%;
  }
  #right {

    width: 40%;
  }
  aside, section {
    padding: 2px;
    background-color: #ccc;
  }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
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
