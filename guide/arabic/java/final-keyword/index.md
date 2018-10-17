---
title: Final
localeTitle: نهائي
---
## نهائي

أنت تستخدم الكلمة `final` لتمييز ثابت متغير ، بحيث يمكن تعيينه مرة واحدة فقط. لذلك يجب عليك تهيئة متغير نهائي بقيمة. إذا لم يتم التهيئة لها (عند الإعلان ، داخل مُنشئ أو داخل كتل ثابتة) ، فسيحدث خطأ وقت تجميع.

**_مثال:_**

 `class MyClass { 
  public static final double PI = 3.14; 
  public static void main(String[] args){ 
    System.out.println(PI); 
  } 
 } 
` 

PI هو الآن ثابت. أي محاولة لتعيينه قيمة ستسبب خطأ.

* * *

إذا جعلت أي طريقة نهائية ، فلا يمكنك تجاوزها.

 `class Bike{ 
  final void run(){System.out.println("running");} 
 } 
 
 class Honda extends Bike{ 
   void run(){System.out.println("running safely with 100kmph");} 
 
   public static void main(String args[]){ 
   Honda honda= new Honda(); 
   honda.run(); 
   } 
 } 
` 

سيكون فيل الإخراج - الإخراج: ترجمة خطأ الوقت

* * *

إذا جعلت أي فصل دراسي نهائيًا ، فلا يمكنك تمديده.

 `final class Bike{} 
 
 class Honda1 extends Bike{ 
  void run(){System.out.println("running safely with 100kmph");} 
 
  public static void main(String args[]){ 
  Honda1 honda= new Honda(); 
  honda.run(); 
  } 
 } 
` 

سيكون الناتج- الإخراج: ترجمة خطأ الوقت