---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: 与严格不等式算子的比较
---

## Description
<section id="description">严格不等式运算符（ <code>!==</code> ）与严格相等运算符的逻辑相反。它意味着“严格不等于”并返回<code>false</code> ，其中严格相等将返回<code>true</code> ， <em>反之亦然</em> 。严格的不等式不会转换数据类型。 <strong>例子</strong> <blockquote> 3！== 3 //假<br> 3！==&#39;3&#39;//是的<br> 4！== 3 //是的</blockquote></section>

## Instructions
<section id="instructions">将<code>strict inequality operator</code>添加到<code>if</code>语句，以便当<code>val</code>不严格等于<code>17</code>时，函数将返回“Not Equal” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code>应返回“Equal”
    testString: assert(testStrictNotEqual(17) === "Equal");
  - text: <code>testStrictNotEqual(&quot;17&quot;)</code>应返回“Not Equal”
    testString: assert(testStrictNotEqual("17") === "Not Equal");
  - text: <code>testStrictNotEqual(12)</code>应该返回“Not Equal”
    testString: assert(testStrictNotEqual(12) === "Not Equal");
  - text: <code>testStrictNotEqual(&quot;bob&quot;)</code>应返回“Not Equal”
    testString: assert(testStrictNotEqual("bob") === "Not Equal");
  - text: 你应该使用<code>!==</code>运算符
    testString: assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
