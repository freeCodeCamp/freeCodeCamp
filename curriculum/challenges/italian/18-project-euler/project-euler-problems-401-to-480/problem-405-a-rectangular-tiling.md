---
id: 5900f5021000cf542c510014
title: 'Problema 405: una piastrellatura rettangolare'
challengeType: 1
forumTopicId: 302073
dashedName: problem-405-a-rectangular-tiling
---

# --description--

Vogliamo piastrellare un rettangolo la cui lunghezza è il doppio della larghezza.

Sia $T(0)$ la piastrellatura composta da un singolo rettangolo.

Per $n > 0$, sia $T(n)$ ottenuto da $T( n- 1)$ sostituendo tutte le piastrelle nel modo seguente:

<img class="img-responsive center-block" alt="ottenere T(n) da T(n - 1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-1.png" style="background-color: white; padding: 10px;" />

La seguente animazione mostra la piastrellatura $T(n)$ per $n$ da 0 a 5:

<img class="img-responsive center-block" alt="animazione con piastrelle T(n) per n da 0 a 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-2.gif" style="background-color: white; padding: 10px;" />

Sia $f(n)$ il numero di punti in cui quattro piastrelle si incontrano in $T(n)$. Per esempio, $f(1) = 0$, $f(4) = 82$ e $f({10}^9)\bmod {17}^7 = 126\\,897\\,180$.

Find $f({10}^k)$ for $k = {10}^{18}$, give your answer modulo ${17}^7$.

# --hints--

`rectangularTiling()` dovrebbe restituire `237696125`.

```js
assert.strictEqual(rectangularTiling(), 237696125);
```

# --seed--

## --seed-contents--

```js
function rectangularTiling() {

  return true;
}

rectangularTiling();
```

# --solutions--

```js
// solution required
```
