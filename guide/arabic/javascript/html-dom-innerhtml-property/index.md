---
title: HTML Dom Innerhtml Property
localeTitle: خاصية HTML Dom Innerhtml
---
## خاصية HTML Dom Innerhtml

تقوم `innerHTML` prop بإرجاع محتوى HTML داخل عنصر محدد وتتيح لك أيضًا تحديد محتوى HTML جديد.

**_الحصول على عنصر المحتوى_**

 `
<div id="demo"> 
  <p>Demo</p> 
 </div> 
` 

 `var element = document.getElementById("demo"); 
 console.log(element.innerHTML) //logs <p>Demo</p> 
` 

**_محتوى مجموعة العنصر_**

 `
<div id="demo"></div> 
` 

 `var element = document.getElementById("demo"); 
 element.innerHTML = "<div>Demo</div>"; 
` 

سوف يكون مثل HTML الآن

 `
<div id="demo"> 
  <div>Demo</div> 
 </div> 
` 

**_اعتبارات أمنية_**

يجب أن تأتي القيمة التي تم تعيينها على `innerHTML` من مصادر موثوقة ، بما أن جافا سكريبت ستضع أي شيء داخل هذا العنصر وسيتم تشغيله على هيئة HTML عادي.

مثال:

سيؤدي تعيين قيمة " `<script>alert();</script>` " إلى تشغيل وظيفة "alert ()" في Javascript:

 `var element = document.getElementById("demo"); 
 
 element.innerHTML = "<script>alert();</script>"; 
` 

يسمى هذا النوع من الهجوم [Scripting عبر الموقع أو XSS باختصار](https://en.wikipedia.org/wiki/Cross-site_scripting) .

هذه هي واحدة من الطرق الأكثر شيوعا لارتكاب هجوم XSS. إذا كنت تريد معرفة المزيد من المعلومات وتعلّم كيفية الدفاع عنها ، [فراجع هذا المصدر](https://xss-game.appspot.com/)