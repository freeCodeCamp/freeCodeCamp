---
title: For Loop Statements
localeTitle: للحصول على بيانات حلقة
---
## للحصول على بيانات حلقة

تستخدم Python حلقة for للتكرار فوق قائمة من العناصر. على عكس C أو Java ، التي تستخدم الحلقة for لتغيير قيمة في الخطوات والوصول إلى شيء مثل صفيف باستخدام تلك القيمة.

بالنسبة إلى التكرارات ، يمكنك التكرار عبر هياكل البيانات القائمة على المجموعة مثل القوائم ، و tuples ، والقواميس.

البنية الأساسية هي:

 `for value in list_of_values: 
  # use value inside this block 
` 

بشكل عام ، يمكنك استخدام أي شيء كقيمة المكرر ، حيث يمكن تعيين إدخالات من iterable. على سبيل المثال ، يمكنك فك مجموعة الصفوف من قائمة الصفوف (tuples):

 `list_of_tuples = [(1,2), (3,4)] 
 
 for a, b in list_of_tuples: 
  print("a:", a, "b:", b) 
` 

من ناحية أخرى ، يمكنك تكرار حلقة فوق أي شيء يمكن تثبيته. يمكنك استدعاء وظيفة أو استخدام قائمة حرفية.

 `for person in load_persons(): 
  print("The name is:", person.name) 
` 

 `for character in ["P", "y", "t", "h", "o", "n"]: 
  print("Give me a '{}'!".format(character)) 
` 

بعض الطرق التي يتم بها استخدام الحلقات For Forops:

**تكرار عبر الدالة range ()**

 `for i in range(10): 
    print(i) 
` 

بدلاً من كونه دالة ، فإن النطاق هو في الواقع نوع تسلسل ثابت. سيحتوي الناتج على نتائج من الحد الأدنى أي 0 إلى الحد الأعلى أي 10 ولكن باستثناء 10.By افتراضي ، يتم تعيين الحد الأدنى أو مؤشر البداية إلى الصفر. انتاج:

 `> 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
 9 
 > 
` 

بالإضافة إلى ذلك ، يمكن تحديد الحد الأدنى للتسلسل وحتى خطوة التسلسل بإضافة معلمة ثانية وثانية.

 `for i in range(4,10,2): #From 4 to 9 using a step of two 
    print(i) 
` 

انتاج:

 `> 
 4 
 6 
 8 
 > 
` 

**وظيفة xrange ()**

بالنسبة للجزء الأكبر ، فإن xrange و range هما نفس الشيء من حيث الوظيفة. كلاهما يوفر طريقة لإنشاء قائمة من الأعداد الصحيحة لتستخدمها ، على أية حال أنت تريد. الاختلاف الوحيد هو أن النطاق يقوم بإرجاع كائن قائمة بايثون وإرجاع xrange لكائن xrange. هذا يعني أن xrange لا يقوم بالفعل بإنشاء قائمة ثابتة في وقت التشغيل مثل المدى. يخلق القيم كما تحتاج إليها مع تقنية خاصة تسمى العائد. يتم استخدام هذه التقنية مع نوع من الأجسام المعروفة باسم المولدات.

أكثر شيء واحد لإضافة. في Python 3.x ، لا توجد الدالة xrange بعد الآن. تقوم دالة النطاق الآن بما يفعله xrange في Python 2.x

**يتكرر فوق القيم في قائمة أو مجموعة**

 `A = ["hello", 1, 65, "thank you", [2, 3]] 
 for value in A: 
    print(value) 
` 

انتاج:

 `> 
 hello 
 1 
 65 
 thank you 
 [2, 3] 
 > 
` 

**تكرار فوق مفاتيح في قاموس (aka hashmap)**

 `fruits_to_colors = {"apple": "#ff0000", 
                    "lemon": "#ffff00", 
                    "orange": "#ffa500"} 
 
 for key in fruits_to_colors: 
    print(key, fruits_to_colors[key]) 
` 

انتاج:

 `> 
 apple #ff0000 
 lemon #ffff00 
 orange #ffa500 
 > 
` 

**يتكرر أكثر من قائمتين من نفس الحجم في حلقة واحدة مع وظيفة zip ()**

\`\` \`الثعبان A = \["a"، "b"، "c"\] B = \["a"، "d"، "e"\]

a، b in zip (A، B): print a، b، a == b

 `Output: 
` 

\> أأ صحيح bd خطأ م كاذبة >

 `**Iterate over a list and get the corresponding index with the enumerate() function** 
` 

الثعبان A = \["this"، "is"، "something"، "fun"\]

للفهرس ، كلمة في التعداد (A): طباعة (فهرس ، كلمة)

 `Output: 
` 

\> 0 هذا 1 هو 2 شيء 3 مرح >

 `A common use case is iterating over a dictionary: 
` 

الثعبان للاسم ، phonenumber في contacts.items (): print (الاسم ، "يمكن الوصول إليه تحت" ، phonenumber)

 ``If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead: 
`` 

الثعبان للفهرس ، البند في التعداد (shopping\_basket): طباعة ("البند" ، فهرس ، "هو" ، عنصر)

 ``**for/else statements** 
 Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed. 
`` 

الثعبان _أيام_ الأسبوع _\= \["الاثنين" ، "الثلاثاء" ، "الأربعاء" ، "الخميس" ، "الجمعة"\] اليوم = 'السبت' ليوم في_ أيام _الأسبوع_ : إذا كان اليوم == اليوم: طباعة ("اليوم هو يوم من أيام الأسبوع") استراحة آخر: طباعة ("اليوم ليس يومًا في الأسبوع")

 ``In the above case the output will be `today is not a week day` since the break within the loop will never be executed. 
 
 **Iterate over a list using inline loop function** 
 
 We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following: 
`` 

الثعبان A = \["this"، "is"، "awesome"، "shinning"، "star"\]

UPPERCASE = \[word.upper () للكلمة في A\] طباعة (UPPERCASE)

 `Output: 
` 

\> \['THIS'، 'IS'، 'AWESOME'، 'SHINNING'، 'STAR'\] > \`\` \`

#### معلومات اكثر:

*   [Python2 للوثائق حلقة](https://docs.python.org/2.7/tutorial/controlflow.html#for-statements)
    
*   [Python3 للوثائق حلقة](https://docs.python.org/3/tutorial/controlflow.html#for-statements)