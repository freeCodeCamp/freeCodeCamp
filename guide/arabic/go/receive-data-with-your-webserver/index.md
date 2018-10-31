---
title: Receive data with your web server
localeTitle: تلقي البيانات مع خادم الويب الخاص بك
---بمجرد إعداد خادم الويب الخاص بك والتأكد من أنه يمكن أن يقدم بعض المحتويات المفيدة ، قد ترغب في جعله أكثر تفاعلية عن طريق السماح له بقبول البيانات. دعونا نبدأ بكتابة بعض الرموز:

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
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  page.NAME = request.FormValue("name") 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
` 

دعونا كسر هذا الرمز إلى أسفل. أولاً وقبل كل شيء ، نبدأ باستيراد `net/http` لخادم الويب و `html/template` أجل templating. تفترض هذه المقالة أنك تعرف بالفعل كيفية القالب في Go. إذا كنت لا تعرف هذا حتى الآن ، يجب عليك قراءة المقال حول templating أولاً.

ثم نقوم بإنشاء نوع يسمى `PAGE` ، مع فتحة واحدة تسمى `NAME` (هذه `string` ). كما نقوم أيضًا بإنشاء متغير عالمي يسمى `page` وهو من النوع `PAGE` : البنية التي أنشأناها للتو.

في دالة `servePage` يوجد شيء واحد مهم بالفعل لهذه المقالة: طريقة `FormValue` نستخدمها في `request` .

قبل أن نتابع ، تحتاج أولاً إلى معرفة كيفية إنشاء `URL` . لنأخذ `URL` التالي كمثال:

 `https://google.com/search?q=free+code+camp 
` 

إذا أدخلت `URL` أعلاه في المتصفح ، فستجري بحثًا في Google عن `free code camp` . تم بناء `URL` على النحو التالي:

1.  `https://` - هذا هو البروتوكول
2.  `google.com` - هذا هو اسم النطاق والمنفذ (في هذه الحالة لا يوجد منفذ مذكور - لذلك يستخدم المتصفح المنفذ الافتراضي للبروتوكول)
3.  `/search` - هذا هو المسار
4.  `q=free+code+camp` - هذا هو `query`

الاستعلام هو الجزء الذي نتحدث عنه في هذه المقالة. يشاهد خادم Google `URL` هذا وبسبب السمة `q` في الاستعلام وقيمة `q` - في هذه الحالة `free+code+camp` - فإنه يعرف المكان الذي يجب البحث عنه.

يمكننا أيضًا تطبيق ذلك على خادمنا. لنطلق البرنامج وننقل المتصفح إلى:

 `http://localhost:8080/?name=world 
` 

سيكون الرد:

 `Hello world! 
` 

كيف يعمل هذا؟ حسنًا ، لقد أعطينا `FormValue` معلمة `name` . بهذه الطريقة ، تعلم `FormValue` أننا نريد قيمة سمة `name` في طلب البحث. في هذه الحالة هو `world` ، لذلك الأسلوب يعود `world` . ثم يتم وضع تلك السلسلة في متغير `page` ويقوم القالب بالباقي.

هذا بالطبع تطبيق بسيط لهذه الوظيفة ، ولكن يمكنك القيام بالكثير من الأشياء بها. على سبيل المثال: يمكنك قبول عناوين البريد الإلكتروني والسماح للبرنامج بتخزينها في ملف.