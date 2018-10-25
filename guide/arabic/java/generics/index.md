---
title: Generics
localeTitle: الأدوية
---
# الأدوية

Java Generics هي طريقة لاستخدام المجموعات والفئات لأنواع بيانات معينة دون الحاجة إلى إرسال البيانات مرة أخرى إلى نوع البيانات الأصلي. هذا يمنع الكثير من الصداع في شكل وقت الترجمة وتشغيل الأخطاء.

ببساطة وضع Generics يتيح لك القول صراحة ، على سبيل المثال كائن ArrayList يحمل أعداد صحيحة بحيث عند استدعاء طريقة get لا تحتاج إلى التحويل بين Object و Integer. فيما يلي مثال لكيفية استخدام ArrayList قبل Generics.

 `import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList classNames; 
 
  public Example() { 
    classNames = new ArrayList(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return (String) classNames.get(index); 
  } 
 } 
` 

المشكلة الرئيسية مع ما ورد أعلاه هو إذا كان بطريقة ما كائن ليس من النوع String الذي تم إضافته إلى ArrayList فإن `getNameAtIndex(int index)` سينتج خطأ وقت التشغيل. لحل هذا نستخدم Generics.

تعد صيغة Generics بسيطة جدًا. فيما يلي مثال على instantiating ArrayList.

 `import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList<String> classNames; 
 
  public Example() { 
    classNames = new ArrayList<String>(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
` 

سيكون بناء جملة لإنشاء فئة Generic الخاصة بك كما يلي.

 `import java.util.ArrayList; 
 
 public class Example <T> { 
  private ArrayList<T> classNames; 
 
  public Example() { 
    classNames = new ArrayList<T>(); 
  } 
 
  public void addName(T name) { 
    classNames.add(name); 
  } 
 
  public T getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
` 

لاحظ أنه داخل الأقواس الزاوية عند تسمية الفصل ، يمكنك التأكد من أن النوع العام هو شيء انت تريد. على سبيل المثال ، إذا أردت التأكد من إمكانية قراءة النوع كنمط سلسلة ، فستذهب `<T extends String>` .

لاحظ أن الحرف `T` هو عنصر نائب ، يمكنك أن تجعل أي شيء تريده ، طالما أنك تستخدم نفس الحرف طوال الفصل.