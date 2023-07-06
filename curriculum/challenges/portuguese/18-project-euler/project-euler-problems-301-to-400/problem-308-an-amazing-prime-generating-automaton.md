---
id: 5900f4a11000cf542c50ffb3
title: 'Problema 308: Um incrível autômato gerador de números primos'
challengeType: 1
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

Um programa escrito na linguagem de programação Fractran consiste em uma lista de frações.

O estado interno da Máquina Virtual do Fractran é um número inteiro positivo, que é inicialmente definido como um valor de seed. Cada iteração de um programa em Fractran multiplica o inteiro do estado pela primeira fração da lista que o tornará um número inteiro.

Por exemplo, um dos programas em Fractran que John Horton Conway escreveu para a geração de números primos consiste nas seguintes 14 frações:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

Começando pela seed do número inteiro 2, as iterações sucessivas do programa produzem a sequência:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

As potências de 2 que aparecem nessa sequência são $2^2, 2^3, 2^5, \ldots$.

É possível mostrar que todas as potências de 2 nesta sequência têm expoentes de números primos e que todos os números primos aparecem como expoentes de potência 2, em uma ordem adequada!

Se alguém usar o programa em Fractran acima para resolver o problema 7 do Projeto Euler (encontrar o ${10001}^{\text{o}}$ número primo), quantas iterações seriam necessárias até o programa produzir o $2^{10001^{\text{o}}\text{ número primo}}$?

# --hints--

`primeGeneratingAutomation()` deve retornar `1539669807660924`.

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
