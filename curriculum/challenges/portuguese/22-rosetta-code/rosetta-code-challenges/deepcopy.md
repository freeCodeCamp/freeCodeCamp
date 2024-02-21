---
id: 596a8888ab7c01048de257d5
title: Cópia profunda
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Escreva uma função que retorne uma cópia profunda de um objeto dado. A cópia não deve ser o mesmo objeto que foi dado.

Esta tarefa não testará:

<ul>
  <li>Objetos com propriedades que são funções</li>
  <li>Objetos de data ou objetos com propriedades que são objetos de data</li>
  <li>RegEx ou objetos com propriedades que são objetos RegEx</li>
  <li>Cópias de protótipos</li>
</ul>

# --hints--

`deepcopy` deve ser uma função.

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` deve retornar um objeto.

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` não deve retornar o mesmo objeto que foi fornecido.

```js
assert(deepcopy(obj2) != obj2);
```

Quando for passado um objeto contendo um array, `deepcopy` deve retornar uma cópia profunda do objeto.

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

Quando for passado um objeto contendo outro objeto, `deepcopy`  deve retornar uma cópia profunda do objeto.

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
