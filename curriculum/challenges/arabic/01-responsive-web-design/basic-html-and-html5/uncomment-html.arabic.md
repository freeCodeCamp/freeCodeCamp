---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: Uncomment HTML
---

## Description
undefined

## Instructions
<section id="instructions"> إلغاء <code>h2</code> عناصر <code>h1</code> و <code>h2</code> و <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: اجعل عنصر <code>h1</code> مرئيًا على صفحتك من خلال إلغاء تحميله.
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: اجعل عنصر <code>h2</code> مرئيًا على صفحتك من خلال إلغاء تحميله.
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: اجعل العنصر <code>p</code> مرئيًا على صفحتك من خلال إلغاء تحميله.
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: تأكد من حذف جميع علامات التعليق الزائدة ، مثل <code>--&gt;</code> .
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

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
