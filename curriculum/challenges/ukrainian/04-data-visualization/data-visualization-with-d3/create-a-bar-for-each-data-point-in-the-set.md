---
id: 587d7fa8367417b2b2512bcd
title: Як створити панель для кожного значення множини
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

В попередньому завданні було додано лише один прямокутник до елементу `svg` для відображення панелі. Тут ви зможете об’єднати те, про що ви дізналися про `data()`, `enter()` та фігури масштабованої векторної графіки, щоб створити та додати прямокутник для кожного значення множини `dataset`.

У попередньому завданні було пояснено як створити та додати код `div` для кожного елемента в `dataset`:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

Існує декілька різниць, які взаємодіють з елементами `rect` замість елементів `div`. Елементи `rect` повинні додаватись до елементу `svg`, а не безпосередньо до `body`. Також вам потрібно вказати D3, де розташувати кожний `rect` в межах `svg`. Інформацію про те, як розташувати панель, ви знайдете у наступному завданні.

# --instructions--

Використовуйте методи `data()`, `enter()` та `append()` для того, шоб створити та додати `rect` для кожного елемента в `dataset`. Панелі повинні відображатися одна над одною; це буде виправлено у наступному завданні.

# --hints--

Ваш документ має містити 9 елементів `rect`.

```js
assert($('rect').length == 9);
```

Ваш код повинен використовувати метод `data()`.

```js
assert(code.match(/\.data/g));
```

Ваш код має використовувати метод `enter()`.

```js
assert(code.match(/\.enter/g));
```

Ваш код має використовувати метод`append()`.

```js
assert(code.match(/\.append/g));
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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
