---
id: 5900f46d1000cf542c50ff7f
title: 'Problema 255: Radici Quadrate Arrotondate'
challengeType: 1
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

Definiamo la radice-quadrata-arrotondata di un intero positivo $n$ come la radice quadrata di $n$ arrotondata al numero intero più vicino.

La seguente procedura (essenzialmente il metodo di Heron adattato a interi aritmetici) trova la radice-quadrata-arrotondata di $n$:

Sia $d$ il numero di cifre del numero $n$.

Se $d$ è dispari, imposta $x_0 = 2 × {10}^{\frac{d - 1}{2}}$.

Se $d$ è pari, imposta $x_0 = 7 × {10}^{\frac{d - 2}{2}}$.

Ripeti:

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

fino a $x_{k + 1} = x_k$.

Ad esempio, cerchiamo di trovare la radice-quadrata-arrotondata di $n = 4321$.

$n$ ha 4 cifre, quindi $x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$.

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

Dal momento che $x_2 = x_1$, ci fermiamo qui. Così, dopo solo due iterazioni, abbiamo scoperto che la radice-quadrata-arrotondata di 4321 è 66 (la vera radice quadrata è 65.7343137…).

Il numero d'iterazioni richieste quando si utilizza questo metodo è sorprendentemente basso. Ad esempio, possiamo trovare la radice-quadrata-arrotondato di un intero a 5 cifre ($10\\,000 ≤ n ≤ 99\\,999$) con una media di 3.2102888889 iterazioni (il valore medio è stato arrotondato al decimo decimale).

In base alla procedura sopra descritta, qual è il numero medio di iterazioni richieste per trovare la radice-quadrata-arrotondata di un numero a 14 cifre (${10}^{13} ≤ n &lt; {10}^{14}$)? Dai la risposta arrotondata a 10 decimali.

**Nota:** I simboli $⌊x⌋$ e $⌈x⌉$ rappresentano rispettivamente la funzione arrotonda verso il basso e arrotonda verso l'alto.

# --hints--

`roundedSquareRoots()` dovrebbe restituire `4.447401118`.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
