---
id: 597b2b2a2702b44414742771
title: Fatorial
challengeType: 1
forumTopicId: 302263
dashedName: factorial
---

# --description--

Escreva uma função que retorne o fatorial de um número.

O fatorial de um número é dado por:

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

Por exemplo:

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**Observação:** `0! = 1`

# --hints--

`factorial` deve ser uma função.

```js
assert(typeof factorial === 'function');
```

`factorial(2)` deve retornar um número.

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` deve retornar 6.

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` deve retornar 120.

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` deve retornar 3,628,800.

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
