---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
---

## Description
<section id='description'>
Order is important in <code>if</code>, <code>else if</code> statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.
Take these two functions as an example.
Here's the first:
<blockquote>function foo(x) {<br>&nbsp;&nbsp;if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote>
And the second just switches the order of the statements:
<blockquote>function bar(x) {<br>&nbsp;&nbsp;if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote>
While these two functions look nearly identical if we pass a number to both we get different outputs.
<blockquote>foo(0) // "Less than one"<br>bar(0) // "Less than two"</blockquote>
</section>

## Instructions
<section id='instructions'>
Change the order of logic in the function so that it will return the correct statements in all cases.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code> should return "Less than 5"
    testString: assert(orderMyLogic(4) === "Less than 5", '<code>orderMyLogic(4)</code> should return "Less than 5"');
  - text: <code>orderMyLogic(6)</code> should return "Less than 10"
    testString: assert(orderMyLogic(6) === "Less than 10", '<code>orderMyLogic(6)</code> should return "Less than 10"');
  - text: <code>orderMyLogic(11)</code> should return "Greater than or equal to 10"
    testString: assert(orderMyLogic(11) === "Greater than or equal to 10", '<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

</section>
