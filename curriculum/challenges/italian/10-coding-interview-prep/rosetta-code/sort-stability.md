---
id: 5a23c84252665b21eecc8014
title: Stabilità dell'ordinamento
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

Quando si ordinano i record in una tabella per una particolare colonna o campo, un <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">ordinamento stabile</a> manterrà sempre l'ordine relativo dei record che hanno la stessa chiave.

Ad esempio, in questa tabella di paesi e città, un ordinamento stabile sulla **seconda** colonna, le città, manterrebbe US Birmingham sopra UK Birmingham. (Anche se un ordinamento instabile *potrebbe*, in questo caso, posizionare US Birmingham sopra UK Birmingham, un ordinamento stabile lo *garantirebbe* esso).

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

Allo stesso modo, l'ordinamento stabile fatto solo sulla prima colonna genererebbe "UK London" come primo elemento e "US Birmingham" come ultimo elemento (perché l'ordine degli elementi con la stessa prima parola – "UK" o "US" – sarebbe mantenuto).

# --instructions--

Scrivi una funzione che richiede un array bidimensionale come parametro. Ogni elemento ha 2 elementi simili all'esempio precedente. La funzione dovrebbe ordinare l'array come menzionato precedentemente e restituire l'array ordinato.

# --hints--

`stableSort` dovrebbe essere una funzione.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` dovrebbe restituire un array.

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` dovrebbe restituire `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`.

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` dovrebbe restituire `[[2, 2], [1, 2], [1, 4], [1, 5]]`.

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` dovrebbe restituire `[[12, 45], [11, 45], [32, 45], [11, 55]]`.

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` dovrebbe restituire `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`.

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` dovrebbe restituire `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`.

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
