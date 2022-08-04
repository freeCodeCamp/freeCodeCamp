---
id: 5900f4d61000cf542c50ffe9
title: 'Problema 362: Fattori senza quadrato'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

Considera il numero 54.

54 può essere fattorizzato in 7 modi distinti in uno o più fattori superiori a 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

Se abbiamo bisogno che i fattori siano tutti privi di quadrati, rimangono solo due modi: $3 × 3 × 6$ e $2 × 3 × 3 × 3$.

Chiamiamo $Fsf(n)$ il numero di modi in cui $n$ può essere fattorizzato senza quadrati più grandi di 1, quindi $Fsf(54) = 2$.

Sia $S(n)$ $\sum Fsf(k)$ per $k = 2$ a $n$.

$S(100) = 193$.

Trova $S(10\\,000\\,000\\,000)$.

# --hints--

`squarefreeFactors()` dovrebbe restituire `457895958010`.

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function squarefreeFactors() {

  return true;
}

squarefreeFactors();
```

# --solutions--

```js
// solution required
```
