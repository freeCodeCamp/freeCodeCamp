---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1

videoUrl: ''
localeTitle: Practice comparing different values
---

## Description
<section id='description'>
在上两个挑战中，我们学习了相等运算符 (<code>==</code>) 和严格相等运算符 (<code>===</code>)。现在让我们快速回顾并实践一下。
如果要比较的值不是同一类型，相等运算符会先执行数据类型转换，然后比较值。而严格相等运算符只比较值，不会进行数据类型转换。
由此可见，相等运算符和严格相等运算符的区别是：前者会执行隐式类型转换，后者不会。
<strong>示例</strong>
<blockquote>3 == '3'  // 返回 true，因为 JavaScript 会执行类型转换把字符串 '3' 转化成数字<br>3 === '3' // 返回 false，因为类型不同，而这里不会进行类型转换</blockquote>
<strong>提示</strong><br>在JavaScript中，你可以使用<code>typeof</code>运算符确定变量的类型或值，如下所示：
<blockquote>typeof 3   // 返回 'number'<br>typeof '3' // 返回 'string'</blockquote>
</section>

## Instructions
<section id='instructions'>
编辑器中的<code>compareEquality</code>函数使用相等运算符比较两个值。修改函数，使其仅在值严格相等时返回 "Equal" 。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>compareEquality(10, '10')</code>应该返回 'Not Equal'"
    testString: assert(compareEquality(10, "10") === "Not Equal", '<code>compareEquality(10, "10")</code>应该返回 "Not Equal"');
  - text: "<code>compareEquality('20', 20)</code>应该返回 'Not Equal'"
    testString: assert(compareEquality("20", 20) === "Not Equal", '<code>compareEquality("20", 20)</code>应该返回 "Not Equal"');
  - text: 你应该使用<code>===</code>运算符
    testString: assert(code.match(/===/g), '你应该使用<code>===</code>运算符');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
              