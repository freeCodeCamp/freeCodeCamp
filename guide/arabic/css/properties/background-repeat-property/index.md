---
title: Background Repeat Property
localeTitle: تكرار الخلفية الملكية
---
## تكرار الخلفية الملكية

تقوم خاصية CSS المتكررة للخلفية بتعريف كيفية تكرار صور الخلفية.

يمكن تكرار صورة الخلفية على طول المحور الأفقي أو المحور الرأسي أو كلا المحورين أو عدم تكرارها على الإطلاق. بشكل افتراضي ، يتم تكرار صورة الخلفية عموديًا وأفقيًا.

بناء الجملة:

 `background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit; 
` 

*   تكرار: سيتم تكرار صورة الخلفية عموديًا وأفقيًا. هذا هو الافتراضي
    
*   repeat-x: سيتم تكرار صورة الخلفية أفقيًا فقط
    
*   repeat-y: سيتم تكرار صورة الخلفية رأسياً فقط.
    
*   عدم التكرار: لن تتكرر صورة الخلفية.
    
*   الأولي: تعيين هذه الخاصية إلى قيمتها الافتراضية.
    
*   ترث: يرث هذه الخاصية من العنصر الرئيسي.
    

أمثلة: لتكرار الصورة أفقياً وعمودياً

 `body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat; 
 } 
` 

لتكرار الصورة أفقيا

 `body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat-x; 
 } 
` 

#### معلومات اكثر:

[لمزيد من المعلومات حول خاصية تكرار الخلفية](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)