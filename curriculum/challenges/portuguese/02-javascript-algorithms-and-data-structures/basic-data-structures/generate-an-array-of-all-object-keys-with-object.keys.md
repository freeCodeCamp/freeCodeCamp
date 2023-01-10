---
id: 587d7b7d367417b2b2512b1e
title: Gerar um array de todas as chaves de objeto com Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

Também podemos gerar um array o qual contém todas as chaves armazenadas em um objeto com o método `Object.keys()`. Esse método recebe um objeto como argumento e retorna um array de strings que representam cada propriedade no objeto. Novamente, não haverá uma ordem específica para as entradas no array.

# --instructions--

Termine de escrever a função `getArrayOfUsers` para que retorne um array contendo todas as propriedades do objeto que receber como argumento.

# --hints--

O objeto `users` deve conter apenas as chaves `Alan`, `Jeff`, `Sarah` e `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

A função `getArrayOfUsers` deve retornar um array que contém todas as chaves no objeto `users`

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
