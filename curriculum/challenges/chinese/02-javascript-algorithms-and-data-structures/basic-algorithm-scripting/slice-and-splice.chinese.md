---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Slice and Splice
---

## Description
<section id='description'>
将摄氏度转换为华氏度的算法为：摄氏度 × <code>9/5 + 32</code>
输入参数 <code>celsius</code> 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 <code>fahrenheit</code> 变量赋值为对应的华氏温度的值。
你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>frankenSplice([1, 2, 3], [4, 5], 1)</code> 应该返回 <code>[4, 1, 2, 3, 5]</code>。
    testString: assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5], '<code>frankenSplice([1, 2, 3], [4, 5], 1)</code> 应该返回 <code>[4, 1, 2, 3, 5]</code>。');
  - text: "<code>frankenSplice([1, 2], ['a', 'b'], 1)</code> 应该返回 <code>['a', 1, 2, 'b']</code>。"
    testString: assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ["a", 1, 2, "b"], '<code>frankenSplice([1, 2], ["a", "b"], 1)</code> 应该返回 <code>["a", 1, 2, "b"]</code>。');
  - text: "<code>frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)</code> 应该返回 <code>['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']</code>。"
    testString: assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"], '<code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> 应该返回 <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>。');
  - text: 来自第一个数组的所有元素应该按原来的顺序被插入到第二个数组中。
    testString: assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4], '来自第一个数组的所有元素应该按原来的顺序被插入到第二个数组中。');
  - text: 第一个数组在函数执行前后应该保持一样。
    testString: assert(testArr1[0] === 1 && testArr1[1] === 2, '第一个数组在函数执行前后应该保持一样。');
  - text: 第二个数组在函数执行前后应该保持一样。
    testString: assert(testArr2[0] === "a" && testArr2[1] === "b", '第二个数组在函数执行前后应该保持一样。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

</div>

</section>

## Solution
<section id='solution'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);

```

</section>
              