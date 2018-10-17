---
title: Location Reload Method
localeTitle: طريقة تحديث الموقع
---
## طريقة تحديث الموقع

يوفر أسلوب JavaScript `Location.reload()` وسائل لإعادة تحميل الصفحة في عنوان URL الحالي.

بناء الجملة هو ما يلي:

`object.reload(forcedReload);` حيث تعد `forceReload` معلمة اختيارية.

لإعادة تحميل الصفحة ببساطة ، يمكنك إدخال `window.location` ككائن.

المعلمات الاختيارية التي يتم `force reload` هي قيمة منطقية ، والتي يتم تعيينها على:

*   `True` يعيد تحميل الصفحة من الخادم (على سبيل المثال لا يخزن البيانات المخزنة مؤقتًا بواسطة المتصفح):

 `window.location.reload(true); 
` 

*   `False` بإعادة تحميل الصفحة باستخدام إصدار الصفحة المخزنة مؤقتًا بواسطة المستعرض.

 `window.location.reload(false); 
` 

`False` هي المعلمة الافتراضية ، لذلك إذا تركت فارغة ، فإن `object.reload()` يعيد تحميل الصفحة باستخدام بيانات broswer المخبأة ، أي أنه مماثل لاستخدام الطريقة كـ `object.reload(false)` .

لإنشاء تأثير "تحديث" - توفير - المستعرض من قبل المستعرض ، قد تحتاج إلى إنشاء زر HTML والقيام بأي مما يلي:

*   إرفاق `Location.reload()` بعلامة زر HTML ، كما يلي:

 `<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
` 

*   تعيين حدث عند النقر على الزر باستخدام الوظيفة التي تستخدم الطريقة ، حيث يبدو الزر مشابهاً

 `<button type="button" onClick="reloadThePage()">Refresh!</button> 
` 

 `<script> 
 function reloadThePage(){ 
    window.location.reload(); 
 } 
 </script> 
` 

### مثال:

 `// Reload the current resources from the server 
 window.location.reload(true); 
 
 // Reload the current resources from the browser's cache 
 window.location.reload(); 
` 

سيؤدي هذا إلى إعادة تحميل الصفحة على عنوان URL الحالي من الخادم.

#### معلومات اكثر:

*   [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
*   [مدارس W3](https://www.w3schools.com/jsref/met_loc_reload.asp)