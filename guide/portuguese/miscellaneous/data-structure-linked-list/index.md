---
title: Data Structure Linked List
localeTitle: Lista vinculada da estrutura de dados
---
Assim como uma guirlanda é feita com flores, uma lista vinculada é composta de nós. Nós chamamos cada flor nesta guirlanda particular para ser um nó. E cada um dos pontos do nó para o próximo nó nesta lista, assim como ele tem dados (aqui é tipo de flor).

## Tipos

1.  Lista unicamente vinculada

As listas unicamente ligadas contêm nós que possuem um campo de `data` , bem como um `next` campo, que aponta para o próximo nó na sequência. As operações que podem ser executadas em listas unicamente vinculadas são inserção, exclusão e passagem.

\`
```
Singly Link List 
```

* * *
```
   head 
    | 
    | 
  +-----+--+      +-----+--+      +-----+------+ 
  |  1  |o----->  |  2  |o----->  |  3  | NULL | 
  +-----+--+      +-----+--+      +-----+------+ 
```

\`

Aplicação

Implementação interna do CPython, os frames e as variáveis ​​avaliadas são mantidos em uma pilha.

Para isso, precisamos fazer uma iteração somente para a frente e para a cabeça, portanto, apenas a lista vinculada é usada.

1.  Lista Duplicada Vinculada

As listas duplamente encadeadas contêm o nó que tem o campo de `data` , o `next` campo e outro campo de link `prev` apontando para o nó anterior na sequência.

\`

Lista Duplicada Vinculada

* * *
```
          head 
           | 
           | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
  |      |     |o------>  |     |o------>  |     |      | 
  | NULL |  1  |          |  2  |          |  3  | NULL | 
  |      |     |  <------o|     |  <------o|     |      | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
```

\`

Aplicação

O cache do navegador, que permite que você aperte o botão BACK e FORWARD. Aqui, precisamos manter uma lista duplamente vinculada, com `URLs` como campo de dados, para permitir o acesso em ambas as direções. Para ir ao URL anterior, usaremos o campo `prev` e, para ir para a próxima página, usaremos o `next` campo.

1.  Lista vinculada circular

Listas ligadas circulares é uma lista ligada unicamente na qual o último nó, o `next` campo aponta para o primeiro nó na sequência.

\`

Lista vinculada circular

* * *
```
     head 
      | 
      | 
    +-----+--+      +-----+--+      +-----+--+ 
```

\-> | 1 | o -----> | 2 | o -----> | 3 | o ----  
| + ----- + - + + ----- + - + + ----- + - + |  
| |

* * *

\`

**Aplicação**

Problema de timesharing resolvido pelo sistema operacional.

Em um ambiente de tempo compartilhado, o sistema operacional deve manter uma lista de usuários presentes e deve alternadamente permitir que cada usuário use uma pequena parte do tempo da CPU, um usuário por vez. O sistema operacional selecionará um usuário, permitirá que ele use uma pequena quantidade de tempo de CPU e passará para o próximo usuário.

Para este aplicativo, não deve haver nenhum ponteiro NULL, a menos que não haja absolutamente ninguém solicitando tempo de CPU, ou seja, a lista está vazia.

## Operações básicas

1.  Inserção

Para adicionar um novo elemento à lista.

\`

Inserção no começo

* * *

*   Crie um novo nó com dados fornecidos.
*   Aponte o novo nó ao `next` da `head` antiga.
*   Ponto de `head` a este novo nó.

Inserção no meio / fim

* * *

Inserção após o nó X.

*   Crie um novo nó com dados fornecidos.
*   Aponte o novo nó ao `next` do antigo X `next` .
*   O ponto X está ao `next` deste novo nó.  
    \`

**Complexidade do Tempo: O (1)**

1.  Eliminação

Para excluir o elemento existente da lista.

\`

Exclusão no começo

* * *

*   Obter o nó apontado pela `head` como Temp.
*   Ponto de `head` para o Temp `next` .
*   Memória livre usada pelo nó Temp.

Exclusão no meio / fim

* * *

Exclusão após o nó X.

*   Obtenha o nó apontado por `X` como Temp.
*   Do Ponto X `next` à da Temp `next` .
*   Memória livre usada pelo nó Temp.  
    \`

**Complexidade do Tempo: O (1)**

1.  Traversing

Para viajar pela lista.

\`

Traversal

* * *

*   Obter o nó apontado pela `head` como atual.
*   Verifique se Current não é nulo e exiba-o.
*   Ponto atual para o atual `next` e passar para o passo acima.  
    \`

**Complexidade do tempo: O (n) // Aqui n é o tamanho da lista de links**

## Implementação

### Implementação de C ++ da lista ligada individualmente
```
// Header files 
 #include <iostream> 
 
 struct node 
 { 
    int data; 
    struct node *next; 
 }; 
 
 // Head pointer always points to first element of the linked list 
 struct node *head = NULL; 
```

#### Imprimindo dados em cada nó
```
// Display the list 
 void printList() 
 { 
    struct node *ptr = head; 
 
    // Start from the beginning 
 while(ptr != NULL) 
 { 
    std::cout << ptr->data << " "; 
    ptr = ptr->next; 
 } 
 
 std::cout << std::endl; 
 } 
