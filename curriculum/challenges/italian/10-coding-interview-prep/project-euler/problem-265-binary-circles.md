---
id: 5900f4761000cf542c50ff88
title: 'Problema 265: Cerchi binari'
challengeType: 1
forumTopicId: 301914
dashedName: problem-265-binary-circles
---

# --description--

$2^N$ cifre binarie possono essere posizionate in un cerchio in modo che tutte le sequenze di $N$ cifre in senso orario siano distinte.

Per $N = 3$, due di queste disposizioni circolari sono possibili, ignorando le rotazioni:

<img class="img-responsive center-block" alt="due disposizioni circolari per N = 3" src="https://cdn.freecodecamp.org/curriculum/project-euler/binary-circles.gif" style="background-color: white; padding: 10px;" />

Per la prima disposizione, le successioni a tre cifre, in ordine orario, sono: 000, 001, 010, 101, 011, 111, 110 e 100.

Ogni disposizione circolare può essere codificata come numero concatenando le cifre binarie a partire dalla successione di tutti gli zeri come bit più significativi e procedendo in senso orario. Le due disposizioni per $N = 3$ sono quindi rappresentate come 23 e 29:

$${00010111}_2 = 23\\\\
{00011101}_2 = 29$$

Chiamando $S(N)$ la somma delle disposizioni numeriche uniche, possiamo vedere che $S(3) = 23 + 29 = 52$.

Trova $S(5)$.

# --hints--

`binaryCircles()` dovrebbe restituire `209110240768`.

```js
assert.strictEqual(binaryCircles(), 209110240768);
```

# --seed--

## --seed-contents--

```js
function binaryCircles() {

  return true;
}

binaryCircles();
```

# --solutions--

```js
// solution required
```
