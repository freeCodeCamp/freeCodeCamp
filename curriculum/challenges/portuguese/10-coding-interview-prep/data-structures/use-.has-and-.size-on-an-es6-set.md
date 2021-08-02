---
id: 587d8255367417b2b2512c72
title: Usar .has e .size em um conjunto da ES6
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

Vamos analisar os métodos .has e .size disponíveis no objeto Set da ES6.

Primeiro, crie um conjunto (Set) da ES6

```js
var set = new Set([1,2,3]);
```

O método .has verificará se o valor está contido dentro do conjunto.

```js
var hasTwo = set.has(2);
```

O método .size retornará um inteiro representando o tamanho do conjunto

```js
var howBig = set.size;
```

# --instructions--

Neste exercício, vamos passar um array e um valor para a função checkSet(). A função deve criar um set da ES6 a partir do argumento do array. Descubra se o conjunto contém o argumento do valor. Encontre o tamanho do conjunto. Por fim, retorne esses dois valores em um array.

# --hints--

`checkSet([4, 5, 6], 3)` deve retornar [ false, 3 ]

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
