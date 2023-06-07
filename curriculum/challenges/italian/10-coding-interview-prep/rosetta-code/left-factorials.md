---
id: 5a23c84252665b21eecc7ee0
title: Fattoriale sinistro
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Fattoriale sinistro**, $ !n $, può riferisi a *subfattoriali* o a *somme fattoriali*. La stessa notazione confusionalmente può essere vista in uso per le due diverse definizioni. A volte, *subfattoriali* (noti anche come *dismutazioni*) possono usare qualsiasi delle seguenti notazioni:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(Potrebbe non essere visivamente ovvio, ma l'ultimo esempio usa un punto esclamativo rovesciato.) Questa sfida userà questa formula per il **fattoriale sinistro**:

$ !n = \\sum\_{k=0}^{n-1} k! $

dove $!0 = 0$

# --instructions--

Scrivi una funzione per calcolare il fattoriale sinistro di un dato numero.

# --hints--

`leftFactorial` dovrebbe essere una funzione.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` dovrebbe restituire un numero.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` dovrebbe restituire `0`.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` dovrebbe restituire `1`.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` dovrebbe restituire `2`.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` dovrebbe restituire `4`.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` dovrebbe restituire `409114`.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` dovrebbe restituire `22324392524314`.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` dovrebbe restituire `6780385526348314`.

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```
