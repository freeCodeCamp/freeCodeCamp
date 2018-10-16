---
title: Class
localeTitle: صف دراسي
---
## صف دراسي

توفر الفئات وسيلة لتجميع البيانات والوظائف معًا. ينشئ إنشاء فئة جديدة نوعًا جديدًا من الكائنات ، مما يسمح بإنشاء نسخ جديدة من هذا النوع. يمكن أن يكون لكل مثيل فئة سمات مرتبطة به للحفاظ على حالته. يمكن أن تحتوي مثيلات الفئة أيضًا على طرق (يتم تعريفها بواسطة الفئة الخاصة بها) لتعديل حالتها.

مقارنة مع لغات البرمجة الأخرى ، فإن آلية التصنيف في Python تضيف فصولا بحد أدنى من بناء الجملة الجديدة والدلالات. إنه خليط من آليات الفصل الموجودة في C ++. توفر فصول Python كافة الميزات القياسية للبرمجة الكائنية التوجه: تسمح آلية الوراثة الطبقية لفئات أساسية متعددة ، يمكن للفئة المشتقة تجاوز أي طرق لفئة أو فصولها الأساسية ، ويمكن لطريقة استدعاء طريقة فئة أساسية تحمل الاسم نفسه. يمكن أن تحتوي الكائنات على كميات وأنواع بيانات عشوائية. كما هو الحال بالنسبة للوحدات ، فالفصول الدراسية تشترك في الطبيعة الديناميكية لبيثون: يتم إنشاؤها في وقت التشغيل ، ويمكن تعديلها بعد الإنشاء.

#### تعريف صيغة الطبقة:

أبسط شكل من أشكال تعريف الفئة يشبه هذا:

 ``class ClassName: 
    <statement-1> 
        ... 
        ... 
        ... 
    <statement-N> 
 ``` 
 
 #### Class Objects: 
 
 Class objects support two kinds of operations: attribute references and instantiation. 
 
 Attribute references use the standard syntax used for all attribute references in Python: `obj.name`. 
 Valid attribute names are all the names that were in the class's namespace when the class object was created. 
 So, if the class definition looked like this: 
`` 

الثعبان فئة MyClass: "" "فئة بسيطة مثال" "" ط = 12345

 `def f(self): 
    return 'hello world' 
` 

 ``Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively. 
 Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`. 
 
 Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class): 
`` 

الثعبان x = MyClass ()

 `Creates a new instance of the class and assigns this object to the local variable x. 
 
 The instantiation operation (“calling” a class object) creates an empty object. 
 Many classes like to create objects with instances customized to a specific initial state. 
 Therefore a class may define a special method named __init__(), like this: 
` 

الثعبان def **init** (الذاتية): self.data = \[\]

 ``When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 
`` 

الثعبان x = MyClass ()

 ``Of course, the `__init__()` method may have arguments for greater flexibility. 
 In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example, 
`` 

الثعبان مجمع الصف: def **init** (self، realpart، imagpart): self.r = realpart self.i = تخيل ...

x = معقدة (3.0 ، -4.5)

> > > xr، xi (3.0 ، -4.5) \`\` \`