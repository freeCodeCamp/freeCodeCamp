---
id: 587d7fa9367417b2b2512bce
title: تعيين الإحداثيات ديناميكيا لكل عمود
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

التحدي السابق أنشئت وألحقت مستطيل بعنصر `svg` لكل نقطة في `dataset` لتستعرض عمود. لسوء الحظ، كانوا مكدسين بعضَهم فوق بعض.

يمكنك تحكم في موضع المستطيل بواسطة أستخدام سمات (attributes) تسمى `x` و `y`. لتخبر D3 أين يبدأ في رسم الشكل في منطقة `svg`. قام التحدي السابق بتحديدهم إلى صفر، لذلك تم وضع كل عمود (bar) في الزاوية العلوية اليسرى.

للحصول على مخطط بياني للأعمدة (bar chart)، يجب أن تجلس جميع الأعمدة على نفس المستوى العمودي، مما يعني أن قيمة `y` تبقى هي نفسها (عند 0) لجميع الأعمدة. ومع ذلك، تحتاج قيمة `x` إلى التغيير عند إضافة أعمدة جديد. تذكر أن أكبر قيم من `x` تدفع العناصر إلى أقصى اليمين. عندما تمر عبر عناصر القائمة في `dataset`، يجب أن تزيد قيمة `x`.

تقبل طريقة (method) تسمى `attr()` في D3 الوظيفة تعيد تفعيل (callback functon) التي تعيين تلك السمة ديناميكيا. وظيفة تعيد تفعيل (callback functon) تأخذ حجيتين (arguments)، واحد لنقطة البيانات نفسها (عادة `d`) وواحد لترتيب نقطة البيانات في القائمة (array). أما الحِجَّة (argument) الثانية تدل على الترتيب فهي حِجَّة اختيارية. إليك التنسيق:

```js
selection.attr("property", (d, i) => {

})
```

من المهم مُراعاةٌ أنك لا تحتاج إلى كتابة حلقة (loop) نوعها `for` أو استخدام `forEach()` لتكرار العناصر في مجموعة البيانات (data set). تذكر أن طريقة `data()` تحلل مجموعة البيانات (data set), وأي طريقة تتبع `data()` يتم تشغيلها مرة واحدة لكل عنصر في مجموعة البيانات.

# --instructions--

غيّر سمة `x` في وظيفة تعيد تفعيل بحيث ترجع الترتيب 30 مرة.

**ملاحظة:** كل عمود له عرض (width) بقيمة 25، لذا زيادة كل قيمة `x` بمقدار 30 تضيف بعض المساحة بين الأعمدة. أي قيمة أكبر من 25 ستنجح في هذا المثال.

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
