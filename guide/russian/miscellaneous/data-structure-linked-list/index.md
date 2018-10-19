---
title: Data Structure Linked List
localeTitle: Связанный список данных
---
Подобно тому, как гирлянда сделана с цветами, связанный список состоит из узлов. Каждый цветок на этой гирлянде мы называем узлом. И каждый из узлов указывает на следующий узел в этом списке, а также имеет данные (здесь это тип цветка).

## Типы

1.  Одиночный список

Одиночные списки содержат узлы, у которых есть поле `data` а также `next` поле, которое указывает на следующий узел в последовательности. Операциями, которые могут выполняться в одиночных списках, являются вставка, удаление и обход.

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

заявка

Внутренняя реализация CPython, фреймы и оцениваемые переменные хранятся в стеке.

Для этого нам нужно итерации только вперед aur получить голову, поэтому используется одиночный связанный список.

1.  Дважды связанный список

Дважды связанные списки содержат узел, у которого есть поле `data` , `next` поле и другое поле ссылки `prev` указывающее на предыдущий узел в последовательности.

\`

Дважды связанный список

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

заявка

Кэш браузера, который позволяет вам нажать кнопку BACK и FORWARD. Здесь нам нужно поддерживать двусвязный список с `URLs` качестве поля данных, чтобы разрешить доступ в обоих направлениях. Чтобы перейти к предыдущему URL-адресу, мы будем использовать поле `prev` и для перехода к следующей странице мы будем использовать `next` поле.

1.  Циркулярный список ссылок

Циклические связанные списки - это односвязный список, в котором последний узел, `next` поле указывает на первый узел в последовательности.

\`

Циркулярный список ссылок

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

**заявка**

Задача тайм-решетки, решаемая операционной системой.

В среде с временным разделением операционная система должна поддерживать список существующих пользователей и должна попеременно разрешать каждому пользователю использовать небольшую часть времени процессора, по одному пользователю за раз. Операционная система выберет пользователя, позволит ему использовать небольшое количество процессорного времени, а затем перейти к следующему пользователю.

Для этого приложения не должно быть указателей NULL, если нет абсолютно никакого запроса на процессорное время, то есть список пуст.

## Основные операции

1.  вставка

Чтобы добавить новый элемент в список.

\`

Вставка в начале

* * *

*   Создайте новый узел с данными.
*   Наведите новый узел `next` со старой `head` .
*   Направьте `head` на этот новый узел.

Вставка в середине / конце

* * *

Вставка после узла X.

*   Создайте новый узел с данными.
*   Наведите новый узел `next` со старым X `next` .
*   Точка X находится `next` с этим новым узлом.  
    \`

**Сложность времени: O (1)**

1.  делеция

Чтобы удалить существующий элемент из списка.

\`

Исключение в начале

* * *

*   Возьмите узел, указанный `head` как Temp.
*   Направьте `head` на `next` .
*   Свободная память, используемая узлом Temp.

Удаление в середине / конце

* * *

Удаление после узла X.

*   Получите узел, обозначенный `X` как Temp.
*   Точка Икс `next` с Temp - х `next` .
*   Свободная память, используемая узлом Temp.  
    \`

**Сложность времени: O (1)**

1.  Пересекая

Перемещение по списку.

\`

пересечение

* * *

*   Возьмите узел, указанный `head` как Текущий.
*   Проверьте, не текут ли ток и отобразите его.
*   Направьте ток в ток - х `next` и перейти к шагу выше.  
    \`

**Сложность времени: O (n) // Здесь n - размер списка ссылок**

## Реализация

### Реализация односвязного списка на C ++
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

#### Печать данных в каждом узле
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

#### Вставка в начале
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

#### Исключение в начале
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

#### Размер
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

#### поиск
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

#### Удаление после узла
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CXVt/1)

### Python Реализация единого связанного списка
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

#### вставка
```
    # Function to insert data 
 def insert(self, data): 
    # new_node is a object of class Node 
    new_node = Node(data) 
    new_node.set_next(self.head) 
    self.head = new_node 
    print("Node with data " + str(data) + " is created succesfully") 
```

#### Размер
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

#### поиск
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

#### Удаление после узла
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CVq3/2)

**преимущества**

1.  Связанные списки - это динамическая структура данных, которая может расти и сокращаться, выделять и освобождать память во время работы программы.
2.  Вставка и удаление узла легко реализуются в связанном списке в любой позиции.

**Недостатки**

1.  Они используют больше памяти, чем массивы, из-за памяти, используемой их указателями ( `next` and `prev` ).
2.  Случайный доступ в связанном списке невозможен. Мы должны последовательно обращаться к узлам.
3.  Это сложнее, чем массив. Если язык автоматически поддерживает привязку массива, массивы будут служить вам лучше.

#### Заметка

Мы должны использовать free () в C и удалять на C ++ для освобождения пространства, используемого удаленным узлом, тогда как в Python и Java свободное пространство автоматически собирается сборщиком мусора.