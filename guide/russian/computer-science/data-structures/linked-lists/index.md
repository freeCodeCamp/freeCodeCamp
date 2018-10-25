---
title: Linked Lists
localeTitle: Связанные списки
---
## Связанные списки

#### Связанный список - это простая структура данных с _линейным доступом_ .

Связанный список представляет собой простую структуру данных, но его можно использовать для реализации более сложных структур данных, таких как очереди, стеки и т. Д. Существует три типа связанных списков:

1.  Простой связанный список
2.  Дважды связанный список (или двойной объединенный список)
3.  Циклические связанные списки (кольцевой буфер)

Связанный список | (Вступление) Подобно массивам, Linked List представляет собой линейную структуру данных. В отличие от массивов элементы связанного списка не сохраняются в смежном местоположении; элементы связаны с помощью указателей или как в примере с использованием Javascript, ссылки на следующий узел.

Если вы хотите понять Linked Lists, это поможет понять **Массивы** .

Для повторения массив традиционно представляет собой **статическую** **линейную** структуру данных, которая поддерживает постоянный случайный доступ во времени. Вставки и удаления не всегда являются постоянными.

Преимущества по сравнению с массивами 1) Динамический размер 2) Простота вставки / удаления

\`\` \` static = размер, зафиксированный во время создания linear = хранится линейно в памяти как единый блок
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

CPP

# включают

использование пространства имен std;

struct Number { int num; struct Number \* tail; };

typedef struct Number N;

Список классов { частный: N _головка,_ конец; int count;
```
public: 
    void display(); 
    void insertBefore(int); 
    List(); 
```

};

Список :: Список () { голова = NULL; конец = NULL; кол = 0; }

void List :: insertBefore (int data) { N \* узел; node = new N; node-> Num = данные; node-> хвост = NULL;
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

void List :: display () { cout << "Число узлов в списке =" << count << endl; N \* узел; Узел = головы; в то время как (узел) {
```
    cout<<node->num<<endl; 
    node=node->tail; 
 
 } 
```

} int main () { Список l1;
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

Количество узлов в списке = 5 50 40 30 20 10
```
#### Explanation 
```

CPP

struct Number { int num; struct Number \* tail;

};
```
Declaration of a structure(node) with 2 data members 
 * `num` holds the integer data value 
 * `*tail` pointer points to the next node in the List 
```

CPP Список классов { частный: N _головка,_ конец; int count;
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

CPP Список :: Список () { голова = NULL; конец = NULL; кол = 0; }
```
The default constructor is used to initialize the data members of the List class with default values 
```

CPP void List :: insertBefore (int data) { N \* узел; node = new N; node-> Num = данные; node-> хвост = NULL;
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

CPP void List :: display () { N \* узел; Узел = головы; в то время как (узел) { соиЬ < Num <
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

пусть LL = новый LinkedList ();
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

С // Связанный узел списка struct Node { int данные; struct Node \* next; };
```
# Linked List with three elements 
```

с // Простая программа C для введения // связанный список

# включают

# включают

struct Node { int данные; struct Node \* next; };

// Программа для создания простого связанного // список с 3 узлами int main () { struct Node \* head = NULL; struct Node \* second = NULL; struct Node \* third = NULL;

// выделяем 3 узла в куче  
head = (struct Node _) malloc (sizeof (struct Node)); second = (struct Node_ ) malloc (sizeof (struct Node)); third = (struct Node \*) malloc (sizeof (struct Node));

/ \* Три блока распределены динамически. У нас есть указатели на эти три блока, как первый, второй и третий  
второй третья глава | | | | | | + --- + ----- + + ---- + ---- + + ---- + ---- + | # | # | | # | # | | # | # | + --- + ----- + + ---- + ---- + + ---- + ---- +

\# представляет любое случайное значение. Данные случайны, потому что мы еще ничего не назначили \* /

head-> data = 1; // назначение данных в первом узле head-> next = second; // Связывание первого узла со вторым узлом

/ \* данные были присвоены части данных первого блока (блок заостренный головой). И следующий указатель первого блока указывает на второй. Поэтому они оба связаны.
```
   head          second         third 
    |              |              | 
    |              |              | 
 +---+---+     +----+----+     +-----+----+ 
 | 1  | o----->| #  | #  |     |  #  | #  | 
 +---+---+     +----+----+     +-----+----+ 
```

\* /

second-> data = 2; // присвоение данных второму узлу second-> next = third; // Связывание второго узла с третьим узлом

/ \* данные были привязаны к части данных второго блока (блок, на который указывает второй). А следующий указатель второго блока указывает на третий блок.  
Таким образом, все три блока связаны.
```
   head         second         third 
    |             |             | 
    |             |             | 
 +---+---+     +---+---+     +----+----+ 
 | 1  | o----->| 2 | o-----> |  # |  # | 
 +---+---+     +---+---+     +----+----+      */ 
```

третье -> данные = 3; // присвоение данных третьему узлу third-> next = NULL;

/ \* данные были привязаны к части данных третьего блока (фиксированный блок третий). И следующий указатель третьего блока сделан NULL для указания что связанный список здесь завершен.
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

#### Дополнительная информация:

*   [Введение в связанные списки](http://www.geeksforgeeks.org/linked-list-set-1-introduction/)
*   [Связанные списки (видео на YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)