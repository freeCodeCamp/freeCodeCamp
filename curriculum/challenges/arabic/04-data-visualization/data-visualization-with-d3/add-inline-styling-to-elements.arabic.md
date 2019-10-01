---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
videoUrl: ''
localeTitle: إضافة التصميم الداخلي للعناصر
---

## Description
<section id="description"> يتيح لك D3 إضافة أنماط CSS المضمنة على العناصر الديناميكية باستخدام طريقة <code>style()</code> . تأخذ طريقة <code>style()</code> زوجًا ذا قيمة - مفصولة بفواصل كوسيطة. في ما يلي مثال لتعيين لون نص التحديد إلى اللون الأزرق: <code>selection.style(&quot;color&quot;,&quot;blue&quot;);</code> </section>

## Instructions
<section id="instructions"> أضف <code>style()</code> إلى الشفرة في المحرر لجعل كل النص المعروض يحتوي على <code>font-family</code> من <code>verdana</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي عناصر <code>h2</code> على <code>font-family</code> of verdana.
    testString: 'assert($("h2").css("font-family") == "verdana", "Your <code>h2</code> elements should have a <code>font-family</code> of verdana.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>style()</code> .
    testString: 'assert(code.match(/\.style/g), "Your code should use the <code>style()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line



      // Add your code above this line
  </script>
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
