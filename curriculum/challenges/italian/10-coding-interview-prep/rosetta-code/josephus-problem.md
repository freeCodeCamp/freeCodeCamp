---
id: 5a23c84252665b21eecc7ec5
title: Problema di Josephus
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

Il problema di Josephus è un puzzle matematico con una descrizione grama: $n$ i prigionieri stanno su un cerchio, numerati in sequenza da $0$ a $n-1$.

Un boia cammina lungo il cerchio, iniziando dal prigioniero $0$, rimuovendo ogni $k$-mo prigioniero e uccidendolo.

Mentre il processo continua, il cerchio diventa più piccolo, fino a quando rimane solo un prigioniero, che poi viene liberato.

Ad esempio, se ci sono $n=5$ prigionieri e $k=2$, l'ordine in cui i prigionieri vengono uccisi (chiamiamolo la "sequenza di uccisione") sarà 1, 3, 0 e 4, e il sopravvissuto sarà il numero 2.

Dato qualsiasi $n, k > 0$, scopri quale prigioniero sarà il sopravvissuto finale.

In una di queste situazioni, ci furono 41 prigionieri e ogni 3<sup>°</sup> prigioniero fu ucciso ($k= 3 $).

Tra di loro c'era una persona intelligente di nome Josephus che elaborò il problema, si trovava in posizione di sopravvivenza, e ha vissuto per raccontare la storia.

A che numero corrisponde lui?

# --instructions--

Scrivi una funzione che prende il numero iniziare di prigionieri e `k` come parametri e restituisce il numero del prigioniero che sopravvive.

# --hints--

`josephus` dovrebbe essere una funzione.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` dovrebbe restituire un numero.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` dovrebbe restituire `28`.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` dovrebbe restituire `2`.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` dovrebbe restituire `8`.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` dovrebbe restituire `1`.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` dovrebbe restituire `1`.

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
