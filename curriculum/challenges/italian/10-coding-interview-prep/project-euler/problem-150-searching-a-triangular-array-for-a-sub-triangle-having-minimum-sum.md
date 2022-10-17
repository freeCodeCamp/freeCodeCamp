---
id: 5900f4031000cf542c50ff15
title: >-
  Problema 150: Ricerca di una matrice triangolare per un subtriangolo con somma minima
challengeType: 1
forumTopicId: 301781
dashedName: problem-150-searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum
---

# --description--

In una serie triangolare di numeri interi positivi e negativi, desideriamo trovare un subtriangolo in modo che la somma dei numeri che contiene sia la più piccola possibile.

Nell'esempio sottostante si può facilmente verificare che il triangolo marcato soddisfi questa condizione con una somma di −42.

<img class="img-responsive center-block" alt="array triangolare, con subtriangolo marcato, avente una somma di -42" src="https://cdn.freecodecamp.org/curriculum/project-euler/searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum.gif" style="background-color: white; padding: 10px;" />

Vogliamo creare una tale matrice triangolare con mille righe, in modo da generare 500500 numeri pseudo-casuali $s_k$ nel range $±2^{19}$, utilizzando un tipo di generatore di numeri casuali (noto come generatore di elementi costitutivi lineari) come segue:

$$\begin{align}   t := & \\ 0\\\\
  \text{for}\\ & k = 1\\ \text{up to}\\ k = 500500:\\\\   & t := (615949 × t + 797807)\\ \text{modulo}\\ 2^{20}\\\\
  & s_k := t − 219\\\\ \end{align}$$

Thus: $s_1 = 273519$, $s_2 = −153582$, $s_3 = 450905$ etc.

La nostra matrice triangolare è poi formata utilizzando i numeri pseudo-casuali in questo modo:

$$ s_1 \\\\
s_2\\;s_3 \\\\ s_4\\; s_5\\; s_6 \\\\
s_7\\; s_8\\; s_9\\; s_{10} \\\\ \ldots $$

I sub-triangoli possono iniziare da qualsiasi elemento dell'array ed estendersi quanto vogliamo (prendendo i due elementi direttamente sotto di esso dalla riga successiva, i tre elementi direttamente al di sotto dalla riga successiva, e così via).

La "somma di un subtriangolo" è definita come la somma di tutti gli elementi che contiene.

Trova la somma subtriangolare più piccola possibile.

# --hints--

`smallestSubTriangleSum()` dovrebbe restituire `-271248680`.

```js
assert.strictEqual(smallestSubTriangleSum(), -271248680);
```

# --seed--

## --seed-contents--

```js
function smallestSubTriangleSum() {

  return true;
}

smallestSubTriangleSum();
```

# --solutions--

```js
// solution required
```
