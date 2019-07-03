---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Chunky Monkey
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
  - text: "<code>chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)</code> 应该返回 <code>[['a', 'b'], ['c', 'd']]</code>。"
    testString: assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], '<code>chunkArrayInGroups(["a", "b", "c", "d"], 2)</code> 应该返回 <code>[["a", "b"], ["c", "d"]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> 应该返回 <code>[[0, 1, 2], [3, 4, 5]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> 应该返回 <code>[[0, 1, 2], [3, 4, 5]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> 应该返回 <code>[[0, 1], [2, 3], [4, 5]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> 应该返回 <code>[[0, 1], [2, 3], [4, 5]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> 应该返回 <code>[[0, 1, 2, 3], [4, 5]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> 应该返回 <code>[[0, 1, 2, 3], [4, 5]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> 应该返回 <code>[[0, 1, 2], [3, 4, 5], [6]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> 应该返回 <code>[[0, 1, 2], [3, 4, 5], [6]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> 应该返回 <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> 应该返回 <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>。');
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> 应该返回 <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>。
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> 应该返回 <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function chunkArrayInGroups(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

</section>
              