---
title: Python Decorators
localeTitle: بايثون ديكور
---
يعمل المصممون أساسا كأغلفة. يقوموا بتعديل سلوك الشفرة قبل وبعد تنفيذ وظيفة الهدف ، دون الحاجة إلى تعديل الوظيفة نفسها ، وزيادة الوظيفة الأصلية ، وبالتالي تزيينها.

قبل الذهاب بالتفصيل عن الديكور ، هناك بعض المفاهيم التي يجب أن تكون واضحة. في بايثون ، تعتبر الوظائف كائنات ويمكننا القيام بالكثير من الأشياء المفيدة معهم.

> ### تعيين funtions إلى متغيرات:

 `def greet(name): 
  return "Hello "+name 
 greet_someone = greet 
 print greet_someone("John") 
` 

> الإخراج: مرحبا جون

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXGk)

> ### تحديد وظائف داخل وظائف أخرى:

 `def greet(name): 
  def get_message(): 
    return "Hello " 
  result = get_message()+name 
  return result 
 print(greet("John")) 
` 

> الإخراج: مرحبا جون

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXGu)

> ### يمكن أيضًا تمرير الوظائف كمعلمات إلى وظائف أخرى:

 `def greet(name): 
  return "Hello " + name 
 def call_func(func): 
  other_name = "John" 
  return func(other_name) 
 print call_func(greet) 
` 

> الإخراج: مرحبا جون

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHC)

> ### يمكن وظائف إرجاع وظائف أخرى:
> 
> وبعبارة أخرى ، وظائف توليد وظائف أخرى.

 `def compose_greet_func(): 
  def get_message(): 
    return "Hello there!" 
  return get_message 
 greet = compose_greet_func() 
 print(greet()) 
` 

الإخراج: مرحبًا بكم!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHG)

> ### يمكن للوظائف الداخلية الوصول إلى النطاق المرفق
> 
> أكثر شيوعا المعروف باسم [إغلاق](http://www.shutupandship.com/2012/01/python-closures-explained.html) . نمط قوي للغاية سوف نواجهه أثناء بناء الديكور. شيء آخر لملاحظة ، Python يسمح فقط [قراءة الوصول إلى النطاق الخارجي](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html) وليس الواجب. لاحظ كيف قمنا بتعديل المثال أعلاه لقراءة وسيطة "الاسم" من النطاق المرفق للدالة الداخلية وإرجاع الدالة الجديدة.

 `def compose_greet_func(name): 
  def get_message(): 
      return "Hello there "+name+"!" 
  return get_message 
 greet = compose_greet_func("John") 
 print(greet()) 
` 

> الإخراج: مرحبًا يا جون!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHI)

## تركيب ديكور

إن أدوات الديكور الوظيفية عبارة عن أغلفة بسيطة للوظائف الموجودة. وضع الأفكار المذكورة أعلاه معا ، يمكننا بناء الديكور. في هذا المثال دعنا نأخذ في الاعتبار دالة تقوم بإخراج إخراج سلسلة دالة أخرى بواسطة علامات p.

 ``def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 my_get_text = p_decorate(get_text) 
 print (my_get_text("John")) 
`` 

> الإخراج: `<p>` lorem ipsum، John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHL)

كان هذا أول مصمم لنا. تقوم الوظيفة التي تأخذ وظيفة أخرى كوسيطة ، بإنشاء دالة جديدة ، زيادة عمل الوظيفة الأصلية ، وإرجاع الدالة التي تم إنشاؤها حتى نتمكن من استخدامها في أي مكان. لكي يكون `get_text` حد ذاته مزينًا بـ `p_decorate` ، يجب علينا فقط تعيين _نص إلى نتيجة p_ decorate.

 `get_text = p_decorate(get_text) 
 print (get_text("John")) 
` 

> إخراج: أبجد هوز ، جون دولور الجلوس امات

شيء آخر هو أن نلاحظ أن لدينا وظيفة مزينة تأخذ حجة الاسم. كل ما كان علينا القيام به في الديكور هو السماح لمجمع get\_text بتمرير هذه الحجة.

> ### بنية بيثون الديكور

بيثون تقوم بصنع واستخدام أدوات الزينة نظافة وألطف قليلا للمبرمج من خلال بعض [السكر النحوي](http://en.wikipedia.org/wiki/Syntactic_sugar) لتزيين الحصول على _نص ليس لدينا للحصول على_ نص = ص _ديكور (الحصول على_ النص) وهناك اختصار أنيق لذلك ، وهذا هو لذكر اسم وظيفة تزيين قبل أن تكون مزينة وظيفة. يجب أن يكون اسم الديكور مزينًا برمز @.

 ``def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 @p_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print get_text("John") 
`` 

> الإخراج: `<p>` lorem ipsum، John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHN)

الآن دعنا نعتبر أننا أردنا تزيين وظيفة get\_text بواسطة وظيفتين أخريين للف div وعلامة قوية حول إخراج السلسلة.

 ``def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 def strong_decorate(func): 
    def func_wrapper(name): 
        return "`<strong>`{0}`</strong>`".format(func(name)) 
    return func_wrapper 
 
 def div_decorate(func): 
    def func_wrapper(name): 
        return "`<div>`{0}`</div>`".format(func(name)) 
    return func_wrapper 
