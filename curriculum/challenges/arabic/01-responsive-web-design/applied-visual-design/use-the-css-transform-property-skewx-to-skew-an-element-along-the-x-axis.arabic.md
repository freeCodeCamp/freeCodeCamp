---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: ''
localeTitle: استخدم skewX خاصية تحويل Transform إلى Skew an Element على طول X-Axis
---

## Description
<section id="description"> إن الوظيفة التالية لخاصية <code>transform</code> هي <code>skewX()</code> ، التي <code>skewX()</code> العنصر المحدد بمحاذاة X (الأفقي) بدرجة معينة. تحرف التعليمة البرمجية التالية عنصر الفقرة بمقدار -32 درجة على طول المحور X. <blockquote style=";text-align:right;direction:rtl"> ص { <br> تحويل: skewX (-32deg) ؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> انحرف العنصر بمعرف <code>bottom</code> بمقدار 24 درجة على طول المحور السيني باستخدام خاصية <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تحريف العنصر ذو <code>bottom</code> المعرّف بمقدار 24 درجة على طول المحور السيني.
    testString: 'assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g), "The element with id <code>bottom</code> should be skewed by 24 degrees along its X-axis.");'

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
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
