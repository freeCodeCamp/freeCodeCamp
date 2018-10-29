---
title: Linked Lists
localeTitle: القوائم المرتبطة
---
## القوائم المرتبطة

#### القائمة المرتبطة هي بنية بيانات _الوصول الخطي_ البسيط.

القائمة المرتبطة هي بنية بيانات بسيطة ، ولكن يمكن استخدامها لتنفيذ هياكل بيانات أكثر تعقيدًا مثل قوائم الانتظار ، الأكوام ، إلخ. هناك ثلاثة أنواع من القوائم المرتبطة:

1.  قائمة مرتبطة بسيطة
2.  قائمة مرتبطة مزدوجة (أو قائمة مرتبطة مزدوجة المنتهية)
3.  قوائم مرتبطة دائرية (Ring Buffer)

قائمة مرتبطة | (المقدمة) مثل المصفوفات ، القائمة المرتبطة هي بنية بيانات خطية. بخلاف المصفوفات ، لا يتم تخزين عناصر القوائم المرتبطة في مكان مجاور ؛ ترتبط العناصر باستخدام مؤشرات أو ما شابه في المثال باستخدام Javascript ، وهو مرجع إلى العقدة التالية.

إذا كنت تريد فهم "القوائم المرتبطة" ، فإنه يساعد على فهم **الصفائف** .

للتلخيص ، فإن المصفوفة هي تقليديًا بنية بيانات **خطية** **ثابتة** تدعم الوصول العشوائي الثابت للوقت. لا تكون دائمًا عمليات الإدراج والحذف وقتًا ثابتًا.

مزايا أكثر من المصفوفات 1) حجم ديناميكي 2) سهولة الإدراج / الحذف

\`\` \` ثابت = حجم ثابت في وقت الإنشاء خطي = مخزن خطيًا في الذاكرة ككتلة واحدة

 `#### Arrays have the following disadvantages:- 
 1. Arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. 
 2. Arrays are also expensive to maintain new insertions and deletions. 
 
 Linked Lists address some of the limitations of arrays. Unlike an array, where all the elements are stored in a contiguous block of memory, in a linked list each element is a separate object and has a **link** to the next element in sequence. This allows a linked list to start with space for only one element, and grow to accomodate an arbitrary number of elements by allocating memory as and when needed. 
 
 Deleting elements is also simply handled by manipulating links. 
 
 Once you understand the Simple Linked List (which from here on will be referred as **'List'**), you can move on to the Doubly Linked List. 
 
 A List as illustrated below is made up of the following components:- 
` 

 `     head 
         | 
         | 
    +---+---+     +---+---+       +----+------+ 
    | 1  | o----->|  2  | o-----> |  3 |   φ  | 
    +---+---+     +---+---+       +----+------+ 
                                          | 
                                          | 
                                          tail 
` 

 `| Node      | Significance     | 
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
` 

حزب الشعب الكمبودي

# تتضمن

استخدام اسم للمحطة؛

رقم البنية { عدد الأسطوانات رقم البنية \* الذيل }؛

بنية typedef عدد N؛

قائمة الطبقة { نشر: N _الرأس ،_ النهاية ؛ عدد الباحثين

 `public: 
    void display(); 
    void insertBefore(int); 
    List(); 
` 

}؛

قائمة :: قائمة () { رئيس = NULL؛ إنهاء = NULL؛ عد = 0؛ }

void list :: insertBefore (int int) { عقدة N \* node = new N؛ node-> الأسطوانات = البيانات؛ node-> ذيل = NULL؛

 `    if(!head){ 
        head=end=node; 
    } 
 
    else{ 
        node->tail=head; 
        head=node; 
    } 
 
    count++; 
` 

}

قائمة الفراغ :: عرض () { cout << "عدد العقد في القائمة =" << count << endl؛ عقدة N \* العقدة = الرأس. بينما (عقدة) {

 `    cout<<node->num<<endl; 
    node=node->tail; 
 
 } 
` 

} انت مين() { قائمة l1 ؛

 `l1.insertBefore(10); 
 l1.insertBefore(20); 
 l1.insertBefore(30); 
 l1.insertBefore(40); 
 l1.insertBefore(50); 
 l1.display(); 
 
 return 0; 
` 

}

 `#### OUTPUT 
` 

عدد العقد في القائمة = 5 50 40 30 20 10

 `#### Explanation 
` 

حزب الشعب الكمبودي

رقم البنية { عدد الأسطوانات رقم البنية \* الذيل

}؛

 ``Declaration of a structure(node) with 2 data members 
 * `num` holds the integer data value 
 * `*tail` pointer points to the next node in the List 
`` 

حزب الشعب الكمبودي قائمة الطبقة { نشر: N _الرأس ،_ النهاية ؛ عدد الباحثين

 `public: 
    void display(); 
    void insertBefore(int); 
    List(); 
` 

}؛

 ``The List class declares the Linked List. 
 * `*head` points to the first node in the List 
 * `*end` points to the last node in the List 
 * `count` holds the value for number of nodes in the list 
 * `display()` is used to print the complete list on the console 
 * `insertBefore()` is used to insert a new node 
 * `List()` is a defualt constructor 
`` 

حزب الشعب الكمبودي قائمة :: قائمة () { رئيس = NULL؛ إنهاء = NULL؛ عد = 0؛ }

 `The default constructor is used to initialize the data members of the List class with default values 
