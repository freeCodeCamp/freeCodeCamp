---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1

videoUrl: ''
localeTitle: Global vs. Local Scope in Functions
---

## Description
<section id='description'>
一个程序中有可能具有相同名称的<dfn>局部</dfn>变量 和<dfn>全局</dfn>变量。在这种情况下，<code>局部</code>变量将会优先于<code>全局</code>变量。
下面为例：
<blockquote>var someVar = "Hat";<br>function myFun() {<br>  var someVar = "Head";<br>  return someVar;<br>}</blockquote>
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
  - text: 不要修改全局变量<code>outerWear</code>的值
    testString: assert(outerWear === "T-Shirt", '不要修改全局变量<code>outerWear</code>的值');
  - text: "<code>myOutfit</code>应该返回<code>'sweater'</code>"
    testString: assert(myOutfit() === "sweater", '<code>myOutfit</code>应该返回<code>"sweater"</code>');
  - text: 不要修改<code>return</code>语句
    testString: assert(/return outerWear/.test(code), '不要修改<code>return</code>语句');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              