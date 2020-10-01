---
id: 5951ed8945deab770972ae56
challengeType: 5
videoUrl: ''
title: 河内的塔
---

## Description
<section id="description">任务： <p>解决<a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp：Towers_of_Hanoi">河内塔</a>问题。 </p><p>您的解决方案应该接受光盘数量作为第一个参数，并使用三个字符串来识别三个光盘堆栈中的每一个，例如<code>towerOfHanoi(4, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</code> 。该函数应该返回一个包含移动列表的数组数组，source  - &gt; destination。例如，数组<code>[[&#39;A&#39;, &#39;C&#39;], [&#39;B&#39;, &#39;A&#39;]]</code>表示第一个移动是将光盘从堆栈A移动到C，第二个移动是移动一个从堆栈B到A的光盘</p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code>是一个功能。
    testString: assert(typeof towerOfHanoi === 'function');
  - text: <code>towerOfHanoi(3, ...)</code> 应该返回7招。
    testString: assert(res3.length === 7);
  - text: <code>towerOfHanoi(3, "A", "B", "C")</code>应返回[[“A”，“B”]，[“A”，“C”]，[“B”，“C”]，[ “A”， “B”]，[ “C”， “A”]，[ “C”， “B”]，[ “A”， “B”]]“）。
    testString: assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
  - text: <code>towerOfHanoi(5, "X", "Y", "Z")</code>第10 <code>towerOfHanoi(5, "X", "Y", "Z")</code>应为Y  - &gt; X.
    testString: assert.deepEqual(res5[9], ['Y', 'X']);
  - text: <code>towerOfHanoi(7, "A", "B", "C")</code>前十个动作是[[“A”，“B”]，[“A”，“C”]，[“B”，“C”] [ “A”， “B”]，[ “C”， “A”]，[ “C”， “B”]，[ “A”， “B”]，[ “A”， “C”] [ “B”， “C”]，[ “B”， “A”]]“）。
    testString: assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function towerOfHanoi (n, a, b, c) {
  // Good luck!
  return [[]];
}

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
