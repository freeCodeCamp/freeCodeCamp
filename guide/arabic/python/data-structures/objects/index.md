---
title: The Python Objects
localeTitle: كائنات بايثون
---
> في بيثون ، كل شيء _كائن_ .

تمثل _الكائنات_ مجموعة منطقية من السمات. السمات هي البيانات و / أو الوظائف. عندما يتم إنشاء كائن في Python يتم إنشاؤه _بهوية_ _ونوع_ _وقيمة_ .

في اللغات الأخرى ، _الأوليات_ هي _قيم_ لا تحتوي على _خصائص_ (سمات). على سبيل المثال ، في javascript `undefined` ، `undefined` `null` ، `boolean` ، `string` ، `number` ، `symbol` (الجديد في ECMAScript 2015) هي مواد أولية.

في بايثون ، لا توجد أوليات. `None` ، أو _منطقي_ ، أو _سلاسل_ ، أو _أرقام_ ، أو حتى _الدوال_ كلها _كائنات_ بغض النظر عن كيفية إنشائها.

يمكننا توضيح ذلك باستخدام بعض الوظائف المدمجة:

*   [`id`](https://docs.python.org/3/library/functions.html#id)
*   [`type`](https://docs.python.org/3/library/functions.html#type)
*   [`dir`](https://docs.python.org/3/library/functions.html#dir)
*   [`issubclass`](https://docs.python.org/3/library/functions.html#issubclass)

الثوابت المضمنة `None` و `True` و `False` هي _كائنات_ :

نحن اختبار `None` كائن هنا.

 `>>> id(None) 
 4550218168 
 >>> type(None) 
 <class 'NoneType'> 
 >>> dir(None) 
 [__bool__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__'] 
 >>> issubclass(type(None), object) 
 True 
` 

بعد ذلك ، دعونا نفحص `True` .

 `>>> id(True) 
 4550117616 
 >>> type(True) 
 <class 'bool'> 
 >>> dir(True) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(True), object) 
 True 
` 

لا يوجد سبب لترك خارج `False` !

 `>>> id(False) 
 4550117584 
 >>> type(False) 
 <class 'bool'> 
 >>> dir(False) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(False), object) 
 True 
` 

_سلاسل_ ، حتى عندما تم إنشاؤها بواسطة القيم الحرفية سلسلة ، هي أيضا _الكائنات_ .

 `>>> id("Hello campers!") 
 4570186864 
 >>> type('Hello campers!') 
 <class 'str'> 
 >>> dir("Hello campers!") 
 ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill'] 
 >>> issubclass(type('Hello campers!'), object) 
 True 
` 

الشيء نفسه مع _الأرقام_

 `>>> id(42) 
 4550495728 
 >>> type(42) 
 <class 'int'> 
 >>> dir(42) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(42), object) 
 True 
` 

## وظائف هي كائنات أيضا

> في بايثون ، تعتبر الدوال كائنات من الدرجة الأولى.

_تعتبر الدوال_ في Python أيضًا _كائنات_ تم إنشاؤها باستخدام _هوية_ _ونوع_ _وقيمة_ . هم أيضا يمكن أن تنتقل إلى _وظائف_ أخرى:

 `>>> id(dir) 
 4568035688 
 >>> type(dir) 
 <class 'builtin_function_or_method'> 
 >>> dir(dir) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
 >>> issubclass(type(dir), object) 
 True 
` 

من الممكن أيضًا ربط الدالات بالاسم وتسمى الدالة المندمجة باستخدام هذا الاسم:

 `>>> a = dir 
 >>> print(a) 
 <built-in function dir> 
 >>> a(a) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
` 

مصادر:

*   [انقر هنا](https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/) لمعرفة المزيد.