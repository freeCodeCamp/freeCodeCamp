---
id: 5a23c84252665b21eecc8028
title: Sequenza di Stern-Brocot
challengeType: 1
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

Per questa sfida, la serie di Stern-Brocot deve essere generata da un algoritmo simile a quello usato per generare la <a href="https://rosettacode.org/wiki/Fibonacci_sequence" target="_blank" rel="noopener noreferrer nofollow">serie di Fibonacci</a>.

<ol>
  <li>Il primo e il secondo elemento della serie sono entrambi 1:</li>
    <ul><li>1, 1</li></ul>
  <li>Inizia considerando il secondo elemento della serie</li>
  <li>Somma l'elemento considerato della sequenza e il precedente, (1 + 1) = 2, e aggiungilo alla fine della sequenza:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>Aggiungi l'elemento considerato alla fine della sequenza:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>Considera l'elemento successivo della serie, (il terzo elemento, cioè 2)</li>
  <li>Vai a 3 </li>
    <ul>
      <li></li>
      <li> ─── Espandendo un altro ciclo otteniamo: ───</li>
      <li></li>
    </ul>
  <li>Somma l'elemento considerato della sequenza e il suo predecessore, (2 + 1) = 3, e appendilo alla fine della sequenza:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Aggiungi l'elemento considerato alla fine della sequenza:</li>
    <ul><li>1, 1, 2, 1, 3, 2</li></ul>
  <li>Considera l'elemento successivo della serie, (il quarto elemento, cioè 1)</li>
</ol>

# --instructions--

Crea una funzione che restituisce la posizione della serie di Stern-Brocot a cui $ n $ si trova per la prima volte, dove la serie è generata con il metodo mostrato sopra. Nota che questa sequenza usa indicizzazione che parte da 1.

# --hints--

`sternBrocot` dovrebbe essere una funzione.

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` dovrebbe restituire un numero.

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` dovrebbe restiture `3`.

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` dovrebbe restituire `5`.

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` dovrebbe restiture `11`.

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` dovrebbe restiture `19`.

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` dovrebbe restiture `39`.

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
