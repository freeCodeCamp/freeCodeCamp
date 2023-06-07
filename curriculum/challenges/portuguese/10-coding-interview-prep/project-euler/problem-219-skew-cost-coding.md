---
id: 5900f4481000cf542c50ff5a
title: 'Problema 219: Codificação de custo modificado'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

Considere $A$ e $B$ como sendo strings de bits (sequências de 0s e 1s).

Se $A$ for igual ao bits comprimento ($A$) mais à <u>esquerda</u> de $B$, então $A$ é pode ser considerado um prefixo de $B$.

Por exemplo, 00110 é um prefixo de <u>00110</u>1001, mas não de 00111 ou 100110.

Um código de tamanho $n$ sem prefixo é uma coleção de $n$ strings de bits distintos, de modo que nenhuma string é um prefixo de outra. Por exemplo, este é um código de tamanho 6 sem prefixos:

$$0000, 0001, 001, 01, 10, 11$$

Suponhamos agora que custa um centavo transmitir um bit "0", mas quatro centavos transmitir um bit "1". Então, o custo total do código sem o prefixo mostrado acima é de 35 centavos, que é o mais barato possível para o regime de preços modificados em questão. Em resumo, escrevemos $Cost(6) = 35$.

Qual é o $Cost(10^9)$?

# --hints--

`skewCostCoding()` deve retornar `64564225042`.

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function skewCostCoding() {

  return true;
}

skewCostCoding();
```

# --solutions--

```js
// solution required
```
