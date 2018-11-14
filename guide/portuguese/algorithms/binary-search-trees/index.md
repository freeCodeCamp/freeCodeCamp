---
title: Binary Search Trees
localeTitle: Árvores de busca binária
---
## Árvores de busca binária

![Árvore de busca binária](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

Uma árvore é uma estrutura de dados composta de nós que possui as seguintes características:

1.  Cada árvore tem um nó raiz (no topo) tendo algum valor.
2.  O nó raiz tem zero ou mais nós filhos.
3.  Cada nó filho possui zero ou mais nós filhos e assim por diante. Isso cria uma subárvore na árvore. Cada nó tem sua própria subárvore, composta de seus filhos e filhos, etc. Isso significa que cada nó sozinho pode ser uma árvore.

Uma árvore de pesquisa binária (BST) adiciona essas duas características:

1.  Cada nó tem um máximo de até dois filhos.
2.  Para cada nó, os valores de seus nós descendentes à esquerda são menores que os do nó atual, que por sua vez é menor que os nós descendentes à direita (se houver).

O BST é construído com base na idéia do algoritmo de [busca binária](https://guide.freecodecamp.org/algorithms/search-algorithms/binary-search) , que permite a rápida pesquisa, inserção e remoção de nós. A maneira como eles são configurados significa que, em média, cada comparação permite que as operações pule cerca de metade da árvore, de modo que cada pesquisa, inserção ou exclusão leve o tempo proporcional ao logaritmo do número de itens armazenados na árvore, `O(log n)` No entanto, algumas vezes o pior caso pode acontecer, quando a árvore não está balanceada e a complexidade do tempo é `O(n)` para todas as três dessas funções. É por isso que as árvores de auto-equilíbrio (AVL, vermelho-preto, etc.) são muito mais eficazes do que o BST básico.

**Exemplo de cenário de pior caso:** Isso pode acontecer quando você continua adicionando nós que são _sempre_ maiores que o nó antes (é pai), o mesmo pode acontecer quando você sempre adiciona nós com valores menores que seus pais.

### Operações básicas em um BST

*   Criar: cria uma árvore vazia.
*   Inserir: insira um nó na árvore.
*   Pesquisar: procura um nó na árvore.
*   Apagar: apaga um nó da árvore.

#### Crio

Inicialmente, uma árvore vazia sem nós é criada. A variável / identificador que deve apontar para o nó raiz é inicializado com um valor `NULL` .

#### Pesquisa

Você sempre começa a pesquisar na árvore no nó raiz e desce a partir daí. Você compara os dados em cada nó com o que você está procurando. Se o nó comparado não corresponder, então você vai para o filho direito ou para o filho esquerdo, o que depende do resultado da comparação a seguir: Se o nó que você está procurando for menor do que aquele com o qual você estava comparando, você prossegue para a criança esquerda, caso contrário (se for maior) você vai para a criança certa. Por quê? Como o BST é estruturado (conforme sua definição), o filho certo é sempre maior que o pai e o filho esquerdo é sempre menor.

#### Inserir

É muito semelhante à função de pesquisa. Você começa novamente na raiz da árvore e desce recursivamente, procurando o lugar certo para inserir nosso novo nó, da mesma forma como explicado na função de busca. Se um nó com o mesmo valor já estiver na árvore, você poderá optar por inserir a duplicata ou não. Algumas árvores permitem duplicatas, outras não. Depende da implementação certa.

#### Eliminação

Existem 3 casos que podem acontecer quando você está tentando excluir um nó. Se tiver,

1.  Nenhuma subárvore (sem filhos): Esta é a mais fácil. Você pode simplesmente excluir o nó, sem precisar de ações adicionais.
2.  Uma subárvore (um filho): você precisa garantir que depois que o nó for excluído, seu filho será conectado ao pai do nó excluído.
3.  Duas subárvores (dois filhos): você precisa localizar e substituir o nó que deseja excluir com seu sucessor (o nó letfmost na subárvore direita).

A complexidade de tempo para criar uma árvore é `O(1)` . A complexidade de tempo para procurar, inserir ou excluir um nó depende da altura da árvore `h` , então o pior caso é `O(h)` .

#### Antecessor de um nó

Os predecessores podem ser descritos como o nó que viria logo antes do nó em que você está atualmente. Para localizar o predecessor do nó atual, observe o maior / maior nó de folha na subárvore esquerda.

#### Sucessor de um nó

Os sucessores podem ser descritos como o nó que viria logo após o nó em que você está atualmente. Para encontrar o sucessor do nó atual, observe o nó da folha mais à esquerda / menor na subárvore direita.

### Tipos especiais de BT

*   Pilha
*   Árvore vermelho-preto
*   B-tree
*   Árvore Splay
*   Árvore N-ary
*   Trie (árvore Radix)

### Tempo de execução

**Estrutura de dados: Array**

*   Desempenho de pior caso: `O(log n)`
*   Melhor desempenho de caso: `O(1)`
*   Desempenho médio: `O(log n)`
*   Pobre complexidade do espaço: `O(1)`

Onde `n` é o número de nós no BST.

### Implementação do BST

Aqui está uma definição para um nó BST com alguns dados, fazendo referência a seus nós filhos esquerdo e direito.

```c
struct node { 
   int data; 
   struct node *leftChild; 
   struct node *rightChild; 
 }; 
```

#### Operação de pesquisa

Sempre que um elemento for pesquisado, inicie a pesquisa no nó raiz. Então, se os dados forem menores que o valor da chave, procure o elemento na subárvore esquerda. Caso contrário, procure o elemento na subárvore direita. Siga o mesmo algoritmo para cada nó.

```c
struct node* search(int data){ 
   struct node *current = root; 
   printf("Visiting elements: "); 
 
   while(current->data != data){ 
 
      if(current != NULL) { 
         printf("%d ",current->data); 
 
         //go to left tree 
         if(current->data > data){ 
            current = current->leftChild; 
         }//else go to right tree 
         else { 
            current = current->rightChild; 
         } 
 
         //not found 
         if(current == NULL){ 
            return NULL; 
         } 
      } 
   } 
   return current; 
 } 
```

#### Inserir operação

Sempre que um elemento for inserido, primeiro localize seu local apropriado. Comece a pesquisar no nó raiz e, se os dados forem menores que o valor da chave, procure o local vazio na subárvore esquerda e insira os dados. Caso contrário, procure o local vazio na subárvore direita e insira os dados.

```c
void insert(int data) { 
   struct node *tempNode = (struct node*) malloc(sizeof(struct node)); 
   struct node *current; 
   struct node *parent; 
 
   tempNode->data = data; 
   tempNode->leftChild = NULL; 
   tempNode->rightChild = NULL; 
 
   //if tree is empty 
   if(root == NULL) { 
      root = tempNode; 
   } else { 
      current = root; 
      parent = NULL; 
 
      while(1) { 
         parent = current; 
 
         //go to left of the tree 
         if(data < parent->data) { 
            current = current->leftChild; 
            //insert to the left 
 
            if(current == NULL) { 
               parent->leftChild = tempNode; 
               return; 
            } 
         }//go to right of the tree 
         else { 
            current = current->rightChild; 
 
            //insert to the right 
            if(current == NULL) { 
               parent->rightChild = tempNode; 
               return; 
            } 
         } 
      } 
   } 
 } 
```

Árvores de busca binária (BSTs) também nos dão acesso rápido a antecessores e sucessores. Os predecessores podem ser descritos como o nó que viria logo antes do nó em que você está atualmente.

*   Para localizar o predecessor do nó atual, observe o nó da folha mais à direita / maior na subárvore esquerda. Os sucessores podem ser descritos como o nó que viria logo após o nó em que você está atualmente.
*   Para localizar o sucessor do nó atual, observe o nó da folha mais à esquerda / menor na subárvore direita.

### Vamos dar uma olhada em alguns procedimentos operando em árvores.

Como as árvores são definidas recursivamente, é muito comum escrever rotinas que operam em árvores que são elas próprias recursivas.

Então, por exemplo, se quisermos calcular a altura de uma árvore, essa é a altura de um nó raiz, podemos ir em frente e recursivamente fazer isso, passando pela árvore. Então podemos dizer:

*   Por exemplo, se tivermos uma árvore nula, sua altura será 0.
*   Caso contrário, somos 1 mais o máximo da árvore de filhos à esquerda e a árvore de filhos certa.
*   Então, se olharmos para uma folha, por exemplo, essa altura seria 1, porque a altura da criança esquerda é nula, é 0, e a altura da criança nula direita também é 0. Então, o máximo disso é 0, então 1 mais 0

#### Algoritmo de altura (árvore)
```
if tree = nil: 
    return 0 
 return 1 + Max(Height(tree.left),Height(tree.right)) 
```

#### Aqui está o código em C ++
```
int maxDepth(struct node* node) 
 { 
    if (node==NULL) 
        return 0; 
   else 
   { 
       int rDepth = maxDepth(node->right); 
       int lDepth = maxDepth(node->left); 
 
       if (lDepth > rDepth) 
       { 
           return(lDepth+1); 
       } 
       else 
       { 
            return(rDepth+1); 
       } 
   } 
 } 
```

Também poderíamos ver o cálculo do tamanho de uma árvore que é o número de nós.

*   Novamente, se tivermos uma árvore nula, temos zero nós.
*   Caso contrário, temos o número de nós no filho à esquerda mais 1 para nós mesmos mais o número de nós no filho certo. Então 1 mais o tamanho da árvore esquerda mais o tamanho da árvore certa.

#### Algoritmo de tamanho (árvore)
```
if tree = nil 
    return 0 
 return 1 + Size(tree.left) + Size(tree.right) 
```

#### Aqui está o código em C ++
```
int treeSize(struct node* node) 
 { 
    if (node==NULL) 
        return 0; 
    else 
        return 1+(treeSize(node->left) + treeSize(node->right)); 
 } 
```

### Vídeos relevantes no canal do YouTube freeCodeCamp

*   [Árvore de busca binária](https://youtu.be/5cU1ILGy6dM)
*   [Árvore de busca binária: Traversal e Altura](https://youtu.be/Aagf3RyK3Lw)

### A seguir estão os tipos comuns de árvores binárias:

Árvore Binária Completa / Árvore Binária Restrita: Uma Árvore Binária é completa ou estrita se cada nó tiver exatamente 0 ou 2 filhos.
```
           18 
       /       \ 
     15         30 
    /  \        /  \ 
  40    50    100   40 
```

Na Árvore Binária Completa, o número de nós de folha é igual ao número de nós internos mais um.

Árvore Binária Completa: Uma Árvore Binária é uma Árvore Binária completa se todos os níveis estiverem completamente preenchidos, exceto possivelmente o último nível e o último nível tiver todas as chaves o mais possível
```
           18 
       /       \ 
     15         30 
    /  \        /  \ 
  40    50    100   40 
 /  \   / 
 8   7  9 

```