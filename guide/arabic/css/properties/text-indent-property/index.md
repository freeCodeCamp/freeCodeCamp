---
title: Text Indent Property
localeTitle: خاصية المسافة البادئة النص
---
## خاصية المسافة البادئة النص

تحدد الخاصية css التي لها `text-indent` مقدار المسافة البادئة (مسافة فارغة) التي يتم وضعها قبل أسطر النص في كتلة. بشكل افتراضي ، يتحكم هذا المسافة البادئة للسطر المنسق الأول فقط من الكتلة ، ولكن يمكن استخدام الكلمات الأساسية `hanging` `each-line` لتغيير هذا السلوك.

**الكلمات الدالة**

`hanging` - تؤثر المسافة البادئة على السطر الأول من حاوية الكتلة بالإضافة إلى كل سطر بعد فاصل سطر قسري ، ولكنها لا تؤثر على الخطوط بعد فاصل الالتفاف الناعم.

`each-line` - يقوم باستبدال الخطوط التي يتم تحديد مسافة بادئة لها. جميع الخطوط ما عدا السطر الأول ستكون مزاحة.

**بناء الجملة**

 `  /* <length> values */ 
  text-indent: 40px; 
 
  /* <percentage> value relative to the containing block width */ 
  text-indent: 10%; 
 
  /* Keyword values */ 
  text-indent: 2em each-line; 
  text-indent: 2em hanging; 
  text-indent: 2em hanging each-line; 
` 

_ملاحظة: يتوفر حاليًا دعم للكلمات الرئيسية `hanging` `each-line` متاح فقط خلف علامة ميزات النظام الأساسي للويب التجريبية_

### معلومات اكثر:

*   [MDN Doc على `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
*   [دعم المتصفح `text-indent`](http://caniuse.com/#feat=css-text-indent)