---
id: 59637c4d89f6786115efd814
challengeType: 5
videoUrl: ''
title: Hofstadter Q序列
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence" title="wp：Hofstadter_sequence＃Hofstadter_Q_sequence">Hofstadter Q序列</a>定义为： </p><p> $ Q（1）= Q（2）= 1，\\ Q（n）= Q \ big（nQ（n-1）\ big）+ Q \ big（nQ（n-2）），\ quad n&gt; 2. $ </p><p>它定义为<a href="http://rosettacode.org/wiki/Fibonacci sequence" title="斐波那契序列">Fibonacci序列</a> ，但<a href="http://rosettacode.org/wiki/Fibonacci sequence" title="斐波那契序列">Fibonacci序列中</a>的下一个术语是前两个术语的总和，在Q序列中，前两个术语告诉您在Q序列中返回多远以找到两个数字总结以制作序列的下一个术语。 </p>任务：将Hofstadter Q Sequence方程实现为JavaScript </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hofstadterQ</code>是一个函数。
    testString: assert(typeof hofstadterQ === 'function');
  - text: <code>hofstadterQ()</code>应该返回<code>integer</code>
    testString: assert(Number.isInteger(hofstadterQ(1000)));
  - text: <code>hofstadterQ(1000)</code>应该返回<code>502</code>
    testString: assert.equal(hofstadterQ(testCase[0]), res[0]);
  - text: <code>hofstadterQ(1500)</code>应该返回<code>755</code>
    testString: assert.equal(hofstadterQ(testCase[1]), res[1]);
  - text: <code>hofstadterQ(2000)</code>应该返回<code>1005</code>
    testString: assert.equal(hofstadterQ(testCase[2]), res[2]);
  - text: <code>hofstadterQ(2500)</code>应该返回<code>1261</code>
    testString: assert.equal(hofstadterQ(testCase[3]), res[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hofstadterQ (n) {
  // Good luck!
  return n;
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
