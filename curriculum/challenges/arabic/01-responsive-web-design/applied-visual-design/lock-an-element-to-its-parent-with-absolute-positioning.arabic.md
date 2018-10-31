---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: ''
localeTitle: قفل عنصر إلى الوالد مع وضع مطلق
---

## Description
<section id="description"> الخيار التالي لخاصية <code>position</code> CSS <code>absolute</code> ، والذي يقوم بتثبيت العنصر في مكانه بالنسبة للحاوية الرئيسية. على عكس الوضع <code>relative</code> ، يؤدي هذا إلى إزالة العنصر من التدفق العادي للمستند ، لذلك فإن العناصر المحيطة به تتجاهله. يتم استخدام خصائص إزاحة CSS (أعلى أو أسفل وإلى اليسار أو اليمين) لضبط الموضع. واحد فارق بسيط مع تحديد المواقع المطلق هو أنه سيتم تأمين بالنسبة إلى أقرب السلف <em>المتوضعة</em> . إذا نسيت إضافة قاعدة الموضع إلى العنصر الرئيسي ، (عادة ما يتم ذلك باستخدام <code>position: relative;</code> ) ، سيظل المتصفح يبحث عن السلسلة وينتهي افتراضيًا بعلامة body. </section>

## Instructions
<section id="instructions"> قفل عنصر <code>#searchbar</code> في أعلى يمين <code>section</code> الأصل من خلال إعلان <code>position</code> أنه <code>absolute</code> . إعطائها <code>top</code> و <code>right</code> إزاحة من 50 بكسل لكل منهما. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'و <code>#searchbar</code> يجب أن يكون العنصر في <code>position</code> المقرر أن <code>absolute</code> .'
    testString: 'assert($("#searchbar").css("position") == "absolute", "The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.");'
  - text: 'يجب أن تستخدم شفرتك <code>top</code> إزاحة CSS بمقدار 50 بكسل في عنصر <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("top") == "50px", "Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'
  - text: 'يجب أن تستخدم شفرتك إزاحة CSS <code>right</code> من 50 بكسل في عنصر <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("right") == "50px", "Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
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
