---
id: 587d7b7b367417b2b2512b13
title: Copiar um array com o operador spread
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Enquanto `slice()` nos permite sermos seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo operador <dfn>spread</dfn> do ES6 nos permite facilmente copiar *todos* os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: `...`

Na prática, podemos usar o operador "spread" para copiar um array assim:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` é igual a `[true, true, undefined, false, null]`. `thisArray` permanece inalterado e `thatArray` contém os mesmos elementos que `thisArray`.

# --instructions--

Definimos uma função, `copyMachine` que recebe `arr` (um array) e `num` (um número) como argumentos. A função deve retornar um novo array composto de `num` cópias de `arr`. Fizemos a maior parte do trabalho para você, mas isso ainda não está certo. Modifique a função usando a sintaxe de spread para que ela funcione corretamente (dica: outro método já mencionado pode ser útil aqui!).

# --hints--

`copyMachine([true, false, true], 2)` deve retornar `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` deve retornar `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` deve retornar `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` deve retornar `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

A função `copyMachine` deve utilizar o operador `spread` com array `arr`

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
