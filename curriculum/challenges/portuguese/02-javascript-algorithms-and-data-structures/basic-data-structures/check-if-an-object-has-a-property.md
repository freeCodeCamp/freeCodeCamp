---
id: 587d7b7d367417b2b2512b1c
title: Verificar se um objeto tem uma propriedade
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Agora podemos adicionar, modificar e remover as chaves dos objetos. Mas e se apenas quiséssemos saber se um objeto tem uma propriedade específica? O JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o método `hasOwnProperty()` e o outro usa a palavra-chave `in`. Se tivermos um objeto `users` com uma propriedade de `Alan`, podemos verificar a sua presença de qualquer uma das seguintes maneiras:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Ambos retornariam `true`.

# --instructions--

Termine de escrever a função para que ela retorne `true` se o objeto passado a ela contiver todos os quatro nomes, `Alan`, `Jeff`, `Sarah` e `Ryan` e retorne `false` do contrário.

# --hints--

O objeto `users` não deve ser acessado diretamente

```js 

assert(code.match(/users/gm).length <= 2)

```

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

A função `isEveryoneHere` deve retornar `true` se `Alan`, `Jeff`, `Sarah`, e `Ryan` forem propriedades do objeto passado como argumento.

```js
assert(isEveryoneHere(users) === true);
```

A função `isEveryoneHere` deve retornar `false` se `Alan` não for uma propriedade do objeto passado como argumento.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

A função `isEveryoneHere` deve retornar `false` se `Jeff` não for uma propriedade no objeto passado como argumento.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

A função `isEveryoneHere` deve retornar `false` se `Sarah` não for uma propriedade do objeto passado como argumento.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

A função `isEveryoneHere` deve retornar `false` se `Ryan` não for uma propriedade do objeto passado como argumento.

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
