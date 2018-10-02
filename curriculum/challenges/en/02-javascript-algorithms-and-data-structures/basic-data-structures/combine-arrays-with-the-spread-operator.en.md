---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
---

## Description
<section id='description'>
Another huge advantage of the <dfn>spread</dfn> operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:
<blockquote>let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];<br><br>let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];<br>// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']</blockquote>
Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.
</section>

## Instructions
<section id='instructions'>
We have defined a function <code>spreadOut</code> that returns the variable <code>sentence</code>, modify the function using the <dfn>spread</dfn> operator so that it returns the array <code>['learning', 'to', 'code', 'is', 'fun']</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: '<code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>'
  testString: 'assert.deepEqual(spreadOut(), [''learning'', ''to'', ''code'', ''is'', ''fun''], ''<code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>'');'
- text: The <code>spreadOut</code> function should utilize spread syntax
  testString: 'assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1, ''The <code>spreadOut</code> function should utilize spread syntax'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
