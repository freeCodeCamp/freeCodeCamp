---
id: 587d7fac367417b2b2512bde
title: Використайте попередньо визначену шкалу, щоб розмістити елементи
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Маючи встановлені шкали, прийшов час знову скласти точкову діаграму. Шкали схожі на функції обробки, які перетворюють необроблені дані `x` та `y` на значення, які підходять і правильно відтворюються на SVG. Вони зберігають дані в межах накресленої площини екрана.

Значення атрибута координати для фігури SVG встановлюють за допомогою функції масштабування. Сюди входять атрибути `x` та `y` для елементів `rect` чи `text`, або `cx` та `cy` для `circles`. Ось приклад:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Шкали встановлюють атрибути координат фігури, щоб розмістити точки даних на SVG. Вам не потрібно застосовувати шкали при відтворенні фактичного значення даних, наприклад, в методі `text()` для підказки або позначки.

# --instructions--

Використайте `xScale` та `yScale`, щоб розташувати фігури `circle` та `text` на SVG. Для `circles` застосуйте шкали, щоб встановити атрибути `cx` та `cy`. Також надайте їм радіус зі значенням `5`.

Для елементів `text` застосуйте шкали, щоб встановити атрибути `x` та `y`. Позначки мають бути зсунутими праворуч від точок. Для цього додайте `10` одиниць до значення даних `x`, перш ніж передати їх до `xScale`.

# --hints--

Код має містити 10 елементів `circle`.

```js
assert($('circle').length == 10);
```

Перший елемент `circle` повинен мати `cx` зі значенням приблизно `91` та `cy` зі значенням приблизно `368` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

Другий елемент `circle` повинен мати `cx` зі значенням приблизно `159` та `cy` зі значенням приблизно `181` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

Третій елемент `circle` повинен мати `cx` зі значенням приблизно `340` та `cy` зі значенням приблизно `329` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

Четвертий елемент `circle` повинен мати `cx` зі значенням приблизно `131` та `cy` зі значенням приблизно `60` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

П’ятий елемент `circle` повинен мати `cx` зі значенням приблизно `440` та `cy` зі значенням приблизно `237` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

Шостий елемент `circle` повинен мати `cx` зі значенням приблизно `271` та `cy` зі значенням приблизно `306` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

Сьомий елемент `circle` повинен мати `cx` зі значенням приблизно `361` та `cy` зі значенням приблизно `351` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

Восьмий елемент `circle` повинен мати `cx` зі значенням приблизно `261` та `cy` зі значенням приблизно `132` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

Дев’ятий елемент `circle` повинен мати `cx` зі значенням приблизно `131` та `cy` зі значенням приблизно `144` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

Десятий елемент `circle` повинен мати `cx` зі значенням приблизно `79` та `cy` зі значенням приблизно `326` після застосування шкал. Він також повинен мати `r` зі значенням `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

Код має містити 10 елементів `text`.

```js
assert($('text').length == 10);
```

Перша позначка повинна мати `x` зі значенням приблизно `100` та `y` зі значенням приблизно `368` після застосування шкал.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

Друга позначка повинна мати `x` зі значенням приблизно `168` та `y` зі значенням приблизно `181` після застосування шкал.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

Третя позначка повинна мати `x` зі значенням приблизно `350` та `y` зі значенням приблизно `329` після застосування шкал.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

Четверта позначка повинна мати `x` зі значенням приблизно `141` та `y` зі значенням приблизно `60` після застосування шкал.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

П’ята позначка повинна мати `x` зі значенням приблизно `449` та `y` зі значенням приблизно `237` після застосування шкал.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

Шоста позначка повинна мати `x` зі значенням приблизно `280` та `y` зі значенням приблизно `306` після застосування шкал.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

Сьома позначка повинна мати `x` зі значенням приблизно `370` та `y` зі значенням приблизно `351` після застосування шкал.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

Восьма позначка повинна мати `x` зі значенням приблизно `270` та `y` зі значенням приблизно `132` після застосування шкал.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

Дев’ята позначка повинна мати `x` зі значенням приблизно `140` та `y` зі значенням приблизно `144` після застосування шкал.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

Десята позначка повинна мати `x` зі значенням приблизно `88` та `y` зі значенням приблизно `326` після застосування шкал.

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
