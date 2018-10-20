---
title: stack
localeTitle: كومة
---
## كومات

`stack` واحدة من حاويات الأكثر استخدامًا في C ++. الحاوية عبارة عن بنية بيانات تخزن مجموعة من الكائنات ، بعضها في ترتيب ، وبعضها لا. تحتوي كل الحاويات على مجموعة مختلفة من الوظائف التي تسمح لك بالوصول إلى كائن (كائنات) في تلك المجموعة.

`std::stack` هو جزء من المكتبة القياسية C ++ (ومن هنا pred `std::` ويسمح لك بتخزين البيانات في ترتيب Last In First Out (LIFO). ملاحظة: **يجب أن تكون كافة الكائنات الموجودة داخل بنية تخزين من نفس نوع البيانات**

يدخل نوع البيانات الذي تقوم بتخزينه داخل الكدسة داخل أقواس زاوية بجوار الكلمة الرئيسية للمكدس. على سبيل المثال ، إذا كنت ترغب في تخزين مجموعة من الأعداد الصحيحة ، فقد تكون `std::stack<int> stack_name`

### تكدس ليفو شرح

تسمح لك `stack` بالدفع والإبحار بترتيب معين. **دفع** يعني إدراج كائن في الجزء العلوي من المكدس. يعني " **Pop"** سحب آخر كائن مدرج من الجزء العلوي من المكدس. لذلك عندما تضغط عليه في الأعلى وعندما تطفو فإنك تستخرج آخر عنصر مدرج.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "LIFO Stack Push and Pop Example")

### عمليات المكدس

يدعم حاوية المكدس العمليات التالية:

*   إدفع
*   فرقعة
*   فارغة
*   بحجم
*   الى الخلف

#### إدفع

للسماح لك بإدراج عنصر جديد أعلى الرصة ، فوق العنصر العلوي الحالي.

 `//Push operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  return 0; 
 } 
` 

#### أعلى

يسمح لك بالوصول إلى العنصر العلوي دون إزالته من مجموع رقائقك.

 `//Top operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
 
  return 0; 
 } 
` 

 `Output: 
 2 
 2 
` 

#### فرقعة

يزيل العنصر الموجود أعلى الرصة ، مما يقلل بشكل فعال من حجم الرصة بمقدار واحد.

 `//Pop operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
 
 
  return 0; 
 } 
` 

 `Output: 
 2 
 1 
` 

#### بحجم

يرجع عدد العناصر في `stack` .

 `//Size operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
 
  return 0; 
 } 
` 

 `Output: 
 2 
 1 
 0 
` 

#### فارغة

إرجاع ما إذا كانت `stack` فارغة ، أي ما إذا كان حجم رصة الورق لديك صفرًا أم لا. تقوم بإرجاع `true` إذا كان حجم مكدس 0 else بإرجاع `false`

 `//Empty operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1); 
  s.push(2); 
 
  while(s.empty() != false){ 
      std::cout<<s.top()<<'\n'; 
      s.pop(); 
  } 
 
  std::cout<<"Out of loop"<<'\n'; 
  return 0; 
 } 
` 

 `Output: 
 2 
 1 
 Out of loop 
`