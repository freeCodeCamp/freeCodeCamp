---
title: Iframes
localeTitle: نوافذ الأطر المدمجة
---
## نوافذ الأطر المدمجة

يمثل عنصر HTML `<iframe>` إطار مضمّن ، مما يسمح لك بتضمين مستند HTML مستقل في مستند HTML الحالي. يتم استخدام `<iframe>` عادةً لتضمين الوسائط التابعة لجهات خارجية أو الوسائط الخاصة بك أو الأدوات أو مقتطفات الشفرة أو تضمين تطبيقات صغيرة تابعة لجهات أخرى مثل نماذج الدفع.

### سمات

فيما يلي بعض خصائص `<iframe>` :

| السمة | الوصف | | --- | --- | | `allowfullscreen` | اضبط على true للسماح بوضع الإطار في وضع ملء الشاشة | `frameborder` | يروي المتصفح لرسم حدود حول الإطار (مضبوطا على 1 افتراضيا) | `height` ارتفاع الإطار في CSS بكسل | | `name` | اسم للإطار | | `src` | عنوان URL لصفحة الويب لتضمين | | `width` | عرض الإطار في CSS بكسل |

### أمثلة

تضمين فيديو YouTube مع `<iframe>` :

 `
<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" 
 frameborder="0" allowfullscreen></iframe> 
` 

تضمين خرائط Google مع `<iframe>` :

 `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424" 
 width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
` 

### نص بديل

يتم استخدام المحتوى بين علامتي الفتح `<iframe>` كنص بديل ، ليتم عرضه إذا كان متصفح المشاهد لا يدعم iframe.

 `
<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0"> 
  <p>Your browser does not support iframes.</p> 
 </iframe> 
` 

### استهداف إطار Iframe في ارتباط

يمكن لأي رابط `<a>` أن يستهدف محتوى عنصر `<iframe>` . بدلاً من إعادة توجيه نافذة المتصفح إلى صفحة الويب المرتبطة ، سيعيد توجيه `<iframe>` . لكي يعمل هذا ، يجب أن تتطابق السمة `target` للعنصر `<a>` مع سمة `name` الخاصة بـ `<iframe>` .

 `
<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"></iframe> 
 
 <p><a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir">Redirect the Iframe</a></p> 
` 

سيعرض هذا المثال علامة `<iframe>` فارغة في البداية ، ولكن عند النقر على الرابط أعلاه ، سيعيد توجيه `<iframe>` لعرض فيديو YouTube.

### جافا سكريبت و Iframes

يمكن للوثائق المضمنة في `<iframe>` تشغيل JavaScript داخل السياق الخاص بها (دون التأثير على صفحة ويب الأصل) كالمعتاد.

يخضع أي تفاعل في النص البرمجي بين صفحة الويب الرئيسية ومحتوى `<iframe>` إلى نفس سياسة الأصل. وهذا يعني أنه في حالة تحميل محتوى `<iframe>` من نطاق مختلف ، فسيحظر المتصفح أي محاولة للوصول إلى هذا المحتوى باستخدام JavaScript.

### معلومات اكثر:

انظر [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) .