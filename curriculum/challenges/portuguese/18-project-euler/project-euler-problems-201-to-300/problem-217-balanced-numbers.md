---
id: 5900f4461000cf542c50ff58
title: 'Problema 217: Números balanceados'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

Um número inteiro positivo com $k$ casas (decimais) é chamado de balanceado se os seus primeiros $⌈\frac{k}{2}⌉$ algarismos têm a soma igual aos seus últimos $⌈\frac{k}{2}⌉$ algarismos, onde $⌈x⌉$, o teto pronunciado de $x$, é o menor inteiro, sendo $≥ x$, portanto $⌈π⌉ = 4$ e $⌈5⌉ = 5$.

Então, por exemplo, todos os palíndromos são balanceados, assim como 13722.

Considere $T(n)$ como sendo a soma de todos os números balanceados menores que $10^n$.

Assim: $T(1) = 45$, $T(2) = 540$ e $T(5) = 334.795.890$.

Encontre $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` deve retornar `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
