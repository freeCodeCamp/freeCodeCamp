---
title: Write Reusable JavaScript with Functions
localeTitle: اكتب Reusable JavaScript مع الوظائف
---
## اكتب Reusable JavaScript مع الوظائف

تتيح لك الوظائف إعادة استخدام التعليمات البرمجية مرارًا وتكرارًا. مهمتنا هي جعل وظيفة بسيطة `reusableFunction()` تطبع "Hi World" إلى وحدة التحكم (والتي يمكنك الوصول إليها باستخدام **Ctrl + Shift + I** ).

تبدأ من خلال استخدام الكلمة `function` ، ثم كتابة اسم الدالة (الذي يتبع تنسيق حالة الجمل). ثم ، اكتب `()` ، وإنشاء الأقواس `{}` . مثل ذلك:

 `function reusableFunction() {} 
` 

الآن ، أصبحت الدالة جاهزة لكتابتها. استخدم `console.log()` لطباعة رسالة في وحدة التحكم. الحل الأساسي رمز كما يلي:

 `function reusableFunction() { 
    console.log("Hi World"); 
 } 
`