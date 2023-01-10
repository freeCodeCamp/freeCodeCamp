---
id: 594810f028c0303b75339acf
title: La funzione di Ackermann
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

La funzione di Ackermann è un esempio classico di una funzione ricorsiva, degna di nota soprattutto perché non è una funzione ricorsiva primitiva. Cresce molto in fretta in valore, come fa anche la dimensione del suo albero di invocazioni.

La funzione di Ackermann è usualmente definita come segue:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

I suoi argomenti non sono mai negativi e termina sempre.

# --instructions--

Scrivi una funzione che restituisce il valore di $A(m, n)$. Precisione arbitraria è preferita (poiché la funzione cresce così rapidamente), ma non è necessaria.

# --hints--

`ack` dovrebbe essere una funzione.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` dovrebbe restituire 1.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` dovrebbe restituire 3.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` dovrebbe restituire 13.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` dovrebbe restituire 61.

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
