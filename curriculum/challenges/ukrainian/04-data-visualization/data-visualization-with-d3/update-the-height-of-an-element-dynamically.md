---
id: 587d7fa8367417b2b2512bc9
title: Оновіть висоту елемента динамічно
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

У попередніх завданнях ми розповіли, як зобразити дані з масиву та додати класи CSS. Ви можете поєднати ці уроки, щоб створити просту стовпчикову діаграму. Для цього виконайте два кроки:

1) Створіть `div` для кожної точки даних в масиві

2) Надайте кожному `div` динамічну висоту, використавши функцію зворотного виклику в методі `style()`, що налаштує висоту відповідно до значення даних

Пригадайте формат, щоб встановити стиль за допомогою функції зворотнього виклику:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Додайте метод `style()` до коду в редакторі, щоб встановити властивість `height` для кожного елемента. Використайте функцію зворотного виклику, щоб повернути значення точки даних разом з доданим рядком `px`.

# --hints--

Перший `div` повинен мати `height` зі значенням `12` пікселів.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

Другий `div` повинен мати `height` зі значенням `31` пікселів.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

Третій `div` повинен мати `height` зі значенням `22` пікселів.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

Четвертий `div` повинен мати `height` зі значенням `17` пікселів.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

П’ятий `div` повинен мати `height` зі значенням `25` пікселів.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

Шостий `div` повинен мати `height` зі значенням `18` пікселів.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

Сьомий `div` повинен мати `height` зі значенням `29` пікселів.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

Восьмий `div` повинен мати `height` зі значенням `14` пікселів.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

Дев’ятий `div` повинен мати `height` зі значенням `9` пікселів.

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      .style('height', d => `${d}px`)
  </script>
</body>
```
