---
id: 587d7b7d367417b2b2512b1f
title: Modificar o array armazenado em um objeto
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Agora você já viu todas as operações básicas para os objetos JavaScript. Você pode adicionar, modificar e remover pares de chave-valor, verifique se a chave existe e itere sobre todas as chaves em um objeto. Conforme continuar aprendendo JavaScript, você verá aplicações de objetos ainda mais versáteis. Adicionalmente, as aulas de Estrutura de Dados localizadas na seção Preparação para Entrevista de Codificação do currículo também cobrem os objetos ES6 <dfn>Map</dfn> e <dfn>Set</dfn>, ambos são semelhantes a objetos comuns, mas fornecem alguns recursos adicionais. Agora que você aprendeu o básico de arrays e objetos, você está totalmente preparado para começar a resolver problemas mais complexos usando JavaScript!

# --instructions--

Dê uma olhada no objeto que fornecemos no editor de código. O objeto `user` contém três chaves. A chave `data` contém 5 chaves, uma delas possui um array de `friends`. A partir disso, você pode ver como objetos são flexíveis assim como estruturas de dados. Nós começamos escrevendo a função `addFriend`. Termine de escrevê-la para que receba um objeto `user`, adicione o nome do argumento `friend` no array armazenado em `user.data.friends` e retorne esse array.

# --hints--

O objeto `user` deve ter as chaves `name`, `age` e `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

A função `addFriend` deve aceitar o objeto `user` e a string `friend` como argumentos e adicionar friend ao array `friends` no objeto `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` deve retornar `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
