---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: ''
localeTitle: 将变量附加到字符串
---

## Description
<section id="description">正如我们可以在字符串<dfn>文字中</dfn>构建多行的字符串一样，我们也可以使用加号等于（ <code>+=</code> ）运算符将变量附加到字符串。 </section>

## Instructions
<section id="instructions">设置<code>someAdjective</code>并使用<code>+=</code>运算符将其附加到<code>myStr</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code>应设置为至少3个字符长的字符串
    testString: 'assert(typeof someAdjective !== "undefined" && someAdjective.length > 2, "<code>someAdjective</code> should be set to a string at least 3 characters long");'
  - text: 使用<code>+=</code>运算符将<code>someAdjective</code>附加到<code>myStr</code>
    testString: 'assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, "Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
