---
id: 587d7fa8367417b2b2512bc9
title: Як динамічно оновити висоту елементу
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

У попередньому завданні ми розповіли, як відобразити дані з масиву та додати класи CSS. Ви можете поєднати ці уроки, щоб створити просту стовпчикову діаграму. Для цього ви можете використати один із кроків:

1) Створити `div` для кожного значення масиву

2) Призначити кожному значенню `div` динамічну висоту, за допомогою функції зворотнього зв'язку методом `style()`, який встановлює висоту, яка дорівнює значенню даних

Ви можете відновити формат, щоб встановити стиль за допомогою функції зворотнього зв'язку:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Додайте метод `style()`до коду в редакторі для встановлення властивостей `height` для кожного елементу. Використовуйте функцію зворотнього зв'язку для відновлення значення даних за допомогою послідовності `px`.

# --hints--

Перша величина `div` повинна мати значення `height` з `12` пікселів.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

Друга `div` повинна мати значення `height` з `31` пікселів.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

Третя `div` повинна мати значення `height` з `22` пікселів.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

Четверта `div` повинна мати значення `height` з `17` пікселів.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

П'ята `div` повинна мати значення `height` з `25` пікселів.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

Шоста `div` повинна мати значення `height` з `18` пікселів.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

Сьома `div` повинна мати значення `height` з `29` пікселів.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

Восьма `div` повинна мати значення `height` з `14` пікселів.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

Дев'ята `div` повинна мати значення `height` з `9` пікселів.

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
