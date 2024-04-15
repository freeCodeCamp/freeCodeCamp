---
id: 599d1566a02b571412643b84
title: Moltiplicazione etiope
challengeType: 1
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.

**Metodo:**

<ol>
  <li>Take two numbers to be multiplied and write them down at the top of two columns</li>
  <li>In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of <code>1</code></li>
  <li>In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows <code>1</code></li>
  <li>Examine the table produced and discard any row where the value in the left column is even</li>
  <li>Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together</li>
</ol>

**Per esempio:** `17 × 34`

<pre>17   34
</pre>

Dimezza la prima colonna:

<pre>17   34
8
4
2
1
</pre>

Raddoppia la seconda colonna:

<pre>17   34
8    68
4   136
2   272
1   544
</pre>

Elimina le righe la cui prima cella è pari:

<pre>17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>

Somma i numeri rimanenti nella colonna di destra:

<!-- markdownlint-disable MD003 -->

<pre>17   34
8    --
4   ---
2   ---
1   544
   ====
    578
</pre>

<!-- markdownlint-enable MD003 -->

Quindi `17` moltiplicato per `34`, secondo il metodo etiope è `578`.

# --instructions--

Il compito è quello di definire tre funzioni/metodi/procedure/subroutine denominati:

<ol>
  <li>one to halve an integer,</li>
  <li>uno per raddoppiare un numero intero, e</li>
  <li>uno per indicare se un intero è pari</li>
</ol>

Usa queste funzioni per creare una funzione che fa la moltiplicazione etiope.

<!-- markdownlint-disable MD046-->

# --hints--

`eth_mult` dovrebbe essere una funzione.

```js
assert(typeof eth_mult === 'function');
```

`eth_mult(17,34)` dovrebbe restituire `578`.

```js
assert.equal(eth_mult(17, 34), 578);
```

`eth_mult(23,46)` dovrebbe restituire `1058`.

```js
assert.equal(eth_mult(23, 46), 1058);
```

`eth_mult(12,27)` dovrebbe restituire `324`.

```js
assert.equal(eth_mult(12, 27), 324);
```

`eth_mult(56,98)` dovrebbe restituire `5488`.

```js
assert.equal(eth_mult(56, 98), 5488);
```

`eth_mult(63,74)` dovrebbe restituire `4662`.

```js
assert.equal(eth_mult(63, 74), 4662);
```

# --seed--

## --seed-contents--

```js
function eth_mult(a, b) {

}
```

# --solutions--

```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```
