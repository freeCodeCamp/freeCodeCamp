---
title: Semantic UI Buttons
localeTitle: أزرار واجهة المستخدم الدلالية
---
## أزرار واجهة المستخدم الدلالية

يشير الزر إلى إجراء محتمل للمستخدم. توفر واجهة المستخدم Semantic بناء جملة سهلة الاستخدام يبسط ليس فقط تصميم زر ، ولكن أيضا دلالات اللغة الطبيعية.

#### كيف تستعمل

تتم إضافة فئة واجهة المستخدم الدلالية ببساطة إلى عنصر زر ، تم إعطاء أمثلة مختلفة أدناه للإشارة إلى كيفية استخدامها.

#### أنواع

*   زر قياسي

معيار واجهة المستخدم الدلالي زر

 `<button class="ui button">Standard Button</button> 
` 

*   التركيز على زر

زر مع مستوى مختلف من التركيز

 `<button class="ui primary button"> 
` 

تعتبر فئات التركيز الأخرى `secondary` `positive` `negative`

*   زر متحرك

زر مع الرسوم المتحركة ، تظهر محتويات مخفية

 `<div class="ui animated fade button" tabindex="0"> 
  <div class="visible content">Sign-up for a Pro account</div> 
  <div class="hidden content">$12.99 a month</div> 
 </div> 
` 

خاصية `tabindex="0"` أعلاه تجعل لوحة مفاتيح الأزرار `tabindex="0"` ، حيث أن العلامة `<button>` لم يتم استخدامها.

*   زر التسمية

زر بجانب علامة

 `<div class="ui labeled button" tabindex="0"> 
  <div class="ui button"><i class="heart icon"></i> Like</div> 
  <a class="ui basic label">2,048</a> 
 </div> 
` 

يتم استخدام العنصر `<i>` لتحديد رمز ، هنا هو رمز قلب `<i class="heart icon"></i>` إلى جانب العلامة الأساسية `<a class="ui basic label">2,048</a>`

*   أيقونة زر

يمكن أن يكون زر واجهة المستخدم الدلالية مجرد رمز

 `<button class="ui icon button"> 
  <i class="camera icon"></i> 
 </button> 
` 

ما سبق هو مجرد رمز الكاميرا

#### المجموعات

يمكن أن توجد أزرار واجهة المستخدم الدلالية في مجموعة

 `<div class="ui buttons"> 
  <button class="ui button">One</button> 
  <button class="ui button">Two</button> 
  <button class="ui button">Three</button> 
 </div> 
` 

#### يحتوى

يمكن أن تحتوي أزرار واجهة المستخدم الدلالية على شرطية

 `<div class="ui buttons"> 
  <button class="ui positive button">Yes</button> 
  <div class="or" data-text="or"></div> 
  <button class="ui negative button">No</button> 
 </div> 
` 

#### تنص على

يمكن أن توجد أزرار واجهة المستخدم الدلالية في حالات مختلفة ، `active` ، `disabled` ، `loading` . ببساطة إضافة اسم الدولة إلى `class` سمة `of` \`العنصر.

 `<button class="ui loading button">Loading</button> 
` 

#### الاختلافات

توجد أزرار UI الدلالي في مجموعة متنوعة من الأحجام، `mini` ، `tiny` ، `small` ، `medium` ، `large` ، `big` ، `huge` ، و `massive` .

 `<button class="ui massive button">Massive Button</button> 
` 

هناك الكثير حول أزرار UI الدلالية ، قم بزيارة الرابط المقدم في قسم "مزيد من المعلومات" لمعرفة المزيد.

#### معلومات اكثر:

*   [واجهة المستخدم الدلالي أزرار المستندات](https://semantic-ui.com/elements/button.html)