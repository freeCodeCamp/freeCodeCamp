---
title: Garbage Collection
localeTitle: جمع القمامة
---
# جمع القمامة في جاوة

في لغات مثل C / C ++ ، من واجب مبرمج إنشاء وتدمير الكائنات. ولكن إذا لم يقم المبرمج بواجبه ، فقد لا تتوفر ذاكرة كافية لإنشاء كائن جديد وقد ينتهي البرنامج مما يتسبب في **OutOfMemoryErrors** .

جافا يعفي مبرمج من مهمة إدارة الذاكرة ، ويعيد نفسه الذاكرة التي تحتلها الكائنات التي لم تعد قيد الاستخدام. يتم تنفيذ مجموعة garbage في java بواسطة مؤشر ترابط خفي يسمى **جامع البيانات المهملة** . **JVM (Java Virtual Machine)** يدعوه عندما يكون هناك نقص في الذاكرة (كومة) للكائنات الجديدة.

## متى يصبح الجسم مؤهلاً لجمع القمامة؟

*   يصبح الكائن مؤهلاً لجمع garbage إذا كان لا يمكن الوصول إليه من أي مؤشرات حية أو أي مراجع ثابتة.
*   يصبح الكائن مؤهلاً لتجميع البيانات المهملة إذا كانت جميع المراجع فارغة.

 `         Integer n = new Integer(); 
         n = null;                                //the Integer object is no longer accessible 
` 

*   لا يتم احتساب التبعيات الدورية كمرجع ، لذلك إذا كان لدى الكائن X مرجع كائن Y وكان لدى الكائن Y مرجع كائن X وليس له أي مرجع حي آخر ، فسيكون كل من الكائنين X و Y مؤهلين لجمع البيانات المهملة.

## كيفية جعل كائن مؤهلاً يدويًا لجمع القمامة؟

*   على الرغم من أنها ليست مهمة للمبرمج لتدمير الكائنات ، إلا أنها ممارسة برمجة جيدة لجعل الكائن غير قابل للوصول (وبالتالي مؤهل لـ GC) بعد استخدامه.
*   توجد عمومًا أربع طرق مختلفة لجعل الكائن مؤهلاً لجمع البيانات المهملة.

1.  إبطال المتغير المرجعي
2.  إعادة تخصيص متغير المرجع
3.  يتم إنشاء كائن داخل كتلة والمرجع يخرج من نطاق بمجرد خروج السيطرة على هذا الحظر.
4.  [جزيرة العزلة](http://www.geeksforgeeks.org/island-of-isolation-in-java/)

## طرق طلب JVM لتشغيل جامع القمامة 1

*   على الرغم من جعل كائن مؤهلاً لجمع القمامة ، إلا أنه يعتمد على التقدير المطلق لـ JVM لتشغيل جامع البيانات المهملة لتدميره.
*   يمكننا أيضًا طلب JVM لتشغيل جامع القمامة. هناك طريقتان للقيام بذلك :

1.  باستخدام أسلوب _**System.gc ()**_ : فئة النظام تحتوي على أسلوب ثابت gc () لطلب JVM لتشغيل "مجمّع garbage".
2.  باستخدام أسلوب _**Runtime.getRuntime (). gc ()**_ : تسمح فئة Runtime التطبيق بالتفاعل مع JVM الذي يتم تشغيل التطبيق به. ومن ثم باستخدام طريقة gc () ، يمكننا طلب JVM لتشغيل جامع البيانات المهملة.

 `         // Java program to request 
    // JVM to run Garbage Collector 
 public class Test 
 { 
    public static void main(String[] args) throws InterruptedException 
    { 
        Test test1 = new Test(); 
        Test test2 = new Test(); 
 
        // Nullifying the reference variable 
        test1 = null; 
 
        // requesting JVM for running Garbage Collector 
        System.gc(); 
 
        // Nullifying the reference variable 
        test2 = null; 
 
        // requesting JVM for running Garbage Collector 
        Runtime.getRuntime().gc(); 
 
    } 
 
    @Override 
    // finalize method is a method which is called on object once 
    // before garbage collector is destroying it and reclaiming its memory 
    protected void finalize() throws Throwable 
    { 
        System.out.println("Garbage collector is called"); 
        System.out.println("Object garbage collected : " + this); 
    } 
 } 
` 

 `  OUTPUT - 
    Garbage collector called 
    Object garbage collected : Test@46d08f12 
    Garbage collector called 
    Object garbage collected : Test@481779b8 
` 

ملحوظة :

1.  ليس هناك ما يضمن أن أي واحدة من الطريقتين أعلاه سوف تعمل بالتأكيد جامع القمامة.
2.  المكافئ System.gc () المكافئ فعلياً المكالمة: Runtime.getRuntime (). gc ()

## إنهاء الكائن

*   الكائنات لديها موارد تم تجميعها معهم. تقع على عاتقهم مسؤولية تحرير الموارد.
*   يتم تعريف finalize () في فئة كائن ويتم استدعاء بواسطة جامع البيانات المهملة مرة واحدة فقط قبل إتلاف الكائن. يمكن أن يأخذ الكائن أي إجراء أخير باستخدام هذا الأسلوب jst قبل أن يتم استعادة مساحته بواسطة أداة تجميع البيانات المهملة.
*   وضع الصيغة النهائية () موجود في فئة كائن مع النموذج الأولي.

 `    protected void finalize() throws Throwable 
` 

## الملاحظة 1 :

1.  الصيغة النهائية () التي يطلق عليها جامع القمامة لا JVM. على الرغم من أن جامع القمامة هو واحد من وحدة JVM.
2.  نهاية فئة كائن () الأسلوب يحتوي على تطبيق فارغ ، وبالتالي فمن المستحسن تجاوز وضع الصيغة النهائية () للتخلص من موارد النظام أو إجراء تنظيف آخر.
3.  لا يتم استدعاء طريقة finalize () أكثر من مرة واحدة لأي كائن محدد.
4.  إذا تم طرح استثناء غير محظور بطريقة finalize () ، يتم تجاهل الاستثناء وينتهي إنهاء هذا الكائن.

### مصادر

1.  [geeksforgeeks.](http://www.geeksforgeeks.org/garbage-collection-java/) Accessed: October 24،2017.