---
title: Font Size Attribute
localeTitle: حجم الخط سمة
---
## حجم الخط سمة

تحدد هذه السمة حجم الخط كقيمة رقمية أو نسبية. تتراوح القيم الرقمية من `1` إلى `7` مع `1` كونها الأصغر و `3` القيم الافتراضية. كما يمكن تعريفها باستخدام قيمة نسبية ، مثل `+2` أو `-3` ، والتي تقوم بتعيينها نسبة إلى قيمة سمة الحجم لعنصر `<basefont>` ، أو نسبة إلى القيمة الافتراضية `3` ، إذا لم تكن موجودة.

بناء الجملة:

`<font size="number">`

مثال:

 `
<html> 
  <body> 
    <font size="6">This is some text!</font> 
  </body> 
 </html> 
` 

ملاحظة: `The size attribute of <font> is not supported in HTML5. Use CSS instead.`