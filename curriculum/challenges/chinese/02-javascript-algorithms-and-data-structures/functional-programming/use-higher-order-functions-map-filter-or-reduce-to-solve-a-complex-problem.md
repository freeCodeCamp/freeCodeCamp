---
id: 587d7b88367417b2b2512b45
challengeType: 1
forumTopicId: 301311
title: 使用高阶函数 map、filter 或者 reduce 来解决复杂问题
---

## Description
<section id='description'>
已经接触了高阶函数如  <code>map()</code>、 <code>filter()</code> 和 <code>reduce()</code>的使用，是时候用它们来完成一些复杂的挑战了。
</section>

## Instructions
<section id='instructions'>
已经定义了一个函数 <code>squareList</code>。任意组合 <code>map()</code>、<code>filter()</code> 和 <code>reduce()</code> 来完成函数，满足以下条件，当传入实数数组（如，<code>[-3, 4.8, 5, 3, -3.2]</code>）时，返回<em>仅</em>包含正整数的平方的新数组。
<strong>注意：</strong> 函数不应该包含任何形式的 <code>for</code> 或者 <code>while</code> 循环或者 <code>forEach()</code> 函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squareList</code> 应该是一个 <code>function</code>。
    testString: assert.typeOf(squareList, 'function'), '<code>squareList</code> should be a <code>function</code>';
  - text: 不应该使用 for 或者 while 循环或者 forEach。
    testString: assert(!removeJSComments(code).match(/for|while|forEach/g));
  - text: 应该使用 <code>map</code>、<code>filter</code> 或者 <code>reduce</code>。
    testString: assert(removeJSComments(code).match(/\.(map|filter|reduce)\s*\(/g));
  - text: 函数应该返回 <code>array</code>。
    testString: assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
  - text: <code>squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])</code> 应该返回 <code>[16, 1764, 36]</code>。
    testString: assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [16, 1764, 36]);
  - text: <code>squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])</code> 应该返回 <code>[9, 100, 49]</code>。
    testString: assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [9, 100, 49]);  
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const squareList = (arr) => {
  // only change code below this line
  return arr;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

</div>

<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>

</section>

## Solution
<section id='solution'>

```js
const squareList = (arr) => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```

</section>
