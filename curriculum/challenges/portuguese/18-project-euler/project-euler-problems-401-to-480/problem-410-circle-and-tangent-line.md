---
id: 5900f5071000cf542c510018
title: 'Problema 410: Círculo e linha tangente'
challengeType: 1
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

Considere $C$ como o círculo de raio $r$, $x^2 + y^2 = r^2$. Selecionamos dois pontos $P(a, b)$ e $Q(-a, c)$, tal que a linha passando por $P$ e $Q$ seja tangente a $C$.

Por exemplo, o quarteto $(r, a, b, c) = (2, 6, 2, -7)$ satisfaz essa propriedade.

Considere $F(R, X)$ como o número de quartetos de números inteiros $(r, a, b, c)$ com essa propriedade e com $0 &lt; r ≤ R$ e $0 &lt; a ≤ X$.

Podemos verificar que $F(1, 5) = 10$, $F(2, 10) = 52$ e $F(10, 100) = 3384$.

Encontre $F({10}^8, {10}^9) + F({10}^9, {10}^8)$.

# --hints--

`circleAndTangentLine()` deve retornar `799999783589946600`.

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
