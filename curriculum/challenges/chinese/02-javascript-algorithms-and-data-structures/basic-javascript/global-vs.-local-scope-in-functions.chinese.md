---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: ''
localeTitle: 功能中的全局与局部范围
---

## Description
<section id="description">可以使<dfn>本地</dfn>变量和<dfn>全局</dfn>变量具有相同的名称。执行此操作时， <code>local</code>变量优先于<code>global</code>变量。在这个例子中： <blockquote> var someVar =“帽子”; <br> function myFun（）{ <br> var someVar =“Head”; <br>返回someVar; <br> } </blockquote>函数<code>myFun</code>将返回<code>&quot;Head&quot;</code>因为存在变量的<code>local</code>版本。 </section>

## Instructions
<section id="instructions">将一个局部变量添加到<code>myOutfit</code>函数，以使用<code>&quot;sweater&quot;</code>覆盖<code>outerWear</code>的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要更改全局<code>outerWear</code>的值
    testString: 'assert(outerWear === "T-Shirt", "Do not change the value of the global <code>outerWear</code>");'
  - text: <code>myOutfit</code>应该返回<code>&quot;sweater&quot;</code>
    testString: 'assert(myOutfit() === "sweater", "<code>myOutfit</code> should return <code>"sweater"</code>");'
  - text: 不要更改return语句
    testString: 'assert(/return outerWear/.test(code), "Do not change the return statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
