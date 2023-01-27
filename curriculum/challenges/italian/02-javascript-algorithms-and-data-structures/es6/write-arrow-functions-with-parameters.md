---
id: 587d7b88367417b2b2512b44
title: Scrivere funzioni freccia con parametri
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Proprio come con una normale funzione, è possibile passare degli argomenti a una funzione freccia.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` restituirà il valore `8`.

Se una funzione a freccia ha un unico parametro, le parentesi che racchiudono il parametro possono essere omesse.

```js
const doubler = item => item * 2;
```

È possibile passare più di un argomento ad una funzione freccia.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` restituirà il valore `8`.

# --instructions--

Riscrivi la funzione `myConcat` che concatena i contenuti di `arr2` a quelli di `arr1` in modo che usi la sintassi delle funzioni freccia.

# --hints--

Dovresti sostituire la parola chiave `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` dovrebbe essere una variabile costante (usando `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` dovrebbe essere una funzione freccia con due parametri

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` dovrebbe restituire `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

La parola chiave `function` non dovrebbe essere usata.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
