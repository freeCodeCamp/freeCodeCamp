---
title: Comments
localeTitle: تعليقات
---
## تعليقات

يستخدم المبرمجون التعليقات لإضافة تلميحات أو ملاحظات أو اقتراحات أو تحذيرات إلى شفرة المصدر الخاصة بهم ؛ ليس لها أي تأثير على الناتج الفعلي للرمز. يمكن أن تكون التعليقات مفيدة جدًا في توضيح الهدف من شفرتك أو ما يجب فعله.

من الأفضل دائمًا عند البدء في التعليق في أكثر الأحيان ، لأنه يمكن أن يساعد أولئك الذين يقرؤون شفرتك على فهم ما تعتزم شفرتك فعله بالضبط.

جافا سكريبت لديها طريقتان لتخصيص التعليقات في شفرتها.

الطريقة الأولى هي `//` التعليق ؛ كل النص التالي `//` على نفس السطر في تعليق. فمثلا:

 `function hello() { 
  // This is a one line JavaScript comment 
  console.log("Hello world!"); 
 } 
 hello(); 
` 

والطريقة الثانية هي `/* */` comment ، التي يمكن استخدامها للتعليقات ذات السطر الواحد والمتعددة الخطوط. فمثلا:

 `function hello() { 
  /* This is a one line JavaScript comment */ 
  console.log("Hello world!"); 
 } 
 hello(); 
` 

 `function hello() { 
  /* This comment spans multiple lines. Notice 
     that we don't need to end the comment until we're done. */ 
  console.log("Hello world!"); 
 } 
 hello(); 
` 

يمكنك أيضًا منع تنفيذ شفرة جافا سكريبت فقط عند استخدام خطوط الرمز مثل هذا:

 `function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
` 

#### معلومات اكثر:

[كيف تكتب تعليقات في جافا سكريبت](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### تأتي العديد من IDEs مع اختصار لوحة المفاتيح للتعليق على الخطوط.

1.  قم بتمييز النص ليتم التعليق عليه
2.  نظام التشغيل Mac: Push Command (مفتاح Apple) & "/"
3.  نظام التشغيل Windows: التحكم في الدفع & "/"
4.  يمكنك أيضًا إزالة التعليمة البرمجية عن طريق تنفيذ الخطوات نفسها

اختصار للتعليق على جزء من javascript في العديد من برامج تحرير التعليمات البرمجية هو إبراز سطور الكود الذي تريد التعليق عليه ، ثم اضغط `Cmd/Ctrl + /` .

كما أن التعليقات مفيدة جدًا لاختبار الشفرة حيث يمكنك منع تشغيل سطر / فقرة رمز معين

 `function hello() { 
  // The statement below is not going to get executed 
  // console.log('hi') 
  } 
 hello(); 
` 

 `function hello() { 
  // The statements below are not going to get executed 
  /* 
  console.log('hi'); 
  console.log('code-test'); 
  */ 
 } 
 hello(); 
` 

#### معلومات اكثر:

*   [كيف تكتب تعليقات في جافا سكريبت](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)