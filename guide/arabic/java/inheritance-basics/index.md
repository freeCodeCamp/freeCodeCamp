---
title: Inheritance Basics
localeTitle: أساسيات الوراثة
---
# أساسيات الوراثة

من الرائع أن تكون قد أنشأت صف سيارة بنجاح. لكن ، انتظر ، أليس من المفترض أن تكون سيارات تسلا من المتغيرات الكهربائية؟ أرغب في الحصول على سيارة كهربائية ، ولكن يجب أن يكون لها خصائص `Car` الأصلية.

الحل: **الميراث** . توفر Java طريقة مرتبة لخصائص الأصل "الوراثة":

 `public class Car { 
 
    private String name; 
    private String manufacturerName; 
 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
    // Getter method 
    public String getName() { 
        return name; 
    } 
    // Getter method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 } 
 
 public class ElectricCar extends Car { 
 
    public ElectricCar(String name, String man) { 
        super(name, man); 
    } 
 
    public void charge() { 
     System.out.println("Charging ..."); 
    } 
 } 
 
 ElectricCar modelS = new ElectricCar("Model S","Tesla"); 
 // prints Tesla 
 System.out.println(modelS.getManufacturerName()); 
 // prints Charging ... 
 modelS.charge(); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZY/0)

انظر هنا أن الطبقة `ElectricCar` ترث أو `extends` الأساليب العامة من فئة `Car` ، وكذلك لديها أساليبها وخصائصها الخاصة. طريقة رائعة لنقل المعلومات!

لاحظ أيضًا استخدام الكلمة الرئيسية [الفائقة](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) هنا. بما أن صف `Car` لدينا كان منشئًا ، فيجب علينا تهيئة هذا المنشئ من فئة الطفل أيضًا. نحن نفعل ذلك باستخدام الكلمة الرئيسية `super` . قراءة المزيد عن الوراثة هنا .