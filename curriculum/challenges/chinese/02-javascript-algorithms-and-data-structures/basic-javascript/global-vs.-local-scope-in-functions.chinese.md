---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
localeTitle: 函数中的全局作用域和局部作用域
---

## Description
<section id='description'>
一个程序中有可能具有相同名称的<dfn>局部</dfn>变量 和<dfn>全局</dfn>变量。在这种情况下，<code>局部</code>变量将会优先于<code>全局</code>变量。
下面为例：

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

函数<code>myFun</code>将会返回<code>"Head"</code>，因为<code>局部变量</code>优先级更高。
</section>

## Instructions
<section id='instructions'>
给<code>myOutfit</code>添加一个局部变量来覆盖<code>outerWear</code>的值为<code>"sweater"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要修改全局变量<code>outerWear</code>的值。
    testString: assert(outerWear === "T-Shirt");
  - text: <code>myOutfit</code>应该返回<code>"sweater"</code>。
    testString: assert(myOutfit() === "sweater");
  - text: 不要修改<code>return</code>语句。
    testString: assert(/return outerWear/.test(code));

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
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
```

</section>
