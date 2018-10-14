---
title: Img Align Attribute
localeTitle: ايمج محاذاة السمة
---
## ايمج محاذاة السمة

تحدد السمة align للصورة مكان محاذاة الصورة وفقًا للعنصر المحيط.

قيم السمات:  
right - محاذاة الصورة إلى اليمين left - محاذاة الصورة إلى اليسار  
top - محاذاة الصورة إلى الأعلى  
أسفل - محاذاة الصورة إلى الأسفل  
وسط - محاذاة الصورة إلى المنتصف

فمثلا:

 `
<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
   <title>Img Align Attribute</title> 
 </head> 
 <body> 
  <p>This is an example. <img src="image.png" alt="Image" align="middle"> More text right here 
  <img src="image.png" alt="Image" width="100"/> 
  </body> 
 </html> 
` 

يمكننا أيضًا التوفيق في اليمين إذا أردنا:

 `
<p>This is another example<img src="image.png" alt="Image" align="right"></p> 
` 

**يرجى ملاحظة أن سمة align غير مدعومة في HTML5 ، ويجب عليك استخدام CSS بدلاً من ذلك. ومع ذلك ، لا تزال مدعومة من جميع المتصفحات الرئيسية.**

#### معلومات اكثر:

[مقالة MDN على علامة img وسماتها](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)