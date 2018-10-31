---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: اضبط وزن الخط لعناصر العناوين المتعددة
---

## Description
<section id="description"> يمكنك تعيين <code>font-size</code> كل علامة عنوان في التحدي الأخير ، هنا ستقوم بتعديل <code>font-weight</code> . تحدد الخاصية <code>font-weight</code> كيفية ظهور أحرف سميكة أو رقيقة في قسم من النص. </section>

## Instructions
<section id="instructions"><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <code>font-weight</code> <code>h1</code> لعلامة <code>h1</code> على 800. </li><li style=";text-align:right;direction:rtl"> <code>font-weight</code> لعلامة <code>h2</code> على 600. </li><li style=";text-align:right;direction:rtl"> <code>font-weight</code> <code>h3</code> لعلامة <code>h3</code> على 500. </li><li style=";text-align:right;direction:rtl"> <code>font-weight</code> <code>h4</code> لعلامة <code>h4</code> على 400. </li><li style=";text-align:right;direction:rtl"> <code>font-weight</code> <code>h5</code> لعلامة <code>h5</code> على 300. </li><li style=";text-align:right;direction:rtl"> <code>font-weight</code> لعلامة <code>h6</code> على 200. </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-weight</code> لعلامة <code>h1</code> إلى 800.
    testString: 'assert($("h1").css("font-weight") == "800", "Your code should set the <code>font-weight</code> property for the <code>h1</code> tag to 800.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-weight</code> لعلامة <code>h2</code> إلى 600.
    testString: 'assert($("h2").css("font-weight") == "600", "Your code should set the <code>font-weight</code> property for the <code>h2</code> tag to 600.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-weight</code> لعلامة <code>h3</code> إلى 500.
    testString: 'assert($("h3").css("font-weight") == "500", "Your code should set the <code>font-weight</code> property for the <code>h3</code> tag to 500.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-weight</code> لعلامة <code>h4</code> إلى 400.
    testString: 'assert($("h4").css("font-weight") == "400", "Your code should set the <code>font-weight</code> property for the <code>h4</code> tag to 400.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-weight</code> لعلامة <code>h5</code> إلى 300.
    testString: 'assert($("h5").css("font-weight") == "300", "Your code should set the <code>font-weight</code> property for the <code>h5</code> tag to 300.");'
  - text: يجب أن تقوم <code>font-weight</code> بتعيين الخاصية <code>font-weight</code> للعلامة <code>h6</code> إلى 200.
    testString: 'assert($("h6").css("font-weight") == "200", "Your code should set the <code>font-weight</code> property for the <code>h6</code> tag to 200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
