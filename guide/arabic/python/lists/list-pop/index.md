---
title: List Pop Method
localeTitle: قائمة البوب ​​الطريقة
---
# وظيفة البوب

يزيل pop () الطريقة ويعيد العنصر الأخير من القائمة. هناك معلمة اختيارية ، فهرس العنصر المراد إزالته من القائمة. إذا لم يتم تحديد أي فهرس ، يقوم a.pop () بإزالة وإرجاع العنصر الأخير في القائمة. إذا كان المؤشر الذي تم تمريره إلى الأسلوب pop () غير موجود في النطاق ، فإنه يلقي IndexError: pop index خارج نطاق الاستثناء.

#### مثال للاستخدام

\`\` \`الحمر cities = \['New York'، 'Dallas'، 'San Antonio'، 'Houston'، 'San Francisco'\]؛

print "مدينة برزت هي:"، cities.pop () print "City at index 2 is:"، cities.pop (2) \`\` \`

\#### انتاج `City popped is : San Francisco City at index 2 is : San Antonio`

#### وظائف المكدس الأساسية

يتم استخدام أسلوب `pop()` غالبًا بالتزامن مع `append()` لتنفيذ وظائف مكدس أساسية في تطبيق Python.

 `stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    print(stack.pop()) 
` 

\#### معلومات اكثر: يمكن العثور على الوثائق الرسمية لـ `pop()` [هنا](https://docs.python.org/3.6/tutorial/datastructures.html)