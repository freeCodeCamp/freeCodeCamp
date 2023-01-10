---
id: 5900f5461000cf542c510058
title: 'Problema 473: Base de números phigitais'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Considere $\varphi$ como a razão de ouro: $\varphi = \frac{1+\sqrt{5}}{2}.$

Notadamente, é possível escrever cada número inteiro positivo como uma soma de potências de $\varphi$, mesmo se precisarmos que todas as potências de $\varphi$ sejam usadas no máximo uma vez nessa soma.

Mesmo assim, essa representação não é única.

Podemos torná-la única exigindo que nenhuma potência com expoentes consecutivos seja utilizada e que a representação seja finita.

Ex:

$2 = \varphi + \varphi^{-2}$ e $3 = \varphi^{2} + \varphi^{-2}$

Para representar essa soma de potências de $\varphi$, usamos uma string de 0s e 1s com um ponto para indicar onde começam os expoentes negativos. Chamamos isto de representação na base numérica phigital.

Assim, $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ e $14 = 100100.001001_{\varphi}$. As strings representando 1, 2 e 14 na base numérica phigital são palindrômicas, enquanto a string representando 3 não é (o ponto phigital não é o caractere do meio).

A soma de números inteiros positivos não excedendo1000 cuja representação phigital é palindrômica é 4345.

Encontre a soma de números inteiros positivos não excedendo $10^{10}$ cuja representação phigital é palindrômica.

# --hints--

`phigitalNumberBase()` deve retornar `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
