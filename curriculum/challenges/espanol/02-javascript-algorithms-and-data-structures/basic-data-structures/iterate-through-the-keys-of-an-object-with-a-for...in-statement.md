---
id: 587d7b7d367417b2b2512b1d
title: Itera a través de las claves de un objeto con una sentencia "for...in"
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Sometimes you need to iterate through all the keys within an object. You can use a <dfn>for...in</dfn> loop to do this. The for...in loop looks like:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

This code logs `milk 1`  and `eggs 12`, with each key-value pair on its own line.

We defined the variable `food` in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

**NOTA:** Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

# --instructions--

We've defined a function `countOnline` which accepts one argument, `allUsers`. Use a <dfn>for...in</dfn> statement inside this function to loop through the `allUsers` object and return the number of users whose online property is set to `true`. An example of an object which could be passed to `countOnline` is shown below. Each user will have an `online` property set to either `true` or `false`.

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

La función `countOnline` debe utilizar una sentencia `for in` para iterar por las claves del objeto que se le pasa.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

La función `countOnline` debe devolver `1` cuando se le pasa el objeto `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj1) === 1);
```

La función `countOnline` debe devolver `2` cuando se le pasa el objeto `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`

```js
assert(countOnline(usersObj2) === 2);
```

La función `countOnline` debe devolver `0` cuando se le pasa el objeto `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`

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

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
