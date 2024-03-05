---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort é um conjunto de ferramentas de ordenação que faz com que o usuário faça o trabalho e garante a eficiência porque você não tem que organizar novamente. Ela foi originalmente apresentada por Jenn "Moneydollars" Schiffer no prestigiado JSConf2014.

jortSort deve ser uma função que recebe um único array de objetos comparáveis como argumento. Ela ordena o array em ordem ascendente e compara o array ordenado ao array fornecido inicialmente. Se os arrays corresponderem (ou seja, se o array original já foi ordenado), a função retorna true. Se os arrays não corresponderem (ou seja, se o array original não estiver ordenado), a função retorna false.

# --hints--

`jortsort` deve ser uma função.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` deve retornar um booleano.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` deve retornar `true`.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` deve retornar `false`.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` deve retornar `false`.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` deve retornar `true`.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` deve retornar `false`.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` deve retornar `true`.

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```
