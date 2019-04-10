---
title: Red Black Trees
localeTitle: Árvores pretas vermelhas
---
## Árvores pretas vermelhas

Red-Black Tree é uma Árvore de Busca Binária (BST) de auto balanceamento onde cada nó segue as seguintes regras.

1.  Cada nó tem dois filhos, coloridos de vermelho ou preto.
2.  Cada nó da folha da árvore é sempre preto.
3.  Cada nó vermelho tem os dois filhos coloridos de preto.
4.  Não há dois nós vermelhos adjacentes (um nó vermelho não pode ter um pai vermelho ou um filho vermelho).
5.  Cada caminho da raiz para um nó de folha de árvore tem o mesmo número de nós pretos (chamado de "altura negra").

Estilo de referência: ![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fibonacci_Tree_as_Red-Black_Tree.svg/2000px-Fibonacci_Tree_as_Red-Black_Tree.svg.png "Exemplo de Fibonacci de árvores pretas vermelhas")

### Por que árvores vermelhas e pretas?

A maioria das operações do BST (por exemplo, busca, max, min, insert, delete ... etc) tomam o tempo O (h) onde h é a altura do BST. O custo dessas operações pode se tornar O (n) para uma árvore binária distorcida. Se nos certificarmos de que a altura da árvore permanece O (Logn) após cada inserção e exclusão, então podemos garantir um limite superior de O (Logn) para todas essas operações. A altura de uma árvore Red Black é sempre O (Logn), onde n é o número de nós na árvore.

### Comparação com o AVL Tree

As árvores AVL são mais equilibradas em comparação com as árvores pretas vermelhas, mas podem causar mais rotações durante a inserção e a exclusão. Portanto, se o seu aplicativo envolver muitas inserções e exclusões frequentes, as árvores Red Black devem ser preferidas. E se as inserções e exclusões forem menos frequentes e a pesquisa for uma operação mais freqüente, a árvore do AVL deverá ser preferida em relação à Red Black Tree.

### Árvore vermelha-preta de inclinação esquerda

Uma árvore esquerda-vermelha (LLRB) é um tipo de árvore de busca binária de autoequilíbrio. É uma variante da árvore vermelho-preto e garante a mesma complexidade assintótica para operações, mas foi projetada para ser mais fácil de implementar.

### Propriedades das árvores vermelhas e pretas inclinadas à esquerda

Todos os algoritmos de árvore vermelho-preto que foram propostos são caracterizados por um tempo de busca de pior caso limitado por um múltiplo constante pequeno de log N em uma árvore de N chaves, e o comportamento observado na prática é tipicamente aquele mesmo múltiplo mais rápido que o pior caso ligado, próximo aos nós log ótimos examinados, que seriam observados em uma árvore perfeitamente balanceada.

Especificamente, em uma árvore 2-3 vermelho-preto inclinada para a esquerda construída a partir de N chaves aleatórias: -> Uma busca bem sucedida aleatória examina log2 N - 0.5 nós. -> A altura média da árvore é de cerca de 2 log2 N

#### Mais Informações:

*   [Vídeo de Algoritmos e Estruturas de Dados](https://www.youtube.com/watch?v=2Ae0D6EXBV4)