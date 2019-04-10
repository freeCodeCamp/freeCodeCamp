---
title: Linear Gradient
localeTitle: الخطي التدرج
---
## الخطي التدرج

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### معلومات اكثر:

في التدرج الخطي ، تتدفق الألوان في اتجاه واحد ، أي من اليسار إلى اليمين ، من الأعلى إلى الأسفل ، أو أي زاوية تختارها.

![تدرج مع توقف لونين](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)

**تدرج خطي مع توقف لونين**

### بناء الجملة-

لإنشاء تدرج خطي ، يجب تحديد إيقافين للألوان على الأقل. (وهي الألوان التي يتم إنشاء الانتقالات بينها). يتم الإعلان على إما **الخلفية** أو خصائص **الصورة الخلفية** .

 `background: linear-gradient(direction, colour-stop1, colour-stop2, ...); 
` 

**ملاحظة: في حالة عدم تحديد أي اتجاه ، يكون النقل من أعلى إلى أسفل بشكل افتراضي**

### تحولات متدرجة مختلفة

**من اعلى لاسفل :**

 `background: linear-gradient(red, yellow); 
` 

![من اعلى لاسفل](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**من اليسار إلى اليمين :**

لجعله اليسار إلى اليمين، يمكنك إضافة معلمة إضافية في بداية الخطية التدرج () بدءا من كلمة **الذي** يشير إلى الاتجاه:

 `background: linear-gradient(to right, red , yellow); 
` 

![من اليسار إلى اليمين](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**المواضع القطرية:**

يمكنك أيضًا نقل التدرج قطريًا بتحديد مواضع البدء الأفقية والرأسية ، على سبيل المثال ، أعلى اليسار ، أو أسفل اليمين.

إليك نموذجًا للتدرج يبدأ من أعلى اليسار

 ` background: linear-gradient(to bottom right, red, yellow); 
` 

![أعلى اليسار](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)

### باستخدام الزوايا لتحديد اتجاه التدرج-

يمكنك أيضًا استخدام الزوايا ، لتكون أكثر دقة في تحديد اتجاه التدرج:

 `background: linear-gradient(angle, colour-stop1, colour-stop2); 
` 

يتم تحديد الزاوية كزاوية بين الخط الأفقي وخط التدرج.

 `background: linear-gradient(90deg, red, yellow); 
` 

![90 درجة](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### باستخدام أكثر من لونين

لا تقتصر على لونين فقط ، يمكنك استخدام العديد من الألوان المفصولة بفواصل كما تريد.

 `background: linear-gradient(red, yellow, green); 
` 

![تدرج مع 3 توقفات لونية](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

يمكنك أيضًا استخدام جمل ألوان أخرى مثل RGB أو hex codes لتحديد الألوان.

### توقف اللون الصلب

لا يمكنك استخدام التدرجات اللونية فقط للانتقال باستخدام ألوان باهتة ، ولكن يمكنك أيضًا استخدامها للتغيير من لون واحد إلى لون خالص آخر على الفور

 `background: linear-gradient(to right,red 15%, yellow 15%); 
` 

![توقف اللون الصلب](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**مزيد من المعلومات-** [تدرج خطي على مستندات Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)