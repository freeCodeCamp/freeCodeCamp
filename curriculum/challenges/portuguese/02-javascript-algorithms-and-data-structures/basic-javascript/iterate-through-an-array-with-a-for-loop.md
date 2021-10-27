---
id: 5675e877dbd60be8ad28edc6
title: Iterar através de um array com laço for
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

Uma tarefa comum em JavaScript é para iterar através do conteúdo de um array. Uma forma de fazer isso é com um laço `for`. Esse código vai exibir cada elemento do array `arr` no console:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Lembre-se de que arrays têm indexação baseada em zero, o que significa que o último índice do array é de `length - 1`. Nossa condição para esse laço é `i < arr.length`, que interrompe o laço quando `i` é igual a `length`. Nesse caso a última iteração é `i === 4`, ou seja, quando `i` se tornar igual a `arr.length - 1` e exibir `6` no console. Em seguida, `i` aumenta para `5`, e o laço é interrompido porque `i < arr.length` é `false`.

# --instructions--

Declare e inicialize uma variável `total` como `0`. Use um laço `for` para adicionar o valor de cada elemento do array `myArr` para `total`.

# --hints--

`total` deve ser declarado e inicializado como 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` deve ser igual a 20.

```js
assert(total === 20);
```

Você deve usar um laço `for` para iterar através de `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

Você não deve tentar atribuir diretamente o valor 20 para `total`.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
