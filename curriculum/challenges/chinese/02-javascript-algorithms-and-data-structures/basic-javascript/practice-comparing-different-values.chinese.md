---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
videoUrl: ''
localeTitle: 练习比较不同的值
---

## Description
<section id="description">在最后两个挑战中，我们学习了等于运算符（ <code>==</code> ）和严格相等运算符（ <code>===</code> ）。让我们快速回顾一下这些运算符的实践。如果要比较的值不是同一类型，则相等运算符将执行类型转换，然后计算值。但是，严格相等运算符将按原样比较数据类型和值，而不将一种类型转换为另一种类型。 <strong>例子</strong> <blockquote> 3 ==&#39;3&#39;//返回true，因为JavaScript执行从字符串到数字的类型转换<br> 3 ===&#39;3&#39;//返回false，因为类型不同并且未执行类型转换</blockquote> <strong>注意</strong> <br>在JavaScript中，您可以使用<code>typeof</code>运算符确定变量的类型或值，如下所示： <blockquote> typeof 3 //返回&#39;number&#39; <br> typeof&#39;3&#39;//返回&#39;string&#39; </blockquote></section>

## Instructions
<section id="instructions">编辑器中的<code>compareEquality</code>函数使用<code>equality operator</code>比较两个值。修改函数，使其仅在值严格相等时返回“Equal”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>compareEquality(10, &quot;10&quot;)</code>应返回“Not Equal”'
    testString: 'assert(compareEquality(10, "10") === "Not Equal", "<code>compareEquality(10, "10")</code> should return "Not Equal"");'
  - text: '<code>compareEquality(&quot;20&quot;, 20)</code>应该返回“Not Equal”'
    testString: 'assert(compareEquality("20", 20) === "Not Equal", "<code>compareEquality("20", 20)</code> should return "Not Equal"");'
  - text: 您应该使用<code>===</code>运算符
    testString: 'assert(code.match(/===/g), "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
