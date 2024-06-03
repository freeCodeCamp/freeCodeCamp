---
id: 587d7fa8367417b2b2512bca
title: Змініть вигляд стовпчикової діаграми
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

Попереднім завданням було створити стовпчикову діаграму, але існує декілька змін форматування, які можуть покращити її:

1) Додайте проміжки між стовпчиками, щоб візуально розділити їх. Це можна зробити, додавши поля до CSS для класу `bar`

2) Збільште висоту стовпців, щоб краще показати різницю між значеннями. Це можна зробити, помноживши значення на число, щоб масштабувати висоту

# --instructions--

Спочатку додайте `margin` зі значенням `2px` до класу `bar` в тегу `style`. Потім змініть функцію зворотного виклику в методі `style()`, щоб вона повернула значення, більше в `10` разів за початкове (разом з `px`).

**Примітка:** множення кожної точки даних на *однакову* константу змінює лише масштаб. Це як збільшення, але воно не змінює значення основних даних.

# --hints--

Перший `div` повинен мати `height` зі значенням `120` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

Другий `div` повинен мати `height` зі значенням `310` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

Третій `div` повинен мати `height` зі значенням `220` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

Четвертий `div` повинен мати `height` зі значенням `170` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

П’ятий `div` повинен мати `height` зі значенням `250` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

Шостий `div` повинен мати `height` зі значенням `180` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

Сьомий `div` повинен мати `height` зі значенням `290` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

Восьмий `div` повинен мати `height` зі значенням `140` пікселів та `margin` зі значенням `2` пікселів.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

Дев’ятий `div` повинен мати `height` зі значенням `90` пікселів та `margin` зі значенням `2` пікселів.

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
