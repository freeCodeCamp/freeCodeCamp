---
id: 5900f3e61000cf542c50fef9
title: 'Problema 122: Exponenciação eficiente'
challengeType: 1
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

A maneira mais ingênua de calcular $n^{15}$ requer 14 multiplicações:

$$n × n × \ldots × n = n^{15}$$

Mas usando um método "binário" você pode calculá-lo em seis multiplicações:

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\   & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\   & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15} \end{align}$$

No entanto, ainda é possível calculá-lo em apenas cinco multiplicações:

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n = n^3\\\\   & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\ & n^{12} × n^3 = n^{15} \end{align}$$

Definiremos $m(k)$ como o número mínimo de multiplicações para calcular $n^k$; por exemplo, $m(15) = 5$.

Para $1 ≤ k ≤ 200$, encontre $\sum{m(k)}$.

# --hints--

`efficientExponentation()` deve retornar `1582`.

```js
assert.strictEqual(efficientExponentation(), 1582);
```

# --seed--

## --seed-contents--

```js
function efficientExponentation() {

  return true;
}

efficientExponentation();
```

# --solutions--

```js
// solution required
```
