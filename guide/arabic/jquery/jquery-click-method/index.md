---
title: Click Method
localeTitle: انقر فوق الطريقة
---
# انقر فوق الطريقة

تقوم طريقة jQuery Click بتشغيل وظيفة عند النقر على عنصر. تُعرف الدالة باسم "معالج" لأنه يعالج الحدث النقر. وظائف يمكن التأثير على عنصر HTML المرتبط بالنقرة باستخدام طريقة jQuery Click أو يمكنهم تغيير شيء آخر تمامًا. الشكل الأكثر استخدامًا هو:

 `$("#clickMe").click(handler) 
` 

تأخذ طريقة النقر وظيفة المعالج كوسيطة وتقوم بتنفيذها في كل مرة يتم فيها النقر `#clickMe` عنصر `#clickMe` . الدالة معالج يتلقى المعلمة المعروفة باسم [eventObject](http://api.jquery.com/Types/#Event) والتي يمكن أن تكون مفيدة للتحكم في الإجراء.

#### أمثلة

يعرض هذا الرمز تنبيهًا عندما ينقر المستخدم على زر:

 `
<button id="alert">Click Here</button> 
` 

 `$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
` 

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

يحتوي [eventObject](http://api.jquery.com/Types/#Event) على بعض الأساليب المضمنة ، بما في ذلك `preventDefault()` ، الذي يقوم بما يقوله بالضبط - يتوقف الحدث الافتراضي لعنصر. نحن هنا نرسم علامة المرساة من العمل كرابط:

 `
<a id="myLink" href="www.google.com">Link to Google</a> 
` 

 `$("#myLink").click(function (event) { 
  event.preventDefault(); 
 }); 
` 

[jsFiddle](https://jsfiddle.net/dy457gbh/)

#### المزيد من الطرق للعب مع طريقة النقر

يمكن أيضًا أن تقبل وظيفة المعالج بيانات إضافية في شكل كائن:

 `jqueryElement.click(usefulInfo, handler) 
` 

يمكن أن تكون البيانات من أي نوع.

 `$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){ 
    alert(event.data.firstWord); 
    alert(event.data.secondWord); 
 }); 
` 

يؤدي استدعاء طريقة النقر بدون دالة معالج إلى تشغيل حدث نقرة:

 `$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
` 

الآن ، عندما يتم تحميل الصفحة ، سيتم تشغيل حدث النقر عند إدخال الصفحة أو إعادة تحميلها ، وإظهار التنبيه المحدد.

كما يجب عليك استخدام .on ('click'،…) over .click (…) لأن الأول يمكنه استخدام ذاكرة أقل والعمل على العناصر المضافة ديناميكيًا.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### الأخطاء الشائعة

يرتبط حدث النقر فقط بالعناصر الموجودة حاليًا على DOM في وقت الربط ، لذا لن تكون أية عناصر مضافة بعد ذلك مرتبطة. لربط جميع عناصر في DOM ، حتى إذا تم إنشاؤها في وقت لاحق ، استخدم الأسلوب `.on()` .

على سبيل المثال ، مثال أسلوب النقر هذا:

 `$( "element" ).click(function() { 
  alert("I've been clicked!"); 
 }); 
` 

يمكن تغييره في هذا المثال على سبيل المثال:

 `$( document ).on("click", "element", function() { 
  alert("I've been clicked!"); 
 }); 
` 

#### معلومات اكثر:

لمزيد من المعلومات ، يرجى زيارة [الموقع الرسمي](https://api.jquery.com/click/#click) .