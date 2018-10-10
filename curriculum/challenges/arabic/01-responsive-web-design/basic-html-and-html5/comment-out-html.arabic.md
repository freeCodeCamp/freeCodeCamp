---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: ''
localeTitle: تعليق من HTML
---

## Description
<section id="description"> تذكر أنه لبدء التعليق ، تحتاج إلى استخدام <code>&lt;!--</code> وإنهاء تعليق ، تحتاج إلى استخدام <code>--&gt;</code> هنا سوف تحتاج إلى إنهاء التعليق قبل بدء عنصر <code>h2</code> الخاص بك. </section>

## Instructions
<section id="instructions"> قم بالتعليق على عنصر <code>h1</code> والعنصر <code>p</code> ، ولكن ليس عنصر <code>h2</code> الخاص بك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم بالتعليق على عنصر <code>h1</code> بحيث لا يكون مرئيًا على صفحتك.
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: اترك عنصر <code>h2</code> مُعالج بحيث يكون مرئيًا على صفحتك.
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: قم بالتعليق على عنصر <code>p</code> الخاص بك بحيث لا يكون مرئيًا على صفحتك.
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: تأكد من إغلاق كل تعليقاتك باستخدام <code>--&gt;</code> .
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: لا تقم بتغيير ترتيب <code>h1</code> <code>h2</code> أو <code>p</code> في التعليمة البرمجية.
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
