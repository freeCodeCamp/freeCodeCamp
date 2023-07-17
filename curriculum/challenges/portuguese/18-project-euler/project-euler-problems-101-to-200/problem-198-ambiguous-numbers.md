---
id: 5900f4331000cf542c50ff45
title: 'Problema 198: Números ambíguos'
challengeType: 1
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

Uma melhor aproximação de um número real $x$ para o denominador vinculado $d$ é um número racional $\frac{r}{s}$ (na forma reduzida), com $s ≤ d$, tal que qualquer número racional $\frac{p}{q}$ que esteja mais próximo de $x$ do que de $\frac{r}{s}$ tenha $q > d$.

Geralmente, a melhor aproximação de um número real é determinada exclusivamente para todos os denominadores vinculados. No entanto, há algumas exceções. Por exemplo, $\frac{9}{40}$ tem as duas melhores aproximações $\frac{1}{4}$ e $\frac{1}{5}$ para o denominador vinculado $6$. Chamaremos um número real $x$ de ambíguo se houver pelo menos um denominador vinculado para o qual $x$ possui duas melhores aproximações. Claramente, um número ambíguo é necessariamente racional.

Quantos números ambíguos $x = \frac{p}{q}$, $0 &lt; x &lt; \frac{1}{100}$, existem cujo denominador $q$ não exceda ${10}^8$?

# --hints--

`ambiguousNumbers()` deve retornar `52374425`.

```js
assert.strictEqual(ambiguousNumbers(), 52374425);
```

# --seed--

## --seed-contents--

```js
function ambiguousNumbers() {

  return true;
}

ambiguousNumbers();
```

# --solutions--

```js
// solution required
```
