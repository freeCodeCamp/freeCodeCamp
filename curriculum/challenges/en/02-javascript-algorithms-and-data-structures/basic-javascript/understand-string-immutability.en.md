---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
---

## Description
<section id='description'>
In JavaScript, <code>String</code> values are <dfn>immutable</dfn>, which means that they cannot be altered once created.
For example, the following code:
<blockquote>var myStr = "Bob";<br>myStr[0] = "J";</blockquote>
cannot change the value of <code>myStr</code> to "Job", because the contents of <code>myStr</code> cannot be altered. Note that this does <em>not</em> mean that <code>myStr</code> cannot be changed, just that the individual characters of a <dfn>string literal</dfn> cannot be changed. The only way to change <code>myStr</code> would be to assign it with a new string, like this:
<blockquote>var myStr = "Bob";<br>myStr = "Job";</blockquote>
</section>

## Instructions
<section id='instructions'>
Correct the assignment to <code>myStr</code> so it contains the string value of <code>Hello World</code> using the approach shown in the example above.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myStr</code> should have a value of <code>Hello World</code>
  testString: 'assert(myStr === "Hello World", ''<code>myStr</code> should have a value of <code>Hello World</code>'');'
- text: Do not change the code above the line
  testString: 'assert(/myStr = "Jello World"/.test(code), ''Do not change the code above the line'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me


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
var myStr = "Jello World";
myStr = "Hello World";
```

</section>
