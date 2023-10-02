---
id: 61abc7ebf3029b56226de5b6
title: Implementar a busca binária
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

A busca binária é um algoritmo de eficiência **O(log(n))** para procurar um elemento em um array ordenado. Ele opera usando as seguintes etapas:

1. Encontrar o `value` do meio de um array ordenado. Se `value == target` retornou `true` (O valor foi encontrado e a pesquisa está completa).
1. Se `value < target`, procurar à direita do meio do array na próxima comparação.
1. Se `value > target`, procurar à esquerda do meio do array na próxima comparação.
1. Se, depois de pesquisar no array inteiro, o valor não está presente, retorne `false` (O array foi pesquisado e o valor não está no array).

Como você pode ver, você está dividindo um array para metade com sucesso, o que traz a eficiência log(n). Para este desafio, queremos que você mostre seu trabalho - como você conseguiu o valor de destino... o caminho que você fez!

# --instructions--

Escreva uma função `binarySearch` que implemente o algoritmo de busca binária em um array, retornando o caminho que você utilizou (cada comparação com o valor do meio) para encontrar o destino em um array.

A função recebe um array ordenado de números inteiros e um valor de destino como entrada. Ele retorna um array contendo (em ordem) o valor do meio que você encontrou a cada divisão do array original até encontrar o valor de destino. O valor de destino deve ser o último elemento do array retornado. Se o valor não for encontrado, retorne a string `Value Not Found`.

Por exemplo, `binarySearch([1,2,3,4,5,6,7], 5)` retornará `[4,6,5]`.

Para este desafio, você DEVE usar `Math.floor()` ao fazer a divisão: `Math.floor(x/2)`. Isto criará um caminho coerente e testável.

**Observação:** o array abaixo será usado nos testes:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` deve ser uma função.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` deve retornar `[13, 5, 2, 0]`.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` deve retornar `[13, 5, 2, 0, 1]`.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` deve retornar `[13, 5, 2]`.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` deve retornar a string `Value Not Found`.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` deve retornar `[13, 5, 10, 11]`.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` deve retornar `[13]`.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` deve retornar `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
