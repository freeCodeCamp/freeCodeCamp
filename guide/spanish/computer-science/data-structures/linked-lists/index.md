---
title: Linked Lists
localeTitle: Listas enlazadas
---
## Listas enlazadas

#### Una lista enlazada es una estructura de datos de _acceso lineal_ simple.

Una lista vinculada es una estructura de datos simple, pero se puede usar para implementar estructuras de datos más complicadas como colas, pilas, etc. Hay tres tipos de listas vinculadas:

1.  Lista enlazada simple
2.  Lista de enlace doble (o lista de enlace doble final)
3.  Listas enlazadas circulares (búfer de anillo)

Lista enlazada | (Introducción) Al igual que las matrices, la Lista enlazada es una estructura de datos lineal. A diferencia de las matrices, los elementos de la lista enlazada no se almacenan en una ubicación contigua; los elementos están vinculados utilizando punteros o similares en el ejemplo utilizando Javascript, una referencia al siguiente nodo.

Si desea comprender las listas vinculadas, ayuda a comprender las **matrices** .

Para resumir, una matriz es tradicionalmente una estructura de datos **lineal** **estática** que admite el acceso aleatorio de tiempo constante. Las inserciones y eliminaciones no siempre son tiempo constante.

Ventajas sobre matrices 1) Tamaño dinámico 2) Facilidad de inserción / eliminación

\`\` \` estática = tamaño fijo en el momento de la creación lineal = almacenado linealmente en la memoria como un solo bloque
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

utilizando namespace std;

Número de estructura { int num; struct Number \* tail; };

typedef struct Number N;

Lista de clase { privado: N _cabeza,_ final; cuenta int
```
public: 
    void display(); 
    void insertBefore(int); 
    List(); 
```

};

Lista :: Lista () { head = NULL; end = NULL; cuenta = 0; }

void List :: insertBefore (datos int) { N \* nodo; nodo = nuevo N; nodo-> num = datos; nodo-> cola = NULL;
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

void List :: display () { cout << "Número de nodos en la lista =" << count << endl; N \* nodo; nodo = cabeza; mientras (nodo) {
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

Número de nodos en la lista = 5 50 40 30 20 10
```
#### Explanation 
```

cpp

Número de estructura { int num; struct Number \* tail;

};
```
Declaration of a structure(node) with 2 data members 
 * `num` holds the integer data value 
 * `*tail` pointer points to the next node in the List 
```

cpp Lista de clase { privado: N _cabeza,_ final; cuenta int
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

cpp Lista :: Lista () { head = NULL; end = NULL; cuenta = 0; }
```
The default constructor is used to initialize the data members of the List class with default values 
```

cpp void List :: insertBefore (datos int) { N \* nodo; nodo = nuevo N; nodo-> num = datos; nodo-> cola = NULL;
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

cpp void List :: display () { N \* nodo; nodo = cabeza; mientras (nodo) { cout < num <
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

función LinkedList () { this.head = null; this.tail = null; }
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

let LL = new LinkedList ();
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

do // Un nodo de lista enlazada Nodo de estructura { datos int Nodo de estructura \* siguiente; };
```
# Linked List with three elements 
```

do // Un simple programa en C para introducir. // una lista enlazada

# incluir

# incluir

Nodo de estructura { datos int Nodo de estructura \* siguiente; };

// Programa para crear un enlace simple. // lista con 3 nodos int main () { struct Node \* head = NULL; Nodo estructura \* segundo = NULL; Nodo estructura \* tercero = NULL;

// asignar 3 nodos en el montón  
head = (struct Node _) malloc (sizeof (struct Node)); segundo = (struct Node_ ) malloc (sizeof (struct Node)); tercero = (struct Node \*) malloc (sizeof (struct Node));

/ \* Se han asignado dinámicamente tres bloques. Tenemos punteros a estos tres bloques como primero, segundo y tercero.  
cabeza segundo tercio | | | | | | + --- + ----- + + ---- + ---- + + ---- + ---- + | # | # | | # | # | | # | # | + --- + ----- + + ---- + ---- + + ---- + ---- +

\# representa cualquier valor aleatorio. Los datos son aleatorios porque todavía no hemos asignado nada \* /

head-> data = 1; // asignar datos en el primer nodo cabeza-> siguiente = segundo; // Vincular el primer nodo con el segundo nodo

/ \* los datos se han asignado a la parte de datos del primer bloque (bloque señalado por la cabeza). Y el siguiente puntero del primer bloque apunta a segundo. Así que ambos están vinculados.
```
   head          second         third 
    |              |              | 
    |              |              | 
 +---+---+     +----+----+     +-----+----+ 
 | 1  | o----->| #  | #  |     |  #  | #  | 
 +---+---+     +----+----+     +-----+----+ 
```

\* /

segundo-> datos = 2; // asignar datos al segundo nodo segundo-> siguiente = tercero; // Enlazar segundo nodo con el tercer nodo

/ \* los datos se han asignado a la parte de datos del segundo bloque (bloque apuntado por segundo). Y el siguiente puntero del segundo bloque apunta al tercer bloque.  
Así que los tres bloques están vinculados.
```
   head         second         third 
    |             |             | 
    |             |             | 
 +---+---+     +---+---+     +----+----+ 
 | 1  | o----->| 2 | o-----> |  # |  # | 
 +---+---+     +---+---+     +----+----+      */ 
```

tercero-> datos = 3; // asignar datos al tercer nodo tercero-> siguiente = NULL;

/ \* los datos se han asignado a la parte de datos del tercer bloque (bloque apuntado por tercero). Y el siguiente puntero del tercer bloque se hace NULL para indicar que la lista enlazada termina aquí.
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

devuelve 0; } \`\` \`

#### Más información:

*   [Introducción a las listas enlazadas](http://www.geeksforgeeks.org/linked-list-set-1-introduction/)
*   [Listas enlazadas (video de YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)