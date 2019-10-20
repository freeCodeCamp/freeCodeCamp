---
id: 587d7fac367417b2b2512bdc
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
forumTopicId: 301496
localeTitle: Используйте функции d3.max и d3.min для поиска минимальных и максимальных значений в наборе данных
---

## Description
<section id='description'>
D3 method <code>domain()</code> и <code>range()</code> устанавливают эту информацию для вашего масштаба на основе данных. Есть несколько способов сделать это проще. Часто, когда вы устанавливаете домен, вы хотите использовать минимальное и максимальное значения в наборе данных. Попытка найти эти значения вручную, особенно в большом наборе данных, может привести к ошибкам. D3 имеет два метода - <code>min()</code> и <code>max()</code> чтобы вернуть эту информацию. Вот пример: <blockquote> const exampleData = [34, 234, 73, 90, 6, 52]; <br> d3.min (exampleData) // Возвращает 6 <br> d3.max (exampleData) // Возвращает 234 </blockquote> Набор данных может иметь вложенные массивы, такие как пары координат [x, y], которые были в примере графика рассеяния. В этом случае вам нужно рассказать D3, как рассчитать максимум и минимум. К счастью, методы <code>min()</code> и <code>max()</code> принимают функцию обратного вызова. В этом примере аргумент функции обратного вызова <code>d</code> для текущего внутреннего массива. Обратный вызов должен возвращать элемент из внутреннего массива (значение x или y), по которому вы хотите вычислить максимальное или минимальное значение. Ниже приведен пример того, как найти значения min и max с массивом массивов: <blockquote> const locationData = [[1, 7], [6, 3], [8, 3]]; <br> // Возвращает наименьшее число из первых элементов <br> const minX = d3.min (locationData, (d) =&gt; d [0]); <br> // minX сравнивается с 1, 6 и 8 и устанавливается в 1 </blockquote>
</section>

## Instructions
<section id='instructions'>
Переменная <code>positionData</code> содержит трехмерный (3D) массив. Используйте метод D3, чтобы найти максимальное значение координаты z (третье значение) из массивов и сохранить его в <code>output</code> переменной. <strong>Заметка</strong> <br> Интересный факт - D3 может отображать 3D-массивы.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text in the <code>h2</code> should be 8.
    testString: assert(output == 8 && $('h2').text() == '8');
  - text: Your code should use the <code>max()</code> method.
    testString: assert(code.match(/\.max/g), 'Your code should use the <code>max()</code> method.')

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
