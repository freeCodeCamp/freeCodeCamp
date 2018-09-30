---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
---

## Description
<section id='description'>
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the <code>hasOwnProperty()</code> method and the other uses the <code>in</code> keyword. If we have an object <code>users</code> with a property of <code>Alan</code>, we could check for its presence in either of the following ways:
<blockquote>users.hasOwnProperty('Alan');<br>'Alan' in users;<br>// both return true</blockquote>
</section>

## Instructions
<section id='instructions'>
We've created an object, <code>users</code>, with some users in it and a function <code>isEveryoneHere</code>, which we pass the <code>users</code> object to as an argument. Finish writing this function so that it returns <code>true</code> only if the <code>users</code> object contains all four names, <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>, as keys, and <code>false</code> otherwise.
</section>

## Tests
<section id='tests'>

```yml
- text: 'The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>'
  testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
- text: 'The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object'
  testString: 'assert(isEveryoneHere(users) === true, "The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object");'
- text: 'The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object'
  testString: 'assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, "The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
