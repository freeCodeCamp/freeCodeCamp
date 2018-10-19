---
title: Data Structure Linked List
localeTitle: قائمة ربط بنية البيانات
---
تماما كما هو مصنوع من الطوق مع الزهور ، تتكون قائمة مرتبطة من العقد. نحن ندعو كل زهرة على هذا الطوق الخاص لتكون عقدة. ويشير كل من العقدة إلى العقدة التالية في هذه القائمة بالإضافة إلى أنه يحتوي على بيانات (هنا هو نوع من الزهور).

## أنواع

1.  قائمة متصلة Singly

تحتوي القوائم المرتبطة بشكل فردي على عقد تحتوي على حقل `data` بالإضافة إلى حقل `next` ، والذي يشير إلى العقدة التالية في التسلسل. العمليات التي يمكن إجراؤها على القوائم المرتبطة فرديًا هي الإدراج والحذف والعبور.

\`

 `Singly Link List 
` 

* * *

 `   head 
    | 
    | 
  +-----+--+      +-----+--+      +-----+------+ 
  |  1  |o----->  |  2  |o----->  |  3  | NULL | 
  +-----+--+      +-----+--+      +-----+------+ 
` 

\`

الوضعية

يتم الاحتفاظ بالتنفيذ الداخلي لـ CPython والإطارات والمتغيرات التي تم تقييمها على كومة.

لهذا نحن بحاجة إلى التكرار فقط إلى الأمام الحصول على الرأس ، لذلك يتم استخدام قائمة مرتبطة بشكل فردي.

1.  قائمة ترتبط Doubly

القوائم المرتبطة مضاعف تحتوي على العقدة التي لديها `data` الحقل `next` الميدان وآخر حقل ارتباط `prev` لافتا إلى العقدة السابقة في التسلسل.

\`

قائمة ترتبط Doubly

* * *

 `          head 
           | 
           | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
  |      |     |o------>  |     |o------>  |     |      | 
  | NULL |  1  |          |  2  |          |  3  | NULL | 
  |      |     |  <------o|     |  <------o|     |      | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
` 

\`

الوضعية

ذاكرة التخزين المؤقت للمتصفح والتي تسمح لك بالضغط على الزر BACK and FORWARD. هنا نحتاج إلى الاحتفاظ بقائمة مرتبطة بشكل مضاعف ، مع `URLs` كحقل بيانات ، للسماح بالوصول في كلا الاتجاهين. للانتقال إلى عنوان URL السابق ، سنستخدم الحقل `prev` والانتقال إلى الصفحة `next` سنستخدم الحقل `next` .

1.  قائمة مرتبطة دائرية

القوائم المرتبطة الدائرية هي قائمة مرتبطة بشكل فردي حيث العقدة الأخيرة ، يشير الحقل `next` إلى العقدة الأولى في التسلسل.

\`

قائمة مرتبطة دائرية

* * *

 `     head 
      | 
      | 
    +-----+--+      +-----+--+      +-----+--+ 
