---
id: 5a23c84252665b21eecc8013
title: Algoritmos de ordenação/ordenação strand
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

A ordenação **Strand Sort** cria subconjuntos ordenados que são mesclados para criar o resultado final.

Considere `unsortedArray = [3, 1, 4, 2]`. Escolha o primeiro item `3` e copie-o para um array separado. Procure por qualquer item maior após este item. Quando você encontrar um item maior, neste caso, `4`, copie-o para o array separado, `[3, 4]`, e compare os itens a seguir com este novo valor, `4`.

Após chegar ao fim do array, remova os itens que você copiou, `[3, 4]`, e comece novamente com o primeiro item restante no `unsortedArray`, neste caso `1`.

Após este processo, teremos dois arrays ordenados, `[3, 4]` e `[1, 2]`. Mescle esses dois arrays para criar o `strandSortedArray`.

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

Escreva uma função para ordenar um array usando a **Strand sort**. A função deve retornar o array ordenado.


# --hints--

`strandSort` deve ser uma função.

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(strandSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`strandSort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(strandSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function strandSort(list) {

}
```

# --solutions--

```js
function strandSort(list) {
  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```
