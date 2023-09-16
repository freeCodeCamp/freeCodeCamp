---
id: 587d7fac367417b2b2512bdc
title: >-
  Використайте функції d3.max та d3.min, щоб знайти мінімальне та максимальне значення в наборі даних
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

Методи `domain()` та `range()` від D3 встановлюють інформацію для шкали на основі даних. Існує декілька методів, які полегшують це завдання.

При встановленні домену часто потрібно використати мінімальне та максимальне значення у наборі даних. Однак пошук значень вручну може призвести до помилок, особливо при роботі з великими наборами даних.

D3 має два методи: `min()` та `max()`, щоб повернути цю інформацію. Наприклад:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

Набір даних може містити вкладені масиви, як-от пари координат `[x, y]`, які були в прикладі точкової діаграми. У цьому випадку потрібно повідомити D3, як обчислити максимальне та мінімальне значення. На щастя, обидва методи `min()` та `max()` приймають функцію зворотного виклику. У цьому прикладі, аргумент функції зворотного виклику `d` призначений для поточного внутрішнього масиву. Зворотний виклик має повернути елемент з внутрішнього масиву (значення `x` або `y`), у якому потрібно обчислити максимальне чи мінімальне значення. Ось приклад, як знайти мінімальне та максимальне значення з масивом масивів:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` матиме значення `1`.

# --instructions--

Масив `positionData` містить вкладені масиви координат x, y та z. Використайте метод D3, щоб знайти максимальне значення координати z (третє значення) з масивів та збережіть його в змінній `output`.

# --hints--

Текстом елемента `h2` має бути `8`.

```js
assert(output == 8 && $('h2').text() == '8');
```

Код має використати метод `max()`.

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
