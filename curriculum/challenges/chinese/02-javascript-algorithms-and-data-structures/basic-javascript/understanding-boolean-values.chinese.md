---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: ''
localeTitle: 了解布尔值
---

## Description
<section id="description">另一种数据类型是<dfn>布尔值</dfn> 。 <code>Booleans</code>可能只是两个值中的一个： <code>true</code>或<code>false</code> 。它们基本上是很少的开关，其中<code>true</code>为“on”而<code>false</code>为“off”。这两个国家是相互排斥的。 <strong>注意</strong> <br> <code>Boolean</code>值永远不会用引号写。 <code>strings</code> <code>&quot;true&quot;</code>和<code>&quot;false&quot;</code>不是<code>Boolean</code> ，在JavaScript中没有特殊含义。 </section>

## Instructions
<section id="instructions">修改<code>welcomeToBooleans</code>函数，以便在单击运行按钮时返回<code>true</code>而不是<code>false</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>welcomeToBooleans()</code>函数应该返回一个布尔值（true / false）。
    testString: 'assert(typeof welcomeToBooleans() === "boolean", "The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.");'
  - text: <code>welcomeToBooleans()</code>应该返回true。
    testString: 'assert(welcomeToBooleans() === true, "<code>welcomeToBooleans()</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function welcomeToBooleans() {

// Only change code below this line.

return false; // Change this line

// Only change code above this line.
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
</section>
