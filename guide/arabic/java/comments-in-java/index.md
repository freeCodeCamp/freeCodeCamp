---
title: Comments in Java
localeTitle: تعليقات في جافا
---
## تعليقات في جافا

التعليقات في java تشبه مذكرات ما بعد الحفظ الفعلية المستخدمة لعرض بعض المعلومات ، والتي يمكن للمبرمجين أو المطورين الآخرين قراءتها وفهمها.

من الممارسات الجيدة إضافة تعليقات إلى شفرتك ، خاصة عند العمل مع فريق أو في شركة. يساعد ذلك المطورين المستقبليين أو زملائهم في الفريق على معرفة ما يجري بسهولة أكبر عندما ينظرون إلى شفرتك. تجعل التعليقات رمزك أكثر تنظيماً وتنظيماً.

لا يتم تنفيذ تعليقات جافا بواسطة مترجم ومترجم.

### أنواع تعليقات جافا

#### 1\. تعليق خط واحد

لإنشاء خط تعليق واحد فقط إضافة اثنين `//` مائلة قبل النص.

 `// This is how single line comment looks like 
` 

#### 2\. تعليق متعدد الخط

لإنشاء تعليق تعليق متعدد الأسطر ، يتم وضع الأسطر بين `/*` line هنا `*/`

 `public class MyFirstJava { 
    public static void main(String[] args) { 
    /* This Java Code 
       Prints out "Hello world" 
       and you are looking at a multi line comment 
    */ 
        System.out.println("Hello World"); 
    } 
 } 
` 

#### 3\. تعليق على الوثائق

يتم استخدام تعليق Document بواسطة أداة Javadoc لإنشاء وثائق التعليمة البرمجية. يستخدم Documentation Comment من قبل المطورين لتوثيق التعليمات البرمجية ، مثل ما يفعله الفصل الدراسي أو ما تفعله الطريقة. يتم استخدام هذا بواسطة أداة javadoc التي ستقوم بتجميع مجموعة منسقة مسبقًا من ملفات html تحتوي على كافة المعلومات المتوفرة في التعليق.

 `/** 
 * The Following Java program displays a random between 0 - 50 
 * Most Developer dont document simple program like this 
 * 
 * @author      Quincy Larson 
 * @version     1.0 
 */ 
 
 public class RandomNumbers{ 
    public static void main(String[] args) { 
        int random = (int)(Math.random() * 50 + 1); 
        System.out.println("Hello World"); 
    } 
 } 
` 

#### معلومات اكثر:

*   [موارد جافا](http://guide.freecodecamp.org/java/resources/)
    
*   [جمل مثال Javadoc](https://docs.oracle.com/javase/8/docs/api/)