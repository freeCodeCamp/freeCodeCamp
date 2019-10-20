---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يحتوي CSS flexbox على ميزة لتقسيم عنصر مرن إلى صفوف متعددة (أو أعمدة). بشكل افتراضي ، ستلائم حاوية مرنة جميع العناصر المرنة معًا. على سبيل المثال ، سيكون كل صف على سطر واحد. ومع ذلك ، باستخدام خاصية <code>flex-wrap</code> ، فإنه يخبر CSS التفاف العناصر. هذا يعني أن العناصر الإضافية تنتقل إلى صف أو عمود جديد. تتوقف نقطة توقف المكان الذي يحدث فيه الالتفاف على حجم العناصر وحجم الحاوية. يحتوي CSS أيضًا على خيارات لاتجاه الالتفاف: <ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <code>nowrap</code> : هذا هو الإعداد الافتراضي ، ولا يؤدي إلى التفاف العناصر. </li><li style=";text-align:right;direction:rtl"> <code>wrap</code> : يلتف عناصر من اليسار إلى اليمين إذا كانت في صف أو من أعلى لأسفل إذا كانت في عمود. </li><li style=";text-align:right;direction:rtl"> <code>wrap-reverse</code> : يلتف عناصر من أسفل إلى أعلى إذا كانت متتالية أو من اليمين إلى اليسار إذا كانت في عمود. </li></ul></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن <code>#box-container</code> عنصر <code>#box-container</code> الخاصية <code>flex-wrap</code> لتعيين قيمة التفاف.'
    testString: 'assert($("#box-container").css("flex-wrap") == "wrap", "The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of wrap.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
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
