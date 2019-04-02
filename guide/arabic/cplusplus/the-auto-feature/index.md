---
title: The Auto Feature
localeTitle: الميزة التلقائية
---
## الميزة التلقائية

`auto` هي ميزة C ++ 11 تتيح للمبرمج إمكانية استنتاج نوع البيانات في تعريف. هذا يمكن أن يوفر لك الكثير من الكتابة ، وخاصة مع أنواع معقدة.

بدون `auto` :

 `double x = 10.425; 
 double y = x * x; 
` 

مع `auto` :

 `double x = 10.425; 
 auto y = x * x; 
` 

في حين أنه قد يبدو تافهاً ، فإنه يصبح مفيداً بشكل لا يصدق عندما تبدأ أنواع البيانات في التعقيد. على سبيل المثال ، افترض أنك تريد تخزين [`vector`](https://guide.freecodecamp.org/cplusplus/vector) من الموظفين ، وأنك مهتم فقط باسمهم وعمرهم. إحدى الطرق لتخزين الاسم والعمر يمكن أن تكون `pair` `string` وأخرى `unsigned int` . يتم `std::vector<std::pair<std::string, unsigned int>> employees` كـ `std::vector<std::pair<std::string, unsigned int>> employees` . الآن لنفترض أنك تريد الوصول إلى آخر موظف تمت إضافته:

 `std::vector<std::pair<std::string, unsigned int>> employees; 
 
 // without auto, you have to write: 
 std::pair<std::string, unsigned int>> last_employee = employees.back(); 
 
 // with auto, you just have to write: 
 auto last_employee = employees.back(); 
` 

بمجرد تحديد المحول البرمجي للنوع على الجانب الأيمن من `=` يستبدل `auto` بهذا النوع.

في الإصدارات الحديثة من C ++ (منذ C ++ 14)، `auto` يمكن أن تستخدم أيضا في تعريف الدالة كنوع العودة. سوف يقوم المترجم بعد ذلك باستنتاج نوع الإرجاع من بيان الإرجاع داخل الدالة. على سبيل المثال مع الموظفين:

 `std::vector<std::pair<std::string, unsigned int>> employees; 
 auto get_last_employee() { 
    return employees.back(); // Compiler knows the return type from this line. 
 } 
` 

سيعرف المحول البرمجي من السطر مع العبارة الإرجاع أنه يجب أن يكون نوع الإرجاع من الدالة `std::vector<std::pair<std::string, unsigned int>>` .

على الرغم من [كونها](http://en.cppreference.com/w/cpp/language/auto) تقنية للغاية ، إلا أن [صفحة cppreference على السيارات](http://en.cppreference.com/w/cpp/language/auto) تصف الكثير من الاستخدامات `auto` وتفاصيل متى يمكن استخدامها أو لا يمكن استخدامها.

### `auto` قبل C ++ 11

في بعض الكتب المدرسية القديمة التي تحتوي على شفرة قديمة _جدًا_ ، يتم استخدام الكلمة الرئيسية `auto` بطريقة مختلفة تمامًا.

كانت هذه `auto` المحددة عبارة عن كلمة رئيسية مستعارة من C ، وربما كانت الكلمة الرئيسية الأقل استخدامًا على الإطلاق.

في C ++ ، تحتوي كل المتغيرات على _مدة تلقائية_ ، أي أنها محددة حتى تخرج من الوظيفة التي تم تعريفها بها.

فمثلا:

\`\` \`حزب الشعب الكمبودي

# تتضمن

انت مين() { كثافة العمليات أ = 1 ؛ // المنطقي ، كما تم تعريفه في نفس الوظيفة

 `    return 0; 
` 

} أ = 2 ؛ // لا معنى له ، حيث لا يتم تعريف هنا \`\` \`

هذا معطى في C ++ ، وحدد `auto` أن المتغير يجب أن يكون له _مدة تلقائية_ ، وبالتالي عدم الاستخدام.

## قراءة متعمقة :

*   http://www.stroustrup.com/C++11FAQ.html#auto