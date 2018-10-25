---
title: AVL Trees
localeTitle: AVL Trees
---
## AVL Trees

Uma árvore AVL é um subtipo da árvore de pesquisa binária.

Um BST é uma estrutura de dados composta por nós. Tem as seguintes garantias:

1.  Cada árvore tem um nó raiz (no topo).
2.  O nó raiz tem zero ou mais nós filhos.
3.  Cada nó filho tem zero ou mais nós filhos e assim por diante.
4.  Cada nó tem até dois filhos.
5.  Para cada nó, seus descendentes à esquerda são menores que o nó atual, que é menor que os descendentes certos.

As árvores AVL têm uma garantia adicional:

6.  A diferença entre a profundidade das subárvores direita e esquerda não pode ser maior que um. Para manter essa garantia, uma implementação de um AVL incluirá um algoritmo para reequilibrar a árvore ao adicionar um elemento adicional que viraria essa garantia.

As árvores AVL têm uma pior consulta, inserção e exclusão de tempo de O (log n).

### Rotação Direita

![Rotação Direita da Árvore AVL](https://raw.githubusercontent.com/HebleV/valet_parking/master/images/avl_right_rotation.jpg)

### Rotação Esquerda

![Rotação esquerda da árvore AVL](https://raw.githubusercontent.com/HebleV/valet_parking/master/images/avl_left_rotation.jpg)

### Processo de Inserção AVL

Você fará uma inserção semelhante a uma inserção normal da Árvore de pesquisa binária. Após a inserção, você corrige a propriedade AVL usando as rotações esquerda ou direita.

*   Se houver um desequilíbrio no filho esquerdo da subárvore direita, você executará uma rotação esquerda-direita.
*   Se houver um desequilíbrio no filho esquerdo da subárvore esquerda, execute uma rotação à direita.
*   Se houver um desequilíbrio no filho direito da subárvore direita, execute uma rotação à esquerda.
*   Se houver um desequilíbrio no filho direito da subárvore esquerda, execute uma rotação direita-esquerda.

#### Mais Informações:

[YouTube - Árvore do AVL](https://www.youtube.com/watch?v=7m94k2Qhg68)

Uma árvore AVL é uma árvore de pesquisa binária de balanceamento automático. Uma árvore AVL é uma árvore de pesquisa binária que possui as seguintes propriedades: -> As sub-árvores de cada nó diferem em altura em no máximo um. -> Cada sub-árvore é uma árvore AVL.

A árvore AVL verifica a altura das subárvores esquerda e direita e garante que a diferença não seja maior que 1. Essa diferença é chamada de fator de equilíbrio. A altura de uma árvore AVL é sempre O (Logn), onde n é o número de nós na árvore.

Rotações AVL Tree: -

Na árvore AVL, depois de realizar todas as operações, como inserção e exclusão, precisamos verificar o fator de equilíbrio de cada nó na árvore. Se cada nó satisfizer a condição do fator de balanceamento, concluímos a operação, caso contrário, devemos torná-lo balanceado. Usamos operações de rotação para equilibrar a árvore sempre que a árvore estiver se desequilibrando devido a qualquer operação.

As operações de rotação são usadas para equilibrar uma árvore. Há quatro rotações e elas são classificadas em dois tipos: -> Rotação única esquerda (rotação LL) Em LL Rotation, cada nó move uma posição para a esquerda da posição atual. -> Rotação Única Direita (Rotação RR) Na Rotação RR, cada nó move uma posição para a direita a partir da posição atual. -> Rotação Esquerda Direita (Rotação LR) A rotação LR é uma combinação de rotação única esquerda seguida de rotação única direita. Na rotação LR, primeiro cada nó move uma posição para a esquerda e depois uma posição para a direita a partir da posição atual. -> Rotação Esquerda Direita (Rotação RL) A Rotação RL é uma combinação de rotação única direita seguida de rotação única esquerda. Na Rotação RL, primeiro cada nó move uma posição para a direita e depois uma posição para a esquerda a partir da posição atual.