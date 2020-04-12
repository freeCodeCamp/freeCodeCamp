---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: 与严格平等算子的比较
---

## Description
<section id="description">严格相等（ <code>===</code> ）是相等运算符（ <code>==</code> ）的对应物。但是，与尝试将两个值转换为常见类型的等式运算符不同，严格相等运算符不执行类型转换。如果要比较的值具有不同的类型，则认为它们不相等，并且严格相等运算符将返回false。 <strong>例子</strong> <blockquote> 3 === 3 //是的<br> 3 ===&#39;3&#39;//假</blockquote>在第二个示例中， <code>3</code>是<code>Number</code>类型， <code>&#39;3&#39;</code>是<code>String</code>类型。 </section>

## Instructions
<section id="instructions">在<code>if</code>语句中使用strict equality运算符，因此当<code>val</code>严格等于<code>7</code>时，函数将返回“Equal” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrict(10)</code>应返回“Not Equal”
    testString: assert(testStrict(10) === "Not Equal");
  - text: <code>testStrict(7)</code>应返回“Equal”
    testString: assert(testStrict(7) === "Equal");
  - text: <code>testStrict(&quot;7&quot;)</code>应返回“Not Equal”
    testString: assert(testStrict("7") === "Not Equal");
  - text: 您应该使用<code>===</code>运算符
    testString: assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
