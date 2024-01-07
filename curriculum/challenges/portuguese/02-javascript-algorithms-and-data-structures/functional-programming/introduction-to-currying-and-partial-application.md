---
id: 587d7dab367417b2b2512b70
title: Iniciar com currying e aplicação parcial
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

A <dfn>aridade</dfn> de uma função é o número de argumentos que ela toma. Realizar <dfn>currying</dfn> em uma função significa transformar uma função de aridade N em N funções de aridade 1.

Em outras palavras, a função é reestruturada para que ela receba apenas um argumento e retorne outra função que recebe o próximo argumento e assim por diante.

Exemplo:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` retornaria `3`.

Isso é útil em seu programa quando você não pode fornecer todos os argumentos para uma função de uma só vez. Você pode salvar cada chamada de função em uma variável, que será uma referência à função retornada que recebe o próximo argumento quando ele estiver disponível. Um exemplo usando a função do exemplo acima:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Da mesma forma, <dfn>aplicação parcial</dfn> pode ser descrita como a aplicação de alguns argumentos a uma função e o retorno de outra função à qual é aplicada a mais argumentos. Exemplo:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Complete a função `add` de forma que ela use currying para adicionar os parâmetros `x`, `y` e `z`.

# --hints--

`add(10)(20)(30)` deve retornar `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` deve retornar `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` deve retornar `66`.

```js
assert(add(11)(22)(33) === 66);
```

No código deve haver uma instrução final que retorna `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
