---
title: The Tuples
localeTitle: الصفوف
---
## الصفوف

تعتبر المجموعة مجموعة من كائنات Python. الصفوف غير قابلة للتغيير ، مما يعني أنه لا يمكن تعديلها بعد الإنشاء ، على عكس القوائم.

**خلق:**

يتم إنشاء `tuple` فارغة باستخدام زوج من الأقواس المستديرة ، `()` :

 `    >>> empty_tuple = () 
    >>> print(empty_tuple) 
    () 
    >>> type(empty_tuple) 
    <class 'tuple'> 
    >>> len(empty_tuple) 
    0 
` 

A `tuple` تم إنشاؤه باستخدام العناصر عن طريق فصل العناصر بفواصل (المحيطة الأقواس مستديرة، `()` ، اختيارية مع بعض الاستثناءات):

 `    >>> tuple_1 = 1, 2, 3       # Create tuple without round brackets. 
    >>> print(tuple_1) 
    (1, 2, 3) 
    >>> type(tuple_1) 
    <class 'tuple'> 
    >>> len(tuple_1) 
    3 
    >>> tuple_2 = (1, 2, 3)     # Create tuple with round brackets. 
    >>> print(tuple_2) 
    (1, 2, 3) 
    >>> tuple_3 = 1, 2, 3,      # Trailing comma is optional. 
    >>> print(tuple_3) 
    (1, 2, 3) 
    >>> tuple_4 = (1, 2, 3,)    # Trailing comma in round brackets is also optional. 
    >>> print(tuple_4) 
    (1, 2, 3) 
` 

A `tuple` يجب أن يكون مع وجود عنصر واحد الفاصلة زائدة (مع أو بدون أقواس جولة):

 `    >>> not_tuple = (2)    # No trailing comma makes this not a tuple. 
    >>> print(not_tuple) 
    2 
    >>> type(not_tuple) 
    <class 'int'> 
    >>> a_tuple = (2,)     # Single element tuple. Requires trailing comma. 
    >>> print(a_tuple) 
    (2,) 
    >>> type(a_tuple) 
    <class 'tuple'> 
    >>> len(a_tuple) 
    1 
    >>> also_tuple = 2,    # Round brackets omitted. Requires trailing comma. 
    >>> print(also_tuple) 
    (2,) 
    >>> type(also_tuple) 
    <class 'tuple'> 
` 

مطلوبة الأقواس المستديرة في حالات الغموض (إذا كانت المجموعة جزءًا من تعبير أكبر):

> لاحظ أنه في الواقع الفاصلة التي تجعل tuple ، وليس الأقواس. الأقواس اختيارية ، باستثناء حالة الطبقة الفارغة ، أو عندما تكون هناك حاجة لتجنب الغموض النحوي. على سبيل المثال ، `f(a, b, c)` عبارة عن استدعاء دالة بثلاث وسيطات ، بينما `f((a, b, c))` هي دالة استدعاء مع 3-tuple باعتبارها الوسيطة الوحيدة.

 `    >>> print(1,2,3,4,)          # Calls print with 4 arguments: 1, 2, 3, and 4 
    1 2 3 4 
    >>> print((1,2,3,4,))        # Calls print with 1 argument: (1, 2, 3, 4,) 
    (1, 2, 3, 4) 
    >>> 1, 2, 3 == (1, 2, 3)     # Equivalent to 1, 2, (3 == (1, 2, 3)) 
    (1, 2, False) 
    >>> (1, 2, 3) == (1, 2, 3)   # Use surrounding round brackets when ambiguous. 
    True 
` 

A `tuple` كما يمكن إنشاء مع `tuple` المنشئ:

 `    >>> empty_tuple = tuple() 
    >>> print(empty_tuple) 
    () 
    >>> tuple_from_list = tuple([1,2,3,4]) 
    >>> print(tuple_from_list) 
    (1, 2, 3, 4) 
    >>> tuple_from_string = tuple("Hello campers!") 
    >>> print(tuple_from_string) 
    ('H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!') 
    >>> a_tuple = 1, 2, 3 
    >>> b_tuple = tuple(a_tuple)    # If the constructor is called with a tuple for 
    the iterable, 
    >>> a_tuple is b_tuple          # the tuple argument is returned. 
    True 
` 

**الوصول إلى عناصر `tuple` :**

يتم الوصول إلى عناصر `tuples` ويتم فهرستها بنفس الطريقة التي تكون بها `lists` .

 `    >>> my_tuple = 1, 2, 9, 16, 25 
    >>> print(my_tuple) 
    (1, 2, 9, 16, 25) 
` 

_صفر مفهرسة_

 `    >>> my_tuple[0] 
    1 
    >>> my_tuple[1] 
    2 
    >>> my_tuple[2] 
    9 
` 

_التفاف حول الفهرسة_

 `    >>> my_tuple[-1] 
    25 
    >>> my_tuple[-2] 
    16 
` 

**التعبئة والتفريغ:**

العبارة `t = 12345, 54321, 'hello!'` مثال على تعبئة المجموعة: القيم `12345` و `54321` و `'hello!'` هي معبأة معا في صف. العملية العكسية ممكنة أيضا:

 `    >>> x, y, z = t 
` 

وهذا ما يسمى ، بشكل مناسب ، تسلسل التفريغ ويعمل لأي تسلسل على الجانب الأيمن. يتطلب تفريغ التسلسل وجود العديد من المتغيرات على الجانب الأيسر من علامة المساواة حيث توجد عناصر في التسلسل. لاحظ أن التعيين المتعدد هو في الحقيقة مجرد مجموعة من تعبئة المجموعة وتسلسل تفريغ.

 `    >>> t = 1, 2, 3    # Tuple packing. 
    >>> print(t) 
    (1, 2, 3) 
    >>> a, b, c = t    # Sequence unpacking. 
    >>> print(a) 
    1 
    >>> print(b) 
    2 
    >>> print(c) 
    3 
    >>> d, e, f = 4, 5, 6    # Multiple assignment combines packing and unpacking. 
    >>> print(d) 
    4 
    >>> print(e) 
    5 
    >>> print(f) 
    6 
    >>> a, b = 1, 2, 3       # Multiple assignment requires each variable (right) 
    have a matching element (left). 
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
    ValueError: too many values to unpack (expected 2) 
` 

**ثابت:**

`tuples` عبارة عن حاويات غير قابلة للتغيير ، **مما** يضمن عدم تغير الكائنات التي تحتوي عليها. أنه **لا** يضمن أن الكائنات التي يحتوي لن يتغير:

 `    >>> a_list = [] 
    >>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element. 
    >>> print(a_tuple) 
    ([],) 
 
    >>> a_list.append("Hello campers!") 
    >>> print(a_tuple)         # Element of the immutable is mutated. 
    (['Hello campers!'],) 
` 

**الاستخدامات:**

وظائف لا يمكن إلا بإرجاع قيمة واحدة، ومع ذلك، heterogenuous `tuple` يمكن استخدامها لإرجاع القيم متعددة من دالة. أحد الأمثلة على ذلك هو دالة `enumerate` المضمنة التي تقوم بإرجاع متكرر من `tuples` غير المتجانسة:

 `    >>> greeting = ["Hello", "campers!"] 
    >>> enumerator = enumerate(greeting) 
    >>> enumerator.next() 
    >>> enumerator.__next__() 
    (0, 'Hello') 
    >>> enumerator.__next__() 
    (1, 'campers!') 
` 

### مزيد من المعلومات:

[Python Docs - Tuples](https://docs.python.org/3/library/stdtypes.html#tuples)