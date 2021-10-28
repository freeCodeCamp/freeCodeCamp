---
id: 587d7da9367417b2b2512b69
title: Ordinare un array alfabeticamente usando il metodo sort
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

Il metodo `sort` ordina gli elementi di un array in base alla funzione "callback" (una funzione, passata come argomento, che dovrà essere usata dal metodo per eseguire l'ordinamento).

Ad esempio:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Questo restituirà il valore `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Questo restituirà il valore `['z', 's', 'l', 'h', 'b']`.

Il metodo di ordinamento predefinito di JavaScript è in base ai valori Unicode della stringa, e questo può dare risultati inattesi. Pertanto, è consigliabile fornire una funzione di callback per specificare come ordinare gli elementi dell'array. Quando viene fornita una tale funzione di callback, chiamata normalmente `compareFunction`, gli elementi dell'array sono ordinati in base al valore di ritorno della `compareFunction`: se `compareFunction(a,b)` restituisce un valore inferiore a 0 per due elementi `a` e `b`, allora `a` verrà prima di `b` nell'ordinamento. Se `compareFunction(a,b)` restituisce un valore maggiore di 0 per due elementi `a` e `b`, allora `b` verrà prima di `a`. Se `compareFunction(a,b)` restituisce un valore pari a 0 per due elementi `a` e `b`, allora `a` e `b` rimarranno invariati.

# --instructions--

Usa il metodo `sort` nella funzione `alphabeticalOrder` per ordinare gli elementi di `arr` in ordine alfabetico. La funzione dovrebbe restituire l'array ordinato.

# --hints--

Il tuo codice dovrebbe usare il metodo `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` dovrebbe restituire `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` dovrebbe restituire `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` dovrebbe restituire `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
