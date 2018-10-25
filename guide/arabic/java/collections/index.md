---
title: Collections
localeTitle: مجموعات
---
# مجموعات

مجموعة في Java هي مجموعة من الكائنات التي يمكن طلبها (LinkedList) أو غير مرتبة (مجموعة). توجد واجهة المجموعة في أعلى التسلسل الهرمي وتمتد جميع الطبقات والواجهات الأخرى من هذه الواجهة. وهي تقع في حزمة java.util.

كما تعمل واجهة المجموعة على توسيع واجهة Iterable ، مما يعني أن كل مجموعة في جافا يجب أن تكون قابلة للتكرار. وهذا بدوره يعني أنه يمكن استخدام حلقة for-each لجلبها في تسلسل.

 `public interface Collection<E> extends Iterable<E> 
` 

بعض الطرق الأكثر شيوعًا التي توفرها هذه الواجهة هي:

 `boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed. 
 
 void clear() // Removes all the elements from the collection. 
 
 boolean contains(Object o) // Returns true if the specified element is in the collection else false 
 
 boolean isEmpty() // Returns true if the collection is empty else false 
 
 boolean remove(Object o) // Removes the specifies element and return true on successful removal else false. 
 
 int size() // Returns number of items in the collection. 
` 

يجب تنفيذ هذه الطرق وغيرها من الطرق المختلفة من خلال أي واجهة تطبيق جماعية.

## واجهات توسيع واجهة المجموعة

واجهات أخرى مهمة توسيع واجهة المجموعة هي:

جلس: مجموعة تحتوي على عناصر فريدة فقط.

طابور: تنفيذ سلوك قائمة الانتظار حيث يتم إضافة العناصر فقط في البداية وإزالتها من النهاية.

قائمة: هذه المجموعة يعالج قائمة / تسلسل من الكائن.

هذه الواجهات الأربعة (مجموعة ، مجموعة ، قائمة انتظار ، قائمة) مع SortedSet و Deque و NavigableSet تشكل التسلسل الهرمي الجماعي للمجموعة.

# فئة LinkedList

يُعد LinkedList أحد أهم فئات المجموعات التي توفر تطبيقًا قائمًا بشكل مزدوج. وهي تطبق واجهات القائمة ، Deque ، Cloneable و Serializable.

**قم بإنشاء LinkedList**

 `LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects. 
` 

يمكنك أيضًا إنشاء قائمة بأي نوع كائن آخر. على سبيل المثال.

 `LinkedList<String> stringList = new LinkedList(); 
 
 LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
` 

ملاحظة: تم تحويل جميع المجموعات في Java إلى أنواع عامة منذ 1.5 JDK

**إضافة عناصر إلى القائمة**

 `intList.add(new Integer(1)); // Add 1 to the end. 
 
 intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes 
 
 intList.addFirst(3); // Add to the beginning of the list 
 
 intList.addLast(2); // Add to the end of the list 
 
 intList.add(2, 5); // Add element 5 at index 2 
` 

دعونا نطبع القائمة

 `System.out.println(intList); // toString() method is automatically called on the list 
` 

انتاج: \[3 ، 1 ، 5 ، 2 ، 2\]

**استرداد العناصر من القائمة**

 `intList.get(3); // Returns element at index 3 ie 2 
 
 intList.getFirst(); // Get the first element ie 3 
 
 intList.getLast(); // Returns last element ie 2 
 
 intList.indexOf(2); // Returns first occured index of 2 ie 3 
 
 intList.lastIndexOf(2); // Returns last occured index of 2 ie 4 
` 

**LinkedList بمثابة مكدس**

بما أن جافا لا توفر منفصلة

 `intList.push(5); // Add element to the end of list. Works same as addLast() 
 
 intList.pop(); // Removes and returns the last element of the list. 
` 

**إزالة العناصر من القائمة**

 `intList.remove(3); // Removes the element at index 3 of the list 
 
 intList.removeFirst(); // Removes first element of the list 
 
 intList.removeLast(); // Removes last element of the list 
` 

ملاحظة: جميع الطرق المذكورة أعلاه لإزالة وجلب عنصر إرجاع NoSuchElementException في قائمة فارغة.

#### معلومات اكثر:

*   المصدر: [توثيق Java](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)