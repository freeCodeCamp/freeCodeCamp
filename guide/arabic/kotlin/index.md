---
title: Kotlin
localeTitle: Kotlin
---
**ما هو كوتلين؟**

[Kotlin](https://kotlinlang.org/) هي لغة برمجة تم تطويرها بواسطة [Jetbrains](https://www.jetbrains.com) ، الشركة التي تقف وراء بعض IDEs الأكثر شهرة في العالم مثل IntelliJ و Pycharm.

يعمل كبديل لجافا ويعمل على JVM. وقد تم تطويره لمدة تقرب من 6 سنوات وبلغ 1.0 قبل عام.

احتضن مجتمع المطورين Kotlin إلى حد أن أعلنت Google عن دعم من الدرجة الأولى للغة لتطوير Android في [Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) .

## الإصدار

حتى كتابة هذه السطور ، أحدث إصدار مستقر من Kotlin هو [الإصدار 1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## التركيب

قبل متابعة تعليمات تثبيت Kotlin ، يجب عليك التأكد من إعداد **JDK (Java Development Kit)** على النظام الخاص بك.

إذا لم يكن لديك JDK مثبتًا على الكمبيوتر ، فانتقل إلى **قسم التثبيت** على [هذا الرابط لمعرفة](https://guide.freecodecamp.org/java) كيفية إعداده.

يعمل Kotlin مع **JDK 1.6+** لذا تأكد من تثبيت الإصدار الصحيح. بمجرد الانتهاء من إعداد JDK ، اتبع الخطوات التالية.

*   \## IntelliJ IDEA إن أسرع طريقة لتشغيل Kotlin على الأجهزة الخاصة بك هو استخدامه إلى جانب **IntelliJ IDEA** . هذا هو IDE المستحسنة لـ Kotlin بسبب دعم الأدوات التي توفرها Jetbrains. يمكنك الحصول على [النسخة المجتمعية](http://www.jetbrains.com/idea/download/index.html) من IntelliJ من [JetBrains](https://www.jetbrains.com) .

بمجرد أن تقوم بتثبيت IntelliJ ، يمكنك البدء في مشروعك الأول في Kotlin بدون أي تهيئات إضافية.

قم بإنشاء **مشروع جديد** وتأكد من تحديد Java Module. حدد خانة الاختيار Kotlin على تلك الشاشة

![شاشة المشروع الجديد](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

امنح مشروعك اسمًا وانقر على إنهاء.

![اسم المشروع](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

سيتم نقلك الآن إلى المحرر الرئيسي حيث سترى ملفات مشروعك منظمة بالطريقة التالية.

![هيكل المشروع](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

من أجل التحقق من التثبيت ، قم بإنشاء ملف Kotlin جديد في المجلد **src** وقم بتسمية **التطبيق** (أو أي شيء آخر يناسبك)

![هيكل المشروع](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

بمجرد إنشاء الملف ، اكتب رمز Hello World الشفوي التالي. لا تقلق إذا لم يكن ذلك منطقيًا على الفور ، فسيتم التعامل معه بالتفصيل لاحقًا في الدليل.

\`\` \` المرح الرئيسي (args: Array ) { println ("مرحبًا بكم!") }

 `![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers) 
 
 ![hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 
 If everything goes fine, you should see the message Hello World! in your Run window as shown below 
 
 ![run window ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
 While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. **Eclipse** happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well. 
 
 After setting up the **JDK** on your system, follow the instructions below. 
 
 Download <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>for your operating system and once you have successfully installed it on your system, download the **Kotlin Plugin** for Eclipse from the <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
 ***NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin*** 
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
` 

المرح الرئيسي (args: Array ) { println ("مرحبًا بكم!") }

 `![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
 * ## Using the standalone compiler on the terminal 
 If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler. 
 
 ### Downloading the compiler 
 
 With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href='https://github.com/JetBrains/kotlin/releases/tag/v1.1.51'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing. 
 
 
 </br> 
 
 **Manual Installation** 
 
 Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the **bin** directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS. 
 
 </br> 
 
 **Installation via Homebrew** 
 
 You can install the compiler on macOS using <a href='http://brew.sh/'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands 
` 

تحديث الشراب $ $ brew install kotlin

 `**Installation via SDKMAN!** 
 
 Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands 
` 

$ curl -s https://get.sdkman.io | bash\`\`\`

اتبع التعليمات التي تظهر على الشاشة ومرة ​​واحدة SDKMAN! هي قضية الإعداد الأمر follwoing داخل المحطة

`$ sdk install kotlin`

كما هو الحال مع جميع خيارات التثبيت السابقة ، قد يكون من الجيد اختبار تشغيل التثبيت.

فتح محرر نص من اختيارك وكتابة برنامج Kotlin الأساسي الواردة أدناه

 `fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
` 

احفظ هذا الملف **بامتداد .kt** . أنت الآن على استعداد لتجميعها ورؤية النتائج. للقيام بذلك ، لإصدار الأمر التالي

`$ kotlinc hello.kt -include-runtime -d hello.jar`

يخبر الخيار `-d` المحول البرمجي ما تريد أن يتم استدعاء الإخراج. الخيار `-include-runtime` يجعل الملف .jar الناتج قائمًا بذاته ويتم تشغيله من خلال تضمين مكتبة وقت تشغيل Kotlin فيه.

إذا لم تكن هناك أخطاء التحويل البرمجي ، قم بتشغيل التطبيق باستخدام الأمر التالي

`$ java -jar hello.jar`

إذا سارت الأمور على ما يرام ، يجب أن تشاهد **Hello World!** المطبوعة على شاشة المحطة الطرفية الخاصة بك

 `$ java -jar hello.jar 
 Hello, World! 
` 

تهانينا ، لقد قمت بإعداد مترجم Kotlin وتطوير بيئة بنجاح على نظامك. سنقوم بتغطية جميع التعقيدات والأجزاء الممتعة من Kotlin في هذا الدليل ، ولكن يمكنك الحصول على نقطة انطلاق إذا كنت تريد من خلال الذهاب إلى موقع [Try Kotlin](https://try.kotlinlang.org/) والانتقال من خلال التدريبات هناك.

## كابل بيانات

واحدة من أعظم الأشياء حول Kotlin هو وثائق شاملة ومنظمة بشكل جيد. حتى إذا كنت جديدًا في البرمجة ، فستجد نفسك في المنزل مباشرةً باستخدام المستندات. يفعلون وظيفة مدهشة في وضع كل شيء بطريقة منظمة بشكل جيد. يمكنك الاطلاع على الوثائق الرسمية على [هذا الرابط](https://kotlinlang.org/docs/reference/) .