---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
isRequired: true
isBeta: true
challengeType: 5
videoUrl: ''
localeTitle: 切片和拼接
---

## Description
<section id="description">您将获得两个数组和一个索引。使用数组方法<code>slice</code>和<code>splice</code>按顺序将第一个数组的每个元素复制到第二个数组中。开始在第二个数组的索引<code>n</code>处插入元素。返回结果数组。函数运行后，输入数组应保持不变。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>frankenSplice([1, 2, 3], [4, 5], 1)</code>应该返回<code>[4, 1, 2, 3, 5]</code> <code>frankenSplice([1, 2, 3], [4, 5], 1)</code> <code>[4, 1, 2, 3, 5]</code> 。'
    testString: assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
  - text: '<code>frankenSplice([1, 2], [&quot;a&quot;, &quot;b&quot;], 1)</code>应返回<code>[&quot;a&quot;, 1, 2, &quot;b&quot;]</code> 。'
    testString: assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ["a", 1, 2, "b"]);
  - text: '<code>frankenSplice([&quot;claw&quot;, &quot;tentacle&quot;], [&quot;head&quot;, &quot;shoulders&quot;, &quot;knees&quot;, &quot;toes&quot;], 2)</code>应该返回<code>[&quot;head&quot;, &quot;shoulders&quot;, &quot;claw&quot;, &quot;tentacle&quot;, &quot;knees&quot;, &quot;toes&quot;]</code> 。'
    testString: assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
  - text: 第一个数组中的所有元素都应按原始顺序添加到第二个数组中。
    testString: assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
  - text: 函数运行后，第一个数组应保持不变。
    testString: assert(testArr1[0] === 1 && testArr1[1] === 2);
  - text: 函数运行后，第二个数组应保持不变。
    testString: assert(testArr2[0] === "a" && testArr2[1] === "b");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
