---
title: jQuery Ajax Get Method
localeTitle: jQuery اياكس الحصول على طريقة
---
## jQuery اياكس الحصول على طريقة

يرسل طلب GET http غير متزامن لتحميل البيانات من الخادم. شكله العام هو:

 `jQuery.get( url [, data ] [, success ] [, dataType ] ) 
` 

*   `url` : المعلمة الإلزامية الوحيدة. تحتوي هذه السلسلة على العنوان الذي تريد إرسال الطلب إليه. سيتم تجاهل البيانات التي تم إرجاعها في حالة عدم تحديد أي معلمة أخرى.
*   `data` : يتم إرسال كائن عادي أو سلسلة إلى الخادم مع الطلب.
*   `success` : وظيفة رد اتصال تم تنفيذها في حالة نجاح الطلب. يستغرق كحجة البيانات التي تم إرجاعها. يتم تمريره أيضا حالة النص للاستجابة.
*   `dataType` : نوع البيانات المتوقع من الخادم. الافتراضي هو Intelligent Guess (xml ، json ، script ، text ، html). إذا تم توفير هذه المعلمة ، فيجب أيضًا توفير رد الاتصال بنجاح.

#### أمثلة

طلب `resource.json` من الخادم وإرسال بيانات إضافية وتجاهل النتيجة المرتجعة: \`\` \`جافا سكريبت $ .get ('http://example.com/resource.json'، {category: 'client'، type: 'premium'})؛

 ``Request `resource.json` from the server, send additional data, and handle the returned response (json format): 
 ```javascript 
 $.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) { 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
`` 

يمكن كتابة المثال أعلاه كما يلي: \`\` \`جافا سكريبت $ .get ('http://example.com/resource.json'، {category: 'client'، type: 'premium'}) دون (وظيفة (استجابة) { في حالة تأهب ( "النجاح")؛ . $ ( "# MYPAR") أتش تي أم أل (response.amount)؛ })؛

 ``### jQuery.ajax() 
 `$.get( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
 ```javascript 
 $.ajax({ 
      url: url, 
      data: data, 
      success: success, 
      dataType: dataType 
 }); 
`` 

`$.ajax()` الكثير من الخيارات الإضافية ، وكلها موجودة [هنا](http://api.jquery.com/jquery.ajax/) .

#### معلومات اكثر:

لمزيد من المعلومات ، يرجى زيارة الموقع [الرسمي jQuery.get](https://api.jquery.com/jquery.get/) .