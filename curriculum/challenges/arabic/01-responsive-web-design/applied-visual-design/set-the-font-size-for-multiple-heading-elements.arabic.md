---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: اضبط حجم الخط لعناصر العناوين المتعددة
---

## Description
<section id="description"> يتم استخدام الخاصية <code>font-size</code> لتحديد حجم النص في عنصر معين. يمكن استخدام هذه القاعدة لعناصر متعددة لإنشاء تناسق مرئي للنص على الصفحة. في هذا التحدي ، ستقوم بتعيين القيم لجميع علامات <code>h1</code> إلى <code>h6</code> لموازنة أحجام العناوين. </section>

## Instructions
<section id="instructions"><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> عيّن <code>font-size</code> لعلامة <code>h1</code> على 68 بكسل. </li><li style=";text-align:right;direction:rtl"> عيّن <code>font-size</code> علامة <code>h2</code> إلى 52 بكسل. </li><li style=";text-align:right;direction:rtl"> <code>font-size</code> علامة <code>h3</code> إلى 40 بكسل. </li><li style=";text-align:right;direction:rtl"> عيّن <code>font-size</code> علامة <code>h4</code> على 32 بكسل. </li><li style=";text-align:right;direction:rtl"> عيّن <code>font-size</code> علامة <code>h5</code> على 21 بكسل. </li><li style=";text-align:right;direction:rtl"> اضبط <code>font-size</code> علامة <code>h6</code> على 14 بكسل. </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> لعلامة <code>h1</code> إلى 68 بكسل.
    testString: 'assert($("h1").css("font-size") == "68px", "Your code should set the <code>font-size</code> property for the <code>h1</code> tag to 68 pixels.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> للعلامة <code>h2</code> إلى 52 بكسل.
    testString: 'assert($("h2").css("font-size") == "52px", "Your code should set the <code>font-size</code> property for the <code>h2</code> tag to 52 pixels.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> لعلامة <code>h3</code> إلى 40 بكسل.
    testString: 'assert($("h3").css("font-size") == "40px", "Your code should set the <code>font-size</code> property for the <code>h3</code> tag to 40 pixels.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> لعلامة <code>h4</code> إلى 32 بكسل.
    testString: 'assert($("h4").css("font-size") == "32px", "Your code should set the <code>font-size</code> property for the <code>h4</code> tag to 32 pixels.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> لعلامة <code>h5</code> إلى 21 بكسل.
    testString: 'assert($("h5").css("font-size") == "21px", "Your code should set the <code>font-size</code> property for the <code>h5</code> tag to 21 pixels.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الخاصية <code>font-size</code> لعلامة <code>h6</code> إلى 14 بكسل.
    testString: 'assert($("h6").css("font-size") == "14px", "Your code should set the <code>font-size</code> property for the <code>h6</code> tag to 14 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>






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
