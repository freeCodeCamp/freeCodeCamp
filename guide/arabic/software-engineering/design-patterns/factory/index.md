---
title: Factory
localeTitle: مصنع
---
المصنع عبارة عن نمط تصميم يهدف إلى تقليل التبعيات بين الطبقات التي تعمل على توليد (إنشاء) الأشياء والأشياء نفسها ، من خلال إنشاء فئة "المصنع" التي تتعامل مع إنشاء الطبقات. من خلال القيام بذلك ، يمكننا السماح للفئات الفرعية بإعادة تعريف أي فئة لتكوينها ، وتجميع منطق الإنشاء المحتمل أن يكون معقدًا في واجهة واحدة.

يستخدم المبرمجون أنماط تصميم المصنع لأنها تسمح لهم بإنشاء حالات من الكائنات التي تقوم بتطبيق واجهة مشتركة ، دون أن يكونوا بالضرورة على علم مسبق بفئة الخرسانة الدقيقة (التطبيق) المستخدمة. ومن الحالات الشائعة التي يكون فيها ذلك مفيدًا عندما تعتمد فئة رئيسية على فصولها الفرعية لتحديد نوع الكائن الذي يجب أن يكون فوريًا. وهو مفيد أيضًا عندما يكون إنشاء كائن معقدًا ، لأنه يسمح للمبرمج بتجميع الكود في فئة واحدة وتقليل الازدواجية.

## باستخدام نمط المصنع في جافا

لاستخدام نمط تصميم المصنع ، تحتاج أولاً إلى واجهة - كائن به فئة وأسماء متغيرة ، لكن دون تعريفات. على سبيل المثال ، لدينا هنا واجهة Java للحيوانات.

\`\` \`  
الواجهة العامة Animal { الفراغ الحديث () ؛ }

 `We now need to have "concrete classes" - classes which implement our interface and define the associated functions/ variables. 
` 

 `public class Dog implements Animal { 
 
    @Override 
    public void talk() { 
        System.out.println("Woof"); 
    } 
 } 
` 

 `public class Cat implements Animal { 
 
    @Override 
    public void talk() { 
        System.out.println("Meow!"); 
    } 
 } 
` 

 `We now define our "AnimalFactory" - the class which will handle the creation of these classes. 
` 

 `public class AnimalFactory { 
 
    public Animal getAnimal(String animalType) { 
        if (animalType.equals("dog")) { 
            return new Dog(); 
        } else if (animalType.equals("cat")) { 
            return new Cat(); 
        } 
        return null; 
    } 
 } 
` 

 `Now when we want to create a new Cat object, instead of saying something like ``` Cat cat = new Cat(); ```, we use the factory class that we have defined. For example: 
` 

 `    AnimalFactory animalFactory = new AnimalFactory(); 
 
    Animal cat = animalFactory.getAnimal("cat"); 
    cat.talk(); 
` 

 `Here we can see that the class with this instance of "Cat" doesn't really know which animal it has. But this doesn't matter - because all the classes the factory creates are concrete classes of the same interface, the parent class doesn't need to know the exact class it is using. 
 
 
 ## Factory in Python3 
 We can implement a Factory easily with static methods. 
` 

الثعبان فئة الشراب (الكائن): def **init** (self، name، price = None): self.name = الاسم self.price = السعر

فئة الشاي (شرب): def **str** (الذاتية): return 'This is tea: {} in $ {}'. format (self.name، self.price)

حليب صنف (شراب): def **str** (الذاتية): return "هذا هو الحليب: {} بتنسيق $ {}". (self.name و self.price)

فئة DrinkFactory (الكائن): staticmethod def def ( _نوع_ الشراب _\= لا شيء ، \* args ، \* _kwargs): إذا كان_ نوع _الشراب_ == 'شاي': عودة الشاي (_ args ، \* _kwargs) _نوع_ المشروب المفضل _\== 'milk': رجوع حليب (_ args، \*\* kwargs) رفع NotImplementedError ("{} المشروب غير موجود.". تنسيق (_ نوع _الشراب_ )

# اختبارات

_الشاي_ الأسود _\= DrinkFactory.generate ("الشاي" ، "الشاي الأسود" ، السعر = 4.39)_ الحليب _الكامل_ = DrinkFactory.generate ('milk' ، 'Whole Milk' ، السعر = 5.49) طباعة ( _الشاي_ الأسود _) طباعة (_ حليب _كامل_ الدسم) \`\` \`