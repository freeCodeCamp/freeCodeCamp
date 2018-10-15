---
title: Override Class Declarations by Styling ID Attributes
localeTitle: تجاوز تعريفات الطبقة عن طريق تحديد سمات المعرف
---
## تجاوز تعريفات الطبقة عن طريق تحديد سمات المعرف

لفهم تجاوز في CSS ، يجب عليك أولاً فهم مبدأ precendence في CSS.

القاعدة الأساسية للتذكر هي قراءة CSS من الأسفل إلى الأعلى.

مثال على ذلك هو:

 `
<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
 </style> 
 <h1 class="red-text blue-text">Example</h1> 
` 

في المثال أعلاه ، سيكون نص `Example` باللون الأزرق لأن آخر صف تمت إضافته كان `blue-text` .

**من المهم أن نتذكر أن سمة `id` سوف تكون لها الأسبقية على الفئات ، أي أنها تحتل المرتبة الأعلى.**

يمكنك إنشاء سمة `id` عن طريق إضافة الرمز `#` قبل اسم الفئة ، كما هو موضح أدناه:

 `
<style> 
  #purple-text { 
    color: purple; 
  } 
 </style> 
` 

هذا مثال يوضح لك كيفية **تجاوز تعريفات Class بواسطة سمات معرف التصميم** :

 `
<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
  #green-color { 
    color: green; 
  } 
 </style> 
 <h1 id="green-color" class="red-text blue-text">Example</h1> 
` 

سيؤدي ذلك إلى جعل النص `Example` أخضر لأن سمة `id` ستحظى دائمًا بالأسبقية على تعريفات `class` .