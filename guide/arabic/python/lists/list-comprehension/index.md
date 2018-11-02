---
title: List Comprehension
localeTitle: قائمة الفهم
---
## قائمة الفهم

يعد "الفهم بالقائمة" طريقة للتكرار من خلال قائمة لإنتاج قائمة جديدة تعتمد على بعض الشروط. يمكن أن يكون الأمر مربكًا في البداية ولكن بمجرد أن تتأقلم مع الصيغة ، فهي قوية جدًا وسريعة.

الخطوة الأولى في تعلم كيفية استخدام فهم القائمة هي النظر إلى الطريقة التقليدية للتكرار من خلال قائمة. فيما يلي مثال بسيط يقوم بإرجاع قائمة جديدة بالأرقام الزوجية.

 `# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # Empty list that will be populate with a loop 
 even_list = [] 
 
 for number in some_list: 
  if number % 2 == 0: 
    even_list.append(number) 
 
 # even_list now equals [2, 8, 10] 
` 

أولا يتم إنشاء قائمة مع بعض الأرقام. تقوم بعد ذلك بإنشاء قائمة فارغة ستحمل نتائجك من الحلقة. في الحلقة ، تحقق مما إذا كان كل رقم قابل للقسمة على 2 ، وفي هذه الحالة ، يمكنك إضافته إلى even\_list. استغرق هذا خمسة أسطر من الشفرة لا تشمل التعليقات والمساحة البيضاء التي ليست كثيرة في هذا المثال.

الآن على سبيل المثال فهم القائمة.

 `# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # List Comprehension 
 even_list = [number for number in some_list if number % 2 == 0] 
 
 # even_list now equals [2, 8, 10] 
` 

مثال آخر ، مع نفس الخطوتين: سيؤدي ما يلي إلى إنشاء قائمة بالأرقام التي تتوافق مع الأرقام الموجودة في `my_starting_list` مضروبة في 7.

 `my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 my_new_list = [] 
 
 for item in my_starting_list: 
 my_new_list.append(item * 7) 
` 

عند تشغيل هذا الرمز ، تكون القيمة النهائية لـ `my_new_list` هي: `[7, 14, 21, 28, 35, 42, 49, 56]`

يمكن لمطوّر البرامج الذي يستخدم فهم القوائم تحقيق النتيجة نفسها باستخدام فهم القائمة التالي ، مما يؤدي إلى نفس `my_new_list` .

 `my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 
 my_new_list = [item * 7 for item in my_starting_list] 
` 

هناك صيغة بسيطة للكتابة بطريقة فهم قائمة هي:

`my_list = [{operation with input n} for n in {python iterable}]`

استبدل `{operation with input n}` مع أنك تريد تغيير العنصر الذي تم إرجاعه من التكرار. يستخدم المثال أعلاه `n * 7` ولكن يمكن أن تكون العملية بسيطة أو معقدة حسب الضرورة.

استبدل `{python iterable}` بأي طريقة قابلة للتكرار. ستكون [أنواع التسلسل](https://guide.freecodecamp.org/python/sequence-types) أكثر شيوعًا. تم استخدام قائمة في المثال أعلاه ، لكن الصفوف والنطاقات شائعة أيضًا.

يضيف الفهم قائمة عنصر من قائمة موجودة إلى قائمة جديدة إذا تم استيفاء بعض الشرط. إنه أكثر إتقانا ، ولكنه أيضا أسرع بكثير في معظم الحالات. في بعض الحالات ، قد يعوق فهم القائمة إمكانية القراءة ، لذا يجب أن يوازن الشخص الطيار خياراته عند اختيار استخدام فهم القائمة.

## أمثلة على الفهم بالقائمة الشرطية

يمكن التحكم في تدفق السيطرة في فهم القوائم باستخدام الشروط الشرطية. ل exmaple:

 `only_even_list = [i for i in range(13) if i%2==0] 
` 

هذا يكافئ الحلقة التالية:

 `only_even_list = list() 
 for i in range(13): 
  if i%2 == 0: 
    only_even_list.append(i) 
` 

يمكن للفهم قائمة تحتوي أيضا متداخلة إذا كانت الظروف. خذ بعين الاعتبار الحلقة التالية:

 `divisible = list() 
 for i in range(50): 
  if i%2 == 0: 
    if i%3 == 0: 
      divisible.append(i) 
` 

باستخدام فهرسة القوائم ، يمكن كتابة هذا على النحو التالي:

 `divisible = [i for i in range(50) if i%2==0 if i%3==0] 
` 

يمكن استخدام عبارة If-Else أيضًا مع فهم القائمة.

 `list_1 = [i if i%2==0 else i*-1 for i in range(10)] 
` 

#### معلومات اكثر:

[بايثون هياكل البيانات - قوائم](https://docs.python.org/2.7/tutorial/datastructures.html)

[بايثون للحلقات](https://guide.freecodecamp.org/python/for-loop-statements)

[قوائم بايثون](https://guide.freecodecamp.org/python/learn-about-python-lists)

[بايثون للمبتدئين - قائمة الفهم](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)