---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
---

## Description
<section id='description'>
The <dfn>less than</dfn> operator (<code>&lt;</code>) compares the values of two numbers. If the number to the left is less than the number to the right, it returns <code>true</code>. Otherwise, it returns <code>false</code>. Like the equality operator, <dfn>less than</dfn> operator converts data types while comparing.
<strong>Examples</strong>
<blockquote>2 &lt; 5  // true<br>'3' &lt; 7  // true<br>5 &lt; 5  // false<br>3 &lt; 2  // false<br>'8' &lt; 4  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>less than</code> operator to the indicated lines so that the return statements make sense.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>testLessThan(0)</code> should return "Under 25"
  testString: 'assert(testLessThan(0) === "Under 25", ''<code>testLessThan(0)</code> should return "Under 25"'');'
- text: <code>testLessThan(24)</code> should return "Under 25"
  testString: 'assert(testLessThan(24) === "Under 25", ''<code>testLessThan(24)</code> should return "Under 25"'');'
- text: <code>testLessThan(25)</code> should return "Under 55"
  testString: 'assert(testLessThan(25) === "Under 55", ''<code>testLessThan(25)</code> should return "Under 55"'');'
- text: <code>testLessThan(54)</code> should return "Under 55"
  testString: 'assert(testLessThan(54) === "Under 55", ''<code>testLessThan(54)</code> should return "Under 55"'');'
- text: <code>testLessThan(55)</code> should return "55 or Over"
  testString: 'assert(testLessThan(55) === "55 or Over", ''<code>testLessThan(55)</code> should return "55 or Over"'');'
- text: <code>testLessThan(99)</code> should return "55 or Over"
  testString: 'assert(testLessThan(99) === "55 or Over", ''<code>testLessThan(99)</code> should return "55 or Over"'');'
- text: You should use the <code>&lt;</code> operator at least twice
  testString: 'assert(code.match(/val\s*<\s*(''|")*\d+(''|")*/g).length > 1, ''You should use the <code>&lt;</code> operator at least twice'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }
  
  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  
  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```

</section>
