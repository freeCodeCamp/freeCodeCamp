---
id: 5900f50a1000cf542c51001c
title: 'Problema 413: Números com um filho'
challengeType: 1
forumTopicId: 302082
dashedName: problem-413-one-child-numbers
---

# --description--

Dizemos que um número positivo de $d$ algarismos (sem zeros à esquerda) é um número com um filho se exatamente uma de suas substrings for divisível por $d$.

Por exemplo, 5671 é um número com um filho de 4 algarismos. Entre todas as suas substrings 5, 6, 7, 1, 56, 67, 71, 567, 671 e 5671, apenas 56 é divisível por 4.

Da mesma forma, 104 é um número com um filho de 3 algarismos, pois apenas 0 é divisível por 3. 1132451 é um número com um filho de 7 algarismos, pois apenas 245 é divisível por 7.

Considere $F(N)$ como a quantidade de números com um filho inferiores a $N$. Podemos verificar que $F(10) = 9$, $F({10}^3) = 389$ e $F({10}^7) = 277.674$.

Encontre $F({10}^{19})$.

# --hints--

`oneChildNumbers()` deve retornar `3079418648040719`.

```js
assert.strictEqual(oneChildNumbers(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function oneChildNumbers() {

  return true;
}

oneChildNumbers();
```

# --solutions--

```js
// solution required
```
