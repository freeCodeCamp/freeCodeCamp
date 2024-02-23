---
id: 5a23c84252665b21eecc8002
title: Algoritmos de ordenação/Bogosort
challengeType: 1
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

Faça a ordenação Bogosort de uma lista de números.

O Bogosort simplesmente embaralha uma coleção aleatoriamente até que ela fica ordenada.

O "Bogosort" é um algoritmo perversamente ineficaz, que só é usado como uma piada interna.

Seu tempo médio de execução é O(n!), pois a probabilidade de que qualquer embaralhamento dado de um conjunto acabe ordenado é equivalente ao fatorial de *n*. No pior dos casos, o tempo é infinito, já que não há garantias de que um embaralhamento aleatório produza uma sequência ordenada.

O melhor caso é O(n), uma vez que um único passo através dos elementos pode bastar para ordená-los.

Pseudocódigo:

<pre><b>while not</b> NaOrdem(lista) <b>do</b>
  Embaralhar(lista)
<b>done</b>
</pre>

# --hints--

`bogosort` deve ser uma função.

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`bogosort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [
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
function bogosort(v) {

}
```

# --solutions--

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```
