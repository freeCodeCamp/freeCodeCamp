---
id: 597b2b2a2702b44414742771
title: Fattoriale
challengeType: 1
forumTopicId: 302263
dashedName: factorial
---

# --description--

Scrivi una funzione che restituisce il fattoriale di un numero.

Il fattoriale di un numero è dato da:

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

Ad esempio:

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**Nota:** `0! = 1`

# --hints--

`factorial` dovrebbe essere una funzione.

```js
assert(typeof factorial === 'function');
```

`factorial(2)` dovrebbe restituire un numero.

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` dovrebbe restituire 6.

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` dovrebbe restituire 120.

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` dovrebbe restituire 3,628,800.

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --seed-contents--

```js
function factorial(n) {

}
```

# --solutions--

```js
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
}
```
