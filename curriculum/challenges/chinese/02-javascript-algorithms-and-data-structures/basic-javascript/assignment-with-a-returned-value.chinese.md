---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: ''
localeTitle: 具有返回值的分配
---

## Description
<section id="description">如果您从我们对<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">使用赋值运算符存储值</a>的讨论中回忆起来<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">，则在分配</a>值之前，将解决等号右侧的所有内容。这意味着我们可以获取函数的返回值并将其赋值给变量。假设我们预先定义了一个函数<code>sum</code> ，它将两个数字相加，然后： <code>ourSum = sum(5, 12);</code>将调用<code>sum</code>函数，它返回值<code>17</code>并将其分配给<code>ourSum</code>变量。 </section>

## Instructions
<section id="instructions">使用参数<code>7</code>调用<code>processArg</code>函数，并将其返回值分配给已<code>processed</code>的变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code>的值应为<code>2</code>
    testString: assert(processed === 2);
  - text: 您应该将<code>processArg</code>分配给已<code>processed</code>
    testString: assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

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
</section>
