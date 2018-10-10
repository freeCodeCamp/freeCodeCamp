---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي فئة <code>red-box</code> خاصية <code>padding</code> .
    testString: 'assert($(".red-box").css("padding-top") != "0px" && $(".red-box").css("padding-right") != "0px" && $(".red-box").css("padding-bottom") != "0px" && $(".red-box").css("padding-left") != "0px", "Your <code>red-box</code> class should have a <code>padding</code> property.");'
  - text: يجب أن تعطي صفحتك <code>red-box</code> عناصر 1.5 م من <code>padding</code> .
    testString: 'assert(code.match(/\.red-box\s*?{\s*?.*?\s*?.*?\s*?padding:\s*?1\.5em/gi), "Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
