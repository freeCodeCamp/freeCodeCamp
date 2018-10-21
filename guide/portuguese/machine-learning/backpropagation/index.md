---
title: Backpropagation
localeTitle: Retropropagação
---
## Retropropagação

Backprogapation é um subtópico de [redes neurais](../neural-networks/index.md) e é o processo pelo qual você calcula os gradientes de cada nó na rede. Esses gradientes medem o "erro" que cada nó contribui para a camada de saída, portanto, no treinamento de uma rede neural, esses gradientes são minimizados.

Nota: A retropropagação e o aprendizado de máquina em geral exigiam uma familiaridade significativa com a álgebra linear e a manipulação de matrizes. O curso ou leitura sobre este tópico é altamente recomendado antes de tentar entender o conteúdo deste artigo.

### Computação

O processo de retropropagação pode ser explicado em três etapas.

Dada a seguinte

*   m exemplos de treinamento (x, y) em uma rede neural de camadas L
*   g = a função sigmóide
*   Theta (i) = a matriz de transição do ith para o i + 1th layer
*   a (l) = g (z (l)); uma matriz dos valores dos nós na camada l com base em um exemplo de treinamento
*   z (l) = Theta (l-1) a (l-1)
*   Delta um conjunto de matrizes L representando as transições entre a camada i e a camada 1 +
*   d (l) = a matriz dos gradientes da camada l para um exemplo de treinamento
*   D um conjunto de L matricies com os gradientes finais para cada nó
*   lambda o termo de regualrização para a rede

Neste caso, para a matriz M, M 'denotará a transposição da matriz M

1.  Atribua todas as entradas do Delta (i), para i de 1 a L, zero.
2.  Para cada exemplo de treinamento t de 1 a m, faça o seguinte:

*   executar a propagação progressiva em cada exemplo para calcular a (l) e z (l) para cada camada
*   compute d (L) = a (L) - y (t)
*   calcule d (l) = (Theta (l) '• d (l + 1)) • g (z (l)) para l de L-1 a 1
*   incremento Delta (l) por delta (l + 1) • a (l) '

1.  Conecte as matrizes Delta em nossas matrizes derivadas parciais D (l) = 1 \\ m (Delta (l) + lambda <Teta (l)); se eu ≠ 0 D (l) = 1 \\ m? Delta (l); se l = 0

É claro, apenas ver este artigo parece extremamente complicado e deve realmente ser entendido apenas em contextos maiores de redes neurais e aprendizado de máquina. Por favor, olhe as referências para uma melhor compreensão do tópico como um todo.

#### Mais Informações:

*   [Palestra 4 CS231n Introdução às Redes Neurais](https://youtu.be/d14TUNcbn1k?t=354)
*   [Siraj Raval - Backpropagation em 5 minutos](https://www.youtube.com/watch?v=q555kfIFUCM)
*   [Curso de ML de Andrew Ng](https://www.coursera.org/learn/machine-learning/)
*   [Em profundidade, artigo de estilo wiki](https://brilliant.org/wiki/backpropagation/)
*   [Backprop na Wikipédia](https://en.wikipedia.org/wiki/Backpropagation)
*   [Um exemplo de retropropagação passo a passo](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)