```

#### Inserção no começo
```
// Insert link at the beginning 
 void insertFirst(int data) 
 { 
    // Create a new node 
    struct node *new_node = new struct node; 
 
    new_node->data = data; 
 
 // Point it to old head 
 new_node->next = head; 
 
 // Point head to new node 
 head = new_node; 
 
 std::cout << "Inserted successfully" << std::endl; 
 } 
```

#### Exclusão no começo
```
// Delete first item 
 void deleteFirst() 
 { 
    // Save reference to head 
    struct node *temp = head; 
 
    // Point head to head's next 
 head = head->next; 
 
 // Free memory used by temp 
 temp = NULL: 
 delete temp; 
 
 std::cout << "Deleted successfully" << std::endl; 
 } 
```

#### Tamanho
```
// Find no. of nodes in link list 
 void size() 
 { 
    int length = 0; 
    struct node *current; 
 
    for(current = head; current != NULL; current = current->next) 
 { 
    length++; 
 } 
 
 std::cout << "Size of Linked List is " << length << std::endl; 
 } 
```

#### Procurando
```
// Find node with given data 
 void find(int data){ 
 
    // Start from the head 
 struct node* current = head; 
 
 // If list is empty 
 if(head == NULL) 
 { 
    std::cout << "List is empty" << std::endl; 
    return; 
 } 
 
 // Traverse through list 
 while(current->data != data){ 
 
    // If it is last node 
    if(current->next == NULL){ 
        std::cout << "Not Found" << std::endl; 
        return; 
    } 
    else{ 
        // Go to next node 
        current = current->next; 
    } 
 } 
 
 // If data found 
 std::cout << "Found" << std::endl; 
 } 
```

#### Exclusão após um nó
```
// Delete a node with given data 
 void del(int data){ 
 
    // Start from the first node 
 struct node* current = head; 
 struct node* previous = NULL; 
 
 // If list is empty 
 if(head == NULL){ 
    std::cout << "List is empty" << std::endl; 
    return ; 
 } 
 
 // Navigate through list 
 while(current->data != data){ 
 
    // If it is last node 
    if(current->next == NULL){ 
        std::cout << "Element not found" << std::endl; 
        return ; 
    } 
    else { 
        // Store reference to current node 
        previous = current; 
        // Move to next node 
        current = current->next; 
    } 
 
 } 
 
 // Found a match, update the node 
 if(current == head) { 
    // Change head to point to next node 
    head = head->next; 
 } 
 else { 
    // Skip the current node 
    previous->next = current->next; 
 } 
 
 // Free space used by deleted node 
 current = NULL; 
 delete current; 
 std::cout << "Deleted succesfully" << std::endl; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CXVt/1)

### Implementação de Python da Lista Simplesmente Vinculada
```
class Node(object): 
    # Constructor 
    def __init__(self, data=None, next=None): 
        self.data = data 
        self.next = next 
 
    # Function to get data 
 def get_data(self): 
    return self.data 
 
 # Function to get next node 
 def get_next(self): 
    return self.next 
 
 # Function to set next field 
 def set_next(self, new_next): 
    self.next = new_next 
 class LinkedList(object): 
    def __init__(self, head=None): 
        self.head = head 
```

#### Inserção
```
    # Function to insert data 
 def insert(self, data): 
    # new_node is a object of class Node 
    new_node = Node(data) 
    new_node.set_next(self.head) 
    self.head = new_node 
    print("Node with data " + str(data) + " is created succesfully") 
```

#### Tamanho
```
    # Function to get size 
 def size(self): 
    current = self.head 
    count = 0 
    while current: 
        count += 1 
        current = current.get_next() 
    print("Size of link list is " + str(count)) 
```

#### Procurando
```
    # Function to search a data 
 def search(self, data): 
    current = self.head 
    found = False 
    while current and found is False: 
        if current.get_data() == data: 
            found = True 
        else: 
            current = current.get_next() 
    if current is None: 
        print("Node with data " + str(data) + " is not present") 
    else: 
        print("Node with data " + str(data) + " is found") 
```

#### Exclusão após um nó
```
    # Function to delete a node with data 
 def delete(self, data): 
    current = self.head 
    previous = None 
    found = False 
    while current and found is False: 
        if current.get_data() == data: 
            found = True 
        else: 
            previous = current 
            current = current.get_next() 
    if current is None: 
        print("Node with data " + str(data) + " is not in list") 
    elif previous is None: 
        self.head = current.get_next() 
        print("Node with data " + str(data) + " is deleted successfully") 
    else: 
        previous.set_next(current.get_next()) 
        print("Node with data " + str(data) + " is deleted successfully") 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVq3/2)

**Vantagens**

1.  As listas vinculadas são uma estrutura de dados dinâmica, que pode aumentar e diminuir, alocar e desalocar a memória enquanto o programa está em execução.
2.  Inserção e exclusão do nó são facilmente implementadas em uma lista encadeada em qualquer posição.

**Desvantagens**

1.  Eles usam mais memória do que matrizes por causa da memória usada por seus ponteiros ( `next` e `prev` ).
2.  O acesso aleatório não é possível na lista vinculada. Temos que acessar os nós sequencialmente.
3.  É mais complexo que array. Se um idioma oferecer suporte à verificação de limite de matriz automaticamente, os Arrays o servirão melhor.

#### Nota

Nós temos que usar free () em C e delete em C ++ para liberar o espaço usado pelo nó deletado, enquanto, em Python e Java, o espaço livre é coletado automaticamente pelo coletor de lixo.