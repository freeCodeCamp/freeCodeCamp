---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
---

## Description
<section id='description'>
In the last two challenges, we learned about the equality operator (<code>==</code>) and the strict equality operator (<code>===</code>). Let's do a quick review and practice using these operators some more.
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
<strong>Examples</strong>
<blockquote>3 == '3'  // returns true because JavaScript performs type conversion from string to number<br>3 === '3' // returns false because the types are different and type conversion is not performed</blockquote>
<strong>Note</strong><br>In JavaScript, you can determine the type of a variable or a value with the <code>typeof</code> operator, as follows:
<blockquote>typeof 3   // returns 'number'<br>typeof '3' // returns 'string'</blockquote>
</section>

## Instructions
<section id='instructions'>
The <code>compareEquality</code> function in the editor compares two values using the <code>equality operator</code>. Modify the function so that it returns "Equal" only when the values are strictly equal.
</section>

## Tests
<section id='tests'>

```yml
- text: '<code>compareEquality(10, "10")</code> should return "Not Equal"'
  testString: 'assert(compareEquality(10, "10") === "Not Equal", "<code>compareEquality(10, "10")</code> should return "Not Equal"");'
- text: '<code>compareEquality("20", 20)</code> should return "Not Equal"'
  testString: 'assert(compareEquality("20", 20) === "Not Equal", "<code>compareEquality("20", 20)</code> should return "Not Equal"");'
- text: You should use the <code>===</code> operator
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
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
