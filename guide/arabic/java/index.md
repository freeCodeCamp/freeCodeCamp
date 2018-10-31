---
title: Java
localeTitle: جافا
---
**ما هي الجافا؟**

[Java](https://www.oracle.com/java/index.html) هي لغة برمجة تم تطويرها بواسطة [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) في عام 1995 ، والتي حصلت عليها شركة [Oracle في](http://www.oracle.com/index.html) وقت لاحق. إنها الآن منصة كاملة مع الكثير من واجهات برمجة التطبيقات القياسية ، وواجهات برمجة التطبيقات مفتوحة المصدر ، والأدوات ، ومجتمع المطورين الضخم ، وتُستخدم لإنشاء حلول المؤسسات الأكثر ثقة من قبل الشركات الكبيرة والصغيرة على حد سواء. يتم تطوير تطبيق [Android](https://www.android.com/) بشكل كامل مع Java ونظامه البيئي. لمعرفة المزيد عن جافا ، اقرأ [هذا](https://java.com/en/download/faq/whatis_java.xml) و [هذا](http://tutorials.jenkov.com/java/what-is-java.html) .

## الإصدار

أحدث إصدار هو [Java 11](http://www.oracle.com/technetwork/java/javase/overview) ، الذي صدر في عام 2018 مع [العديد من التحسينات](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) على الإصدار السابق ، Java 10. ولكن بالنسبة لجميع المقاصد والأغراض ، سنستخدم Java 8 في هذا الويكي لجميع البرامج التعليمية.

تنقسم Java أيضًا إلى عدة "إصدارات":

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - الإصدار القياسي - لتطبيقات خادم سطح المكتب والمستقل
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - لتطوير وتنفيذ مكونات Java التي يتم تشغيلها في خادم Java
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - لتطوير وتنفيذ تطبيقات Java على الهواتف المحمولة والأجهزة المدمجة

## التثبيت: JDK أو JRE؟

قم بتنزيل أحدث ثنائيات Java من [الموقع الرسمي](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) . هنا قد تواجه سؤالا ، أي واحد لتحميل ، JDK أو JRE؟ JRE لتقف على Java Runtime Environment ، وهي عبارة عن Java Virtual Machine يعتمد على النظام الأساسي لتشغيل Java البرمجية ، و JDK لتقف على Java Development Kit ، والتي تتكون من معظم أدوات التطوير ، والأهم من ذلك `javac` المجمع ، وكذلك JRE. لذا ، بالنسبة إلى مستخدم متوسط ​​، سيكون JRE كافيًا ، ولكن بما أننا سنكون قيد التطوير مع جافا ، فسنقوم بتنزيل JDK.

## تعليمات التثبيت الخاصة بالمنصة

### شبابيك

*   قم بتنزيل ملف [msi](https://en.wikipedia.org/wiki/Windows_Installer) المناسب (x86 / i586 لـ 32 بت ، x64 لـ 64 بت)
*   قم بتشغيل الملف .msi. في ملف استخراج ذاتي قابل للتنفيذ الذي سيتم تثبيت Java في النظام الخاص بك!

### لينكس

*   قم بتنزيل ملف [tar.gz](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/) المناسب لنظامك وقم بتثبيته:

`bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz`

*   [تقوم منصات Linux المستندة إلى RPM](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based) بتنزيل ملف [.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager) ذي الصلة وتثبيته:

`bash $ rpm -ivh jdk-8uversion-linux-x64.rpm`

*   لدى المستخدمين خيار تثبيت إصدار مفتوح المصدر من Java أو OpenJDK أو Oracle JDK. في حين أن OpenJDK في التطوير النشط ومتزامنة مع Oracle JDK ، فهي تختلف فقط في الاشياء [الترخيص](http://openjdk.java.net/faq/) . ومع ذلك ، يشكو بعض المطورين من استقرار Open JDK. تعليمات **لأوبونتو** :

فتح تثبيت JDK:  
`bash sudo apt-get install openjdk-8-jdk`

تثبيت Oracle JDK:  
`bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

### ماك

*   إما تنزيل Mac OSX .dmg قابل للتنفيذ من Oracle Downloads
*   أو استخدم [Homebrew](http://brew.sh/) [للتثبيت](http://stackoverflow.com/a/28635465/2861269) :

`bash brew tap caskroom/cask brew install brew-cask brew cask install java`

### تحقق من التثبيت

تحقق من تثبيت Java بشكل صحيح في النظام الخاص بك عن طريق فتح "موجه الأوامر" (Windows) / Windows Powershell / Terminal (نظام التشغيل Mac OS و \* Unix) والتحقق من إصدارات Java runtime وبرنامج التحويل البرمجي:

 `$ java -version 
 java version "1.8.0_66" 
 Java(TM) SE Runtime Environment (build 1.8.0_66-b17) 
 Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode) 
 
 $ javac -version 
 javac 1.8.0_66 
` 

**تلميح** : إذا ظهرت لك رسالة خطأ مثل "أمر غير موجود" على `java` أو `javac` أو كليهما ، فلا داعي للذعر ، إنه لم يتم ضبط نظام PATH الخاص بك بشكل صحيح. بالنسبة لنظام التشغيل Windows ، راجع [هذه الإجابة حول StackOverflow](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command) أو [هذه المقالة](http://javaandme.com/) حول كيفية القيام بذلك. أيضا هناك أدلة [لأوبونتو](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu) [وماك](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/) كذلك. إذا كنت لا تزال لا تستطيع معرفة ذلك ، لا تقلق ، فقط [أسألنا في غرفة جيتر](https://gitter.im/FreeCodeCamp/java) !

## JVM

طيب الآن بما أننا انتهينا من التركيبات ، فلنبدأ أولاً بفهم شغف نظام جافا الحيوي. Java هي لغة [مترجمة ومترجمة](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language) ، أي أن الشفرة التي نكتبها يتم تجميعها إلى bytecode وتفسيرها للتشغيل. نكتب الكود في ملفات .java ، جافا يجمعها في [bytecodes](https://en.wikipedia.org/wiki/Java_bytecode) التي يتم تشغيلها على Java Virtual Machine أو JVM للتنفيذ. تحتوي هذه الرموز التربيعية عادةً على ملحق .class.

Java لغة آمنة تمامًا لأنها لا تسمح بتشغيل برنامجك مباشرة على الجهاز. بدلاً من ذلك ، يتم تشغيل البرنامج على Virtual Machine يسمى JVM. تعرض هذه الآلة الافتراضية العديد من واجهات برمجة التطبيقات لتفاعلات الماكينة منخفضة المستوى التي يمكنك إجراؤها ، ولكن بخلاف ذلك لا يمكنك اللعب بتعليمات الماكينة بشكل واضح. هذا يضيف مكافأة هائلة من الأمن.

أيضا ، بمجرد تجميع كود البايت الخاص بك يمكن تشغيله على أي Java VM. هذا الجهاز الافتراضي يعتمد على الآلة ، أي أنه يحتوي على تطبيقات مختلفة لـ Windows و Linux و Mac. لكن برنامجك مضمون للتشغيل في أي نظام بفضل هذا الجهاز الظاهري. تسمى هذه الفلسفة ["كتابة مرة واحدة ، تشغيل في أي مكان"](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) .

## مرحبا بالعالم!

دعونا نكتب عينة من تطبيق Hello World. افتح أي محرر / IDE للاختيار وقم بإنشاء ملف `HelloWorld.java` .

 `public class HelloWorld { 
 
    public static void main(String[] args) { 
        // Prints "Hello, World" to the terminal window. 
        System.out.println("Hello, World"); 
    } 
 
 } 
` 

**ملاحظة:** يجب أن تضع في اعتبارك اسم ملف Java يجب أن يكون هو **نفس الاسم للفئة العامة من** أجل تجميعها!

الآن افتح المحطة / موجه الأوامر. تغيير الدليل الحالي في سطر الأوامر / موجه الأوامر إلى الدليل الذي يوجد به ملفك. وجمع الملف:

 `$ javac HelloWorld.java 
` 

الآن قم بتشغيل الملف باستخدام الأمر `java` !

 `$ java HelloWorld 
 Hello, World 
` 

مبروك! تم تشغيل برنامج Java الأول بنجاح. هنا نحن فقط طباعة سلسلة تمريره إلى API `System.out.println` . سنقوم بتغطية جميع المفاهيم في الكود ، لكننا نرحب [بإلقاء نظرة عن كثب](https://docs.oracle.com/javase/tutorial/getStarted/application/) ! إذا كان لديك أي شك أو تحتاج إلى مساعدة إضافية ، فلا تتردد في الاتصال بنا في أي وقت في [Gitter Chatroom](https://gitter.im/FreeCodeCamp/java) !

## كابل بيانات

جافا [موثقة](https://docs.oracle.com/javase/8/docs/) بشكل كبير ، لأنها تدعم كميات هائلة من API. إذا كنت تستخدم أي IDE رئيسي مثل Eclipse أو IntelliJ IDEA ، فستجد وثائق Java مضمنة داخل.

أيضا ، وهنا لائحة من IDE الحرة لتشفير جافا:

*   [نتبيانس](https://netbeans.org/)
*   [كسوف](https://eclipse.org/)
*   [IntelliJ فكرة](https://www.jetbrains.com/idea/features/)
*   [Android Studio](https://developer.android.com/studio/index.html)
*   [BlueJ](https://www.bluej.org/)
*   [جيديت](http://www.jedit.org/)
*   [أوراكل JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html)