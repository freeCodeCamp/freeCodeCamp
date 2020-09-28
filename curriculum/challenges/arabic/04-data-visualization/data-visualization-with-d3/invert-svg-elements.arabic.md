---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
videoUrl: ''
localeTitle: عكس عناصر SVG
---

## Description
<section id="description"> ربما لاحظت أن المخطط الشريطي يبدو كما لو كان مقلوبًا أو مقلوبًا. هذا بسبب كيفية استخدام SVG للإحداثيات (x، y). في SVG ، تكون نقطة الأصل للإحداثيات في الزاوية العلوية اليسرى. يقوم إحداثي <code>x</code> من 0 بوضع شكل على الحافة اليسرى لمنطقة SVG. تقوم إحداثي <code>y</code> من 0 بوضع شكل على الحافة العلوية لمنطقة SVG. تدفع قيم <code>x</code> الأعلى المستطيل إلى اليمين. تدفع قيم <code>y</code> الأعلى المستطيل لأسفل. لجعل القضبان في الجانب الأيمن ، تحتاج إلى تغيير الطريقة التي يتم بها حساب الإحداثي <code>y</code> . ويحتاج إلى حساب كل من ارتفاع الشريط والارتفاع الكلي لمنطقة SVG. ارتفاع منطقة SVG هو 100. إذا كان لديك نقطة بيانات من 0 في المجموعة ، فإنك تريد أن يبدأ الشريط في الجزء السفلي من منطقة SVG (وليس أعلى). للقيام بذلك ، يحتاج تنسيق <code>y</code> إلى قيمة 100. إذا كانت قيمة نقطة البيانات 1 ، فستبدأ <code>y</code> لـ 100 لتعيين الشريط في الأسفل. ثم تحتاج إلى حساب ارتفاع شريط 1 ، بحيث يكون التنسيق <code>y</code> النهائي هو 99. إن إحداثي <code>y</code> الذي هو <code>y = heightOfSVG - heightOfBar</code> قد يضع القضبان في الجانب الأيمن لأعلى. </section>

## Instructions
<section id="instructions"> تغيير وظيفة رد الاتصال للسمة <code>y</code> لتعيين القضبان الجانب الأيمن لأعلى. تذكر أن <code>height</code> الشريط 3 أضعاف قيمة البيانات <code>d</code> . <strong>ملحوظة</strong> <br> بشكل عام ، العلاقة هي <code>y = h - m * d</code> ، حيث <code>m</code> هو الثابت الذي يقوم بتحجيم نقاط البيانات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>rect</code> الأول قيمة <code>y</code> تبلغ 64.
    testString: 'assert($("rect").eq(0).attr("y") == h - (dataset[0] * 3), "The first <code>rect</code> should have a <code>y</code> value of 64.");'
  - text: يجب أن يكون <code>rect</code> الثاني قيمة <code>y</code> 7.
    testString: 'assert($("rect").eq(1).attr("y") == h - (dataset[1] * 3), "The second <code>rect</code> should have a <code>y</code> value of 7.");'
  - text: ''
    testString: 'assert($("rect").eq(2).attr("y") == h - (dataset[2] * 3), "The third <code>rect</code> should have a <code>y</code> value of 34.");'
  - text: ''
    testString: 'assert($("rect").eq(3).attr("y") == h - (dataset[3] * 3), "The fourth <code>rect</code> should have a <code>y</code> value of 49.");'
  - text: ''
    testString: 'assert($("rect").eq(4).attr("y") == h - (dataset[4] * 3), "The fifth <code>rect</code> should have a <code>y</code> value of 25.");'
  - text: ''
    testString: 'assert($("rect").eq(5).attr("y") == h - (dataset[5] * 3), "The sixth <code>rect</code> should have a <code>y</code> value of 46.");'
  - text: ''
    testString: 'assert($("rect").eq(6).attr("y") == h - (dataset[6] * 3), "The seventh <code>rect</code> should have a <code>y</code> value of 13.");'
  - text: ''
    testString: 'assert($("rect").eq(7).attr("y") == h - (dataset[7] * 3), "The eighth <code>rect</code> should have a <code>y</code> value of 58.");'
  - text: ''
    testString: 'assert($("rect").eq(8).attr("y") == h - (dataset[8] * 3), "The ninth <code>rect</code> should have a <code>y</code> value of 73.");'

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
