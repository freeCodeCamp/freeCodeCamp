---
title: Lists
localeTitle: قوائم
---
**`list` المهام: `list` المعلومات الأساسية**

[بيثون مستندات - قوائم](https://docs.python.org/3/library/stdtypes.html#lists)

**خلق:**

يتم إنشاء `list` فارغة باستخدام زوج من الأقواس المربعة:

 `>>> empty_list = [] 
 >>> type(empty_list) 
 <class 'list'> 
 >>> len(empty_list) 
 0 
` 

يمكن إنشاء `list` بعناصر من خلال تضمين قائمة عناصر مفصولة بفواصل مع أقواس مربعة. تسمح القوائم بأن تكون العناصر من أنواع مختلفة (غير متجانسة) ولكنها الأكثر شيوعًا من نوع واحد (متجانس):

 `>>> homogeneous_list = [1, 1, 2, 3, 5, 8] 
 >>> type(homogeneous_list) 
 <class 'list'> 
 >>> print(homogeneous_list) 
 [1, 1, 2, 3, 5, 8] 
 >>> len(homogeneous_list) 
 6 
 >>> heterogeneous_list = [1, "Hello Campers!"] 
 >>> print(heterogeneous_list) 
 [1, "Hello Campers!"] 
 >>> len(heterogeneous_list) 
 2 
` 

يمكن أيضًا استخدام مُنشئ `list` لإنشاء `list` :

 `>>> empty_list = list()                            # Creates an empty list 
 >>> print(empty_list) 
 [] 
 >>> list_from_iterable = list("Hello campers!")    # Creates a list from an iterable. 
 >>> print(list_from_iterable) 
 ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!'] 
` 

**الوصول إلى عناصر `list` :**

 `>>> my_list = [1, 2, 9, 16, 25] 
 >>> print(my_list) 
 [1, 2, 9, 16, 25] 
` 

_صفر مفهرسة_

 `>>> my_list[0] 
 1 
 >>> my_list[1] 
 2 
 >>> my_list[2] 
 9 
` 

_التفاف حول الفهرسة_

 `>>> my_list[-1] 
 25 
 >>> my_list[-2] 
 16 
` 

_تفريغ قوائم python-3_

 `>>> print(*my_list) 
 1 2 9 16 25 
` 

**متقلب:**

`lists` هي حاويات قابلة للتغيير. الحاويات القابلة للتبديل هي حاويات تسمح بالتغييرات التي يتم احتواؤها على الكائنات بواسطة الحاوية. **TODO: إضافة المزيد؟**

_إعادة ترتيب العناصر في قائمة_

يمكن استخراج عناصر من `list` وإعادة ترتيبها باستخدام `list` أخرى كمؤشر.

 `>>> my_list = [1, 2, 9, 16, 25, 34, 53, 21] 
 >>> my_index = [5, 2, 0] 
 >>> my_new_list = [my_list[i] for i in my_index] 
 >>> print(my_new_list) 
 [34, 9, 1] 
` 

**TODO: أي من هذه الأسئلة يجب مناقشته هنا:**

[Python Docs - المزيد على القوائم](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)` إضافة عنصر إلى نهاية القائمة. أي ما يعادل a \[len (a):\] = \[x\].
    
*   `list.extend(L)` بتوسيع القائمة عن طريق إلحاق جميع العناصر الموجودة في القائمة المحددة. أي ما يعادل a \[len (a):\] = L.
    
*   `list.insert(i, x)` إدراج عنصر في موضع معين. الوسيطة الأولى هي فهرس العنصر الذي يجب إدخاله ، بحيث يتم إدراج a.insert (0، x) في مقدمة القائمة ، و a.insert (len (a)، x) يساوي a.append ( خ).
    
*   `list.remove(x)` إزالة العنصر الأول من القائمة التي تكون قيمتها x. إنه خطأ إذا لم يكن هناك مثل هذا البند.
    
*   `list.pop([i])` أزل العنصر في الموضع المحدد في القائمة `list.pop([i])` . إذا لم يتم تحديد أي فهرس ، يقوم a.pop () بإزالة وإرجاع العنصر الأخير في القائمة. (تشير الأقواس المربعة حول الحرف i في توقيع الطريقة إلى أن المعلمة اختيارية ، وليس أنه يجب عليك كتابة أقواس مربعة في ذلك الموضع. سترى هذا الترميز بشكل متكرر في مرجع مكتبة Python.)
    
*   `list.clear()` قم بإزالة كل العناصر من القائمة. أي ما يعادل del a \[:\].
    
*   `list.index(x)` الفهرس في قائمة العنصر الأول الذي تكون قيمته x. إنه خطأ إذا لم يكن هناك مثل هذا البند.
    
*   `list.count(x)` عدد مرات ظهور x في القائمة.
    
*   `list.sort(key=None, reverse=False)` عناصر القائمة في مكانها (يمكن استخدام الوسيطات لتخصيص الفرز ، راجع الفرز () لشرحها).
    
*   `list.reverse()` عناصر القائمة في المكان.
    
*   `list.copy()` نسخة ضحلة من القائمة. أي ما يعادل \[:\].