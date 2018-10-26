---
title: CSS Custom Properties
localeTitle: خصائص CSS مخصصة
---
## خصائص CSS مخصصة

تتم الإشارة إلى خصائص CSS المخصصة أيضًا باسم متغيرات CSS. اعتبارًا من تشرين الأول (أكتوبر) 2018 ، لا تزال خصائص CSS المخصصة عبارة عن تقنية تجريبية. خذ بعين الاعتبار [دعم المستعرض](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) قبل استخدام الميزة في الإنتاج.

### التصريح عن خصائص مخصصة

ضمن محدد ، يتم تعريف الخصائص المخصصة باستخدام واصلين (-) والاسم ، متبوعًا بالقيمة. يمكن أن تكون القيمة بسيطة ، مثل اللون (RGB ، hexcode ، إلخ) أو الحجم (باستخدام البكسل ، em ، rem ، إلخ) ، أو يمكن أن تكون أكثر تعقيدًا ، مثل تعريف dropshadow. انظر الأمثلة أدناه.

 `:root { 
  --firstVariable: red; 
  --headerSize: 16px; 
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2); 
` 

الإعلان عن الخصائص المخصصة في `:root` محدد `:root` جعل هذه الخصائص متاحة على مستوى العالم. يمكن اعتبار `:root` محدد `:root` نفس محدد `html` .

### باستخدام خصائص مخصصة

لاستخدام خاصية مخصصة ، يتم استخدام الدالة `var()` ، والتي تأخذ وسيطة واحدة من اسم الخاصية المخصصة. \`\` \`المغلق h1 { حجم الخط: var (- headerSize)؛ }

.بطاقة { box-shadow: var (- dropShadow)؛ }

 ``### Cascading Custom Properties 
 When custom properties are declared in the `:root` selector, those properties are globally available; any style rules can use the properties. If a custom property needs to be different for specific element, class, or id, a property of the same can be declared in that selector. The compiler will first look for a property name within the immediate enclosing selector, then move to the `:root`. 
`` 

المغلق :جذر { -font-color: red؛ }

h1 { -font-color: blue؛ }

h1 { font-color: var (- font-color)؛ /\* أزرق \*/ }

h2 { font-color: var (- font-color)؛ / \* أحمر \* / } \`\` \`

#### معلومات اكثر:

للمزيد من المعلومات قم بزيارة:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
*   [وثيقة توصية المرشح W3C](https://www.w3.org/TR/css-variables/)
*   [دعم المتصفح](https://caniuse.com/#feat=css-variables)