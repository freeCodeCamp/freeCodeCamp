---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 矮胖的猴子
---

## Description
<section id="description">编写一个函数，将数组（第一个参数）拆分为<code>size</code>的长度（第二个参数），并将它们作为二维数组返回。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>chunkArrayInGroups([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;], 2)</code>应返回<code>[[&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;, &quot;d&quot;]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code>应返回<code>[[0, 1, 2], [3, 4, 5]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code>应返回<code>[[0, 1], [2, 3], [4, 5]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code>应该返回<code>[[0, 1, 2, 3], [4, 5]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code>应该返回<code>[[0, 1, 2], [3, 4, 5], [6]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code>应返回<code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code> <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code>应返回<code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code> 。'
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
