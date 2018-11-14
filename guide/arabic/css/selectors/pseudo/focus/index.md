---
title: Focus
localeTitle: التركيز
---
## التركيز

### فريف

يمثل `:focus` عنصرًا استلم حالة تركيز ، تم تشغيلها بواسطة حدث من لوحة المفاتيح. يأتي الإجراء Trigger من الضغط على المفتاح **TAB** ، والذي ينشئ حلقة حول عنصر بشكل مرئي.

### بناء الجملة

`:focus`

### مثال

 `a:focus { 
  color: red; 
 } 
` 

### انتاج |

[رابط JSfiddle](https://jsfiddle.net/ejae7vb3/1/)

#### معلومات اكثر:

[MDN - شبكة مطوري موزيلا : التركيز - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

يتم استخدام التركيز: فئة CSS الزائفة لتحديد العنصر الذي به تركيز (مثل إدخال نموذج).

يتم تشغيلها عمومًا عندما ينقر المستخدم على عنصر أو ينقر عليه أو يحدده باستخدام مفتاح "tab" في لوحة المفاتيح.

بناء الجملة:

 `:focus 
` 

## مثال

HTML:

 `
<form> 
  <input type="text" value="The background will turn yellow when you click on it."> 
 </form> 
` 

CSS:

 `input:focus { 
   background-color: yellow; 
 } 
` 

#### معلومات اكثر:

لمزيد من المعلومات ، قم بزيارة [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | وثائق CSS](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)