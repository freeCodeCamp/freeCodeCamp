---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1

videoUrl: ''
localeTitle: Comparison with the Less Than Operator
---

## Description
<section id='description'>
使用<dfn>小于</dfn>运算符（<code>&lt;</code>）比较两个数字的大小。如果小于运算符左边的数字比右边的数字小，它会返回<code>true</code>。否则会返回<code>false</code>。与相等运算符类似，<dfn>小于</dfn> 运算符在做比较的时候会转换值的数据类型。
<strong>例如</strong>
<blockquote>  2 &lt; 5  // true<br>'3' &lt; 7  // true<br>  5 &lt; 5  // false<br>  3 &lt; 2  // false<br>'8' &lt; 4  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
添加<code>小于</code>运算符到指定行，使得函数的返回语句有意义。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>testLessThan(0)</code>应该返回 'Under 25'"
    testString: assert(testLessThan(0) === "Under 25", '<code>testLessThan(0)</code>应该返回 "Under 25"');
  - text: "<code>testLessThan(24)</code>应该返回 'Under 25'"
    testString: assert(testLessThan(24) === "Under 25", '<code>testLessThan(24)</code>应该返回 "Under 25"');
  - text: "<code>testLessThan(25)</code>应该返回 'Under 55'"
    testString: assert(testLessThan(25) === "Under 55", '<code>testLessThan(25)</code>应该返回 "Under 55"');
  - text: "<code>testLessThan(54)</code>应该返回 'Under 55'"
    testString: assert(testLessThan(54) === "Under 55", '<code>testLessThan(54)</code>应该返回 "Under 55"');
  - text: "<code>testLessThan(55)</code>应该返回 '55 or Over'"
    testString: assert(testLessThan(55) === "55 or Over", '<code>testLessThan(55)</code>应该返回 "55 or Over"');
  - text: "<code>testLessThan(99)</code>应该返回 '55 or Over'"
    testString: assert(testLessThan(99) === "55 or Over", '<code>testLessThan(99)</code>应该返回 "55 or Over"');
  - text: 你应该使用<code>&lt;</code>运算符至少两次
    testString: assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1, '你应该使用<code>&lt;</code>运算符至少两次');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testLessThan(val) {
  if (val < 25) {  // 请修改这一行
    return "Under 25";
  }
  
  if (val < 55) {  // 请修改这一行
    return "Under 55";
  }

  return "55 or Over";
}
```

</section>
              