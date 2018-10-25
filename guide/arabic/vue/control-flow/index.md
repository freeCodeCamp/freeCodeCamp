---
title: Control Flow
localeTitle: تدفق التحكم
---
## تدفق التحكم

### الشرطية

باستخدام Vue.js ، يمكنك تحديد العارض لإظهار أو عدم إدخال جزء من الشفرة في النهاية الصفحة ، اعتمادا على بعض الشرط. على سبيل المثال ، تخيل إدخال نموذج ما يتطلب نصًا لا يقل عن 8 أحرف: إذا كان إدخال المستخدم أقل من 8 أحرف ، من رسالة خطأ يجب أن تظهر ؛ ولكن إذا كان الإدخال أطول من 8 ، يختفي الرسالة.

لكن لنجعل مثالًا أبسط. نحن نريد أن الشرط من exibition من أ رسالة إلى عداد:

 `
<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
 </div> 
` 

 `let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
` 

إذا ذهبت إلى وحدة التحكم والبدء في زيادة العداد ، عندما يعبر لدينا عتبة 10 ، سيتم عرض الرسالة! ثم، إذا كنت إنقاص `counter` ، سوف يخفي Vue.js الرسالة عندما يحصل `counter` على أقل من 10. لذلك ، نحن استخدم التوجيه `v-if` .

وقد تتسائل إذا كان هناك `else` لذلك `if` . وهناك `v-else` . لاحظ أن `v-else` سوف دائما

*   نتوقع `v-if` قبل ذلك
*   يشير إلى أقرب `v-if` في الصفحة

دعونا نغير قليلا من المثال الأول لدينا للحصول على هذا مستقيم.

 `
<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
  <p v-else> 
    And this is the "otherwise" option 
  </p> 
 </div> 
` 

 `let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
` 

لعب قليلا مع ذلك عن طريق تغيير القيم `counter` والانتباه إلى الرسالة المعروضة.

لدى Vue.js أيضًا الأمر `v-else-if` .

### الحلقات

يساعد Vue.js أيضًا على إنشاء نسخ متعددة من الشفرة نفسها هيكل ، مع حلقات. المثال الكلاسيكي هو قائمة تم تقديمها ديناميكيًا.

 `
<div id="app"> 
  <ul> 
    <li v-for="item in list"> 
      {{ item }} 
    </li> 
  </ul> 
 </div> 
` 

 `let app = new Vue({ 
  el: '#app', 
  data: { 
    list: [ 
      "shave", 
      "do the dishes", 
      "clean the sink", 
      "pay the bill" 
    ] 
  } 
 }); 
` 

الطريقة أسهل من إدخال الكثير من `<li>` . ولاحظ أنه كلما `list` التغييرات ، والنتيجة ستتغير acordingly. جربه: افتح وحدة التحكم و `push` بعض الخيط إلى `list` مع

 `app.list.push("something else"); 
` 

كما هو متوقع ، فإن الصفحة المقدمة الآن تحتوي على منتج جديد تمامًا!