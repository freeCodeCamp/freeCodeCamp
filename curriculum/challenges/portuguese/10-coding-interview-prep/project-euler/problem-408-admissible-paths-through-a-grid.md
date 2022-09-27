---
id: 5900f5091000cf542c51001b
title: 'Problema 408: Caminhos admissíveis através de uma grade'
challengeType: 1
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

Vamos chamar um ponto da rede ($x$, $y$) de inadmissível se $x$, $y$ e $x + y$ forem todos quadrados positivos perfeitos.

Por exemplo, (9, 16) é inadmissível, mas (0, 4), (3, 1) e (9, 4) não são.

Considere um caminho do ponto ($x_1$, $y_1$) ao ponto ($x_2$, $y_2$) usando apenas movimentos unitários para o norte e para o leste. Chamaremos esse caminho de admissível se nenhum de seus pontos intermediários for inadmissível.

Considere $P(n)$ como o número de caminhos admissíveis de (0, 0) a ($n$, $n$). Pode-se verificar que $P(5) = 252$, $P(16) = 596.994.440$ e $P(1.000)\bmod 1.000.000.007 = 341.920.854$.

Encontre $P(10.000.000)\bmod 1.000.000.007$.

# --hints--

`admissiblePaths()` deve retornar `299742733`.

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

# --seed--

## --seed-contents--

```js
function admissiblePaths() {

  return true;
}

admissiblePaths();
```

# --solutions--

```js
// solution required
```
