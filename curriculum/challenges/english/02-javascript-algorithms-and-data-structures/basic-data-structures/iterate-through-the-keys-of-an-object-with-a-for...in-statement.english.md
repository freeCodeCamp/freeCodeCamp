---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
forumTopicId: 301162
---

## Description
<section id='description'>

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a <dfn>for...in</dfn> statement. For our <code>users</code> object, this could look like:

```js
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
```

In this statement, we defined a variable <code>user</code>, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.
<strong>NOTE:</strong> Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
</section>

## Instructions
<section id='instructions'>

We've defined a function <code>countOnline</code> which accepts one argument (a users object). Use a <dfn>for...in</dfn> statement within this function to loop through the users object passed into the function and return the number of users whose <code>online</code> property is set to <code>true</code>.  An example of a users object which could be passed to <code>countOnline</code> is shown below.  Each user will have an <code>online</code> property with either a <code>true</code> or <code>false</code> value.


```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function <code>countOnline</code> should use a `for in` statement to iterate through the object keys of the object passed to it.
    testString: assert(code.match(/for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)\s*{/));
  - text: 'The function <code>countOnline</code> should return <code>1</code> when the object <code>{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }</code> is passed to it'
    testString: assert(countOnline(usersObj1) === 1);
  - text: 'The function <code>countOnline</code> should return <code>2</code> when the object <code>{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }</code> is passed to it'
    testString: assert(countOnline(usersObj2) === 2);
  - text: 'The function <code>countOnline</code> should return <code>0</code> when the object <code>{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }</code> is passed to it'
    testString: assert(countOnline(usersObj3) === 0);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}
```

</div>

### After Test
<div id='js-teardown'>

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

</div>


</section>

## Solution
<section id='solution'>

```js

function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}

```

</section>
