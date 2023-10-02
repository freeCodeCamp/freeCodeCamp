---
id: 587d7b7d367417b2b2512b1c
title: Verificare se un oggetto ha una proprietà
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Adesso possiamo aggiungere, modificare e rimuovere chiavi dagli oggetti. Ma se volessimo solo sapere se un oggetto ha una determinata proprietà? JavaScript ci fornisce due modi diversi per farlo. Uno utilizza il metodo `hasOwnProperty()` e l'altro usa la parola chiave `in`. Se abbiamo un oggetto `users` con una proprietà `Alan`, potremmo verificare la sua presenza in uno dei seguenti modi:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Entrambi restituirebbero `true`.

# --instructions--

Finisci di scrivere la funzione in modo che restituisca `true` se l'oggetto ad essa passato contiene tutti e quattro i nomi, `Alan`, `Jeff`, `Sarah` e `Ryan`, altrimenti da come risultato `false`.

# --hints--

Non dovresti accedere direttamente all'oggetto `users`

```js 

assert(code.match(/users/gm).length <= 2)

```

L'oggetto `users` dovrebbe contenere solo le chiavi `Alan`, `Jeff`, `Sarah`e `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

La funzione `isEveryoneHere` dovrebbe restituire `true` se `Alan`, `Jeff`, `Sarah` e `Ryan` sono proprietà dell'oggetto ad essa passato.

```js
assert(isEveryoneHere(users) === true);
```

La funzione `isEveryoneHere` dovrebbe restituire `false` se `Alan` non è una proprietà dell'oggetto ad essa passato.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

La funzione `isEveryoneHere` dovrebbe restituire `false` se `Jeff` non è una proprietà dell'oggetto ad essa passato.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

La funzione `isEveryoneHere` dovrebbe restituire `false` se `Sarah` non è una proprietà dell'oggetto ad essa passato.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

La funzione `isEveryoneHere` dovrebbe restituire `false` se `Ryan` non è una proprietà dell'oggetto ad essa passato.

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

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

function isEveryoneHere(userObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

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

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
