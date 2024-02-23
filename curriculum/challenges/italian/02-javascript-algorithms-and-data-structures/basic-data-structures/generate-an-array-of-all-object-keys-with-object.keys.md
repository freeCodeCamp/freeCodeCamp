---
id: 587d7b7d367417b2b2512b1e
title: Creare l'array delle proprietà con Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

Possiamo anche generare un array che contiene tutte le chiavi memorizzate in un oggetto con il metodo `Object.keys()`. Questo metodo prende un oggetto come argomento e restituisce un array di stringhe che rappresentano ciascuna proprietà nell'oggetto. Di nuovo, non ci sarà alcun ordine specifico per gli elementi nell'array.

# --instructions--

Termina la scrittura della funzione `getArrayOfUsers` in modo che restituisca un array contenente tutte le proprietà nell'oggetto che riceve come argomento.

# --hints--

L'oggetto `users` dovrebbe contenere solo le chiavi `Alan`, `Jeff`, `Sarah` e `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

La funzione `getArrayOfUsers` dovrebbe restituire un array che contiene tutte le chiavi nell'oggetto `users`

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
