---
id: 5cc0bd7a49b71cb96132e54c
title: Usar recursão para criar um intervalo de números
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Continuando do desafio anterior, fornecemos a você outra oportunidade para criar uma função recursiva para resolver um problema.

# --instructions--

Definimos uma função chamada `rangeOfNumbers` com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro `startNum` e terminar com um número representado pelo parâmetro `endNum`. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde `startNum` e `endNum` tiverem o mesmo valor.

# --hints--

A função deve retornar um array.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

O código não deve depender de nenhum laço (`for` ou `while` ou funções de ordem superior como as funções `forEach`, `map`, `filter` ou `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` deve usar recursão (chamar a si) para resolver este desafio.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` deve retornar `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` deve retornar `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` deve retornar `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

As variáveis globais não devem ser usadas para armazenar em cache o array.

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
