---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
forumTopicId: 301194
localeTitle: Предупреждение при переинициализации переменных внутри контура
---

## Description
<section id='description'>
Иногда в цикле необходимо сохранять информацию, увеличивать счетчики или переставлять переменные. Потенциальная проблема заключается в том, что переменные либо должны быть повторно инициализированы, либо нет, или наоборот. Это особенно опасно, если вы случайно сбросили переменную, используемую для состояния терминала, вызывая бесконечный цикл. Печать значений переменных с каждым циклом цикла с помощью <code>console.log()</code> может выявить ошибочное поведение, связанное с сбросом, или сбой при сбросе переменной.
</section>

## Instructions
<section id='instructions'>
Предполагается, что следующая функция создаст двумерный массив с <code>m</code> строками и <code>n</code> столбцами нулей. К сожалению, это не приводит к ожидаемому результату, потому что переменная <code>row</code> не повторно инициализируется (возвращается обратно в пустой массив) во внешнем цикле. Исправьте код, чтобы он вернул правильный массив нулей размером 3x2, который выглядит как <code>[[0, 0], [0, 0], [0, 0]]</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>matrix</code> variable to an array holding 3 rows of 2 columns of zeroes each.
    testString: assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]");
  - text: The <code>matrix</code> variable should have 3 rows.
    testString: assert(matrix.length == 3);
  - text: The <code>matrix</code> variable should have 2 columns in each row.
    testString: assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```

</section>
