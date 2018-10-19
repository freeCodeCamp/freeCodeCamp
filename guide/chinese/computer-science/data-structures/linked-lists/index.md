---
title: Linked Lists
localeTitle: 链接列表
---
## 链接列表

#### 链表是一种简单的_线性访问_数据结构。

链表是一种简单的数据结构，但它可用于实现更复杂的数据结构，如队列，堆栈等。链接列表有三种类型：

1.  简单链接列表
2.  双重链接列表（或双端链接列表）
3.  圆形链接列表（环形缓冲区）

链接列表| （介绍） 与数组一样，Linked List是一种线性数据结构。与数组不同，链表元素不存储在连续的位置;使用Javascript（对下一个节点的引用）使用指针或类似链接元素。

如果您想了解链接列表，有助于理解**数组** 。

回顾一下，数组传统上是一种**静态** **线性**数据结构，支持恒定时间随机访问。插入和删除并不总是恒定的时间。

阵列的优点 1）动态尺寸 2）易于插入/删除

\`\`\` static = size在创建时固定 线性=作为单个块线性存储在存储器中
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

# 包括

使用命名空间std;

结构编号 { int num; struct Number \* tail; };

typedef struct Number N;

班级名单 { 私人的： N _头，_结束; int count;
```
public: 
    void display(); 
    void insertBefore(int); 
    List(); 
```

};

List :: List（） { 头= NULL; 结束= NULL; 计数= 0; }

void List :: insertBefore（int data） { N \*节点; node = new N; 节点 - > NUM =数据; 节点 - >尾= NULL;
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

void List :: display（） { cout <<“list中的节点数=”<< count << endl; N \*节点; 节点=头; 而（节点） {
```
    cout<<node->num<<endl; 
    node=node->tail; 
 
 } 
```

} int main（） { 清单l1;
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

列表中的节点数= 5 50 40 三十 20 10
```
#### Explanation 
```

CPP

结构编号 { int num; struct Number \* tail;

};
```
Declaration of a structure(node) with 2 data members 
 * `num` holds the integer data value 
 * `*tail` pointer points to the next node in the List 
```

CPP 班级名单 { 私人的： N _头，_结束; int count;
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

CPP List :: List（） { 头= NULL; 结束= NULL; 计数= 0; }
```
The default constructor is used to initialize the data members of the List class with default values 
```

CPP void List :: insertBefore（int data） { N \*节点; node = new N; 节点 - > NUM =数据; 节点 - >尾= NULL;
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

CPP void List :: display（） { N \*节点; 节点=头; 而（节点） { COUT < NUM <
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

function LinkedList（）{ this.head = null; this.tail = null; }
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

让LL = new LinkedList（）;
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

C //链表节点 struct Node { int数据; struct Node \* next; };
```
# Linked List with three elements 
```

C //一个简单的C程序来介绍 //一个链表

# 包括

# 包括

struct Node { int数据; struct Node \* next; };

//程序创建一个简单的链接 //列出3个节点 int main（） { struct Node \* head = NULL; struct Node \* second = NULL; struct Node \* third = NULL;

//在堆中分配3个节点  
head =（struct Node _）malloc（sizeof（struct Node））; second =（struct Node_ ）malloc（sizeof（struct Node））; third =（struct Node \*）malloc（sizeof（struct Node））;

/ \*动态分配了三个块。 我们指向这三个块作为第一，第二和第三块  
排在第二位 | | | | | | + --- + ----- + + ---- + ---- + + ---- + ---- + | ＃| ＃| | ＃| ＃| | ＃| ＃| + --- + ----- + + ---- + ---- + + ---- + ---- +

＃代表任何随机值。 数据是随机的，因为我们还没有分配任何东西\* /

head-> data = 1; //在第一个节点中分配数据 head-> next = second; //将第一个节点与第二个节点链接

/ \*数据已分配给第一个块的数据部分（块 头部指出）。并且第一个块的下一个指针指向 第二。所以他们都是相互关联的。
```
   head          second         third 
    |              |              | 
    |              |              | 
 +---+---+     +----+----+     +-----+----+ 
 | 1  | o----->| #  | #  |     |  #  | #  | 
 +---+---+     +----+----+     +-----+----+ 
```

\* /

second-> data = 2; //将数据分配给第二个节点 second-> next = third; //将第二个节点与第三个节点链接

/ \*数据已分配给第二个块的数据部分（由块指向的块） 第二）。并且第二个块的下一个指针指向第三个块。  
因此所有三个块都是链接的。
```
   head         second         third 
    |             |             | 
    |             |             | 
 +---+---+     +---+---+     +----+----+ 
 | 1  | o----->| 2 | o-----> |  # |  # | 
 +---+---+     +---+---+     +----+----+      */ 
```

第三 - > data = 3; //将数据分配给第三个节点 third-> next = NULL;

/ \*数据已分配给第三个块的数据部分（块指向 第三）。并且第三个块的下一个指针为NULL以指示 链接列表在这里终止。
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

返回0; } \`\`\`

#### 更多信息：

*   [链接列表简介](http://www.geeksforgeeks.org/linked-list-set-1-introduction/)
*   [链接列表（YouTube视频）](https://www.youtube.com/watch?v=njTh_OwMljA)