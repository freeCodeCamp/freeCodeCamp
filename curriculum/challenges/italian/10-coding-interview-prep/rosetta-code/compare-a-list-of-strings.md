---
id: 596e457071c35c882915b3e4
title: Confronta un elenco di stringhe
challengeType: 1
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

Una lista è un set ordinato di valori che potrebbe contenere duplicati. Ecco un esempio:

```js
const list = [['AA',  'BB', 'CC'], ['AA', 'ACB', 'AA'], [], ['AA']];
```

Data una lista di un numero arbitrario di stringhe, implementa una funzione per ognuna della seguenti condizioni:

<ul>
  <li>testa se sono tutte lessicamente uguali</li>
  <li>testa se ogni stringa è lessicamente inferiore di quella successiva (cioè se la lista è in ordine ascendente)</li>
</ul>

# --hints--

`allEqual` dovrebbe essere una funzione.

```js
assert(typeof allEqual === 'function');
```

`azSorted` dovrebbe essere una funzione.

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` dovrebbe restituire true.

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` dovrebbe restituire false.

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` dovrebbe restituire false.

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` dovrebbe restituire true.

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` dovrebbe restituire true.

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` dovrebbe restituire true.

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` dovrebbe restituire true.

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` dovrebbe restituire true.

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` dovrebbe restituire false.

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` dovrebbe restituire false.

```js
assert(!azSorted(testCases[4]));
```

# --seed--

## --after-user-code--

```js
const testCases = [['AA', 'AA', 'AA', 'AA'], ['AA', 'ACB', 'BB', 'CC'], [], ['AA'], ['BB', 'AA']];
```

## --seed-contents--

```js
function allEqual(arr) {

  return true;
}

function azSorted(arr) {

  return true;
}
```

# --solutions--

```js
function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] === a[i]);
  } return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] < a[i]);
  } return out;
}
```
