---
id: 587d7b7d367417b2b2512b1d
title: ' Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
---

## Description
<section id='description'>
Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a <dfn>for...in</dfn> statement. For our <code>users</code> object, this could look like:
<blockquote>for (let user in users) {<br>&nbsp;&nbsp;console.log(user);<br>}<br><br>// logs:<br>Alan<br>Jeff<br>Sarah<br>Ryan</blockquote>
In this statement, we defined a variable <code>user</code>, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.
<strong>NOTE:</strong><br>Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
</section>

## Instructions
<section id='instructions'>
We've defined a function, <code>countOnline</code>; use a <dfn>for...in</dfn> statement within this function to loop through the users in the <code>users</code> object and return the number of users whose <code>online</code> property is set to <code>true</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

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

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));
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

function countOnline(obj) {
  let online = 0;
  for(let user in obj){
    if(obj[user].online == true) {
      online += 1;
    }
  }
  return online;
}

console.log(countOnline(users));
```
</section>
