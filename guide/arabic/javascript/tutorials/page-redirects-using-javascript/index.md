---
title: Page Redirects Using JavaScript
localeTitle: صفحة يعيد التوجيه باستخدام جافا سكريبت
---
## صفحة يعيد التوجيه باستخدام جافا سكريبت

إذا كنت تحاول إعادة توجيه مستخدم إلى صفحة أخرى ، فيمكنك بسهولة استخدام JavaScript لإنجاز هذه المهمة. من المهم ملاحظة ما يلي:

حتى إذا كانت لديك مكتبة jQuery محملة في نصوصك البرمجية ، فقد ترغب في استخدام حل جافا سكريبت الخالص لعمليات إعادة توجيه الصفحات لأغراض الكفاءة.

هناك عدة طرق مختلفة للقيام بذلك ، ولكن أبسط طريقة هي استخدام الكائن `window.location` لإرسال المستخدم إلى الصفحة التي ترغب في إعادة توجيههم إليها. يمكن أن يستخدم كائن `window.location` أي قيمة URL صالحة مثل `http://www.yoururl.com` ، `somepage.html` ، إلخ.

 `window.location = 'http://www.yoururl.com'; 
 // window.location = 'somepage.html'; 
 // etc. 
` 

### حالة خاصة إعادة توجيه

يمكنك استخدام طريقة خاصة لإعادة التوجيه ، بشكل افتراضي ، تعلق على كائن `window.location` في كل المستعرض الرئيسي المسمى `replace()` . تقبل هذه الطريقة نفس قيم عنوان URL الصالحة بمجرد استخدام `window.location` .

فيما يلي مثال على استخدام هذه الطريقة (ستظل تعمل بنفس طريقة استخدام `window.location` في المتصفحات الأخرى):

 `window.location.replace('http://www.yoururl.com'); 
 // window.location.replace('somepage.html'); 
 // etc. 
` 

### A إعادة توجيه توقيت بسيط باستخدام JS

هنا مثال على إعادة توجيه بسيطة موقوتة باستخدام وظيفة `setTimeout()` . تُعد عمليات إعادة التوجيه المحددة التوقيت مفيدة حتى يمكنك شرحها للمستخدم ، عبر المحتوى الموجود على صفحة إعادة التوجيه ، والسبب في إعادة توجيهها إلى صفحة أخرى.

 `// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens 
 // keep in mind that 1 second = 1000 milliseconds 
 setTimeout(function () { 
    window.location = 'http://www.yoururl.com'; 
    // window.location = 'somepage.html'; 
    // etc. 
 }, 5000); 
` 

### تراجع

في بعض الأحيان ، يتصفح المستخدمون الإنترنت مع تعطيل جافا سكريبت ، ومن الواضح أن هذا سيسبب مشاكل في حل إعادة التوجيه المعتمد على JS. أوصي بتعيين عنصر `<meta>` الذي سيعمل على تحديث المتصفح بالموقع الجديد. أود تعيين الوقت لهذا العنصر الفوقي ليكون الثاني بعد المفترض أن تتم إعادة توجيه JS. لذلك ، إذا كان لديك إعادة توجيه يحدث في JS بعد 5 ثوانٍ ، `<meta>` إعادة توجيه العنصر `<meta>` على 6 ثوانٍ.

ضع عنصر `<meta>` داخل `<head>` للمستند الخاص بك مثل:

 `
<head> 
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --> 
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com"> 
 </head> 
` 

ضع في اعتبارك أنه ليس كل المتصفحات تدعم العنصر `<meta>` (أنا أبحث عنك ، والإصدارات الأقدم من IE ، و Safari) ، ولكن معظم المتصفحات الحديثة تفعل (Microsoft Edge ، Google Chrome ، Mozilla Firefox ، Opera).