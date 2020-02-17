---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: ''
localeTitle: 测试属性的对象
---

## Description
<section id="description">有时检查给定对象的属性是否存在是有用的。我们可以使用对象的<code>.hasOwnProperty(propname)</code>方法来确定该对象是否具有给定的属性名称。 <code>.hasOwnProperty()</code>如果找到属性则返回<code>true</code>或<code>false</code> 。 <strong>例</strong> <blockquote> var myObj = { <br>顶部：“帽子”， <br>底部：“裤子” <br> }; <br> myObj.hasOwnProperty（ “顶部”）; //真的<br> myObj.hasOwnProperty（ “中间”）; //假</blockquote></section>

## Instructions
<section id="instructions">修改函数<code>checkObj</code>以测试<code>myObj</code>的<code>checkProp</code> 。如果找到该属性，则返回该属性的值。如果没有，请返回<code>&quot;Not Found&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj(&quot;gift&quot;)</code>应该返回<code>&quot;pony&quot;</code> 。
    testString: assert(checkObj("gift") === "pony");
  - text: <code>checkObj(&quot;pet&quot;)</code>应该返回<code>&quot;kitten&quot;</code> 。
    testString: assert(checkObj("pet") === "kitten");
  - text: <code>checkObj(&quot;house&quot;)</code>应该返回<code>&quot;Not Found&quot;</code> 。
    testString: assert(checkObj("house") === "Not Found");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
