---
id: 5900f4b71000cf542c50ffc9
title: 'Problem 330: Eulersche Zahl'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

Eine unendliche Folge von reellen Zahlen $a(n)$ ist für alle Integer $n$ wie folgt definiert:

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

Zum Beispiel,

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

wobei $e = 2,7182818\ldots$ die Eulersche Konstante ist.

Es kann gezeigt werden, dass $a(n)$ die Form $\displaystyle\frac{A(n)e + B(n)}{n!}$ für ganze Zahlen $A(n)$ und $B(n)$ ist.

Zum Beispiel $\displaystyle a(10) = \frac{328161643e - 652694486}{10!}$.

Finde $A({10}^9)$ + $B({10}^9)$ und gib deine Antwort $\bmod 77\\,777\,777$.

# --hints--

`eulersNumber()` sollte `15955822` zurückgeben.

```js
assert.strictEqual(eulersNumber(), 15955822);
```

# --seed--

## --seed-contents--

```js
function eulersNumber() {

  return true;
}

eulersNumber();
```

# --solutions--

```js
// solution required
```
