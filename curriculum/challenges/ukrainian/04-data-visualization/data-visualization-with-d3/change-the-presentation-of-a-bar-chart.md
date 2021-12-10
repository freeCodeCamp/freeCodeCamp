---
id: 587d7fa8367417b2b2512bca
title: Змінити вигляд стовпчикової діаграми
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

Останнім завданням було створити стовпчикову діаграму, але існує кілька змін форматування, що можуть покращити її:

1) Додайти пробіл між кожним стовпчиком, щоб візуально розділити їх, і це можна зробити за допомогою додавання відступу до CSS для класу `bar`

2) Збільшіть висоту стовпчиків, щоб краще показати різницю між значеннями, що можна зробити за допомогою множення значень на число, для масштабування висоти

# --instructions--

Спочатку додайте `margin` `2px` до класу `bar` у теґу `style`. Далі, змініть функцію у методі `style()`, щоб повернути значення `10` разів у вихідне значення даних (плюс `px`).

**Примітка:** Множення кожної точки даних на *ту саму* константу лише змінить шкалу. Це як збільшення, але воно не змінює значення основних даних.

# --hints--

Перший `div` повинен мати `height` `120` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

Другий `div` повинен мати `height``310` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

Третій `div` повинен мати `height` `220` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

Четвертий `div` повинен мати `height` `170` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

П'ятий `div` повинен мати `height` `250` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

Шостий `div` повинен мати `height` `180` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

Сьомий `div` повинен мати `height``290` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

Восьмий `div` повинен мати `height` `140` пікселів та `margin` з `2` пікселів.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

Дев'ятий `div` повинен мати `height` `90` пікселів та `margin` з `2` пікселів.

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
