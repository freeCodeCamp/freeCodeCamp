---
title: jQuery Ajax Post Method
localeTitle: jQuery Ajax Post Method
---
## jQuery Ajax Post Method

يرسل طلب HTTP POST غير متزامن لتحميل البيانات من الخادم. شكله العام هو:

 `jQuery.post( url [, data ] [, success ] [, dataType ] ) 
` 

*   url: هي المعلمة الإلزامية الوحيدة. تحتوي هذه السلسلة على العنوان الذي تريد إرسال الطلب إليه. سيتم تجاهل البيانات التي تم إرجاعها في حالة عدم تحديد أي معلمة أخرى
*   البيانات: كائن عادي أو سلسلة يتم إرسالها إلى الخادم مع الطلب.
*   success: وظيفة رد اتصال يتم تنفيذها في حالة نجاح الطلب. ويأخذ كوسيطة البيانات التي تم إرجاعها. يتم تمريره أيضا حالة النص للاستجابة.
*   dataType: نوع البيانات المتوقع من الخادم. الافتراضي هو Intelligent Guess (xml ، json ، script ، text ، html). إذا تم توفير هذه المعلمة ، فيجب تقديم رد الاتصال بنجاح أيضًا.

#### أمثلة

 `$.post('http://example.com/form.php', {category:'client', type:'premium'}); 
` 

طلبات `form.php` من الخادم ، وإرسال بيانات إضافية وتجاهل النتيجة التي تم إرجاعها

 `$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
` 

طلبات `form.php` من الخادم ، وإرسال بيانات إضافية والتعامل مع الاستجابة المرتجعة (تنسيق json). يمكن كتابة هذا المثال بهذا التنسيق:

 `$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
` 

يقوم المثال التالي بنشر نموذج باستخدام Ajax ووضع النتائج في div \`\` \`أتش تي أم أل  jQuery.post التجريبي 

 

// Attach a submit handler to the form $( "#searchForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), term = $form.find( "input\[name='s'\]" ).val(), url = $form.attr( "action" ); // Send the data using post var posting = $.post( url, { s: term } ); // Put the results in a div posting.done(function( data ) { var content = $( data ).find( "#content" ); $( "#result" ).empty().append( content ); }); });

 `The following example use the github api to fetch the list of repositories  of a user  using jQuery.ajax() and put results in a div 
` 

أتش تي أم أل 

 

// Attach a submit handler to the form $( "#userForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), username = $form.find( "input\[name='username'\]" ).val(), url = "https://api.github.com/users/"+username+"/repos"; // Send the data using post var posting = $.post( url, { s: term } ); //Ajax Function to send a get request $.ajax({ type: "GET", url: url, dataType:"jsonp" success: function(response){ //if request if made successfully then the response represent the data $( "#result" ).empty().append( response ); } }); });

 ``### jQuery.ajax() 
 `$.post( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
`` 

جافا سكريبت .ajax $ ({ النوع: "POST" ، url: url ، البيانات: البيانات ، النجاح: النجاح ، dataType: dataType })؛ \`\` \`

`$.ajax()` يوفر المزيد من الخيارات التي يمكن العثور عليها [هنا](http://api.jquery.com/jquery.ajax/)

#### معلومات اكثر:

لمزيد من المعلومات ، يرجى زيارة [الموقع الرسمي](https://api.jquery.com/jquery.post/)