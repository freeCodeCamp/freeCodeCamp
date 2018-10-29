---
title: Java Swing
localeTitle: جافا سوينغ
---
## جافا سوينغ

دعونا استكشاف البرنامج التعليمي جافا سوينغ. قبل أن تجعل أيدينا تتسخ مع Swing ، من المستحسن أن تذهب من خلال [Toolkit Window Toolkit (AWT). في](https://www.studytonight.com/java/java-awt.php) وقت سابق ، تمت إضافة Swing كجزء من [Java Foundation Classes (JFC)](https://en.wikipedia.org/wiki/Java_Foundation_Classes) . ومع ذلك تم دمجها بالكامل في Java من Java 1.2 فصاعدا.

### ميزات Strikable

1.  مكونات خفيفة الوزن - بما أن مكونات Swing مكتوبة تمامًا في JAVA ، فإنها لا تستخدم موارد محددة للنظام الأساسي مثلما تفعل مكونات AWT.
    
2.  المظهر والمظهر القابلان للتوصيل (PLAF) - يتم تحديد المظهر والمظهر المكون بالكامل من خلال التأرجح نفسه. وهذا يسهل التمييز بين الشكل والمظهر والمنطق الخاص بالمكون.
    

تتكون واجهة المستخدم الرسومية المتأرجحة من دعامتين رئيسيتين: المكونات والحاويات. ويناقش الجزء التالي عنهما كليهما.

### المكونات

المكون هو مجرد عنصر تحكم مرئي مستقل. مكونات مشتقة مشتقة من فئة JComponent. علاوة على ذلك ، ترث JConent جميع خصائصها من حاويات ومكونات AWT.للحصول على مزيد من المعلومات ، يرجى الانتقال إلى التسلسل الهرمي لفئة [JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html) .

### حاويات

جميع الحاويات هي أيضا مكونات. قد تتكون الحاويات من مكون واحد أو أكثر. يحدد التأرجح نوعين من الحاويات

*   يرث من JComponent- على سبيل المثال JFrame ، JWindow ، JApplet ، JDialog
*   لا يرث من JComponent- على سبيل المثال JPanel

### حزم

تأرجح يتألف من العديد من الحزم. يرجى الذهاب من خلال [الوثائق الرسمية](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html) لمزيد من المعلومات.

#### معلومات اكثر:

*   [مستندات أوراكل](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
*   [ويكيبيديا](https://en.wikipedia.org/wiki/Swing_(Java)