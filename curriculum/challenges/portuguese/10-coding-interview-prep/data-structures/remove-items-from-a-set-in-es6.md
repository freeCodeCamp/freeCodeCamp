---
id: 587d8254367417b2b2512c71
title: Remover itens de um conjunto na ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

Vamos praticar a remoção de itens de um conjunto da ES6 usando o método `delete`.

Primeiro, crie um conjunto (Set) da ES6:

```js
var set = new Set([1,2,3]);
```

Agora, remova um item do seu conjunto com o método `delete`.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

Crie um conjunto com os números inteiros 1, 2, 3, 4 e 5.

Remova os valores 2 e 5. Então, retorne o conjunto.

# --hints--

O conjunto deve conter os valores 1, 3 e 4

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
