---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
isHidden: false
forumTopicId: 301163
---

## Description
<section id='description'>
Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you continue learning JavaScript you will see even more versatile applications of objects. Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 <dfn>Map</dfn> and <dfn>Set</dfn> objects, both of which are similar to ordinary objects but provide some additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!
</section>

## Instructions
<section id='instructions'>
Take a look at the object we've provided in the code editor. The <code>user</code> object contains three keys. The <code>data</code> key contains five keys, one of which contains an array of <code>friends</code>. From this, you can see how flexible objects are as data structures. We've started writing a function <code>addFriend</code>. Finish writing it so that it takes a <code>user</code> object and adds the name of the <code>friend</code> argument to the array stored in <code>user.data.friends</code> and returns that array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>user</code> object should have <code>name</code>, <code>age</code>, and <code>data</code> keys.
    testString: assert('name' in user && 'age' in user && 'data' in user);
  - text: The <code>addFriend</code> function should accept a <code>user</code> object and a <code>friend</code> string as arguments and add the friend to the array of <code>friends</code> in the <code>user</code> object.
    testString: assert((function() { let L1 = user.data.friends.length; addFriend(user, 'Sean'); let L2 = user.data.friends.length; return (L2 === L1 + 1); })());
  - text: <code>addFriend(user, "Pete")</code> should return <code>["Sam", "Kira", "Tomo", "Pete"]</code>.
    testString: assert.deepEqual((function() { delete user.data.friends; user.data.friends = ['Sam', 'Kira', 'Tomo']; return addFriend(user, 'Pete') })(), ['Sam', 'Kira', 'Tomo', 'Pete']);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```

</section>
