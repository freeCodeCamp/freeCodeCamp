---
title: Data Structure Linked List
localeTitle: 数据结构链表
---
就像用花朵制作的花环一样，链表由节点组成。我们称这个特殊花环上的每朵花都是一个节点。并且每个节点指向该列表中的下一个节点以及它具有数据（这里是花的类型）。

## 类型

1.  单链表

单链表包含具有`data`字段和`next`字段的节点，该字段指向序列中的下一个节点。可以在单链表上执行的操作是插入，删除和遍历。

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

应用

CPython的内部实现，框架和评估变量保存在堆栈中。

为此我们需要迭代前向aur得到头部，因此单独使用链表。

1.  双重链表

双向链表包含具有`data`字段的节点， `next`字段和指向序列中前一节点的另一个链接字段`prev` 。

\`

双重链表

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

应用

浏览器缓存，允许您点击BACK和FORWARD按钮。在这里，我们需要维护一个双向链表， `URLs`作为数据字段，以允许双向访问。要转到上一个URL，我们将使用`prev`字段，并转到下一页，我们将使用`next`字段。

1.  循环链表

循环链表是单链表，其中最后一个节点， `next`字段指向序列中的第一个节点。

\`

循环链表

* * *
```
     head 
      | 
      | 
    +-----+--+      +-----+--+      +-----+--+ 
```

\- > | 1 | o -----> | 2 | o -----> | 3 | o ----  
| + ----- + - + + ----- + - + + ----- + - + |  
| |

* * *

\`

**应用**

分时问题由操作系统解决。

在分时环境中，操作系统必须维护当前用户的列表，并且必须允许每个用户一次使用一小部分CPU时间，一个用户。操作系统将选择一个用户，让他/她使用少量的CPU时间，然后转到下一个用户。

对于这个应用程序，应该没有NULL指针，除非绝对没有人请求CPU时间，即列表为空。

## 基本操作

1.  插入

要向列表中添加新元素。

\`

插入开头

* * *

*   使用给定数据创建新节点。
*   将新节点指向旧`head` `next` 。
*   点`head`到这个新的节点。

插入中间/结尾

* * *

在节点X之后插入。

*   使用给定数据创建新节点。
*   指向新节点的`next`老X的`next` 。
*   点X在此新节点`next` 。  
    \`

**时间复杂度：O（1）**

1.  删除

从列表中删除现有元素。

\`

删除开头

* * *

*   获取`head`指向的节点为Temp。
*   点`head`到温度的`next` 。
*   Temp节点使用的可用内存。

在中间/结尾删除

* * *

节点X后删除。

*   获取`X`指向的节点为Temp。
*   点X `next`着Temp的`next` 。
*   Temp节点使用的可用内存。  
    \`

**时间复杂度：O（1）**

1.  遍历

穿越列表。

\`

穿越

* * *

*   获取`head`指向的节点为Current。
*   检查Current是否为空并显示它。
*   点电流为当前的`next` ，并移动到上面的步骤。  
    \`

**时间复杂度：O（n）//这里n是链接列表的大小**

## 履行

### 单链表的C ++实现
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

#### 在每个节点中打印数据
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

#### 插入开头
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

#### 删除开头
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

#### 尺寸
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

#### 搜索
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

#### 节点后删除
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CXVt/1)

### 单链表的Python实现
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

#### 插入
```
    # Function to insert data 
 def insert(self, data): 
    # new_node is a object of class Node 
    new_node = Node(data) 
    new_node.set_next(self.head) 
    self.head = new_node 
    print("Node with data " + str(data) + " is created succesfully") 
```

#### 尺寸
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

#### 搜索
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

#### 节点后删除
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVq3/2)

**好处**

1.  链表是一种动态数据结构，可以在程序运行时增长和收缩，分配和释放内存。
2.  节点的插入和删除很容易在任何位置的链表中实现。

**缺点**

1.  由于指针使用的内存（ `next`和`prev` ），它们使用的内存比数组多。
2.  链表中无法随机访问。我们必须按顺序访问节点。
3.  它比数组更复杂。如果一种语言自动支持数组绑定检查，Arrays会更好地为您服务。

#### 注意

我们必须在C中使用free（）并在C ++中删除以释放已删除节点使用的空间，而在Python和Java中，可用垃圾收集器自动收集空间。