---
id: 587d7fac367417b2b2512bdc
title: >-
  Використання функцій d3.max та d3.min для пошуку мінімального та максимального значення у наборі даних
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

D3 методи `domain()` і `range()` встановлюють цю інформацію для вашої шкали на основі даних. Є кілька методів, що полегшать завдання.

При встановленні домені, часто виникає бажання використати мінімальне та максимальне значення у наборі даних. Однак пошук значень вручну може призвести до появи помилок, особливо коли маєш справу з великими наборами даних.

Для отримання цієї інформації у D3 існує два методи: `min()` та `max()`. Наприклад:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

Набір даних може містити вкладені масиви, такі як `[x, y]` координати, показані в прикладі діаграми розсіювання. У цьому випадку потрібно вказати D3, як обчислювати максимальне та мінімальне значення. Добре, що обидва методи `min()` та `max()` мають функцію зворотного виклику. У даному прикладі, аргумент функції зворотного виклику `d` призначений для поточного внутрішнього масиву. Зворотній виклик має повернути елемент із внутрішнього масиву (значення `x` або `y`), у якому Ви обчислюватимете максимальне чи мінімальне значення. Приклад, як знайти min та max значення з набором масивів:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` набуватиме значення `1`.

# --instructions--

Масив `positionData` містить підмасиви x, y та z координат. Використайте D3 метод для пошуку максимального значення z координати (третє значення) з масивів та збережіть його в `output` змінній.

# --hints--

Текст в середині елементу `h2` повинен бути `8`.

```js
assert(output == 8 && $('h2').text() == '8');
```

Ваш код має використовувати метод `max()`.

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
