---
title: Binomial Distribution
localeTitle: Distribuição binomial
---
## Distribuição binomial

A distribuição binomial descreve a probabilidade de ter exatamente `k` sucessos em `n` tentativas independentes de Bernoulli com probabilidade de sucesso `p` .

Existem quatro condições que devem ser satisfeitas antes que possamos usar a distribuição binomail.

1.  Os ensaios são independentes.
2.  O número de tentativas, `n` , é fixo.
3.  Cada resultado do estudo pode ser classificado como um sucesso ou um fracasso.
4.  A probabilidade de sucesso, `p` , é a mesma para cada tentativa.

### Exemplo

Considere uma experiência de jogar uma moeda justa 10 vezes. Deixe o resultado de um "Heads" ser sucesso e resultado de "Tails" um fracasso.

1.  Jogar uma moeda é uma tentativa do experimento e cada vez que lançamos uma moeda, o resultado obtido é independente do resultado de qualquer outra tentativa.
2.  Estamos jogando a moeda 10 vezes (um valor fixo de `n` ).
3.  Nós decidimos considerar "Heads" como um sucesso e "Tails" como um fracasso.
4.  A probabilidade de obter uma cabeça com uma moeda justa é de 0,5 e isso é o mesmo em cada tentativa.

Todas as quatro condições são satisfeitas, portanto, podemos modelar essa experiência usando a distribuição Binomial.

Vamos encontrar a probabilidade de obter um Heads exatamente uma vez, ou seja, 1 sucesso.

Há 10 lançamentos e qualquer um poderia ter resultado em um resultado de Heads, e cada um desses 10 cenários tem a mesma probabilidade. Assim, a probabilidade final pode ser escrita como: `[# Number of Scenarios] x P(single scenario)`

O primeiro componente da equação acima é o número de maneiras de organizar `k = 1` sucessos entre `n = 10` tentativas. O segundo componente é a probabilidade de qualquer um dos quatro (igualmente prováveis) cenários.

Considere `P(Single Scenario)` sob o caso geral de `k` sucessos e `n - k` falhas em `n` tentativas. Para encontrar o valor, use a regra de multiplicação para eventos independentes:

![](https://cdn-media-1.freecodecamp.org/imgr/YXzUPiB.png)

O número de maneiras de obter `k` sucessos de `n` tentativas pode ser escrito como **n escolha k** :

![](https://cdn-media-1.freecodecamp.org/imgr/AQ3P4vi.png)

Assim, a fórmula geral para obter a probabilidade de observar exatamente `k` sucessos em `n` ensaios independentes é dada por:

![](https://cdn-media-1.freecodecamp.org/imgr/ZErXKtQ.png)

Assim, a probabilidade de obter exatamente um Heads em testes é:

![](https://cdn-media-1.freecodecamp.org/imgr/fN5wOH2.png)

### Média e variância

A média de uma distribuição binomial com `n` tentativas em que `p` é a probabilidade de um sucesso é dada por:

![](https://cdn-media-1.freecodecamp.org/imgr/4ji7JXx.png)

e variância:

![](https://cdn-media-1.freecodecamp.org/imgr/1tPHKHj.png)

#### Mais Informações:

*   [OpenIntro Statistics 3rd Edition (Capítulo 3 - página 145)](https://www.openintro.org/stat/textbook.php?stat_book=os)
*   [Derivando Média e Variância de uma Distribuição Binomial](https://www.youtube.com/watch?v=8fqkQRjcR1M)