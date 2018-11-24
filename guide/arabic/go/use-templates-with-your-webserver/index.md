---
title: Using templates with your web server
localeTitle: باستخدام القوالب مع خادم الويب الخاص بك
---عندما يكون لديك خادم ويب ، قد ترغب في إدراج البيانات في ردودك. دعونا نرى بعض التعليمات البرمجية:

 `package main 
 
 import ( 
  "net/http" 
  "html/template" 
 ) 
 
 type PAGE struct { 
  NAME string 
 } 
 
 var page PAGE 
 
 func main() { 
  page.NAME = "Mark" 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
` 

الآن أطلق هذا البرنامج وتصفح متصفحك من أجل:

 `http://localhost:8080/ 
` 

سيكون الرد:

 `Hello Mark! 
` 

ولكن كيف يعمل هذا وما يفعله الرمز؟ حسنا ، أولا وقبل كل شيء نستورد حزمة `net/http` حتى نتمكن من تشغيل خادم الويب. ثم نستورد حزمة `html/template` . يتيح هذا ميزة تسمى templating؛ وهذا هو المكان الذي تدور حوله هذه المقالة.

نقوم أيضًا بإنشاء نوع يسمى `PAGE` ، والذي يحتوي على حقل واحد يسمى `NAME` `string` . كما نقوم أيضًا بإنشاء متغير عالمي يسمى `page` من النوع `PAGE` ، البنية التي أنشأناها للتو. في الوظيفة `main` نمنح حقل `NAME` `page` قيمة `Mark` - اسمي ، ولكن لا تتردد في استخدام اسمك!

وظيفة `servePage` صعبة بعض الشيء في البداية. لنأخذها على حدة:

 `func servePage(writer http.ResponseWriter, reqest *http.Request) { 
 
  // 1. Creating a template 
  template := template.New("sayHello") 
 
  // 2. Filling the template 
  template, _ = template.Parse("Hello {{.NAME}}!") 
 
  // 3. Executing the template 
  template.Execute(writer, page) 
 } 
` 

ماذا نفعل هنا؟ دعونا نرى خطوة بخطوة:

1.  نحن نخلق _قالب_ . تحتاج إلى إدخال اسم ، ولكن لا يهم ما الاسم الذي تختاره حقًا. هنا اخترت `sayHello` .
2.  ثم نقوم بملء القالب ببعض النص. يرجى الإحاطة علما بـ `{{.NAME}}` .
3.  وأخيرًا ، نقوم _بتنفيذ_ القالب. هذا يعني أنه تم ملء القالب وإرساله إلى العميل.

لكن كيف نذهب من `{{.NAME}}` إلى `Mark` ؟ حسنًا ، تذكر أننا استخدمنا متغير `page` كمعلمة لأسلوب `Execute` ؟ تبحث هذه الطريقة في البيانات الموجودة في القالب وترى `{{.NAME}}` . يشير `.NAME` إلى أنه يجب أن يبحث عن حقل يسمى `NAME` داخل المتغير الذي تم تحديده كمعلمة عند استدعاء `Execute` . في هذه الحالة ، يجد هذا الحقل ويحيط علما بأن القيمة هي `Mark` . يخبر `{{` و `}}` `Execute` أنه يجب استبدال `{{.NAME}}` بالقيمة التي وجدها. وبالتالي فإن النتيجة النهائية سوف تصبح `Hello Mark!` .

يمكن أن يكون لديك حقول متعددة `{{.XXX}}` . هذه طريقة سهلة للغاية يمكنك إدراج البيانات في الردود ، وتعرف الآن كيفية عمل قالب في Go!