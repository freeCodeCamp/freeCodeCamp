---
id: 5900f4b71000cf542c50ffc9
title: 'Problema 330: Números de Euler'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

Uma sequência infinita de números reais $a(n)$ é definida para todos os números inteiros $n$ da seguinte forma:

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

Por exemplo:

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

com $e = 2.7182818\ldots$ sendo a constante de Euler.

Pode-se mostrar que $a(n)$ está no formato $\displaystyle\frac{A(n)e + B(n)}{n!}$ para os números inteiros $A(n)$ e $B(n)$.

Por exemplo, $\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$.

Encontre $A({10}^9)$ + $B({10}^9)$ e dê sua resposta $\bmod 77\\,777\\,777$.

# --hints--

`eulersNumber()` deve retornar `15955822`.

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
