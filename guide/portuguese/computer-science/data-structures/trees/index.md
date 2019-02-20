---
title: Trees
localeTitle: Árvores
---
# Árvores

Uma estrutura de dados em árvore pode ser definida recursivamente (localmente) como uma coleção de nós (começando em um nó raiz), onde cada nó é uma estrutura de dados que consiste em um valor, junto com uma lista de referências a nós (os "filhos") , com as restrições de que nenhuma referência é duplicada e nenhuma aponta para a raiz. Uma árvore sem nós é chamada de árvore nula ou vazia.

Uma árvore binária é uma estrutura de dados não linear que consiste em nós, onde cada nó possui os seguintes 3 componentes:

**Elemento de dados** : armazena qualquer tipo de dados no nó **Ponteiro esquerdo** : aponta para a subárvore no lado esquerdo do nó **Ponteiro** para a **direita** : aponta para a subárvore no lado direito do nó Como o nome sugere, o elemento de dados armazena qualquer tipo de dado no nó. Os ponteiros esquerdo e direito apontam para árvores binárias no lado esquerdo e direito do nó, respectivamente.

Se uma árvore estiver vazia, ela é representada por um ponteiro nulo.

## Terminologia usada nas árvores:

**Raiz** : O nó superior de uma árvore.

**Criança** : Um nó conectado diretamente a outro nó ao se afastar da raiz.

**Pai** : A noção inversa de uma criança.

**Irmãos** : Um grupo de nós com o mesmo pai.

**Descendente** : Um nó acessível por processo repetido de pai para filho.

**Antepassado** : Um nó acessível por processo repetido de filho para pai.

**Filial** (nó interno): Um nó de uma árvore que possui nós filhos.

**Folha** (menos comumente chamado de nó externo): Um nó sem filhos.

**Grau** : O número de subárvores de um nó.

**Borda** : A conexão entre um nó e outro.

**Caminho** : Uma sequência de nós e arestas conectando um nó com um descendente.

**Nível** : O nível de um nó é definido por 1 + (o número de conexões entre o nó e a raiz).

**Altura da árvore** : A altura de uma árvore é a altura do seu nó raiz.

**Profundidade** : A profundidade de um nó é o número de arestas do nó raiz da árvore para o nó.

**Floresta** : Uma floresta é um conjunto de árvores disjuntas n ≥ 0.

### Alguns tipos populares de árvores:

*   Árvore binária
*   Árvore de busca binária
*   Árvore AVL
*   Árvore negra vermelha
*   Árvore Splay
*   Huffmann Tree

### Usos comuns

*   Representando dados hierárquicos
*   Armazenar dados de uma maneira que facilite a pesquisa
*   Representando listas de dados classificadas
*   Algoritmos de roteamento

### Código de um nó de árvore

``` C
c_cpp nó de estrutura { 
  dados int; // elemento de dados struct node 
  esquerda; // Ponteiro para o nó esquerdo struct node 
  direito; // Ponteiro para o nó direito 
};
```

#### Mais Informações:

*   [Notas da lição da CMU](http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm)
*   [Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure))
