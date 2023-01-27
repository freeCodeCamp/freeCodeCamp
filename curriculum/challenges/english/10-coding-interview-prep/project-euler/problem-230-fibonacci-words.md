---
id: 5900f4531000cf542c50ff65
title: 'Problem 230: Fibonacci Words'
challengeType: 1
forumTopicId: 301874
dashedName: problem-230-fibonacci-words
---

# --description--

For any two strings of digits, $A$ and $B$, we define $F_{A,B}$ to be the sequence ($A, B, AB, BAB, ABBAB, \ldots$) in which each term is the concatenation of the previous two.

Further, we define $D_{A,B}(n)$ to be the $n^{\text{th}}$ digit in the first term of $F_{A,B}$ that contains at least $n$ digits.

Example:

Let $A = 1\\,415\\,926\\,535$, $B = 8\\,979\\,323\\,846$. We wish to find $D_{A,B}(35)$, say.

The first few terms of $F_{A,B}$ are:

$$\begin{align}
  & 1\\,415\\,926\\,535 \\\\
  & 8\\,979\\,323\\,846 \\\\
  & 14\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 897\\,932\\,384\\,614\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,897\\,932\\,384\\,614\\,15\color{red}{9}\\,265\\,358\\,979\\,323\\,846
\end{align}$$

Then $D_{A,B}(35)$ is the ${35}^{\text{th}}$ digit in the fifth term, which is 9.

Now we use for $A$ the first 100 digits of $π$ behind the decimal point:

$$\begin{align}
  & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,264\\,338\\,327\\,950\\,288\\,419\\,716\\,939\\,937\\,510 \\\\
  & 58\\,209\\,749\\,445\\,923\\,078\\,164\\,062\\,862\\,089\\,986\\,280\\,348\\,253\\,421\\,170\\,679
\end{align}$$

and for $B$ the next hundred digits:

$$\begin{align}
  & 82\\,148\\,086\\,513\\,282\\,306\\,647\\,093\\,844\\,609\\,550\\,582\\,231\\,725\\,359\\,408\\,128 \\\\
  & 48\\,111\\,745\\,028\\,410\\,270\\,193\\,852\\,110\\,555\\,964\\,462\\,294\\,895\\,493\\,038\\,196
\end{align}$$

Find $\sum_{n = 0, 1, \ldots, 17} {10}^n × D_{A,B}((127 + 19n) × 7^n)$.

# --hints--

`fibonacciWords()` should return `850481152593119200`.

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
