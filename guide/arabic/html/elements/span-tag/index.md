---
title: Span Tag
localeTitle: يوم سبان
---
## سبان تاج

إن العلامة `<span>` هي عنصر حاوي للأغراض العامة مشابه لـ `<div>` . لا تُجري المتصفحات أية تغييرات مرئية على `<span>` s بشكل افتراضي ، ولكن يمكنك تصميمها باستخدام CSS أو التعامل معها باستخدام جافا سكريبت.

### مثال

 `
<html> 
  <head> 
    <title>The Span Tag</title> 
  </head> 
  <body> 
    <div> 
      <p>This is a normal paragraph without any changes.</p> 
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
    </div> 
  </body> 
 </html> 
` 

يشبه رمز الفقرة ذات النص الأحمر هذا:

 `
<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
` 

#### الاختلافات بين `<span>` و `<div>`

والفرق الرئيسي هو أن `<span>` عنصر مضمّن ، بينما `<div>` هو عنصر كتلة. هذا يعني أن `<span>` يمكن أن تظهر داخل جملة أو فقرة (كما في المثال أعلاه) ، بينما تبدأ `<div>` سطرًا جديدًا من المحتوى. لاحظ أن خاصية `display` CSS يمكنها تغيير هذا السلوك الافتراضي ، ولكن هذا يتجاوز نطاق هذه المقالة!

#### معلومات اكثر:

*   [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)