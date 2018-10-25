---
title: B Trees
localeTitle: Árvores B
---
## Árvores B

# Introdução

B-Tree é uma árvore de pesquisa de auto-equilíbrio. Na maioria das outras árvores de pesquisa de autoequilíbrio (como AVL e Red Black Trees), supõe-se que tudo esteja na memória principal. Para entender o uso de B-Trees, devemos pensar em uma enorme quantidade de dados que não podem caber na memória principal. Quando o número de chaves é alto, os dados são lidos do disco na forma de blocos. O tempo de acesso ao disco é muito alto comparado ao tempo de acesso da memória principal. A ideia principal de usar o B-Trees é reduzir o número de acessos ao disco. A maioria das operações em árvore (pesquisa, inserção, exclusão, max, min, etc.) requerem acessos ao disco O (h) onde h é a altura da árvore. B-tree é uma árvore gorda. A altura de B-Trees é mantida baixa colocando o máximo possível de chaves em um nó B-Tree. Geralmente, um tamanho de nó B-Tree é mantido igual ao tamanho do bloco de disco. Como h é baixo para o B-Tree, o total de acessos ao disco na maioria das operações é reduzido significativamente em comparação com as árvores balanceadas de pesquisa, como AVL Tree, Red Black Tree, etc.etc.

Propriedades da B-Tree: 1) Todas as folhas estão no mesmo nível. 2) Uma Árvore B é definida pelo termo grau mínimo 't'. O valor de t depende do tamanho do bloco de disco. 3) Cada nó, exceto o root, deve conter pelo menos chaves t-1. Raiz pode conter no mínimo 1 chave. 4) Todos os nós (incluindo raiz) podem conter no máximo 2t - 1 chaves. 5) Número de filhos de um nó é igual ao número de chaves nele mais 1. 6) Todas as chaves de um nó são classificadas em ordem crescente. O filho entre duas chaves k1 e k2 contém todas as chaves no intervalo de k1 e k2. 7) B-Tree cresce e encolhe a partir da raiz que é diferente da árvore de busca binária. Pesquisa Binária As árvores crescem para baixo e também encolhem para baixo. 8) Como outras árvores balanceadas de busca, a complexidade de tempo para pesquisar, inserir e deletar é O (Logn).

Pesquisa: A pesquisa é semelhante à pesquisa na Árvore de pesquisa binária. Deixe a chave a ser pesquisada ser k. Começamos da raiz e percorremos recursivamente. Para cada nó não-folha visitado, se o nó tiver chave, simplesmente retornaremos o nó. Caso contrário, recorremos ao filho apropriado (o filho que está logo antes da primeira chave maior) do nó. Se chegarmos a um nó da folha e não encontrarmos k no nó da folha, retornamos NULL.

Atravessar: Traversal também é semelhante a Inorder traversal da Binary Tree. Começamos do filho mais à esquerda, imprimimos recursivamente o filho mais à esquerda e repetimos o mesmo processo para os filhos e chaves restantes. No final, recursivamente imprimir o filho mais à direita.