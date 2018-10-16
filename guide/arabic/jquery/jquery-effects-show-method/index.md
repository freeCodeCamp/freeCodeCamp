---
title: jQuery Effects Show Method
localeTitle: طريقة jQuery تظهر طريقة
---
## طريقة jQuery تظهر طريقة

في أبسط أشكالها ، يعرض **.show ()** العنصر المطابق على الفور ، بدون رسوم متحركة. فمثلا:

 `$(".myclass").show(); 
` 

سوف تظهر جميع العناصر التي الطبقة هي _myclass_ . يمكن استخدام أي محدد jQuery.

ومع ذلك ، لا تتخطى هذه الطريقة `!important` في نمط CSS ، مثل `display: none !important` .

### .show () كطريقة للرسوم المتحركة

بفضل خياراته ، يمكن أن **يؤدي .show () إلى** تحريك العرض والطول والعتامة للعناصر المتطابقة في وقت واحد.

*   يمكن توفير المدة بالمللي ثانية أو باستخدام القيم الحرفية البطيئة (600 مللي ثانية) وبسرعة (200 مللي ثانية). فمثلا:

 `$("#myobject").show("slow"); 
` 

*   يمكن تحديد وظيفة ليتم استدعاؤها بمجرد اكتمال الرسوم المتحركة ، مرة واحدة لكل عنصر متطابق. فمثلا

 `$("#title").show( "slow", function() { 
    $("p").show("fast"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .slideDown() method 
 This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. 
 Usage: 
` 

جافا سكريبت $ ( "myclass.") slideDown ()؛ // سيتم توسيع العنصر مع myclass المعرّف لمدة 400 مللي ثانية. $ ( ". myclass") slideDown (1000)؛ // سيتم توسيع العنصر مع myclass المعرّف لـ 1000 مللي ثانية. $ ( "myclass.") slideDown ( "بطيء")؛ // سيتم توسيع العنصر مع myclass المعرّف لـ 600 مللي ثانية. $ ( ". myclass") slideDown ( "سريع")؛ // سيتم توسيع العنصر مع myclass المعرّف لـ 200 مللي ثانية. \`\` \`

#### معلومات اكثر:

طريقة JQuery Show () على [الموقع الرسمي](http://api.jquery.com/show/)