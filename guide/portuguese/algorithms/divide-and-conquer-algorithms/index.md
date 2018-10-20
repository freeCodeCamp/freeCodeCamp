---
title: Divide and Conquer Algorithms
localeTitle: Dividir e Conquistar Algoritmos
---
## Dividir e Conquistar Algoritmos

Divide and Conquer | (Introdução) Como Greedy e Dynamic Programming, Divide and Conquer é um paradigma algorítmico. Um algoritmo Divide and Conquer típico resolve um problema usando três etapas a seguir.

1.  Divide: divide o problema em subproblemas do mesmo tipo.
2.  Conquistar: Resolver recursivamente esses subproblemas
3.  Combine: combine adequadamente as respostas

A seguir estão alguns algoritmos padrão que são algoritmos de divisão e conquista.

1) Pesquisa Binária é um algoritmo de busca. Em cada etapa, o algoritmo compara o elemento de entrada x com o valor do elemento do meio na matriz. Se os valores corresponderem, retorne o índice do meio. Caso contrário, se x for menor que o elemento do meio, o algoritmo se repetirá para o lado esquerdo do elemento do meio, caso contrário, ocorrerá novamente no lado direito do elemento do meio.

2) Quicksort é um algoritmo de classificação. O algoritmo escolhe um elemento pivô, reorganiza os elementos da matriz de tal forma que todos os elementos menores que o elemento pivotante escolhido se movam para o lado esquerdo do pivô, e todos os elementos maiores se movam para o lado direito. Finalmente, o algoritmo classifica recursivamente as sub-matrizes à esquerda e à direita do elemento pivot.

3) Merge Sort é também um algoritmo de ordenação. O algoritmo divide o array em duas metades, classifica-as recursivamente e finalmente mescla as duas metades classificadas.

4) Par de Pontos Mais Próximo O problema é encontrar o par de pontos mais próximo em um conjunto de pontos no plano xy. O problema pode ser resolvido no tempo O (n ^ 2) calculando as distâncias de cada par de pontos e comparando as distâncias para encontrar o mínimo. O algoritmo Dividir e Conquistar resolve o problema no tempo O (nLogn).

5) O Algoritmo de Strassen é um algoritmo eficiente para multiplicar duas matrizes. Um método simples para multiplicar duas matrizes precisa de 3 loops aninhados e é O (n ^ 3). O algoritmo de Strassen multiplica duas matrizes no tempo O (n ^ 2.8974).

6) Cooley – Tukey O algoritmo Fast Fourier Transform (FFT) é o algoritmo mais comum para FFT. É um algoritmo de divisão e conquista que funciona no tempo O (nlogn).

7) O algoritmo de Karatsuba foi o primeiro algoritmo de multiplicação assintoticamente mais rápido que o algoritmo de "escola primária" quadrática. Reduz a multiplicação de dois números de n dígitos para no máximo de n = 1.585 (que é a aproximação de log de 3 na base 2) produtos de dígito único. Portanto, é mais rápido que o algoritmo clássico, que requer n ^ 2 produtos de um dígito.

### Dividir e Conquistar (D & C) vs Programação Dinâmica (DP)

Ambos os paradigmas (D & C e DP) dividem o problema dado em subproblemas e resolvem subproblemas. Como escolher um deles para um determinado problema? Divide and Conquer deve ser usado quando os mesmos subproblemas não forem avaliados várias vezes. Caso contrário, a programação dinâmica ou a memorização devem ser usadas.

Por exemplo, a Pesquisa Binária é um algoritmo de Dividir e Conquistar, nós nunca avaliamos os mesmos subproblemas novamente. Por outro lado, para calcular o número de Fibonacci, a programação dinâmica deve ser preferida.