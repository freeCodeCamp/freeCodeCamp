---
title: Output 
localeTitle: انتاج |
---
## انتاج |

هناك 4 طرق شائعة يمكنك من خلالها إخراج بياناتك من خلال وحدة التحكم. سيتم استخدام هذه الجزء الأكبر من عملية التطوير الخاصة بك.

#### `console.log`

إنها الطريقة الأكثر شيوعًا واستخدامًا لإخراج البيانات. من الشائع أن يتم إدخال زوجين من هذه العبارات بين العبارات لتوضيح كيفية تدفق البيانات ومعالجتها. أيضا ، يمكنك استخدام `debugger` أو نقاط التوقف في devtools أن تفعل الشيء نفسه دون تلويث التعليمات البرمجية الخاصة بك.

 `var numbers  = [ 1, 2, 3, 4, 5, 6, 7]; 
 numbers.forEach(function(number){ 
  console.log(number + ' is divisible by 2', number%2 == 0); 
 }); 
` 

#### `console.warn`

كما خمنت بالاسم ، يُستخدم هذا لعرض التحذيرات ، ويميزها اللون الأصفر النموذجي عن الخطأ الأحمر & `console.log` .

 `function isAdult(age){ 
  if(Number(age) < 18){ 
    console.warn('You are not an adult'); 
    return false; 
   } 
   return true; 
 } 
` 

#### `console.error`

كما يمكنك تخمين ، يتم استخدام هذا عند طرح استثناء أو خطأ في التعليمات البرمجية. يعطيك رسالة الخطأ الحمراء لجذب الانتباه بسرعة.

#### `console.table`

افترض أنك حصلت على قائمة من العناصر أو الأفلام في كائن json وتريد التحقق من ذلك في تنسيق الجدول ، ثم `console.table` هو أفضل رهان. يكتشف تلقائيًا الصفوف ورؤوس الأعمدة من البيانات.

_حاول تشغيل التعليمة البرمجية أدناه في وحدة التحكم الخاصة بك_

 `var data = { 
  "colors": [ 
    { 
      "color": "black", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,255,1], 
      "hex": "#000" 
    }, 
    { 
      "color": "white", 
      "category": "value", 
      "rgba": [0,0,0,1], 
      "hex": "#FFF" 
    }, 
    { 
      "color": "red", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,0,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "blue", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [0,0,255,1], 
      "hex": "#00F" 
    }, 
    { 
      "color": "yellow", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "green", 
      "category": "hue", 
      "type": "secondary", 
      "rgba": [0,255,0,1], 
      "hex": "#0F0" 
 
    }, 
  ] 
 } 
 
 console.table(data.colors); 
` 

يمكنك أيضًا التحكم في نوع المخرجات الذي تريد رؤيته في وحدة التحكم.

1.  الكل
2.  مطنب
3.  تحذير
4.  أخطاء

#### معلومات اكثر:

*   [مرجع كامل لعنصر وحدة التحكم بواسطة Google](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
*   [وحدة التحكم MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)