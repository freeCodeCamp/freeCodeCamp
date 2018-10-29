---
title: Background
localeTitle: خلفية
---
## خلفية

تسمح لك خاصية الخلفية باستخدام الصور والألوان لإنشاء خلفيات لصفحات الويب الخاصة بك.

### لون الخلفية

تسمح لك خاصية لون الخلفية باختيار لون العنصر الخاص بك. يمكن أن يكون هذا خلفية الصفحة بأكملها أو خلفية أحد أقسام صفحتك.

*   عنصر هو جزء من HTML مثل رأس أو فقرة في صفحة ويب.

في ما يلي مثال على تعيين لون خلفية صفحة الويب باللون الأخضر.

 `  body { 
    background-color: green; 
  } 
` 

![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

فيما يلي مثال على تعيين الألوان لعنصرين. سيؤدي هذا إلى تعيين خلفية الرأس إلى اللون الأرجواني وبقية الصفحة باللون الأزرق.

 `  body { 
    background-color: blue; 
  } 
  h1 { 
    background–color: purple; 
  } 
` 

![twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

في لون CSS يمكن تعريفه بثلاث طرق:

*   اسم لون صالح مثل `blue`
*   قيمة HEX مثل `#FFFFF` (هذه هي القيمة السداسي للأبيض).
*   قيمة RGB مثل `rgb(76,175,80)` (هذه هي قيمة RGB للضوء الأخضر.)

### صور الخلفية

يمكنك استخدام خاصية صورة الخلفية لتعيين صورة كخلفية لعنصر. يتم تكرار الصورة افتراضيًا بحيث تغطي العنصر بأكمله.

 `body { 
  background-image: url("barn.jpg"); 
 } 
` 

![صورة](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)

يمكنك أيضًا ربط الصور أو صور gif التي تعثر عليها عبر الإنترنت باستخدام رابطها (على سبيل المثال ، من صور Google البحث).

 `body { 
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif"); 
 } 
` 

### صورة الخلفية - خاصية التكرار

تتكرر صورة الخلفية عموديًا (أعلى وأسفل) وأفقياً (عبر صفحة الويب) افتراضيًا. يمكنك استخدام خاصية تكرار الخلفية لتكرار الصورة عموديًا أو أفقيًا.

إليك مثال يكرر الصورة عموديًا.

 `body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-y; 
 } 
` 

![عمودي](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

يمكنك تكرار الصورة أفقيًا عن طريق تعيين الخاصية background-repeat إلى "repeat-x".

 `body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-x; 
 } 
` 

يمكنك أيضًا استخدام خاصية تكرار الخلفية لتعيين صورة لعدم تكرارها.

 `body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
 } 
` 

![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### صورة الخلفية - خاصية الموقع

يمكنك استخدام خاصية الموضع لتحديد مكان صورتك على صفحة الويب.

 `body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
` 

![موضع](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### صورة الخلفية - الموقف الثابت

يمكنك استخدام خاصية "إرفاق الخلفية" لتعيين صورة إلى موضع ثابت. يجعل موقع ثابت الصورة بحيث لا يتم التمرير مع باقي الصفحة.

 `body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
  background-attachment: fixed; 
 } 
` 

![ثابت](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### تدرجات الخلفية

التدرج هو انتقال بين لونين أو أكثر ويمكن استخدامه عبر CSS مماثل لصورة الخلفية.

يمكن أن تكون بنية الخلفية المتدرجة معقدة تمامًا وغالبًا ما يتم استخدامها مع بادئات البائعين بسبب التناقضات بين المتصفحات المدعومة.

يعد [Colorzilla Gradient Editor](http://www.colorzilla.com/gradient-editor/) أداة رائعة عبر الإنترنت لإنشاء التدرجات المخصصة وترميز css المرتبط.

### الخلفية - خاصية الاختزال

يمكنك كتابة خصائص الخلفية على سطر واحد. وهذا ما يسمى خاصية الاختزال.

 `body { 
  background: url("barn.jpg") no-repeat right top; 
 } 
` 

يمكنك ترك الممتلكات التي لا تحتاج إليها عند استخدام خاصية الاختزال ، ولكن الخصائص يجب استخدامها في ترتيب معين. الترتيب هو:

*   اللون
*   صورة
*   كرر
*   المرفق
*   موضع

### صور خلفية متعددة

يمكنك تحديد صور خلفية متعددة في خاصية خلفية واحدة.

 `body { 
  background: url("barn.jpg"), url("stars.jpg"), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)); 
 } 
` 

الصورة الأولى (أو التدرج) المحددة هي الأكثر في الأعلى ، والثانية تأتي بعدها ، وهكذا. إذا كان أحد العناصر غير صحيح بسبب عنوان URL الخاص به أو بناء الجملة الخاص به ، فسيتم تجاهل السطر بأكمله بواسطة المستعرض.

### بعض خصائص الخلفية الأساسية لل CSS

يتم استخدام خصائص خلفية CSS لتعريف تأثيرات الخلفية للعناصر.

خصائص خلفية CSS: لون الخلفية الصورة الخلفية تكرار الخلفية مرفق الخلفية خلفية موقف

يمكنك الرجوع إلى الرابط التالي إلى مدارس W3 لمعرفة المزيد عن الخلفية والأشياء ذات الصلة في CSS. [مرجع الخلفية إلى W3](https://www.w3schools.com/css/css_background.asp)

### موارد آخرى

*   [قائمة قيم اللون](http://cloford.com/resources/colours/500col.htm)
*   [أداة Color Picker](http://colrd.com/create/palette/)