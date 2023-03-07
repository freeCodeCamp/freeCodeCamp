---
id: 5900f4531000cf542c50ff65
title: 'Problem 230: Fibonacci-Wörter'
challengeType: 1
forumTopicId: 301874
dashedName: problem-230-fibonacci-words
---

# --description--

Für zwei beliebige Ziffernfolgen, $A$ und $B$, definieren wir $F_{A,B}$ als die Folge ($A, B, AB, BAB, ABBAB, \ldots$), in der jeder Term die Verkettung der beiden vorherigen ist.

Ferner definieren wir $D_{A,B}(n)$ als die $n^{\text{th}}$-Ziffer im ersten Term von $F_{A,B}$, die mindestens $n$ Ziffern enthält.

Beispiel:

Lasse $A = 1\\,415\\,926\\,535$, $B = 8\\,979\\,323\\,846$. Wir wollen z.B. $D_{A,B}(35)$ finden.

Die ersten paar Terme von $F_{A,B}$ sind:

$$\begin{align}   & 1\\,415\\,926\\,535 \\\\
  & 8\\,979\\,323\\,846 \\\\   & 14\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 897\\,932\\,384\\,614\\,159\\,265\\,358\\,979\\,323\\,846 \\\\ & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,897\\,932\\,384\\,614\\,15\color{red}{9}\\,265\\,358\\,979\\,323\\,846 \end{align}$$

Dann ist $D_{A,B}(35)$ die ${35}^{\text{th}}$-Ziffer im fünften Term, die 9 ist.

Nun verwenden wir für $A$ die ersten 100 Stellen von $π$ hinter dem Dezimaltrennzeichen:

$$\begin{align}   & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,264\\,338\\,327\\,950\\,288\\,419\\,716\\,939\\,937\\,510 \\\\
  & 58\\,209\\,749\\,445\\,923\\,078\\,164\\,062\\,862\\,089\\,986\\,280\\,348\\,253\\,421\\,170\\,679 \end{align}$$

und für $B$ die nächsten hundert Ziffern:

$$\begin{align}   & 82\\,148\\,086\\,513\\,282\\,306\\,647\\,093\\,844\\,609\\,550\\,582\\,231\\,725\\,359\\,408\\,128 \\\\
  & 48\\,111\\,745\\,028\\,410\\,270\\,193\\,852\\,110\\,555\\,964\\,462\\,294\\,895\\,493\\,038\\,196 \end{align}$$

Finde $\sum_{n = 0, 1, \ldots, 17} {10}^n × D_{A,B}((127 + 19n) × 7^n)$.

# --hints--

`fibonacciWords()` sollte `850481152593119200` zurückgeben.

```js
assert.strictEqual(fibonacciWords(), 850481152593119200);
```

# --seed--

## --seed-contents--

```js
function fibonacciWords() {

  return true;
}

fibonacciWords();
```

# --solutions--

```js
// solution required
```
