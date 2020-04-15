---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
forumTopicId: 301160
---

## Description
<section id='description'>
We can also generate an array which contains all the keys stored in an object using the <code>Object.keys()</code> method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
</section>

## Instructions
<section id='instructions'>
Finish writing the <code>getArrayOfUsers</code> function so that it returns an array containing all the properties in the object it receives as an argument.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>users</code> object should only contain the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>
    testString: assert('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users && Object.keys(users).length === 4);
  - text: The <code>getArrayOfUsers</code> function should return an array which contains all the keys in the <code>users</code> object
    testString: assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf('Alan') !== -1 && R.indexOf('Jeff') !== -1 && R.indexOf('Sarah') !== -1 && R.indexOf('Ryan') !== -1 && R.indexOf('Sam') !== -1 && R.indexOf('Lewis') !== -1); })() === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

</div>



</section>

## Solution
<section id='solution'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```

</section>
