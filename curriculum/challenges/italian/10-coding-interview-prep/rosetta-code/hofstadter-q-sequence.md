---
id: 59637c4d89f6786115efd814
title: Successione Q di Hofstadter
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

La sequenza Q di Hofstadter è definita come:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

È definita nello stesso modo della sequenza di Fibonacci, ma mentre il termine successivo nella sequenza di Fibonacci è la somma dei due termini precedenti, nella sequenza Q i due termini precedenti ti dicono fino a che punto tornare nella sequenza Q per trovare i due numeri da sommare per fare il prossimo termine della sequenza.

# --instructions--

Implementa l'equazione della Sequenza Q di Hofstadter come funzione. La funzione dovrebbe accettare un numero, `n`, e restituire un numero intero.

# --hints--

`hofstadterQ` dovrebbe essere una funzione.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` dovrebbe restituire `integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` dovrebbe restituire `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` dovrebbe restituire `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` dovrebbe restituire `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` dovrebbe restituire `1261`

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

## --seed-contents--

```js
function hofstadterQ(n) {

  return n;
}
```

# --solutions--

```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}
```
