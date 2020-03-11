---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
videoUrl: ''
localeTitle: 设置函数的默认参数
---

## Description
<section id="description">为了帮助我们创建更灵活的函数，ES6引入了函数的<dfn>默认参数</dfn> 。看看这段代码： <blockquote> function greeting（name =“Anonymous”）{ <br>返回“你好”+名字; <br> } <br>的console.log（问候语（ “约翰”））; // 你好约翰<br>的console.log（问候（））; //你好匿名</blockquote>默认参数在未指定参数时启动（未定义）。正如您在上面的示例中所看到的，当您未为参数提供值时，参数<code>name</code>将接收其默认值<code>&quot;Anonymous&quot;</code> 。您可以根据需要为任意数量的参数添加默认值。 </section>

## Instructions
<section id="instructions">修改函数<code>increment</code>加入默认参数，这样它会加1 <code>number</code> ，如果<code>value</code>未指定。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>increment(5, 2)</code>应为<code>7</code> 。'
    testString: assert(increment(5, 2) === 7);
  - text: <code>increment(5)</code>的结果应为<code>6</code> 。
    testString: assert(increment(5) === 6);
  - text: 默认参数<code>1</code>用于<code>value</code> 。
    testString: assert(code.match(/value\s*=\s*1/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
