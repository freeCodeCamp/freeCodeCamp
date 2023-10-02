---
id: ae9defd7acaf69703ab432ea
title: Minimo Comune Multiplo
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

Trova il minimo comune multiplo (mcm) dei parametri forniti che sia divisibile per entrambi, così come per tutti i numeri sequenziali nell'intervallo tra questi parametri.

L'intervallo sarà un array di due numeri che non saranno necessariamente in ordine crescente.

Per esempio, se dati 1 e 3, trovare il minimo comune multiplo sia di 1 che di 3 che è anche divisibile per tutti i numeri *tra* 1 e 3. La risposta in questo caso sarà 6.

# --hints--

`smallestCommons([1, 5])` dovrebbe restituire un numero.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` dovrebbe restituire 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` dovrebbe restituire 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` dovrebbe restituire 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` dovrebbe restituire 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` dovrebbe restituire 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
