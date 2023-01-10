---
id: 5900f4e11000cf542c50fff3
title: 'Problema 372: Feixe de raios'
challengeType: 1
forumTopicId: 302034
dashedName: problem-372-pencils-of-rays
---

# --description--

Considere $R(M, N)$ como o número de pontos da rede($x$, $y$) que satisfaz $M \lt x \le N$, $M \lt y \le N$ e que $\left\lfloor\frac{y^2}{x^2}\right\rfloor$ é ímpar.

Podemos verificar que $R(0, 100) = 3.019$ e $R(100, 10.000) = 29.750.422$.

Encontre $R(2 \times {10}^6, {10}^9)$.

**Observação:** $\lfloor x\rfloor$ representa a função piso.

# --hints--

`pencilsOfRays()` deve retornar `301450082318807040`.

```js
assert.strictEqual(pencilsOfRays(), 301450082318807040);
```

# --seed--

## --seed-contents--

```js
function pencilsOfRays() {

  return true;
}

pencilsOfRays();
```

# --solutions--

```js
// solution required
```
