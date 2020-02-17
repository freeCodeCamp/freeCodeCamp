---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: 与不等式算子的比较
---

## Description
<section id="description">不等运算符（ <code>!=</code> ）与等于运算符相反。它意味着“不等于”并返回<code>false</code> ，其中相等性将返回<code>true</code> ， <em>反之亦然</em> 。与等式运算符一样，不等式运算符将在比较时转换数据类型的值。 <strong>例子</strong> <blockquote> 1！= 2 //是的<br> 1！=“1”//假<br> 1！=&#39;1&#39;//假<br> 1！= true // false <br> 0！= false // false </blockquote></section>

## Instructions
<section id="instructions">在<code>if</code>语句中添加不等式运算符<code>!=</code> ，以便当<code>val</code>不等于<code>99</code>时函数将返回“Not Equal” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code>应返回“Equal”
    testString: assert(testNotEqual(99) === "Equal");
  - text: <code>testNotEqual(&quot;99&quot;)</code>应该返回“Equal”
    testString: assert(testNotEqual("99") === "Equal");
  - text: <code>testNotEqual(12)</code>应该返回“Not Equal”
    testString: assert(testNotEqual(12) === "Not Equal");
  - text: <code>testNotEqual(&quot;12&quot;)</code>应该返回“Not Equal”
    testString: assert(testNotEqual("12") === "Not Equal");
  - text: <code>testNotEqual(&quot;bob&quot;)</code>应返回“Not Equal”
    testString: assert(testNotEqual("bob") === "Not Equal");
  - text: 你应该使用<code>!=</code>运算符
    testString: assert(code.match(/(?!!==)!=/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
