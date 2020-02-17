---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: 与平等算子的比较
---

## Description
<section id="description">有很多<dfn>比较运算符</dfn>在JavaScript中。所有这些运算符都返回布尔值<code>true</code>或<code>false</code>值。最基本的运算符是等于运算符<code>==</code> 。等于运算符比较两个值，如果它们是等价的则返回<code>true</code>否则返回<code>false</code> 。请注意，相等性与赋值（ <code>=</code> ）不同，后者将运算符右侧的值分配给左侧的变量。 <blockquote> function equalityTest（myVal）{ <br> if（myVal == 10）{ <br>返回“平等”; <br> } <br>返回“不等于”; <br> } </blockquote>如果<code>myVal</code>等于<code>10</code> ，则等于运算符返回<code>true</code> ，因此大括号中的代码将执行，函数将返回<code>&quot;Equal&quot;</code> 。否则，该函数将返回<code>&quot;Not Equal&quot;</code> 。为了使JavaScript能够比较两种不同的<code>data types</code> （例如， <code>numbers</code>和<code>strings</code> ），它必须将一种类型转换为另一种类型。这被称为“类型强制”。但是，一旦它完成，它可以比较如下术语： <blockquote> 1 == 1 //是的<br> 1 == 2 //假<br> 1 ==&#39;1&#39;//是的<br> “3”== 3 //是的</blockquote></section>

## Instructions
<section id="instructions">将<code>equality operator</code>添加到指示的行，以便当<code>val</code>等于<code>12</code>时，函数将返回“Equal” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code>应该返回“Not Equal”
    testString: assert(testEqual(10) === "Not Equal");
  - text: <code>testEqual(12)</code>应返回“Equal”
    testString: assert(testEqual(12) === "Equal");
  - text: <code>testEqual(&quot;12&quot;)</code>应返回“Equal”
    testString: assert(testEqual("12") === "Equal");
  - text: 您应该使用<code>==</code>运算符
    testString: assert(code.match(/==/g) && !code.match(/===/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
