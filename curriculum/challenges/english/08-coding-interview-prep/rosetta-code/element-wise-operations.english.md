---
title: Element-wise operations
id: 599c333915e0ea32d04d4bec
challengeType: 5
---

## Description
<section id='description'>
<p>Implement basic element-wise matrix-matrix and scalar-matrix operations.</p><p>Implement:</p>
<p>::*  addition</p>
<p>::*  subtraction</p>
<p>::*  multiplication</p>
<p>::*  division</p>
<p>::*  exponentiation</p>
<p>The first parameter will be the operation to be performed, for example : "m_add" for matrix addition and "s_add" for scalar addition. The second and third parameters will be the matrices on which the operations are to be performed.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>operation</code> is a function.
    testString: assert(typeof operation === 'function', '<code>operation</code> is a function.');
  - text: <code>operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[2,4],[6,8]]</code>.
    testString: assert.deepEqual(operation('m_add', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[2, 4], [6, 8]], '<code>operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[2,4],[6,8]]</code>.');
  - text: <code>operation("s_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[3,4],[5,6]]</code>.
    testString: assert.deepEqual(operation('s_add', [[1, 2], [3, 4]], 2), [[3, 4], [5, 6]], '<code>operation("s_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[3,4],[5,6]]</code>.');
  - text: <code>operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[0,0],[0,0]]</code>.
    testString: assert.deepEqual(operation('m_sub', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[0, 0], [0, 0]], '<code>operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[0,0],[0,0]]</code>.');
  - text: <code>operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[9,16]]</code>.
    testString: assert.deepEqual(operation('m_mult', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [9, 16]], '<code>operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[9,16]]</code>.');
  - text: <code>operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,1],[1,1]]</code>.
    testString: assert.deepEqual(operation('m_div', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 1], [1, 1]], '<code>operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,1],[1,1]]</code>.');
  - text: <code>operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[27,256]]</code>.
    testString: assert.deepEqual(operation('m_exp', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [27, 256]], '<code>operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[27,256]]</code>.');
  - text: <code>operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])</code> should return <code>[[10,12,14,16],[18,20,22,24]]</code>.
    testString: assert.deepEqual(operation('m_add', [[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]), [[10, 12, 14, 16], [18, 20, 22, 24]], '<code>operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])</code> should return <code>[[10,12,14,16],[18,20,22,24]]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function operation (op, arr1, arr2) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function operation(op, arr1, arr2) {
  const ops = {
    add: ((a, b) => a + b),
    sub: ((a, b) => a - b),
    mult: ((a, b) => a * b),
    div: ((a, b) => a / b),
    exp: ((a, b) => Math.pow(a, b))
  };
  const ifm = op.startsWith('m');
  const doOp = ops[op.substring(2)];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr1[i][j] = doOp(arr1[i][j], (ifm) ? (arr2[i][j]) : (arr2));
    }
  }
  return arr1;
}

```

</section>