` 

\-> | 1 | o -----> | 2 | --- -----> | 3 | س  
| + ----- + - + + ----- + - + + ----- + - + |  
| |

* * *

\`

**الوضعية**

حل مشكلة المشاركة بالوقت من قبل نظام التشغيل.

في بيئة المشاركة بالوقت ، يجب أن يحتفظ نظام التشغيل بقائمة بالمستخدمين الحاليين ويجب أن يسمح لكل مستخدم بشكل متناوب باستخدام جزء صغير من وقت وحدة المعالجة المركزية (CPU) ، مستخدم واحد في كل مرة. سيقوم نظام التشغيل باختيار مستخدم ، أو السماح له باستخدام كمية صغيرة من وقت وحدة المعالجة المركزية ثم الانتقال إلى المستخدم التالي.

بالنسبة لهذا التطبيق ، يجب ألا يكون هناك أية مؤشرات NULL ما لم يكن هناك أحد يطلب وقت وحدة المعالجة المركزية على الإطلاق ، أي أن القائمة فارغة.

## العمليات الأساسية

1.  إدراج

لإضافة عنصر جديد إلى القائمة.

\`

الإدراج في البداية

* * *

*   إنشاء عقدة جديدة مع البيانات المعطاة.
*   أشر إلى عقدة جديدة `next` `head` القديم.
*   ضع `head` على هذه العقدة الجديدة.

الإدراج في الوسط / النهاية

* * *

الإدراج بعد العقدة X.

*   إنشاء عقدة جديدة مع البيانات المعطاة.
*   نقطة العقدة الجديدة `next` لالقديمة X `next` .
*   النقطة X `next` هذه العقدة الجديدة.  
    \`

**تعقيد الوقت: O (1)**

1.  حذف

لحذف العنصر الموجود من القائمة.

\`

الحذف في البداية

* * *

*   الحصول على العقدة التي وجهها `head` كما تيمب.
*   `head` إلى نقطة `next` .
*   ذاكرة حرة تستخدمها عقدة Temp.

الحذف في المنتصف / النهاية

* * *

الحذف بعد العقدة X.

*   الحصول على العقدة التي أشار إليها `X` كمؤشر.
*   نقطة X `next` Temp `next` .
*   ذاكرة حرة تستخدمها عقدة Temp.  
    \`

**تعقيد الوقت: O (1)**

1.  عبور

للسفر عبر القائمة.

\`

اجتياز

* * *

*   احصل على العقدة التي يتم توجيهها بواسطة `head` كتيار.
*   تحقق مما إذا كان Current ليس خاليًا وقم بعرضه.
*   أشر إلى الحالي إلى `next` والانتقال إلى الخطوة أعلاه.  
    \`

**تعقيد الوقت: O (n) // Here n هو حجم قائمة الارتباط**

## التنفيذ

### تنفيذ C ++ من قائمة مرتبطة بشكل فردي

 `// Header files 
 #include <iostream> 
 
 struct node 
 { 
    int data; 
    struct node *next; 
 }; 
 
 // Head pointer always points to first element of the linked list 
 struct node *head = NULL; 
` 

#### طباعة البيانات في كل عقدة

 `// Display the list 
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
` 

#### الإدراج في البداية

 `// Insert link at the beginning 
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
` 

#### الحذف في البداية

 `// Delete first item 
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
` 

#### بحجم

 `// Find no. of nodes in link list 
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
` 

#### البحث

 `// Find node with given data 
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
` 

#### الحذف بعد العقدة

 `// Delete a node with given data 
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
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CXVt/1)

### بايثون تنفيذ قائمة مرتبطة Singly

 `class Node(object): 
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
` 

#### إدراج

 `    # Function to insert data 
 def insert(self, data): 
    # new_node is a object of class Node 
    new_node = Node(data) 
    new_node.set_next(self.head) 
    self.head = new_node 
    print("Node with data " + str(data) + " is created succesfully") 
` 

#### بحجم

 `    # Function to get size 
 def size(self): 
    current = self.head 
    count = 0 
    while current: 
        count += 1 
        current = current.get_next() 
    print("Size of link list is " + str(count)) 
` 

#### البحث

 `    # Function to search a data 
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
` 

#### الحذف بعد العقدة

 `    # Function to delete a node with data 
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
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CVq3/2)

**مزايا**

1.  القوائم المرتبطة هي بنية بيانات ديناميكية ، والتي يمكن أن تنمو وتقلص ، وتخصيص ، وإلغاء تخصيص الذاكرة أثناء تشغيل البرنامج.
2.  يتم تنفيذ الإدراج وحذف العقدة بسهولة في قائمة مرتبطة في أي موقف.

**سلبيات**

1.  يستخدمون ذاكرة أكثر من صفائف بسبب الذاكرة المستخدمة من قبل المؤشرات الخاصة بهم ( `next` `prev` ).
2.  الوصول العشوائي غير ممكن في القائمة المرتبطة. علينا الوصول إلى العقد بالتتابع.
3.  إنها أكثر تعقيدًا من المصفوفة. إذا كانت اللغة تدعم التحقق من المصفوفة تلقائيًا ، فإن Arrays ستخدمك بشكل أفضل.

#### ملحوظة

يجب علينا استخدام free () في C وحذفها في C ++ لتحرير المساحة المستخدمة بواسطة عقدة المحذوفة ، بينما يتم تجميع المساحة الحرة في Python و Java تلقائيًا بواسطة أداة تجميع البيانات المهملة.