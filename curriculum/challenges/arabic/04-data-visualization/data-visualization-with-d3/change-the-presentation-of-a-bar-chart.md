---
id: 587d7fa8367417b2b2512bca
title: تغيير التقديم لمخطط الأعمدة (Bar Chart)
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

وأنشأ التحدي السابق مخطط أعمدة (bar chart)، ولكن هناك بعض التغييرات في التنسيق الذي يمكن أن تحسنه:

1) إضافة مساحة بين كل عمود لفصله بصرياً، عن طريق إضافة هامش (margin) إلى CSS لفئة `bar`

2) زيادة ارتفاع (height) الأعمدة لإظهار الفرق في القيم بشكل أفضل، عن طريق ضرب (multiplying) القيمة في عدد لزيادة الارتفاع

# --instructions--

أولاً، أضف `margin` بقيمة `2px` إلى فئة `bar` في علامة `style`. بعد ذلك، غيّر وظيفة إعادة التفعيل في طريقة `style()` بحيث تنتج `10` أضعاف قيمة البيانات الأصلية (بالإضافة إلى نص `px`).

**ملاحظة:** ضرب كل نقطة بيانات *بنفس* الرَّقَم الثابت يغيّر المقياس فقط. إنه مثل تكبير الصورة، الذي لا يغير المقصود من البيانات الأساسية.

# --hints--

يجب أن يحتوي أول `div` على `height` بقيمة `120` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

يجب أن يحتوي ثاني `div` على `height` بقيمة `310` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

يجب أن يحتوي ثالث `div` على `height` بقيمة `220` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

يجب أن يحتوي رابع `div` على `height` بقيمة `170` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

يجب أن يحتوي خامس `div` على `height` بقيمة `250` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

يجب أن يحتوي سادس `div` على `height` بقيمة `180` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

يجب أن يحتوي سابع `div` على `height` بقيمة `290` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

يجب أن يحتوي ثامن `div` على `height` بقيمة `140` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

يجب أن يحتوي تاسع `div` على `height` بقيمة `90` بكسل (px) و `margin` بقيمة `2` بكسل (px).

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
