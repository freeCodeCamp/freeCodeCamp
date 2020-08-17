---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
isHidden: false
forumTopicId: 301155
---

## Description
<section id='description'>
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the <code>hasOwnProperty()</code> method and the other uses the <code>in</code> keyword. If we have an object <code>users</code> with a property of <code>Alan</code>, we could check for its presence in either of the following ways:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```

</section>

## Instructions
<section id='instructions'>
We've created an object, <code>users</code>, with some users in it and a function <code>isEveryoneHere</code>, which we pass the <code>users</code> object to as an argument. Finish writing this function so that it returns <code>true</code> only if the <code>users</code> object contains all four names, <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>, as keys, and <code>false</code> otherwise.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>users</code> object should only contain the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>
    testString: assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4);
  - text: The function <code>isEveryoneHere</code> should return <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object
    testString: assert(isEveryoneHere(users) === true);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Alan</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Alan; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Jeff</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Jeff; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Sarah</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Sarah; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Ryan</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Ryan; return isEveryoneHere(users) })() === false);
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
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

</div>



</section>

## Solution
<section id='solution'>

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
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```

</section>
