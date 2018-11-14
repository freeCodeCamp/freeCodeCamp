---
title: Static
localeTitle: ثابتة
---
# ثابتة

عندما تقوم بتعريف متغير أو طريقة بأنها ثابتة ، فإنها تنتمي إلى الفئة ، بدلاً من نسخة محددة. هذا يعني أنه يوجد مثيل واحد فقط من عضو ثابت ، حتى إذا قمت بإنشاء كائنات متعددة للفئة ، أو إذا لم تقم بإنشاء أي. ستتم مشاركتها بواسطة جميع الكائنات.

يمكن استخدام الكلمة الأساسية الثابتة مع المتغيرات والطرق ومقاطع التعليمات البرمجية والفئات المتداخلة.

## المتغيرات الثابتة

**_مثال:_**

 `public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 } 
` 

ستتم مشاركة المتغير `COUNT` بواسطة جميع كائنات تلك الفئة. عندما نقوم بإنشاء كائنات من صف مكافحة لدينا في الرئيسي ، والوصول إلى متغير ثابت.

 `public class MyClass { 
  public static void main(String[] args) { 
    Counter c1 = new Counter(); 
    Counter c2 = new Counter(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
` 

Outout هو 2 ، لأن متغير `COUNT` ثابت ويتم زيادته بمقدار واحد في كل مرة يتم إنشاء كائن جديد لفئة Counter. يمكنك أيضًا الوصول إلى المتغير الثابت باستخدام أي كائن من هذه الفئة ، مثل `c1.COUNT` .

## طرق ثابتة

ينتمي الأسلوب الثابت إلى الفئة بدلاً من الحالات. وبالتالي ، يمكن استدعائها دون إنشاء مثيل للفئة. يتم استخدامه لتغيير محتويات ثابتة للفئة. هناك بعض القيود على الأساليب الثابتة:

1.  لا يمكن للطريقة الثابتة استخدام أعضاء غير ثابت (متغيرات أو وظائف) للفئة.
2.  لا يمكن للطريقة الساكنة استخدام `this` الرئيسية أو `super` .

**_مثال:_**

 `public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 
  public static void increment(){ 
    COUNT++; 
  } 
 } 
` 

يمكن أيضًا استدعاء أساليب ثابتة من مثيل الطبقة.

 `public class MyClass { 
  public static void main(String[] args) { 
    Counter.increment(); 
    Counter.increment(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
` 

هو 2 الإخراج لأنه يحصل زيادة بواسطة `increament()` الأسلوب `increament()` . على غرار المتغيرات الثابتة ، يمكن أيضًا الوصول إلى الطرق الثابتة باستخدام متغيرات الحالة.

## كتل ثابتة

يتم استخدام كتل التعليمات البرمجية الثابتة لتهيئة المتغيرات الثابتة. يتم تنفيذ هذه الكتل مباشرة بعد إعلان المتغيرات الثابتة.

**_مثال:_**

 `public class Saturn { 
  public static final int MOON_COUNT; 
 
  static { 
    MOON_COUNT = 62; 
  } 
 } 
` 

 `public class Main { 
  public static void main(String[] args) { 
    System.out.println(Saturn.MOON_COUNT); 
  } 
 } 
 // Outputs "62" 
` 

الإخراج هو 62 ، لأنه يتم تعيين متغير `MOON_COUNT` تلك القيمة في كتلة ثابتة.

## فئات متداخلة ثابتة

يمكن أن يكون للفئة فئة متداخلة ثابتة يمكن الوصول إليها باستخدام اسم الفئة الخارجية.

**_مثال:_**

 `public class Outer { 
 
  public Outer() { 
  } 
 
  public static class Inner { 
    public Inner() { 
    } 
  } 
 } 
` 

في المثال أعلاه ، يمكن الوصول إلى الطبقة `Inner` مباشرة كعضو ثابت في الفصل `Outer` .

 `public class Main { 
  public static void main(String[] args) { 
    Outer.Inner inner = new Outer.Inner(); 
  } 
 } 
` 

واحدة من حالات الاستخدام للدروس المتداخلة الثابتة في [نموذج البناء](https://en.wikipedia.org/wiki/Builder_pattern#Java) المستخدمة بشكل شائع في جافا.