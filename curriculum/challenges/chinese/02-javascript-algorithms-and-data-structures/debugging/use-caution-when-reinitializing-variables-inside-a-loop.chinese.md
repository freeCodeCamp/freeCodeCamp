---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
videoUrl: ''
localeTitle: 在循环内重新初始化变量时请小心
---

## Description
<section id="description">有时需要在循环中保存信息，增加计数器或重置变量。一个潜在的问题是变量要么重新初始化，要么不重新初始化，反之亦然。如果您不小心重置了用于终端条件的变量，导致无限循环，这将特别危险。使用<code>console.log()</code>在循环的每个循环中打印变量值可以发现与重置相关的错误行为，或者无法重置变量。 </section>

## Instructions
<section id="instructions">以下函数应该创建一个具有<code>m</code>行和<code>n</code>列零的二维数组。不幸的是，它没有产生预期的输出，因为<code>row</code>变量没有在外部循环中重新初始化（设置回空数组）。修复代码，使其返回正确的3x2零数组，看起来像<code>[[0, 0], [0, 0], [0, 0]]</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该将<code>matrix</code>变量设置为一个数组，每个数组包含3行，每列2列零。
    testString: assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]");
  - text: <code>matrix</code>变量应该有3行。
    testString: assert(matrix.length == 3);
  - text: <code>matrix</code>变量每行应有2列。
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
// solution required
```

/section>
