---
title: Vectors
localeTitle: ثلاثة أبعاد
---
## ثلاثة أبعاد

يعد `vector` C ++ واحدًا من أكثر الحاويات استخدامًا في C ++. الحاوية عبارة عن بنية بيانات تخزن مجموعة من الكائنات التي يمكن أن تختلف عن الترتيب (مثل `vector` !) إلى غير مرتبة (مثل `set` ). تحتوي كل حاويات C ++ على مجموعة مختلفة من الوظائف التي تسمح لك بالوصول إلى كائن (كائنات) في تلك المجموعة ، وتعديلها وتكرارها فوق العناصر الموجودة في بنية البيانات تلك.

تتشابه المؤشرات مع ArrayLists في Java حيث لا يلزم تحديد طول الحاوية. مقارنةً بالمصفوفة التي يتعين عليك فيها تحديد حجمها ، يعتمد حجمها على محتوياتها.

`std::vector` هو جزء من مكتبة C ++ القياسية (ومن ثم `std::` ويسمح لك بتخزين البيانات المتجاورة من نفس نوع البيانات. ملاحظة: **يجب أن تكون جميع الكائنات داخل المتجه من نفس نوع البيانات**

يدخل نوع البيانات الذي تقوم بتخزينه ضمن المتجه ضمن أقواس زاوية بجوار الكلمة الأساسية للمتجه. على سبيل المثال ، إذا كنت ترغب في تخزين مجموعة من السلاسل ، فسيكون المتجه `std::vector<std::string> vector_name`

_ملاحظة_ : يجب عليك تضمين مكتبة المتجه عند استخدام المتجهات!

`#include <vector>`

### ناقلات البناء

هناك العديد من الطرق convinent لبناء ناقلات.

استخدام قائمة intializer - حيث يتم إدراج الكائنات داخل مجموعة من الأقواس: `{ }`

 `std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5 
 std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world" 
 std::vector<bool> v; // v is an empty vector 
` 

بناءه من متجه آخر (يعرف هذا باسم نسخة البناء)

 `std::vector<double> a{1.0, 2.0, 3.0}; 
 std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0 
` 

استهلاله بنفس العنصر:

 `std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1 
` 

### المتجهات المتجهات

يمكن اعتبار المتكررات كمؤشرات تستخدم على وجه التحديد للتنقل في الحاويات (مثل المتجهات). تبدأ أهم التكرارات `begin()` `end()` . `begin()` بإرجاع مؤشر إلى العنصر الأول في متجه بينما تشير نقاط `end()` إلى موضع واحد بعد العنصر الأخير في متجه. على هذا النحو من خلال حلقات ناقلات يمكن أن يتم على النحو التالي:

 `std::vector<int> vec{1, 2, 3}; 
 
 for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){ 
    // since vec_it is a pointer and points to the memory address of the item 
    // inside the vector, vec_it must be dereferenced using '*' 
    std::cout << *it << '\n'; 
 } 
 /*  Output 
    1 
    2 
    3 
 */ 
` 

### تعديل ناقل

دفع العناصر إلى متجه:

 `std::vector<int> vec; // constructs an empty vector 
 
 for (int i = 0; i < 10; i = i + 2){ 
    vec.push_back(i); 
 } 
 // vec now holds [0, 2, 4, 6, 8] 
` 

يختلف إدراج عنصر في موضع معين قليلاً. إدراج ناقلات C ++ تعمل وظيفة على المكرر. وسوف تدرج البند المعطى موضع واحد قبل المعطى مكرر.

 `std::vector<unsigned int> vec{3, 400, 12, 45}; 
 
 auto iter = vec.begin() + 2; // iter now points to '12' 
 vec.insert(iter, 38); // inserts '38' before '12' 
 
 // vec: [3, 400, 38, 12, 45] 
` 

### الوصول للعنصر

توفر المكتبة القياسية وظائف مختلفة للوصول إلى عناصر معينة في متجهك.

 `std::vector<std::string> a{"test", "element", "access"}; 
 
 std::string first_item = a.front(); // gets the first item of the vector ("test") 
 std::string last_item = a.back(); // gets the last item in the vector ("access") 
 
 // To get an element at a specific index (remember: vector indices start at 0) 
 std::string second_item = a.at(2); // gets "element" 
 // OR 
 std::string second_item = a[2]; // gets "element" 
` 

### الالتفاف على العناصر في `vector`

التكرار فوق العناصر الموجودة في المتحد C ++ `std::vector` يختلف اختلافًا كبيرًا عن التكرار فوق العناصر في متجه في JavaScript أو Ruby. نظرًا لأن C ++ عبارة عن تجريد رقيق لـ C ، فيمكنك فقط التكرار فوق العناصر باستخدام هذه المتغيرات الصغيرة الرائعة التي تسمى المتكررات للوصول إلى كل عنصر. غالبًا ما تأتي المتكررات في شكل مؤشرات هي متغيرات تقوم بتخزين عنوان الذاكرة لمتغير آخر. يمكنك معرفة المزيد حول المؤشرات [هنا](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm) . ومع ذلك ، لأن التكرارات تعمل كمؤشرات (أو العكس) ، من أجل معرفة ما يشيرون إليه ، تحتاج إلى إدخاله في متغير من نوع appropirate. كيف نفعل ذلك؟ هنا. نحن. اذهب!

 `std::vector<std::string> a{"test", "element", "access"}; 
 for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword 
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to 
 } 
` 

من هنا ، يمكنك القيام بكل أنواع الأشياء الرائعة ، مثل التلاعب بالمتجه أو العبث مع أمره كما تشاء!

### بعض وظائف الأعضاء مفيدة

توفر أيضًا مكتبة القوالب القياسية (STL) _طرقًا_ مختلفة لك:

 `std::vector.size(); // returns the size of the vector (the number of positions in the vector) 
 std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector 
 std::vector.end(); // returns an iterator which is a pointer to the end of the vector 
 std::vector.empty(); // returns true if the vector is empty, otherwise returns false. 
 std::vector.front(); // returns the first element of the vector. 
 std::vector.back(); // returns the last element of the vector. 
 std::vector.push_back(n); // inserts the element "n" to the end of the vector. 
 std::vector.pop_back(n); // removes the last element of the vector 
` 

### المتجهات المحاكية

توفر التكرارات طريقة أخرى للوصول إلى العناصر في المتجه.

إعلان Iterator.

 `std::vector<int> v; 
 //Iterator delcaration for the above vector will correspond to 
 std::vector<int>::iterator it; 
` 

استخدام المكرر لطباعة عناصر المتجه باستخدام الحلقة

 `for(it=v.begin(); it!=v.end(); ++it) 
 //std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively. 
  cout<<*it; 
` 

### متكررة من خلال ناقل

هناك طرق مختلفة للتكرار من خلال المتجه والوصول إلى محتوياته. النماذج التالية مكافئة ، أولها ينطوي على استخدام تعبير قائم على أساس (منذ C ++ 11) ، والثاني يستخدم التكرارات ، والآخر هو التكرار المستند إلى الفهرسة

\`\` \`cpp

# تتضمن

# تتضمن

// أعلن أول المتجه الأمراض المنقولة جنسيا :: ناقلات myVector {1، 2، 3، 4، 5}؛ // a عبارة عن متجه 5 أحصمة: 1 و 2 و 3 و 4 و 5

// استخدام حلقة تستند إلى مجموعة (منذ C ++ 11) لـ (int element: myVector) {/ / / / تقرأ مثل "لكل عنصر في myVector" std :: cout << "العنصر هو" << element << std :: endl؛ }

// باستخدام مبرمج الأمراض المنقولة جنسيا :: ناقلات :: يكررها ؛ // تعلن عن المكرر لـ (it = myVector.begin ()؛ it! = myVector.end ()؛ ++ it) { std :: cout << "العنصر هو" << \* it << std :: endl؛ // Dereference the iterator to access data }

// باستخدام المؤشرات ل(الأمراض المنقولة جنسيا :: ناقلات :: size\_type i = 0؛ i! = myVector.size ()؛ ط ++) { std :: cout << "العنصر هو" << myVector \[i\] << std :: endl؛ // Dereference the iterator to access data }

 `### Sorting A Vector In Ascending Order 
 Sorting a vector based on ascending order can be done with the help of Sort() in C++. 
` 

حزب الشعب الكمبودي

# تتضمن

# تتضمن

# تتضمن

استخدام اسم للمحطة؛

انت مين(){

قوه موجهة v {10، 5، 82، 69، 64، 70، 3، 42، 28، 0}؛ sort (v.begin ()، v.end ())؛

cout << "Vector Contents Sorted In Ascending Order: \\ n"؛ for (int e: v) { cout << e << ""؛ }

العودة 0 }

 `### Sorting Vector In Descending Order 
 Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++. 
` 

حزب الشعب الكمبودي

# تتضمن

# تتضمن

# تتضمن

استخدام اسم للمحطة؛

انت مين(){

قوه موجهة v {10، 5، 82، 69، 64، 70، 3، 42، 28، 0}؛ نوع (v.begin () ، v.end () ، أكبر ())؛

cout << "Vector Contents Sorted In Ascending Order: \\ n"؛ for (int e: v) { cout << e << ""؛ }

العودة 0 } \`\` \`