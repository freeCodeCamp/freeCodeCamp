---
title: What is Minecraft Forge?
localeTitle: ما هو Minecraft Forge؟
---
إذا كنت تقرأ هذا المقال فمن المحتمل أنك تعرف بالفعل Minecraft. نحن نستخدم Forge للتلاعب في لعبة Minecraft لجعلها تفعل ما نريد. يمكن أن يكون هذا أي شيء ، بدءًا من المخلوقات الرائعة الجديدة إلى الأنظمة الجديدة بالكامل في اللعبة.

فورج هو واجهة برمجة تطبيقات Minecraft Forge (أو Forge for short) هي طبقة بين شفرتنا و Minecraft نفسها. لا يمكننا أن نطلب من Minecraft أن نضيف العناصر ونقوم بأشياء رائعة خاصة. لهذا السبب نحتاج إلى واجهة برمجة تطبيقات (API) للتعامل مع منطقنا وجعل Minecraft يتعرف عليه.

## يبدو جيدا! كيف أبدأ؟

*   ستحتاج إلى JDK (مجموعة تطوير Java) وهي مجموعة من المكتبات والأدوات وبيئة وقت التشغيل لجعل برامج Java وتشغيلها.
*   حساب Minecraft الذي يمكن شراؤه من موقعه الرسمي على الويب. (https://minecraft.net/en-us/store/)
*   ينصح باستخدام IDE (Eclipe أو IntelliJ لتطوير Minecraft)

بعد تثبيت / الحصول على هذه البرامج ، قم بتنزيل النسخة Forge المطلوبة على https://files.minecraftforge.net/ ( _TIP: قم_ بالمرور فوق زر المعلومات واضغط على التنزيل المباشر لتجنب فيروس Adfly!) بمجرد تنزيل هذا الرمز البريدي ، ستكون قادرًا على فك ضغطه. افعل ذلك و cd (أمر cmd) في الدليل مع كل ملفات Forge. قم بتشغيل `gradlew setupDecompWorkspace`

التالي هو اختيار IDE (بيئة التطوير المتكاملة). كسوف؟ `gradlew eclipse` ؟ قم باستيراد ملف build.gradle في إعداد IntelliJ الخاص بك!

## حسنا ماذا الآن؟ كيف أضيف عناصر جديدة رائعة؟ (الإعداد mod modal)

اكبح جماح نفسك. هناك الكثير من ذلك. سيكون عليك كتابة عنصر بالطبع وإضافة الكود وأكثر من ذلك بكثير! في هذه المقالة سننظر فقط في بعض نماذج التعليمات البرمجية البسيطة التي استخدمها أيضًا في تعديلاتي الخاصة. ها هو!

\` @ Mod.EventBusSubscriber Mod (modid = Version.MOD _ID، name = Version.MOD_ NAME، version = Version.VERSION) الطبقة العامة TheMod {

 `public static ModMetadata metadata; 
 
 public static File baseDir; 
 public static Configuration config; 
 
 @SidedProxy(clientSide="com.ciphry.client.ClientProxy", serverSide="com.ciphry.common.CommonProxy") 
 public static CommonProxy proxy; 
 
 @Mod.EventHandler 
 public void preInit(FMLPreInitializationEvent event) { 
    proxy.preInit(event); 
 
    baseDir = new File(event.getModConfigurationDirectory(), MOD_ID); 
    config = new Configuration(event.getSuggestedConfigurationFile()); 
 
    if (!baseDir.exists()) 
        baseDir.mkdir(); 
 } 
 
 @Mod.EventHandler 
 public void init(FMLInitializationEvent event) { 
    proxy.init(event); 
 
 } 
 
 @Mod.EventHandler 
 public void postInit(FMLPostInitializationEvent event) { 
    proxy.postInit(event); 
 } 
` 

} \`

استخدم هذا الرمز كما تريد ، وتأكد من تحرير على سبيل المثال سلاسل الوكيل وأكثر! من المفترض أن يمنحك هذا نظرة عامة أساسية حول شكل طبقة التعديل الأساسية.