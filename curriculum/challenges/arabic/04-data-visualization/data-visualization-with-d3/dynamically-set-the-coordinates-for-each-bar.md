---
id: 587d7fa9367417b2b2512bce
title: تعيين الإحداثيات ديناميكيا لكل عمود
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

The last challenge created and appended a rectangle to the `svg` element for each point in `dataset` to represent a bar. لسوء الحظ، كانوا مكدسين بعضَهم فوق بعض.

التحكم في موقع المستطيل يكون بواسطة سمات (attributes) `x` و `y`. فانهم يخبرون D3 أين يبدأ في رسم الشكل في منطقة `svg`. قام التحدي السابق بتحديدهم إلى صفر، لذلك تم وضع كل عمود (bar) في الزاوية العلوية اليسرى.

للحصول على مخطط أعمدة (bar chart)، يجب أن تجلس جميع الأعمدة على نفس المستوى العمودي، مما يعني أن قيمة `y` تبقى هي نفسها (عند 0) لجميع الأعمدة. أما قيمة `x` عليها أن نتغير عندما تضيف أعمدة جديدة. تذكر أن القيم الأكبر في `x` تدفع العناصر أبعد إلى اليمين. عندما تمر عبر عناصر القائمة في `dataset`، يجب أن تزيد قيمة `x`.

تقبل طريقة (method) `attr()` في D3 وظيفة إعادة التفعيل (callback functon) التي تعيين تلك السمة ديناميكيا. تأخذ وظيفة إعادة التفعيل (callback functon) معطيين (arguments)، واحد لنقطة البيانات نفسها (عادة `d`) وواحد لرقم ترتيب (index) نقطة البيانات في القائمة (array). أما المعطى (argument) الثاني لرقم الترتيب فهو معطى اختياري. إليك التنسيق:

```js
selection.attr("property", (d, i) => {

})
```

من المهم ملاحظة أنك لن تحتاج إلى كتابة حلقة (loop) نوعها `for` أو `forEach()` لتعيد على العناصر في مجموعة البيانات (data set). تذكر أن طريقة `data()` تحلل مجموعة البيانات (data set), وأي طريقة مسلسة تتبع `data()` سيتم تشغيلها مرة واحدة لكل عنصر في مجموعة البيانات.

# --instructions--

غيّر وظيفة إعادة التفعيل لسمة `x` بحيث تنتج رَقَم الترتيب 30 مرة.

**ملاحظة:** كل عمود له عرض (width) بقيمة 25، لذا زيادة كل قيمة `x` بمقدار 30 ستضيف بعض المساحة بين الأشرطة. أي قيمة أكبر من 25 ستنجح في هذا المثال.

# --hints--

يجب أن يحتوي أول `rect` على `x` بقيمة `0`.

```js
assert($('rect').eq(0).attr('x') == '0');
```

يجب أن يحتوي ثاني `rect` على `x` بقيمة `30`.

```js
assert($('rect').eq(1).attr('x') == '30');
```

يجب أن يحتوي ثالث `rect` على `x` بقيمة `60`.

```js
assert($('rect').eq(2).attr('x') == '60');
```

يجب أن يحتوي رابع `rect` على `x` بقيمة `90`.

```js
assert($('rect').eq(3).attr('x') == '90');
```

يجب أن يحتوي خامس `rect` على `x` بقيمة `120`.

```js
assert($('rect').eq(4).attr('x') == '120');
```

يجب أن يحتوي سادس `rect` على `x` بقيمة `150`.

```js
assert($('rect').eq(5).attr('x') == '150');
```

يجب أن يحتوي سابع `rect` على `x` بقيمة `180`.

```js
assert($('rect').eq(6).attr('x') == '180');
```

يجب أن يحتوي ثامن `rect` على `x` بقيمة `210`.

```js
assert($('rect').eq(7).attr('x') == '210');
```

يجب أن يحتوي تاسع `rect` على `x` بقيمة `240`.

```js
assert($('rect').eq(8).attr('x') == '240');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
