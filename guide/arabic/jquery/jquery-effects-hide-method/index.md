---
title: jQuery Effects Hide Method
localeTitle: jQuery الآثار طريقة إخفاء
---
## مسج اخفاء طريقة

في أبسط أشكالها ، يخفي **.hide ()** العنصر المتطابق على الفور ، بدون رسوم متحركة. فمثلا:

 `$(".myclass").hide() 
` 

سوف يخفي كل العناصر التي الطبقة هي _myclass_ . يمكن استخدام أي محدد jQuery.

### .hide () كطريقة الرسوم المتحركة

بفضل خياراته ، يمكن لـ **.hide ()** تحريك العرض والارتفاع والعتامة للعناصر المتطابقة في وقت واحد.

*   يمكن توفير المدة بالمللي ثانية أو باستخدام القيم الحرفية البطيئة (600 مللي ثانية) وبسرعة (200 مللي ثانية). فمثلا:

 `$("#myobject").hide(800) 
` 

*   يمكن تحديد وظيفة ليتم استدعاؤها بمجرد اكتمال الرسوم المتحركة ، مرة واحدة لكل عنصر متطابق. هذا الاستدعاء مفيد بشكل أساسي في ربط الصور المتحركة المختلفة. فمثلا

 `$("p").hide( "slow", function() { 
      $(".titles").hide("fast"); 
      alert("No more text!"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .toggle() method 
 
 To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa. 
 Usage: 
` 

جافا سكريبت $ ( ". myclass"). تبديل () \`\` \`

### طريقة .slideDown ()

يقوم هذا الأسلوب بتحريك ارتفاع العناصر المتطابقة. يؤدي ذلك إلى انخفاض أجزاء من الصفحة لأسفل ، مما يجعل الطريق للعناصر التي تم الكشف عنها. الاستعمال:

 `$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms. 
 $(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms. 
 $(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms. 
 $(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms. 
` 

#### معلومات اكثر:

طريقة إخفاء jQuery () على [الموقع الرسمي](http://api.jquery.com/hide/)