---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
videoUrl: ''
localeTitle: ديناميكيا تعيين الاحداثيات لكل شريط
---

## Description
<section id="description"> التحدي الأخير خلق وإلحاق مستطيل لعنصر <code>svg</code> لكل نقطة في <code>dataset</code> لتمثيل شريط. لسوء الحظ ، كلهم ​​كانوا مكدسين فوق بعضهم البعض. يتم التعامل مع موضع المستطيل بواسطة سمات <code>x</code> و <code>y</code> . يخبرون D3 من أين تبدأ في رسم الشكل في منطقة <code>svg</code> . تحداهم الأخير وضع كل منهم على 0 ، لذلك تم وضع كل شريط في الزاوية العلوية اليسرى. بالنسبة إلى المخطط الشريطي ، يجب أن تكون جميع الأشرطة على نفس المستوى الرأسي ، مما يعني أن القيمة <code>y</code> تبقى كما هي (عند 0) لجميع الأشرطة. ومع ذلك ، يجب تغيير القيمة <code>x</code> عند إضافة أشرطة جديدة. تذكر أن القيم الأكبر <code>x</code> دفع العناصر إلى اليمين. أثناء التنقل خلال عناصر الصفيف في <code>dataset</code> ، يجب أن تزيد قيمة x. تقبل طريقة <code>attr()</code> في D3 وظيفة رد اتصال لتعيين تلك السمة ديناميكيًا. تأخذ وظيفة رد الاتصال وسيطتين ، واحدة لنقطة البيانات نفسها (عادةً <code>d</code> ) وواحدة لفهرس نقطة البيانات في الصفيف. الوسيطة الثانية للفهرس اختيارية. فيما يلي الشكل: <blockquote style=";text-align:right;direction:rtl"> selection.attr (&quot;property&quot;، (d، i) =&gt; { <br> / * <br> * d هي قيمة نقطة البيانات <br> * i هو مؤشر نقطة البيانات في الصفيف <br> * / <br> }) </blockquote> من المهم ملاحظة أنك لست بحاجة إلى كتابة حلقة <code>for</code> أو استخدام <code>forEach()</code> للتكرار فوق العناصر الموجودة في مجموعة البيانات. تذكر أن طريقة <code>data()</code> بتوزيع مجموعة البيانات ، وأي طريقة يتم ربطها بعد تشغيل <code>data()</code> مرة واحدة لكل عنصر في مجموعة البيانات. </section>

## Instructions
<section id="instructions"> تغيير وظيفة رد الاتصال السمة <code>x</code> بحيث تقوم بإرجاع الفهرس مرات 30. <strong>ملاحظة</strong> <br> لكل شريط عرض 25 ، لذلك فإن زيادة كل قيمة <code>x</code> بمقدار 30 تضيف مسافة بين القضبان. أي قيمة أكبر من 25 ستعمل في هذا المثال. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>rect</code> الأول قيمة <code>x</code> تساوي 0.
    testString: 'assert($("rect").eq(0).attr("x") == "0", "The first <code>rect</code> should have an <code>x</code> value of 0.");'
  - text: يجب أن يكون <code>rect</code> الثاني قيمة <code>x</code> 30.
    testString: 'assert($("rect").eq(1).attr("x") == "30", "The second <code>rect</code> should have an <code>x</code> value of 30.");'
  - text: يجب أن يكون <code>rect</code> الثالث قيمة <code>x</code> تبلغ 60.
    testString: 'assert($("rect").eq(2).attr("x") == "60", "The third <code>rect</code> should have an <code>x</code> value of 60.");'
  - text: يجب أن يكون لدى <code>rect</code> الرابع قيمة <code>x</code> لـ 90.
    testString: 'assert($("rect").eq(3).attr("x") == "90", "The fourth <code>rect</code> should have an <code>x</code> value of 90.");'
  - text: يجب أن يكون <code>rect</code> الخامس قيمة <code>x</code> تبلغ 120.
    testString: 'assert($("rect").eq(4).attr("x") == "120", "The fifth <code>rect</code> should have an <code>x</code> value of 120.");'
  - text: يجب أن يكون <code>rect</code> السادس قيمة <code>x</code> تبلغ 150.
    testString: 'assert($("rect").eq(5).attr("x") == "150", "The sixth <code>rect</code> should have an <code>x</code> value of 150.");'
  - text: يجب أن يكون <code>rect</code> السابع قيمة <code>x</code> تبلغ 180.
    testString: 'assert($("rect").eq(6).attr("x") == "180", "The seventh <code>rect</code> should have an <code>x</code> value of 180.");'
  - text: يجب أن يكون <code>rect</code> الثامن قيمة <code>x</code> 210.
    testString: 'assert($("rect").eq(7).attr("x") == "210", "The eighth <code>rect</code> should have an <code>x</code> value of 210.");'
  - text: يجب أن يكون <code>rect</code> التاسع قيمة <code>x</code> 240.
    testString: 'assert($("rect").eq(8).attr("x") == "240", "The ninth <code>rect</code> should have an <code>x</code> value of 240.");'

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
