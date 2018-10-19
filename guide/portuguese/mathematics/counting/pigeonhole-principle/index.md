---
title: Pigeonhole Principle
localeTitle: Princípio do Pigeonhole
---
## Princípio do Pigeonhole

O Princípio Pigeonhole é uma formalização matemática de uma observação lógica e intuitiva. Essa observação é melhor compreendida com um exemplo.

### Exemplo

Existem cinco caixas e seis bolas. Cada uma das seis bolas é colocada em uma das cinco caixas. _Deve_ haver pelo menos uma caixa com pelo menos duas bolas. Se cinco bolas são colocadas em cinco caixas de tal forma que nenhuma caixa tem duas bolas, então não importa em qual caixa a sexta bola é colocada, aquela caixa terá mais de uma bola.

### Generalização

Esta observação pode ser generalizada para N caixas e M bolas. Se houver N caixas e M bolas e M> N, então pelo menos uma caixa deve conter várias bolas.

Note que o Princípio do Pombo não nos diz nada sobre qual caixa tem mais de uma bola, ou quantas bolas tem alguma das caixas. O Princípio Pigeonhole indica apenas a existência de uma caixa com várias bolas.

### Uso na Ciência da Computação

O Princípio Pigeonhole geralmente aparece na ciência da computação. Por exemplo, o algoritmo de hashing SHA256 aceita entrada de qualquer tamanho (como uma string) e gera um valor de 256 bits. Como a saída do algoritmo de hash SHA256 é sempre 256 bits, existem 2 ^ 256 hashes possíveis. Embora este seja um número muito grande, há um número infinito de entradas possíveis. Usando a generalização acima, podemos dizer que nosso N = 2 ^ 256 e nosso M = infinito. Como o infinito é maior que 2 ^ 256 (M> N), então, pelo Princípio do Pigeonhole, pelo menos um desses hashes deve ter duas entradas diferentes com hash para o mesmo valor. Os cientistas da computação chamam duas entradas diferentes que compartilham um hash comum de uma colisão.

### Use em problemas gerais de contagem

Podemos usar o Princípio Pigeonhole para provar algumas coisas mais esotéricas também. Um exemplo comum é o problema da contagem de cabelos. A cabeça humana tem entre 0 e 150.000 cabelos. Para se manter seguro, digamos que um humano pode ter até um milhão de cabelos na cabeça. Paris, França, tem uma população de cerca de 2,2 milhões de pessoas. Se classificarmos todos em Paris em caixas com base em quantos cabelos tiverem em sua cabeça, poderemos usar nossa generalização acima para dizer N = 1000000 (o número de caixas, uma caixa para cada contagem possível de cabelos) e M = 2200000 ( a população de Paris, França). Desde M> N, pelo Princípio Pigeonhole, podemos afirmar com certeza que pelo menos duas pessoas em Paris devem ter o mesmo número de cabelos na cabeça.

#### Mais Informações:

*   [Wikipedia - Princípio do Pigeonhole](https://en.wikipedia.org/wiki/Pigeonhole_principle)
*   [Mais exemplos divertidos do Princípio dos Pombos](https://mindyourdecisions.com/blog/2008/11/25/16-fun-applications-of-the-pigeonhole-principle/)