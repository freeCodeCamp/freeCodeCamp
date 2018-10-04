---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
---

## Description
<section id='description'>
The below is an example of the simplest implementation of an array data structure. This is known as a <dfn>one-dimensional array</dfn>, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains <dfn>booleans</dfn>, <dfn>strings</dfn>, and <dfn>numbers</dfn>, among other valid JavaScript data types:
<blockquote>let simpleArray = ['one', 2, 'three’, true, false, undefined, null];<br>console.log(simpleArray.length);<br>// logs 7</blockquote>
All array's have a length property, which as shown above, can be very easily accessed with the syntax <code>Array.length</code>.
A more complex implementation of an array can be seen below. This is known as a <dfn>multi-dimensional array</dfn>, or an array that contains other arrays. Notice that this array also contains JavaScript <dfn>objects</dfn>, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
<blockquote>let complexArray = [<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one: 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;two: 2<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;three: 3,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;four: 4<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a: "a",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b: "b"<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c: "c",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d: “d”<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>];</blockquote>
</section>

## Instructions
<section id='instructions'>
We have defined a variable called <code>yourArray</code>. Complete the statement by assigning an array of at least 5 elements in length to the <code>yourArray</code> variable. Your array should contain at least one <dfn>string</dfn>, one <dfn>number</dfn>, and one <dfn>boolean</dfn>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray is an array
    testString: 'assert.strictEqual(Array.isArray(yourArray), true, ''yourArray is an array'');'
  - text: <code>yourArray</code> is at least 5 elements long
    testString: 'assert.isAtLeast(yourArray.length, 5, ''<code>yourArray</code> is at least 5 elements long'');'
  - text: <code>yourArray</code> contains at least one <code>boolean</code>
    testString: 'assert(yourArray.filter( el => typeof el === ''boolean'').length >= 1, ''<code>yourArray</code> contains at least one <code>boolean</code>'');'
  - text: <code>yourArray</code> contains at least one <code>number</code>
    testString: 'assert(yourArray.filter( el => typeof el === ''number'').length >= 1, ''<code>yourArray</code> contains at least one <code>number</code>'');'
  - text: <code>yourArray</code> contains at least one <code>string</code>
    testString: 'assert(yourArray.filter( el => typeof el === ''string'').length >= 1, ''<code>yourArray</code> contains at least one <code>string</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
