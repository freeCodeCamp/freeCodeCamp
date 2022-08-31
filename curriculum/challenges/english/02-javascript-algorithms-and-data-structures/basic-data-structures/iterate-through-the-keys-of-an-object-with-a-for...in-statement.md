---
id: 587d7b7d367417b2b2512b1d
title: Iterate Through the Keys of an Object with a for...in Statement
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a <dfn>for...in</dfn> statement. For our `users` object, this could look like:

```js
for (let user in users) {
  console.log(user);
}
```

This would log `Alan`, `Jeff`, and `Sarah` - each value on its own line.

In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.

**NOTE:** Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

# --instructions--

We've defined a function `countOnline` which accepts one argument (a users object). Use a <dfn>for...in</dfn> statement within this function to loop through the users object passed into the function and return the number of users whose `online` property is set to `true`. An example of a users object which could be passed to `countOnline` is shown below. Each user will have an `online` property with either a `true` or `false` value.

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

# --hints--

The function `countOnline` should use a `for in` statement to iterate through the object keys of the object passed to it.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

The function `countOnline` should return `1` when the object `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` is passed to it

```js
assert(countOnline(usersObj1) === 1);
```

The function `countOnline` should return `2` when the object `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` is passed to it

```js
assert(countOnline(usersObj2) === 2);
```

The function `countOnline` should return `0` when the object `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` is passed to it

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

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

## --seed-contents--

```js
const users = {
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

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

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