` 

حزب الشعب الكمبودي void list :: insertBefore (int int) { عقدة N \* node = new N؛ node-> الأسطوانات = البيانات؛ node-> ذيل = NULL؛

 `    if(!head){ 
        head=end=node; 
    } 
 
    else{ 
        node->tail=head; 
        head=node; 
    } 
 
    count++; 
` 

}

 ``* A new node is created. 
 * `num` is assigned the value of `data`. 
 * `tail` is pointing to Null. 
 * The `if(!head)` condition is true only when there are no elements in the List. 
 * When this is the case, `head` and `end` are both pointing to the newly created node. 
 * Control will move to the `else` section, when there is at least one node in the list. 
 * In this case, `tail` pointer in the newly created node is made to point to the `head`(first) node. 
 * The `head` pointer then points to the newly created node to make it the first node in the list. 
 * `count` is incremented by 1    as each new node is added. 
`` 

حزب الشعب الكمبودي قائمة الفراغ :: عرض () { عقدة N \* العقدة = الرأس. بينما (عقدة) { cout < الأسطوانات <

 ``The display function is used to run through the list and print the total number of nodes and values of `num` on the console. 
 
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
`` 

وظيفة LinkedList () { this.head = لاغية this.tail = لاغية }

 `// Node has three properties value, next, prev 
 
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
` 

 `Now Execute code 
` 

اترك LL = new LinkedList ()؛

 `LL.addToHead(100); 
 
 LL.addToHead(200); 
 
 console.log(LL); 
` 

 `Representation in C: 
 A linked list is represented by a pointer to the first node of the linked list. The first node is called head. If the linked list is empty, then value of head is NULL. 
 Each node in a list consists of at least two parts: 
 1) data 
 2) pointer to the next node 
 In C, we can represent a node using structures. Below is an example of a linked list node with an integer data. 
 In Java, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type 
` 

C // عقدة قائمة مرتبطة عقدة البنية { بيانات int؛ عقدة البنية \* التالي ؛ }؛

 `# Linked List with three elements 
` 

ج // برنامج C بسيط لتقديم // قائمة مرتبطة

# تتضمن

# تتضمن

عقدة البنية { بيانات int؛ عقدة البنية \* التالي ؛ }؛

// البرنامج لإنشاء رابط بسيط // list with 3 nodes انت مين() { struct Node \* head = NULL؛ عقدة البنية \* الثانية = NULL؛ عقدة البنية \* الثالثة = NULL؛

// تخصيص 3 عقد في كومة الذاكرة المؤقتة  
head = (Struct Node _) malloc (sizeof (struct Node))؛ second = (struct Node_ ) malloc (sizeof (struct Node))؛ third = (struct Node \*) malloc (sizeof (struct Node))؛

/ \* تم تخصيص ثلاث كتل بشكل حيوي. لدينا مؤشرات لهذه الكتل الثلاث الأولى والثانية والثالثة  
رأس الثاني الثاني | | | | | | + --- + ----- + + ---- + ---- + + ---- + ---- + | # | # | | # | # | | # | # | + --- + ----- + + ---- + ---- + + ---- + ---- +

\# يمثل أي قيمة عشوائية. البيانات عشوائية لأننا لم نحدد أي شيء بعد \* /

head-> data = 1؛ // تعيين البيانات في العقدة الأولى head-> next = second؛ // ربط العقدة الأولى مع العقدة الثانية

/ \* تم تعيين البيانات إلى جزء البيانات من الكتلة الأولى (كتلة وأشار الرأس). ويشير المؤشر التالي من الكتلة الأولى إلى ثانيا. لذلك كلاهما مرتبطان.

 `   head          second         third 
    |              |              | 
    |              |              | 
 +---+---+     +----+----+     +-----+----+ 
 | 1  | o----->| #  | #  |     |  #  | #  | 
 +---+---+     +----+----+     +-----+----+ 
` 

\* /

الثانية-> البيانات = 2 ؛ // تعيين البيانات إلى العقدة الثانية الثانية-> التالية = الثالثة ؛ // ربط العقدة الثانية مع العقدة الثالثة

/ \* تم تعيين البيانات إلى جزء البيانات من الكتلة الثانية (كتلة المشار إليها بواسطة ثانيا). ويشير المؤشر التالي من الكتلة الثانية إلى كتلة ثالثة.  
لذلك ترتبط جميع الكتل الثلاث.

 `   head         second         third 
    |             |             | 
    |             |             | 
 +---+---+     +---+---+     +----+----+ 
 | 1  | o----->| 2 | o-----> |  # |  # | 
 +---+---+     +---+---+     +----+----+      */ 
` 

ثالثا> البيانات = 3 ؛ // تعيين البيانات إلى العقدة الثالثة third-> next = NULL؛

/ \* تم تعيين البيانات إلى جزء البيانات من الكتلة الثالثة (block المشار إليه من قبل الثالثة). ويتم إجراء المؤشر التالي للكتلة الثالثة NULL للإشارة أنه تم إنهاء القائمة المرتبطة هنا.

 ` We have the linked list ready. 
 
       head 
         | 
         | 
    +---+---+     +---+---+       +----+------+ 
    | 1  | o----->|  2  | o-----> |  3 | NULL | 
    +---+---+     +---+---+       +----+------+ 
 
 
 Note that only head is sufficient to represent the whole list.  We can 
 traverse the complete list by following next pointers.    */ 
` 

العودة 0 } \`\` \`

#### معلومات اكثر:

*   [مقدمة للقوائم المرتبطة](http://www.geeksforgeeks.org/linked-list-set-1-introduction/)
*   [القوائم المرتبطة (فيديو YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)