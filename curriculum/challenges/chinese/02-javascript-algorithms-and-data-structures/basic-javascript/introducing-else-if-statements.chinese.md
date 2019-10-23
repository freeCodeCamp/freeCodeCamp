---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: ''
localeTitle: 如果声明引入Else
---

## Description
<section id="description">如果您有多个需要解决的条件，可以将<code>if</code>语句与<code>else if</code>语句链接在一起。 <blockquote> if（num&gt; 15）{ <br>返回“大于15”; <br> } else if（num &lt;5）{ <br>返回“小于5”; <br> } else { <br>返回“5到15之间”; <br> } </blockquote></section>

## Instructions
<section id="instructions">转换逻辑以使用<code>else if</code>语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该至少有两个<code>else</code>语句
    testString: 'assert(code.match(/else/g).length > 1, "You should have at least two <code>else</code> statements");'
  - text: 你应该至少有两个<code>if</code>语句
    testString: 'assert(code.match(/if/g).length > 1, "You should have at least two <code>if</code> statements");'
  - text: 您应该为每个条件关闭并打开花括号
    testString: 'assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), "You should have closing and opening curly braces for each condition in your if else statement");'
  - text: <code>testElseIf(0)</code>应返回“小于5”
    testString: 'assert(testElseIf(0) === "Smaller than 5", "<code>testElseIf(0)</code> should return "Smaller than 5"");'
  - text: <code>testElseIf(5)</code>应该返回“5到10之间”
    testString: 'assert(testElseIf(5) === "Between 5 and 10", "<code>testElseIf(5)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(7)</code>应返回“5到10之间”
    testString: 'assert(testElseIf(7) === "Between 5 and 10", "<code>testElseIf(7)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(10)</code>应返回“5到10之间”
    testString: 'assert(testElseIf(10) === "Between 5 and 10", "<code>testElseIf(10)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(12)</code>应返回“大于10”
    testString: 'assert(testElseIf(12) === "Greater than 10", "<code>testElseIf(12)</code> should return "Greater than 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
