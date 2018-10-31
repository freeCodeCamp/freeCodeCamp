---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: 链接如果其他声明
---

## Description
<section id="description"> <code>if/else</code>语句可以链接在一起以用于复杂的逻辑。这是多个链式<code>if</code> / <code>else if</code>语句的<dfn>伪代码</dfn> ： <blockquote> if（ <em>condition1</em> ）{ <br> <em>语句1</em> <br> } else if（ <em>condition2</em> ）{ <br> <em>语句2</em> <br> } else if（ <em>condition3</em> ）{ <br> <em>声明3</em> <br> 。 。 。 <br> } else { <br> <em>statementN</em> <br> } </blockquote></section>

## Instructions
<section id="instructions">写入链接<code>if</code> / <code>else if</code>语句以满足以下条件： <code>num &lt; 5</code> -  return“Tiny” <br> <code>num &lt; 10</code> - 返回“Small” <br> <code>num &lt; 15</code> - 返回“中” <br> <code>num &lt; 20</code> - 返回“Large” <br> <code>num &gt;= 20</code> - 返回“巨大” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该至少有四个<code>else</code>语句
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: 你应该至少有四个<code>if</code>语句
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: 你应该至少有一个<code>return</code>语句
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: <code>testSize(0)</code>应该返回“Tiny”
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: <code>testSize(4)</code>应该返回“Tiny”
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code>应返回“Small”
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code>应该返回“Small”
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: <code>testSize(10)</code>应该返回“Medium”
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code>应返回“Medium”
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code>应该返回“Large”
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code>应该返回“Large”
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code>应该返回“巨大”
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code>应该返回“巨大”
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
