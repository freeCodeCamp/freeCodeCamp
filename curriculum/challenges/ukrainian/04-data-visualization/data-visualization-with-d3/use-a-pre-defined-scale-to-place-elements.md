---
id: 587d7fac367417b2b2512bde
title: Використовуйте попередньо визначену шкалу(масштаб) для розміщення елементів
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Маючи встановлені масштаби, прийшов час знову нанести на карту ділянку. The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. Вони зберігають дані в межах області відображення екрана.

Ви встановлюєте значення атрибутів координат для форми SVG з функцією масштабування. Це включає `x` і `y` атрибути `rect` або `text` елементи, чи `cx` та `cy` за `circles`. Ось приклад:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. Вам не потрібно застосовувати масштаби при відображенні фактичного значення даних, наприклад, в `text()` метод для підказки або мітки.

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. Для `circles`, застосуйте масштаби для встановлення `cx` та `cy`. Надайте їм також радіус `5` одиниць.

Для `text`елементів, застосуйте масштаби щоб встановити `x` та `y`. Мітки повинні бути зсунуті вправо від точок. Щоб зробити це, додайте `10` одиниць на `x` значення даних, перш ніж передавати їх у `xScale`.

# --hints--

Ваш код повинен містити 10 `circle` елементів.

```js
assert($('circle').length == 10);
```

Перший `circle` повинен мати `cx` значення якого приблизно `91` та значення `cy` приблизно `368` після застосування масштабу. Також повинен мати `r`значення `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Другий `circle` елемент повинен мати `cx` значення приблизно `159` і значення `cy` значення приблизно `181` після застосування масштабу. Також повинен мати `r`значення `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Третій `circle` повинен мати `cx` значення приблизно `340` і `cy` значення від приблизно `329` після нанесення масштабу. Також повинен мати `r`значення `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Четвертий `circle` повинен мати `cx` значення приблизно якого `131` і значення `cy`приблизне значення дорівнює `60` після застосування масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

П'ятий `circle` елемент повинен мати на `cx` значення приблизно `440` і значення `cy` приблизно від `237` після нанесення масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Шостий `circle` повинен мати на `cx` значення приблизно яке дорівнює`271` і значення `cy` приблизно від `306` після нанесення масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Сьомий елемент `circle` повинен мати `cx` значення приблизно якого `361` і значення `cy` дорівнює значенню `351` після застосування масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

Елемент восьмий `circle` повинен мати на `cx` значення приблизно якого дорівнює `261` і значення `cy` приблизно від `132` після нанесення масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Дев'ятий `circle` повинен мати `cx` значення якого приблизно `131` і значення `cy` приблизно від `144` після застосування масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Десятий `circle`елемент повинен мати `cx` значення якого приблизно дорівнює `79` і значення `cy` приблизно від `326` після нанесення масштабу. Також повинен мати `r`значення якого дорівнює `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

Ваш код повинен налічувати 10 `text` елементів.

```js
assert($('text').length == 10);
```

Перша мітка повинна мати `x` значення якого приблизно дорівнює `100` та значення `y` приблизно `368` після застосування масштабу.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

Друга мітка повинна мати `x` значення якого приблизно дорівнює `168` та значення `y` приблизно дорівнює `181` після застосування масштабу.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

Третя мітка повинна мати `x` значення якого приблизно дорівнює `350` та значення якого `y` приблизно дорівнює`329` після нанесення масштабу.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

Четверта мітка повинна мати `x` значення якого приблизно дорівнює `141` та значення `y` приблизно якого дорівнює `60` після застосування масштабу.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

П'ята мітка повинна мати значення `x` яке приблизно дорівнює `449` і `y` значення приблизно якого дорівнює `237` після нанесення масштабів.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

Шоста мітка повинна мати значення `x` яке приблизно дорівнює `280` і `y` значення приблизно якого дорівнює `306` після застосування масштабів.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

Сьома мітка повинна мати `x` значення якого приблизно дорівнює `370` та значення якого `y` приблизно дорівнює `351` після нанесення масштабу.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

Восьма мітка повинна мати значення `x` яке приблизно дорівнює `270` і `y` значення приблизно якого дорівнює `132` після застосування масштабів.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

Дев'ята мітка повинна мати значення `x` яке приблизно дорівнює `140` і `y` значення приблизно якого дорівнює `144` після застосування масштабів.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

Десята мітка повинна мати значення `x` яке приблизно дорівнює `88` і `y` значення приблизно якого дорівнює `326` після нанесення масштабів.

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       // Add your code below this line



       // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
