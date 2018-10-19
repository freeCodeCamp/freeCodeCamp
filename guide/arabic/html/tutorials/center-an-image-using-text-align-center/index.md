---
title: Center an Image Using Text Align Center
localeTitle: توسيط صورة باستخدام Text Align Center
---
## توسيط صورة باستخدام Text Align Center

عنصر `<img>` هو عنصر مضمّن (قيمة العرض من `inline-block` ). يمكن توسيطه بسهولة عن طريق إضافة `text-align: center;` خاصية CSS للعنصر الرئيسي يحتوي عليها.

لتوسيط صورة باستخدام `text-align: center;` يجب وضع `<img>` داخل عنصر مستوى الكتلة مثل `div` . نظرًا لأن خاصية `text-align` تنطبق فقط على عناصر مستوى الكتلة ، فأنت تضع `text-align: center;` على عنصر كتلة مستوى الالتفاف لتحقيق `<img>` مركزًا أفقيًا.

### مثال

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
      } 
    </style> 
  </head> 
  <body> 
    <div class="img-container"> <!-- Block parent element --> 
      <img src="user.png" alt="John Doe"> 
    </div> 
  </body> 
 </html> 
` 

**ملاحظة:** يجب أن يكون العنصر الرئيسي عنصر كتلة. إذا لم يكن عنصر كتلة ، يجب عليك إضافة `display: block;` خاصية CSS مع خاصية `text-align` .

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
        display: block; 
      } 
    </style> 
  </head> 
  <body> 
    <span class="img-container"> <!-- Inline parent element --> 
      <img src="user.png" alt=""> 
    </span> 
  </body> 
 </html> 
` 

**العرض التوضيحي:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## كابل بيانات

[**محاذاة النص** - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

[**\\ ** - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)