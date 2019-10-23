---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
videoUrl: ''
localeTitle: أضف تسميات لعناصر D3
---

## Description
<section id="description"> يتيح لك D3 تصنيف عنصر رسم بياني ، مثل شريط ، باستخدام عنصر <code>text</code> SVG. مثل عنصر <code>rect</code> ، يحتاج عنصر <code>text</code> إلى سمات <code>x</code> و <code>y</code> ، لوضعه على لوحة SVG. يحتاج أيضًا إلى الوصول إلى البيانات لعرض هذه القيم. تمنحك D3 مستوى عالٍ من التحكم في كيفية تصنيفك للأشرطة. </section>

## Instructions
<section id="instructions"> الشفرة الموجودة في المحرر تقوم بالفعل بربط البيانات بكل عنصر <code>text</code> جديد. أولاً ، إلحاق عقد <code>text</code> إلى <code>svg</code> . بعد ذلك ، أضف سمات للإحداثيات <code>x</code> و <code>y</code> . يجب أن تُحسب بنفس الطريقة التي يتم بها حساب <code>rect</code> ، باستثناء أن قيمة <code>y</code> <code>text</code> يجب أن تجعل الملصق يجلس 3 وحدات أعلى من الشريط. وأخيرًا ، استخدم طريقة D3 <code>text()</code> لتعيين التسمية مساوية لقيمة نقطة البيانات. <strong>ملحوظة</strong> <br> لتسمية التسمية أعلى من الشريط ، حدد ما إذا كان يجب أن تكون قيمة <code>y</code> <code>text</code> 3 أكبر أو 3 أقل من قيمة <code>y</code> للشريط. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("text").eq(0).text() == "12" && $("text").eq(0).attr("y") == "61", "The first <code>text</code> element should have a label of 12 and a <code>y</code> value of 61.");'
  - text: يجب أن يحتوي عنصر <code>text</code> الثاني على تصنيف 31 وقيمة <code>y</code> 4.
    testString: 'assert($("text").eq(1).text() == "31" && $("text").eq(1).attr("y") == "4", "The second <code>text</code> element should have a label of 31 and a <code>y</code> value of 4.");'
  - text: يجب أن يكون لعنصر <code>text</code> الثالث علامة من 22 وقيمة <code>y</code> 31.
    testString: 'assert($("text").eq(2).text() == "22" && $("text").eq(2).attr("y") == "31", "The third <code>text</code> element should have a label of 22 and a <code>y</code> value of 31.");'
  - text: ''
    testString: 'assert($("text").eq(3).text() == "17" && $("text").eq(3).attr("y") == "46", "The fourth <code>text</code> element should have a label of 17 and a <code>y</code> value of 46.");'
  - text: ''
    testString: 'assert($("text").eq(4).text() == "25" && $("text").eq(4).attr("y") == "22", "The fifth <code>text</code> element should have a label of 25 and a <code>y</code> value of 22.");'
  - text: ''
    testString: 'assert($("text").eq(5).text() == "18" && $("text").eq(5).attr("y") == "43", "The sixth <code>text</code> element should have a label of 18 and a <code>y</code> value of 43.");'
  - text: ''
    testString: 'assert($("text").eq(6).text() == "29" && $("text").eq(6).attr("y") == "10", "The seventh <code>text</code> element should have a label of 29 and a <code>y</code> value of 10.");'
  - text: ''
    testString: 'assert($("text").eq(7).text() == "14" && $("text").eq(7).attr("y") == "55", "The eighth <code>text</code> element should have a label of 14 and a <code>y</code> value of 55.");'
  - text: ''
    testString: 'assert($("text").eq(8).text() == "9" && $("text").eq(8).attr("y") == "70", "The ninth <code>text</code> element should have a label of 9 and a <code>y</code> value of 70.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
