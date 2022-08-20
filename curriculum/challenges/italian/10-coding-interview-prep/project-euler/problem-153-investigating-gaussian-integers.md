---
id: 5900f4051000cf542c50ff18
title: 'Problema 153: Indagare sugli interi Gaussiani'
challengeType: 1
forumTopicId: 301784
dashedName: problem-153-investigating-gaussian-integers
---

# --description--

Come tutti sappiamo l'equazione $x^2 = -1$ non ha soluzioni per $x$ reale.

Se però introduciamo il numero immaginario $i$ questa equazione ha due soluzioni: $x = i$ e $x = -i$.

Se andiamo oltre l'equazione ${(x - 3)}^2 = -4$ ha due soluzioni complesse: $x = 3 + 2i$ e $x = 3 - 2i$, che sono chiamati l'uno il complesso coniugato dell'altro.

I numeri del tipo $a + bi$ sono chiamati numeri complessi.

In generale $a + bi$ e $a − bi$ sono l'uno il complesso coniugato dell'altro. Un intero Gaussiano è un numero complesso $a + bi$ tale che sia $a$ che $b$ siano interi.

Gli interi regolari sono anche interi gaussiani (con $b = 0$).

Per distinguerli dagli interi gaussiani con $b ≠ 0$ chiamiamo tali interi "interi razionali"

Un intero gaussiano è chiamato divisore di un intero razionale $n$ se il risultato è anche un intero gaussiano.

Se, ad esempio, dividiamo 5 per $1 + 2i$ possiamo semplificare nel modo seguente:

Moltiplicare numeratore e denominatore per il complesso coniugato di $1 + 2i$: $1 − 2i$.

Il risultato è:

$$\frac{5}{1 + 2i} = \frac{5}{1 + 2i} \frac{1 - 2i}{1 - 2i} = \frac{5(1 - 2i)}{1 - {(2i)}^2} = \frac{5(1 - 2i)}{1 - (-4)} = \frac{5(1 - 2i)}{5} = 1 - 2i$$

Così $1 + 2i$ è un divisore di 5.

Si noti che $1 + i$ non è un divisore di 5 perché:

$$\frac{5}{1 + i} = \frac{5}{2} - \frac{5}{2}i$$

Nota anche che se l'intero gaussiano ($a + bi$) è un divisore di un intero razionale $n$, allora il suo complesso coniugato ($a − bi$) è anch'esso un divisore di $n$. Infatti, 5 ha sei divisori la cui parte reale è positiva: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}.

La seguente è una tabella di tutti i divisori per i primi cinque interi razionali positivi:

| n | Divisori interi gaussiani con parte reale positiva | Somma s(n) di questi divisori |
| - | -------------------------------------------------- | ----------------------------- |
| 1 | 1                                                  | 1                             |
| 2 | 1, 1 + i, 1 - i, 2                                 | 5                             |
| 3 | 1, 3                                               | 4                             |
| 4 | 1, 1 + i, 1 - i, 2, 2 + 2i, 2 - 2i, 4              | 13                            |
| 5 | 1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5                 | 12                            |

Per i divisori con parti reali positive, poi, abbiamo: $\displaystyle\sum_{n=1}^5 s(n) = 35$.

Per $1 ≤ n ≤ {10}^5$, $\displaystyle\sum_{n = 1}^{{10}^5} s(n) = 17924657155$.

Cos'è $\displaystyle\sum_{n=1}^{{10}^8} s(n)$?

# --hints--

`sumGaussianIntegers()` dovrebbe restituire `17971254122360636`.

```js
assert.strictEqual(sumGaussianIntegers(), 17971254122360636);
```

# --seed--

## --seed-contents--

```js
function sumGaussianIntegers() {

  return true;
}

sumGaussianIntegers();
```

# --solutions--

```js
// solution required
```
