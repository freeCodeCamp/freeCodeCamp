---
id: 5ea2815a8640bcc6cb7dab3c
title: Numeri di Lychrel
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Prendi un numero intero <code>n₀</code> maggiore di zero.</li>
  <li>Forma il prossimo numero <code>n</code> della serie invertendo <code>n₀</code> e aggiungendolo a <code>n₀</code></li>
  <li>Termina quando <code>n</code> diventa palindromo - cioè le cifre di <code>n</code> in ordine inverso == <code>n</code>.</li>
</ol>

La relazione di ricorrenza sopra riportata quando applicata alla maggior parte dei numeri iniziali `n` = 1, 2, ... termina in un palindromo abbastanza rapidamente.

Per esempio se `n₀` = 12 otteniamo:

```bash
12
12 + 21 = 33,  a palindrome!
```

E se `n₀` = 55 otteniamo:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

Nota che il controllo per un palindromo viene fatto *dopo* una somma.

Alcuni numeri iniziali sembrano andare avanti per sempre; la relazione di ricorrenza per 196 è stata calcolata per milioni di ripetizioni formando numeri con milioni di cifre, senza formare un palindromo. Questi numeri che non terminano in un palindromo sono chiamati **numeri di Lychrel**.

Ai fini di questo compito un numero di Lychrel è qualsiasi numero iniziale che non forma un palindromo entro 500 (o più) iterazioni.

**Seme e numeri di Lychrel correlati:**

Qualsiasi numero intero prodotto nella sequenza di un numero di Lychrel è anche un numero di Lychrel.

In generale, qualsiasi sequenza da un numero di Lychrel *potrebbe* convergere alla sequenza formata da un precedente numero di Lychrel; per esempio le sequenze per i numeri 196 e poi 689 iniziano:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

Quindi vediamo che la sequenza a partire da 689 converge e continua con gli stessi numeri di quella del 196.

A causa di questo possiamo ulteriormente dividere i numeri di Lychrel in veri **Seed** di numeri di Lychrel, e numeri **Correlati** che non producono palindromi ma hanno interi nella loro sequenza visti come parte della sequenza generata da un numero di Lychrel inferiore.

# --instructions--

Scrivi una funzione che prende un numero come parametro. Restituisce vero se il numero è un numero di Lychrel. Altrimenti, restituisci falso. Ricorda che il limite di iterazioni è 500.

# --hints--

`isLychrel` dovrebbe essere una funzione.

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` dovrebbe restituire un booleano.

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` dovrebbe restituire `false`.

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` dovrebbe restituire `false`.

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` dovrebbe restituire `true`.

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` dovrebbe restituire `true`.

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` dovrebbe restituire `false`.

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` dovrebbe restituire `true`.

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
