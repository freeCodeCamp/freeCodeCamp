---
id: 587d7fab367417b2b2512bd8
title: Додавання атрибутів до елементів "коло"
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. Але D3 потребує додаткової інформації про положення та розмір кожного елемента `circle`, щоб відобразити їх правильно.

Елемент `circle` в SVG має три основні атрибути. Атрибути `cx` та `cy` — це координати. They tell D3 where to position the *center* of the shape on the SVG. Радіус (атрибут `r`) вказує розмір елемента `circle`.

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

Всі три атрибути можуть використовувати функцію зворотного зв'язку, щоб динамічно встановити свої значення. Пам'ятайте, що всі методи, згруповані після `data(dataset)` запускаються один раз на елемент у `dataset`. Параметр `d` у функції зворотного виклику посилається на поточний елемент в `dataset`, який є масивом для кожної точки. Використайте дужкову нотацію, наприклад, `d[0]`, щоб отримати доступ до значень в цьому масиві.

# --instructions--

Додайте атрибути `cx`, `cy`, а також `r` до елемента `circle`. Значення `cx` має бути першим числом у масиві для кожного елемента в `dataset`. Значення `cy` має базуватися на другому номері у масиві, але не забудьте показати графік правильно, а не інвертовано. Значення атрибуту `r` має дорівнювати `5` для всіх кіл.

# --hints--

Ваш код повинен містити 10 елементів `circle`.

```js
assert($('circle').length == 10);
```

У першого елемента `circle` атрибут `cx` повинен мати значення `34`, атрибут `cy` — значення `422` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

У другого елемента `circle` атрибут `cx` повинен мати значення `109`, атрибут `cy` — значення `220` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

У третього елемента `circle` атрибут `cx` повинен мати значення `310`, атрибут `cy` — значення `380` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

У четвертого елемента `circle` атрибут `cx` повинен мати значення `79`, атрибут `cy` — значення `89` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

У п'ятого елемента `circle` атрибут `cx` повинен мати значення `420`, атрибут `cy` — значення `280` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

У шостого елемента `circle` атрибут `cx` повинен мати значення `233`, атрибут `cy` — значення `355` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

У сьомого елемента `circle` атрибут `cx` повинен мати значення `333`, атрибут `cy` — значення `404` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

У восьмого елемента `circle` атрибут `cx` повинен мати значення `222`, атрибут `cy` — значення `167` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

У дев'ятого елемента `circle` атрибут `cx` повинен мати значення `78`, атрибут `cy` — значення `180` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

У десятого елемента `circle` атрибут `cx` повинен мати значення `21`, атрибут `cy` — значення `377` і атрибут `r` — значення `5`.

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

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

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
