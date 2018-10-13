---
title: Linked Lists
localeTitle: Listas Vinculadas
---
## Listas Vinculadas

#### Uma Lista vinculada é uma estrutura de dados de _acesso linear_ simples.

Uma lista encadeada é uma estrutura de dados simples, mas pode ser usada para implementar estruturas de dados mais complicadas, como filas, pilhas, etc. Há três tipos de listas vinculadas:

1.  Lista vinculada simples
2.  Lista Duplicada Vinculada (ou Lista Ligada Dupla Terminada)
3.  Listas Ligadas Circulares (Ring Buffer)

Lista vinculada | (Introdução) Como arrays, Linked List é uma estrutura de dados linear. Ao contrário das matrizes, os elementos da lista vinculada não são armazenados no local contíguo; os elementos são ligados usando ponteiros ou como no exemplo usando Javascript, uma referência ao próximo nó.

Se você quiser entender as listas vinculadas, ajuda a entender as **matrizes** .

Para recapitular, uma matriz é tradicionalmente uma estrutura de dados **linear** **estática** que suporta acesso aleatório de tempo constante. Inserções e exclusões nem sempre são constantes.

Vantagens sobre matrizes 1) tamanho dinâmico 2) Facilidade de inserção / exclusão

\`\` \` static = size fixed no momento da criação linear = armazenado linearmente na memória como um único bloco
```
#### Arrays have the following disadvantages:- 
 1. Arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. 
 2. Arrays are also expensive to maintain new insertions and deletions. 
 
 Linked Lists address some of the limitations of arrays. Unlike an array, where all the elements are stored in a contiguous block of memory, in a linked list each element is a separate object and has a **link** to the next element in sequence. This allows a linked list to start with space for only one element, and grow to accomodate an arbitrary number of elements by allocating memory as and when needed. 
 
 Deleting elements is also simply handled by manipulating links. 
 
 Once you understand the Simple Linked List (which from here on will be referred as **'List'**), you can move on to the Doubly Linked List. 
 
 A List as illustrated below is made up of the following components:- 
```

```
     head 
         | 
         | 
    +---+---+     +---+---+       +----+------+ 
    | 1  | o----->|  2  | o-----> |  3 |   φ  | 
    +---+---+     +---+---+       +----+------+ 
                                          | 
                                          | 
                                          tail 
```

```
| Node      | Significance     | 
 | ----------|-------------| 
 | HEAD      | Beginning of the List| 
 | Node(s)   | Dynamically allocated self-referential block contain 1 Data element and a link to the next node | 
 | TAIL      | End of the List | 
 
 Most common operations available on List are, 
 1. AddFirst - Inserts an element at the front of the List. 
 2. AddLast - Inserts an element at the tail of the List. 
 3. InsertAfter - Inserts an element after an existing element in the List. 
 4. InsertBefore - Inserts an element before an existing element in the List. 
 5. Remove - Remove an existing element from the List. 
 6. Access / Peek - Access an existing element from the List. 
 7. Size / Count - Returns the number of elements currently present in the List. 
 8. IsEmpty - Check whether the List is empty or not. 
 
 #### Implementation of a Simple Linked List in C++ 
```

cpp

# incluir

usando namespace std;

Número da estrutura { int num; struct Number \* tail; };

typedef struct Number N;

lista de classes { privado: N _cabeça,_ fim; contagem int;
```
public: 
    void display(); 
    void insertBefore(int); 
    List(); 
```

};

List :: List () { head = NULL; end = NULL; contagem = 0; }

void List :: insertBefore (int dados) { N \* nó; nó = novo N; node-> num = data; node-> tail = NULL;
```
    if(!head){ 
        head=end=node; 
    } 
 
    else{ 
        node->tail=head; 
        head=node; 
    } 
 
    count++; 
```

}

void List :: display () { cout << "Número de nós na lista =" << count << endl; N \* nó; nó = cabeça; while (nó) {
```
    cout<<node->num<<endl; 
    node=node->tail; 
 
 } 
```

} int main () { Lista l1;
```
l1.insertBefore(10); 
 l1.insertBefore(20); 
 l1.insertBefore(30); 
 l1.insertBefore(40); 
 l1.insertBefore(50); 
 l1.display(); 
 
 return 0; 
```

}
```
#### OUTPUT 
```

Número de nós na lista = 5 50 40 30 20 10
```
#### Explanation 
```

cpp

Número da estrutura { int num; struct Number \* tail;

};
```
Declaration of a structure(node) with 2 data members 
 * `num` holds the integer data value 
 * `*tail` pointer points to the next node in the List 
```

cpp lista de classes { privado: N _cabeça,_ fim; contagem int;
```
public: 
    void display(); 
    void insertBefore(int); 
    List(); 
```

};
```
The List class declares the Linked List. 
 * `*head` points to the first node in the List 
 * `*end` points to the last node in the List 
 * `count` holds the value for number of nodes in the list 
 * `display()` is used to print the complete list on the console 
 * `insertBefore()` is used to insert a new node 
 * `List()` is a defualt constructor 
```

cpp List :: List () { head = NULL; end = NULL; contagem = 0; }
```
The default constructor is used to initialize the data members of the List class with default values 
```

cpp void List :: insertBefore (int dados) { N \* nó; nó = novo N; node-> num = data; node-> tail = NULL;
```
    if(!head){ 
        head=end=node; 
    } 
 
    else{ 
        node->tail=head; 
        head=node; 
    } 
 
    count++; 
