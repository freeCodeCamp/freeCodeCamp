---
id: 5a23c84252665b21eecc7ee0
title: Linksseitige Fakultäten
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Left factorials**, $ !n $, may refer to either *subfactorials* or to *factorial sums*. The same notation can be confusingly seen used for the two different definitions. Sometimes, *subfactorials* (also known as *derangements*) may use any of the notations:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(Es mag optisch nicht auffallen, aber im letzten Beispiel wird ein auf dem Kopf stehendes Ausrufezeichen verwendet). In dieser Aufgabe wird diese Formel für die **linke Fakultät** verwendet:

$ !n = \\sum\_{k=0}^{n-1} k! $

wo $!0 = 0$

# --instructions--

Schreibe eine Funktion zur Berechnung der linken Fakultät einer gegebenen Zahl.

# --hints--

`leftFactorial` sollte eine Funktion sein.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` sollte eine Zahl zurückgeben.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` sollte `0` zurückgeben.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` sollte `1` zurückgeben.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` sollte `2` zurückgeben.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` sollte `4` zurückgeben.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` sollte `409114` zurückgeben.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` sollte `22324392524314` zurückgeben.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` sollte `6780385526348314` zurückgeben.

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
