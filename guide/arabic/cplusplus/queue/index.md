---
title: queue
localeTitle: طابور
---
## طوابير

`queue` هي واحدة من الحاويات الأكثر استخدامًا في C ++. الحاوية عبارة عن بنية بيانات تخزن مجموعة من الكائنات ، بعضها في ترتيب ، وبعضها لا. تحتوي كل الحاويات على مجموعة مختلفة من الوظائف التي تسمح لك بالوصول إلى كائن (كائنات) في تلك المجموعة.

`std::queue` جزء من المكتبة القياسية C ++ (ومن هنا pred `std::` ويسمح لك بتخزين البيانات في First Out First (FIFO). ملاحظة: **يجب أن تكون كافة الكائنات الموجودة في قائمة انتظار من نفس نوع البيانات**

يدخل نوع البيانات الذي تقوم بتخزينه في قائمة الانتظار داخل أقواس زاوية بجوار الكلمة الرئيسية في قائمة الانتظار. على سبيل المثال ، إذا كنت ترغب في تخزين مجموعة من الأعداد الصحيحة ، فستكون قائمة الانتظار `std::queue<int> queue_name`

### Queue LIFO شرح

تتيح لنا `queue` الضغط على / enqueue و pop / dequeue بترتيب معين. **دفع** يعني إدخال كائن في مقدمة قائمة الانتظار. **البوب** تعني سحب الكائن "الأقدم" من نهاية قائمة الانتظار. لذا عندما تضغط عليه في المقدمة وعندما تطفو فإنك تستخرج العنصر الأقدم.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "FIFO Queue Enqueue و Dequeue مثال")

### عمليات قائمة الانتظار

يدعم حاوية قائمة الانتظار العمليات التالية:

*   دفع (enqueue)
*   pop (dequeue)
*   فارغة
*   بحجم
*   أمامي
*   الى الخلف

#### إدفع

يسمح لك بإدراج عنصر جديد في نهاية قائمة الانتظار ، بعد العنصر الأخير الحالي.

 `//Push operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  return 0; 
 } 
` 

#### أمامي

يسمح لك بالوصول إلى العنصر التالي في قائمة الانتظار دون إزالته. العنصر التالي هو العنصر "الأقدم" في قائمة الانتظار.

 `//Front operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
` 

 `Output: 
 1 
 1 
` 

#### فرقعة

يسمح لك بإزالة العنصر التالي في قائمة الانتظار ، مما يقلل بشكل فعال حجمه بمقدار واحد. العنصر الذي تمت إزالته هو العنصر "الأقدم".

 `//Pop operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
 
  return 0; 
 } 
` 

 `Output: 
 1 
 2 
` 

#### بحجم

لعرض عدد العناصر في `queue` .

 `//Size operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
` 

 `Output: 
 2 
 1 
 0 
` 

#### فارغة

إرجاع ما إذا كانت `queue` فارغة ، أي ما إذا كان حجم قائمة الانتظار هو صفر. تقوم بإرجاع `true` إذا كان حجم قائمة الانتظار 0 أخرى بإرجاع `false`

\`\` \`cpp // عملية فارغة في قائمة الانتظار

# تتضمن // std :: cout

# تتضمن // std :: stack

انت مين () { الأمراض المنقولة جنسيا :: طابور ف.

q.push (1)؛ q.push (2)؛

بينما (q.empty ()! = true) { الأمراض المنقولة جنسيا :: محكمة << q.front () << '\\ ن'. q.pop ()؛ }

std :: cout << "الخروج من الحلقة" << '\\ n'؛ العودة 0 }

 `    Output: 
    1 
    2 
    Out of loop 
 
 #### Back 
 
 Allows you to access the last element in the queue without removing it. 
 The next element is the "newest" element in the queue. 
` 

حزب الشعب الكمبودي // Back العملية في قائمة الانتظار

# تتضمن // std :: cout

# تتضمن // std :: queue

انت مين () { الأمراض المنقولة جنسيا :: طابور ف.

q.push (1)؛ // دفع 1 أمام قائمة الانتظار q.push (2)؛ // دفع 2 أمام قائمة الانتظار

الأمراض المنقولة جنسيا :: محكمة << q.back () << '\\ ن'. // الوصول إلى الجزء الخلفي من قائمة الانتظار الأمراض المنقولة جنسيا :: محكمة << q.back () << '\\ ن'. // الوصول إلى الجزء الخلفي من قائمة الانتظار

العودة 0 } \`\` \`

 `Output: 
 2 
 2 
` 

### لمزيد من الموارد:

http://www.cplusplus.com/reference/queue/queue/

### اقتباسات:

الصورة مجاملة: https://en.wikipedia.org/wiki/FIFO _(computing_ and\_electronics)