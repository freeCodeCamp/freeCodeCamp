---
title: Erlang
localeTitle: إرلانج
---
## إرلانج

Erlang هي لغة برمجة وظيفية تم تطويرها بواسطة Ericsson لاستخدامها في تطبيقات الاتصالات. لأنهم شعروا أنه من غير المقبول أن يكون لنظام الاتصالات أي توقف كبير ، فقد بني Erlang ليكون (من بين أشياء أخرى):

*   الموزعة والمتسامحة مع الخطأ _(يجب ألا يؤدي استخدام أحد البرامج أو الأجهزة الفاشلة إلى تراجع النظام)_
*   متزامن _(يمكن أن يفرز العديد من العمليات ، كل منها ينفذ عملًا صغيرًا ومعرَّفًا جيدًا ، ومعزولًا عن الآخر ولكنه قادر على التواصل عبر الرسائل)_
*   قابلة للتبديل السريع _(يمكن تبديل الشفرة في النظام أثناء تشغيله ، مما يؤدي إلى توفر عالٍ والحد الأدنى من وقت تعطل النظام)_

### بناء الجملة

Erlang يجعل الاستخدام المكثف من **العودية** . منذ البيانات غير قابل للتغيير في إرلانج، واستخدام `while` و `for` حلقات (حيث يحتاج متغير للحفاظ على تغيير قيمتها) غير مسموح به.

في ما يلي مثال على العودية ، حيث يوضح كيف تقوم إحدى الدرجات مرارًا بتفكيك الحرف الأول من مقدمة الاسم وطباعته ، ولا تتوقف إلا عند مواجهة الحرف الأخير.

 `-module(name). 
 
 -export([print_name/1]). 
 
 print_name([RemainingLetter | []]) -> 
  io:format("~c~n", [RemainingLetter]); 
 print_name([FirstLetter | RestOfName]) -> 
  io:format("~c~n", [FirstLetter]), 
  print_name(RestOfName). 
` 

انتاج:

 `> name:print_name("Mike"). 
 M 
 i 
 k 
 e 
 ok 
` 

وهناك أيضا تركيز كبير على **نمط مطابقة،** التي كثيرا ما يلغي الحاجة ل `if` بنية أو `case` البيان. في المثال التالي ، هناك نوعان من التطابقات لأسماء محددة ، متبوعًا بـ catch-all لأية أسماء أخرى.

 `-module(greeting). 
 
 -export([say_hello/1]). 
 
 say_hello("Mary") -> 
  "Welcome back Mary!"; 
 say_hello("Tom") -> 
  "Howdy Tom."; 
 say_hello(Name) -> 
  "Hello " ++ Name ++ ".". 
` 

انتاج:

 `> greeting:say_hello("Mary"). 
 "Welcome back Mary!" 
 > greeting:say_hello("Tom"). 
 "Howdy Tom." 
 > greeting:say_hello("Beth"). 
 "Hello Beth." 
` 

### حاول

هناك مواقع ويب يمكنك فيها محاولة تشغيل أوامر Erlang دون الحاجة إلى تثبيت أي شيء محليًا ، مثل هذه:

*   [جربها! (برنامج تعليمي عملي)](http://www.tryerlang.org/)
*   [TutorialsPoint CodingGround](https://www.tutorialspoint.com/compile_erlang_online.php)

إذا كنت ترغب في تثبيته على جهاز (أو جهاز ظاهري) ، يمكنك العثور على ملفات التثبيت في [Erlang.org](https://www.erlang.org/downloads) أو على [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html) .

#### معلومات اكثر:

*   [حول إرلانج](https://www.erlang.org/about)
*   [تعلمك بعض Erlang عن جيد العظمى!](http://learnyousomeerlang.com/)
*   [مأوى ينتج!](http://spawnedshelter.com/) _(مجموعة من المقالات ومقاطع الفيديو والكتب لتعلم Erlang)_
*   [إرلانج (لغة برمجة)](https://en.wikipedia.org/wiki/Erlang_(programming_language))