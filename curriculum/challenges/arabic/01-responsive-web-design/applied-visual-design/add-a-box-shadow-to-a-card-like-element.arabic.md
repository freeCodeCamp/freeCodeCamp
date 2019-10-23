---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: ''
localeTitle: أضف box box إلى عنصر يشبه Card
---

## Description
<section id="description"> تطبق خاصية <code>box-shadow</code> أو أكثر على عنصر. تأخذ الخاصية <code>box-shadow</code> قيمًا <code>offset-x</code> (كم تبعد مسافة دفع الظل أفقيًا عن العنصر) ، <code>offset-y</code> (أي بعد الآن تضغط الظل بشكل عمودي من العنصر) ، <code>blur-radius</code> <code>spread-radius</code> ولون القيمة ، بهذا الترتيب. تعد قيم <code>spread-radius</code> <code>blur-radius</code> و <code>blur-radius</code> <code>spread-radius</code> اختيارية. في ما يلي مثال على CSS لإنشاء ظلال متعددة مع بعض الضبابية ، باللون الأسود الغامق في الغالب: <blockquote style=";text-align:right;direction:rtl"> box-shadow: 0 10px 20px rgba (0،0،0،0.19)، 0 6px 6px rgba (0،0،0،0.23)؛ </blockquote></section>

## Instructions
<section id="instructions"> يحتوي العنصر الآن على معرف <code>thumbnail</code> . باستخدام هذا المحدد ، استخدم القيم CSS الموجودة أعلاه لوضع <code>box-shadow</code> على البطاقة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تضيف الشفرة خاصية <code>box-shadow</code> لمعرف <code>thumbnail</code> .
    testString: 'assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g), "Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.");'
  - text: يجب عليك استخدام CSS المعطى لقيمة <code>box-shadow</code> .
    testString: 'assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\),\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi), "You should use the given CSS for the <code>box-shadow</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }



  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
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
