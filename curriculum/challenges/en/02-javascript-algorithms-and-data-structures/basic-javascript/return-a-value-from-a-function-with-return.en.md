---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
---

## Description
<section id='description'>
We can pass values into a function with <dfn>arguments</dfn>. You can use a <code>return</code> statement to send a value back out of a function.
<strong>Example</strong>
<blockquote>function plusThree(num) {<br>&nbsp;&nbsp;return num + 3;<br>}<br>var answer = plusThree(5); // 8</blockquote>
<code>plusThree</code> takes an <dfn>argument</dfn> for <code>num</code> and returns a value equal to <code>num + 3</code>.
</section>

## Instructions
<section id='instructions'>
Create a function <code>timesFive</code> that accepts one argument, multiplies it by <code>5</code>, and returns the new value. See the last line in the editor for an example of how you can test your <code>timesFive</code> function.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>timesFive</code> should be a function
  testString: 'assert(typeof timesFive === ''function'', ''<code>timesFive</code> should be a function'');'
- text: <code>timesFive(5)</code> should return <code>25</code>
  testString: 'assert(timesFive(5) === 25, ''<code>timesFive(5)</code> should return <code>25</code>'');'
- text: <code>timesFive(2)</code> should return <code>10</code>
  testString: 'assert(timesFive(2) === 10, ''<code>timesFive(2)</code> should return <code>10</code>'');'
- text: <code>timesFive(0)</code> should return <code>0</code>
  testString: 'assert(timesFive(0) === 0, ''<code>timesFive(0)</code> should return <code>0</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));
```

</div>



</section>

## Solution
<section id='solution'>


```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

</section>
