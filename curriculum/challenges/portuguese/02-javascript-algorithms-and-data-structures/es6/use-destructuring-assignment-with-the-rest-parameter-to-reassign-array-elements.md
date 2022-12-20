---
id: 587d7b8a367417b2b2512b4c
title: >-
  Destructuring via rest elements
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

Em algumas situações envolvendo um array desestruturado, podemos querer coletar o resto dos elementos em um array separado.

O resultado é similar a `Array.prototype.slice()`, como mostrado abaixo:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

O console exibiria os valores `1, 2` e `[3, 4, 5, 7]`.

As variáveis `a` e `b` pegam o primeiro e o segundo valores do array. After that, because of the rest syntax presence, `arr` gets the rest of the values in the form of an array. O elemento rest só funciona corretamente como a última variável na lista. As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

# --instructions--

Use a destructuring assignment with the rest syntax to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` deve retornar um sub-array do array original `list` com os dois primeiros elementos omitidos.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` deve retornar `[3, 4, 5]`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` não deve modificar `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

`Array.slice()` não deve ser usado.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Desestruturação na `list` deve ser usada.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
