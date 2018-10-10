---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية تحويل CSS skewY إلى Skew an Element على طول المحور ص
---

## Description
<section id="description"> وبالنظر إلى أن وظيفة <code>skewX()</code> العنصر المحدد على طول المحور X بواسطة درجة معينة ، فلا غرابة في أن الخاصية <code>skewY()</code> عنصرًا على المحور Y (الرأسي). </section>

## Instructions
<section id="instructions"> إمزج العنصر بمعرف <code>top</code> -10 درجات على طول المحور ص باستخدام خاصية <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتم تحريف العنصر ذو <code>top</code> الهوية بمقدار -10 درجات على طول المحور Y.
    testString: 'assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g), "The element with id <code>top</code> should be skewed by -10 degrees along its Y-axis.");'

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
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
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
