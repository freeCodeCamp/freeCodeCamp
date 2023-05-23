---
id: 5900f46d1000cf542c50ff7f
title: 'Problema 255: Raízes quadradas arredondadas'
challengeType: 1
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

Definimos a raiz quadrada arredondada de um número inteiro positivo $n$ como a raiz quadrada de $n$ arredondada para o número inteiro mais próximo.

O procedimento a seguir (essencialmente, o método de Heron adaptado para a aritmética de números inteiros) encontra a raiz arredondada de $n$:

Considere $d$ como o número de algarismos do número $n$.

Se $d$ for ímpar, defina $x_0 = 2 × {10}^{\frac{d - 1}{2}}$.

Se $d$ for par, defina $x_0 = 7 × {10}^{\frac{d - 2}{2}}$.

Repita:

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

até $x_{k + 1} = x_k$.

Como exemplo, vamos encontrar a raiz quadrada arredondada de $n = 4321$.

$n$ tem 4 algarismos, então $x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$.

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

Como $x_2 = x_1$, paramos aqui. Então, depois de apenas duas iterações, descobrimos que a raiz arredondada de 4321 é 66 (a raiz quadrada real é 65.7343137…).

O número de iterações necessárias ao usar este método é surpreendentemente baixo. Por exemplo, podemos encontrar a raiz quadrada arredondada de um inteiro de 5 algarismos ($10.000 ≤ n ≤ 99.999$) com uma média de 3,2102888889 iterações (o valor médio foi arredondado para 10 casas decimais).

Usando o procedimento descrito acima, qual é o número médio de iterações necessárias para encontrar a raiz quadrada arredondada de um número de 14 algarismos (${10}^{13} ≤ n &lt; {10}^{14}$)? Dê sua resposta arredondada para 10 casas decimais.

**Observação:** os símbolos $⌊x⌋$ e $⌈x⌉$ representam as funções piso e teto, respectivamente.

# --hints--

`roundedSquareRoots()` deve retornar `4.447401118`.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
