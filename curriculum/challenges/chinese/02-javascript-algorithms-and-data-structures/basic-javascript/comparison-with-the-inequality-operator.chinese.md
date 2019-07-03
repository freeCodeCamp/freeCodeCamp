---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1

videoUrl: ''
localeTitle: Comparison with the Inequality Operator
---

## Description
<section id='description'>
不相等运算符（<code>!=</code>）与相等运算符是相反的。这意味着不相等运算符中，如果“不为真”并且返回<code>false</code>的地方，在相等运算符中会返回<code>true</code>，<em>反之亦然</em>。与相等运算符类似，不相等运算符在比较的时候也会转换值的数据类型。
<strong>例如</strong>
<blockquote>1 != 2      // true<br>1 != "1"    // false<br>1 != '1'    // false<br>1 != true   // false<br>0 != false  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
在<code>if</code>语句中，添加不相等运算符<code>!=</code>，这样函数在当<code>val</code>不等于 <code>99</code>的时候，会返回 "Not Equal"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>testNotEqual(99)</code>应该返回 'Equal'"
    testString: assert(testNotEqual(99) === "Equal", '<code>testNotEqual(99)</code>应该返回 "Equal"');
  - text: "<code>testNotEqual('99')</code>应该返回 'Equal'"
    testString: assert(testNotEqual("99") === "Equal", '<code>testNotEqual("99")</code>应该返回 "Equal"');
  - text: "<code>testNotEqual(12)</code>应该返回 'Not Equal'"
    testString: assert(testNotEqual(12) === "Not Equal", '<code>testNotEqual(12)</code>应该返回 "Not Equal"');
  - text: "<code>testNotEqual('12')</code>应该返回 'Not Equal'"
    testString: assert(testNotEqual("12") === "Not Equal", '<code>testNotEqual("12")</code>应该返回 "Not Equal"');
  - text: "<code>testNotEqual('bob')</code>应该返回 'Not Equal'"
    testString: assert(testNotEqual("bob") === "Not Equal", '<code>testNotEqual("bob")</code>应该返回 "Not Equal"');
  - text: 你应该使用<code>!=</code>运算符
    testString: assert(code.match(/(?!!==)!=/), '你应该使用<code>!=</code>运算符');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```

</section>
              