```

}
```
* A new node is created. 
 * `num` is assigned the value of `data`. 
 * `tail` is pointing to Null. 
 * The `if(!head)` condition is true only when there are no elements in the List. 
 * When this is the case, `head` and `end` are both pointing to the newly created node. 
 * Control will move to the `else` section, when there is at least one node in the list. 
 * In this case, `tail` pointer in the newly created node is made to point to the `head`(first) node. 
 * The `head` pointer then points to the newly created node to make it the first node in the list. 
 * `count` is incremented by 1    as each new node is added. 
```

cpp void List :: display () { N \* nó; nó = cabeça; while (nó) { cout num <
```
The display function is used to run through the list and print the total number of nodes and values of `num` on the console. 
 
 #### Applications 
 * Base Data Structure for Vector, Array, Queue, Stack, etc 
 * Polynomial Representation 
 * Ring Buffer 
 
 Drawbacks: 
 1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists. 
 2) Extra memory space for a pointer is required with each element of the list 
 
 
 Types: 
 1) (Singly) linked lists contain nodes which have a data field as well as a 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal. 
 
 2) (Doubly) In a 'doubly linked list', each node contains, besides the next-node link, a second link field pointing to the 'previous' node in the sequence. The two links may be called 'forward('s') and 'backwards', or 'next' and 'prev'('previous'). 
 
 Example in Javascript: 
```

function LinkedList () { this.head = null; this.tail = null; }
```
// Node has three properties value, next, prev 
 
 function Node (value, next, prev) { 
 
    this.value = value; 
 
 // A 'pointer' referencing to the next Node (if present) otherwise null 
 
    this.next = next; 
 
 // A 'pointer' referencing the previous Node, otherwise null 
 
    this.prev = prev; 
 } 
 
 LinkedList.prototype.addToHead = function(value) { 
 
    let newNode = new Node(value, this.head, null); 
 
    if (this.head) this.head.prev = newNode; 
 
    else this.tail = newNode; 
 
    this.head = newNode; 
 } 
```

```
Now Execute code 
```

deixe LL = novo LinkedList ();
```
LL.addToHead(100); 
 
 LL.addToHead(200); 
 
 console.log(LL); 
```

```
Representation in C: 
 A linked list is represented by a pointer to the first node of the linked list. The first node is called head. If the linked list is empty, then value of head is NULL. 
 Each node in a list consists of at least two parts: 
 1) data 
 2) pointer to the next node 
 In C, we can represent a node using structures. Below is an example of a linked list node with an integer data. 
 In Java, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type 
```

C // Um ​​nó da lista ligada Nó struct { dados int; struct Node \* next; };
```
# Linked List with three elements 
```

c // Um ​​programa C simples para introduzir // uma lista encadeada

# incluir

# incluir

Nó struct { dados int; struct Node \* next; };

// Programa para criar um link simples // lista com 3 nós int main () { struct Node \* head = NULL; struct Node \* second = NULL; struct Node \* third = NULL;

// aloca 3 nós no heap  
head = (struct Node _) malloc (tamanho de (struct Node)); segundo = (struct Node_ ) malloc (sizeof (struct Node)); terceiro = (struct Node \*) malloc (sizeof (struct Node));

/ \* Três blocos foram alocados dinamicamente. Nós temos ponteiros para esses três blocos como primeiro, segundo e terceiro  
cabeça segundo terço | | | | | | + --- + ----- + + ---- + ---- + + ---- + ---- + | # | # | | # | # | | # | # | + --- + ----- + + ---- + ---- + + ---- + ---- +

\# representa qualquer valor aleatório. Os dados são aleatórios porque não atribuímos nada ainda \* /

head-> data = 1; // atribui dados no primeiro nó cabeça-> próximo = segundo; // Link primeiro nó com o segundo nó

/ \* dados foram atribuídos à parte de dados do primeiro bloco (bloco apontada pela cabeça). E o próximo ponteiro do primeiro bloco aponta para segundo. Então, ambos estão ligados.
```
   head          second         third 
    |              |              | 
    |              |              | 
 +---+---+     +----+----+     +-----+----+ 
 | 1  | o----->| #  | #  |     |  #  | #  | 
 +---+---+     +----+----+     +-----+----+ 
```

\* /

segundo-> dados = 2; // atribui dados ao segundo nó segundo-> próximo = terceiro; // Link do segundo nó com o terceiro nó

/ \* dados foram atribuídos à parte de dados do segundo bloco (bloco apontado por segundo). E o próximo ponteiro do segundo bloco aponta para o terceiro bloco.  
Então todos os três blocos estão ligados.
```
   head         second         third 
    |             |             | 
    |             |             | 
 +---+---+     +---+---+     +----+----+ 
 | 1  | o----->| 2 | o-----> |  # |  # | 
 +---+---+     +---+---+     +----+----+      */ 
```

terceiro-> dados = 3; // atribui dados ao terceiro nó third-> next = NULL;

/ \* dados foram atribuídos à parte de dados do terceiro bloco (bloco apontado em terceiro). E próximo ponteiro do terceiro bloco é feito NULL para indicar que a lista vinculada é terminada aqui.
```
 We have the linked list ready. 
 
       head 
         | 
         | 
    +---+---+     +---+---+       +----+------+ 
    | 1  | o----->|  2  | o-----> |  3 | NULL | 
    +---+---+     +---+---+       +----+------+ 
 
 
 Note that only head is sufficient to represent the whole list.  We can 
 traverse the complete list by following next pointers.    */ 
```

return 0; } \`\` \`

#### Mais Informações:

*   [Introdução às listas vinculadas](http://www.geeksforgeeks.org/linked-list-set-1-introduction/)
*   [Listas vinculadas (vídeo do YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)