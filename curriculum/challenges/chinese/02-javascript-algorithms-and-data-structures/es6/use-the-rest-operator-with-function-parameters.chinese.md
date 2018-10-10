---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
challengeType: 1
videoUrl: ''
localeTitle: 将Rest运算符与函数参数一起使用
---

## Description
<section id="description">为了帮助我们创建更灵活的函数，ES6引入了函数参数的<dfn>rest运算符</dfn> 。使用rest运算符，您可以创建带有可变数量参数的函数。这些参数存储在一个数组中，以后可以从函数内部访问。看看这段代码： <blockquote> function howMany（... args）{ <br>返回“你已经通过”+ args.length +“arguments。”; <br> } <br> console.log（howMany（0,1,2））; //你已经传递了3个参数<br> console.log（howMany（“string”，null，[1,2,3]，{}））; //你已经传递了4个参数。 </blockquote>其余运算符无需检查<code>args</code>数组，并允许我们在<code>args</code>数组上应用<code>map()</code> ， <code>filter()</code>和<code>reduce()</code> 。 </section>

## Instructions
<section id="instructions">修改函数<code>sum</code> ，使其使用rest运算符，并以相同的方式使用任意数量的参数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>sum(0,1,2)</code>的结果应为3'
    testString: 'assert(sum(0,1,2) === 3, "The result of <code>sum(0,1,2)</code> should be 3");'
  - text: '<code>sum(1,2,3,4)</code>的结果应为10'
    testString: 'assert(sum(1,2,3,4) === 10, "The result of <code>sum(1,2,3,4)</code> should be 10");'
  - text: <code>sum(5)</code>的结果应为5
    testString: 'assert(sum(5) === 5, "The result of <code>sum(5)</code> should be 5");'
  - text: <code>sum()</code>的结果应为0
    testString: 'assert(sum() === 0, "The result of <code>sum()</code> should be 0");'
  - text: <code>sum</code>函数在<code>args</code>参数上使用<code>...</code> spread运算符。
    testString: 'getUserInput => assert(getUserInput("index").match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), "The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
