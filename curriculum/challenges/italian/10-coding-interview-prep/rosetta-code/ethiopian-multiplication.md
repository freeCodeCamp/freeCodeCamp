---
id: 599d1566a02b571412643b84
title: Moltiplicazione etiope
challengeType: 1
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

La moltiplicazione etiope è un metodo di moltiplicazione di numeri interi ottenuto utilizzando solo addizione, raddoppio e dimezzamento.

**Metodo:**

<ol>
  <li>Prendi due numeri da moltiplicare e scrivili in cima a due colonne</li>
  <li>Nella colonna di sinistra dimezza ripetutamente l'ultimo numero, scartando eventuali resti, e scrivi il risultato sotto l'ultimo nella stessa colonna, finché non scrivi un valore di <code>1</code></li>
  <li>Nella colonna di destra raddoppia ripetutamente l'ultimo numero e scrivere il risultato sotto. termina quando aggiungi un risultato nella stessa riga in cui la colonna di sinistra mostra <code>1</code></li>
  <li>Esamina la tabella prodotta e scarta qualsiasi riga dove il valore nella colonna di sinistra è pari</li>
  <li>Somma i valori nella colonna di destra che rimangono per produrre il risultato di moltiplicare tra di essi i due numeri originali</li>
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
  <li>uno per dimezzare un numero intero,</li>
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
