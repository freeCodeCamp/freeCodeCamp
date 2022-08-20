---
id: 5900f3d21000cf542c50fee4
title: 'Problema 101: Polinômio ideal'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

Se nos forem apresentados os primeiros termos k de uma sequência, é impossível dizer com certeza o valor do termo seguinte, uma vez que existem infinitas funções polinomiais que podem modelar a sequência.

Como exemplo, vamos considerar a sequencia de números cúbicos. Isso é definido pela função de geração, $u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$

Suponhamos que só nos foram dados os dois primeiros termos desta sequência. Trabalhando com o princípio de que "simples é melhor", devemos assumir uma relação linear e prever que o próximo termo será 15 (diferença comum 7). Mesmo que nos fossem apresentados os três primeiros termos, pelo mesmo princípio de simplicidade, uma relação quadrática deveria ser assumida.

Definiremos $OP(k, n)$ como o termo $n^{th}$ da função de geração polinomial ótima para os primeiros termos k de uma sequência. Deve ficar claro que $OP(k, n)$ gerará com precisão os termos da sequência para $n ≤ k$ e, potencialmente, o primeiro termo incorreto (FIT) será $OP(k, k+1)$; Nesse caso, devemos chamá-lo de OP (BOP) ruim.

Como base, se nos fosse dado apenas o primeiro termo de sequência, seria mais sensato assumir constância, ou seja, por $n ≥ 2, OP(1, n) = u_1$.

Assim, obtemos as seguintes OPs para a sequência cúbica:

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

Claramente não existem BOPs para k ≥ 4. Considerando a soma dos FITs gerados pelos BOPs (indicados em $\color{red}{red}$ acima), obtemos 1 + 15 + 58 = 74. Considere a seguinte função de geração de polinômios de décimo grau:

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

Encontre a soma dos FITs para os BOPs.

# --hints--

`optimumPolynomial()` deve retornar `37076114526`.

```js
assert.strictEqual(optimumPolynomial(), 37076114526);
```

# --seed--

## --seed-contents--

```js
function optimumPolynomial() {

  return true;
}

optimumPolynomial();
```

# --solutions--

```js
// solution required
```