`` 

مع النهج الأساسي ، سيكون تزيين get\_text على غرار

 `get_text = div_decorate(p_decorate(strong_decorate(get_text))) 
` 

مع تركيب بيثون للديكور ، يمكن تحقيق نفس الشيء من خلال قوة أكثر تعبيرا.

 `@div_decorate 
 @p_decorate 
 @strong_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print (get_text("John")) 
` 

> الإخراج: `<div><p><strong>` أبجد هوز ، جون دولور يجلس amet `</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHQ)

شيء واحد مهم أن تلاحظ هنا هو أن ترتيب وضع الديكور لدينا مهم. إذا كان الطلب مختلفًا في المثال أعلاه ، فسيكون الإخراج مختلفًا. ## طرق التزيين في بايثون ، الطرق هي وظائف تتوقع أن تكون معلمتهم الأولى مرجعًا للكائن الحالي. يمكننا بناء ديكورات للأساليب بنفس الطريقة ، مع الأخذ بعين الاعتبار في وظيفة الغلاف.

 ``def p_decorate(func): 
  def func_wrapper(self): 
    return "`<p>`{0}`</p>`".format(func(self)) 
  return func_wrapper 
 
 class Person(object): 
  def __init__(self): 
    self.name = "John" 
    self.family = "Doe" 
  @p_decorate 
  def get_fullname(self): 
    return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
`` 

> الإخراج: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXH2)

وهناك نهج أفضل بكثير هو جعل ديكور لدينا مفيدة للوظائف والطرق على حد سواء. يمكن القيام بذلك عن طريق وضع [\* arg و \*\* kwargs](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) كمعلمات [للمجمع](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) ، ثم يمكنه قبول أي عدد عشوائي من الحجج [ووسائط](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) الكلمات الرئيسية.

 ``def p_decorate(func): 
   def func_wrapper(*args, **kwargs): 
       return "`<p>`{0}`</p>`".format(func(*args, **kwargs)) 
   return func_wrapper 
 
 class Person(object): 
    def __init__(self): 
        self.name = "John" 
        self.family = "Doe" 
    @p_decorate 
    def get_fullname(self): 
        return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
`` 

> الإخراج: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXH5)

### تمرير الحجج إلى المصممين إذا نظرنا مرة أخرى إلى المثال الذي سبق ذكره أعلاه ، فيمكنك أن تلاحظ كيف أن الزخارف الزائدة عن الحاجة موجودة في المثال. 3 ديكورات (div _decorate، p_ decorate، strong\_decorate) لكل منها نفس الوظيفة لكن مع التفاف السلسلة بعلامات مختلفة. يمكننا بالتأكيد أن نفعل ما هو أفضل بكثير من ذلك. لماذا لا يكون هناك تنفيذ أكثر عمومية لواحد يأخذ العلامة للتغليف بها كسلسلة؟ نعم من فضلك!

 `def tags(tag_name): 
    def tags_decorator(func): 
        def func_wrapper(name): 
            return "<{0}>{1}</{0}>".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    return "Hello "+name 
 
 print (get_text("John")) 
` 

> الإخراج: `<p>` مرحبًا يا جون `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXH6)

استغرق الأمر المزيد من العمل في هذه الحالة. يتوقع المصممون الحصول على وظيفة كحجة ، وهذا هو السبب في أننا سوف نبني وظيفة تأخذ هذه الحجج الإضافية وتولّد ديكورنا على الطاير. في المثال أعلاه ، هو مولد لدينا الديكور. تصحيح الدالات المزخرفة في نهاية اليوم ، يقوم المصممون بلف وظائفنا فقط ، في حالة تصحيح الأخطاء التي يمكن أن تسبب مشكلة لأن وظيفة التجليد لا تحمل الاسم والوحدة النمطية و docstring للوظيفة الأصلية. بناءً على المثال أعلاه ، إذا قمنا بذلك:

 `print (get_text.__name__) 
` 

> الإخراج: ملف func _كان من المتوقع أن يحصل_ النص _على_ نص بعد ، وقد تم تجاوز **اسم** الصفات ، و **doc** ، **ووحدة** الحصول على _النص من قبل تلك الخاصة بالملحمة (_ غلاف _func_ . من الواضح أنه يمكننا إعادة تعيينها داخل func\_wrapper لكن Python توفر الكثير طريقة أجمل # # # functools لانقاذ

 ``from functools import wraps 
 def tags(tag_name): 
    def tags_decorator(func): 
        @wraps(func) 
        def func_wrapper(name): 
            return "`<{0}>`{1}`</{0}>`".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    """returns some text""" 
    return "Hello "+name 
 
 print (get_text.__name__) # get_text 
 print (get_text.__doc__) # returns some text 
 print (get_text.__module__) # __main__ 
`` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CXHb)

يمكنك ملاحظة من الخاتمة أن سمات get\_text هي الصحيحة الآن.