---
title: Classes and Objects
localeTitle: الطبقات والكائنات
---
## الطبقات والكائنات

### أشياء في روبي

دعونا نذهب بسرعة على الأشياء روبي. في العالم الحقيقي ، قد تكون الأشياء أي شيء بما في ذلك سيارة أو كمبيوتر أو حتى إنسان. كل واحد من هذه الكائنات لديه حالة وسلوكيات.

بالنظر إلى السيارة ، يمكن وصف حالتها بأنها نموذجها ، وصنعها ، ولونها. يمكن لسلوك السيارة أن يتحول أو يفرخ أو يفرمل.

كائن في روبي لديه خصائص مشابهة جدا. لدى كائنات روبي أيضًا حالة وسلوك. في Ruby Objects ، يتم تخزين الحالة في المتغيرات المثالية ويتم تخزين السلوك في الدالات.

### دروس في روبي

الفئة هي في الأساس قالب برنامج. يعرّف هذا القالب `properties` الأولية باستخدام `instance variables` . مرة أخرى ، هناك أيضا `behaviors` أخرى محددة في شكل وظائف.

يتم إنشاء مثيل جديد للفئة باستخدام طريقة `initialize` للفئة.

خذ على سبيل المثال نموذج التعليمات البرمجية التالي للفئة:

 `class Car 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
` 

كما رأيتم، يتم تعريف الطبقات باستخدام `class` الكلمة وكتلة رمز الفئة ينتهي مع `end` keywork. الدالة. `.initialize` هو المُنشئ. عند إنشاء هذا الكائن ، نحدد السمات `@make` و `@model` و `@color` بالقيم التي `@color` إلى المُنشئ.

### خلق مثيل للفئة

الآن ، لإنشاء مثيل لهذا الفصل ، تحتاج فقط إلى استدعاء الدالة `.new` .

 `mazda3 = Car.new('Mazda', 'Mazda3', 'White') 
` 

هذا شيء عظيم ، لكن في بعض الأحيان قد تحتاج إلى تغيير بعض هذه السمات! معظم هذه الصفات في هذا المثال ستكون ثابتة. ومع ذلك ، تخيل أنك قررت الحصول على طلاء جديد. كيف ستذهب حول تحديث حالة هذا الشيء من `Car` ؟

### تعديل حالة المثيل

لحسن الحظ ، فإنه من السهل تحديث حالة كائن. أولا، نحن بحاجة إلى `setter` طريقة! تعرف روبي **جالبة** **واضعة** الإعدادات كما في `attr_reader` و `attr_accessor` على التوالي. بالنسبة إلى إعدادات getter و setter على سمة معينة ، يمكنك أيضًا استخدام `attr_accessor` فقط.

لشرح ذلك ، قمت بتعديل كائن السيارة السابق بهذه الإعدادات المعرفة حديثًا.

 `class Car 
    attr_accessor :color 
    attr_reader :make, :model 
 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
` 

حتى الآن يمكننا تغيير الحالة وقراءة حالة الكائن.

 ``irb(main):023:0> c = Car.new('Mazda', 'Mazda3', 'White') 
 => #<Car:0x00007fd3ca13fdd0 @make="Mazda", @model="Mazda3", @color="White", @speed=nil> 
 irb(main):024:0> c.color 
 => "White" 
 irb(main):025:0> c.make 
 => "Mazda" 
 irb(main):026:0> c.model 
 => "Mazda3" 
 irb(main):027:0> c.color = 'Brutal Blue' 
 => "Brutal Blue" 
 irb(main):028:0> c.make = 'Prius' 
 Traceback (most recent call last): 
        2: from /usr/local/bin/irb:11:in `<main>' 
        1: from (irb):28 
 NoMethodError (undefined method `make=' for #<Car:0x00007fd3ca13fdd0>) 
 Did you mean?  make 
`` 

عرض الإخراج السابق من `irb` ، يمكنك أن ترى أن كل واحد من متغيرات الحالة للقراءة. يمكننا أن نكتب إلى `@color` ، لكننا في نهاية المطاف يسبب استثناء `NoMethodError` عندما نحاول الكتابة إلى `@make` . هذا لأن `@make` تم تعريفه فقط باستخدام `attr_reader` ، لذلك `make=` غير معرف.

### مصادر

*   [روبي البرمجة / بناء الجملة / الطبقات](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)