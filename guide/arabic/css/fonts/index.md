---
title: Fonts
localeTitle: الخطوط
---
## الخطوط

تحدد خصائص خط CSS مجموعة الخطوط والوزن والحجم والمتغير وارتفاع الخط ونمط النص.

### خط العائلة

يتم تعيين عائلة الخط من النص ببساطة باستخدام خاصية `font-family` .

يعمل مع نظام _احتياطي_ ، إذا كان متصفحك لا يدعم الخط الأول ، فإنه يحاول مع الخط التالي وهكذا. إذا كان اسم الخط أكثر من كلمة واحدة يجب أن يكون محاطًا بعلامات اقتباس.

 `p { 
    font-family: "Times New Roman", Times, serif; 
 } 
` 

في المثال أعلاه ، "Times New Roman" هو من الخط ، في حين أن "serif" هو . يتم استخدام الأسماء العامة كخلفية آلية للحفاظ على النمط إذا كان اسم العائلة غير متاح. يجب أن يكون الاسم العام هو العنصر الأخير في قائمة أسماء عائلة الخطوط. عام أسماء العائلة هي serif، sans-serif، monospace، cursive، fantasy، system-ui.

### نوع الخط

يمكن استخدام الخاصية `font-style` لتحديد نص مائل.

هذه الخاصية لديها 3 القيم:

*   طبيعي - النص الموضح بشكل طبيعي
*   مائل - النص موضح في _المائل_
*   مائل - النص المائل يميل

 `.normal { 
    font-style: normal; 
 } 
 
 .italic { 
    font-style: italic; 
 } 
 
 .oblique { 
    font-style: oblique; 
 } 
` 

### حجم الخط

تحدد خاصية `font-size` النص.

هناك أنواع مختلفة من قيم حجم الخط:

*   `px` (بكسل) - الحجم الافتراضي من النص كائن `16px`
*   `em` - `1em` = حجم الخط الحالي ، لذا `1em` = `16px` (موصى به من قبل W3C)
*   `small` ، `medium` ، `large` - يُعرف بقيم الحجم المطلقة
*   `%` - النسب المئوية

 `.with-pixels { 
    font-size: 14px; 
 } 
 
 .with-ems { 
    font-size: 0.875em; 
 } 
 
 .with-absolute { 
    font-size: large; 
 } 
 
 .with-percentage { 
    font-size: 80%; 
 } 
` 

### وزن الخط

تحدد الخاصية `font-weight` الوزن (أو الجرأة) للخط. يقبل الكلمات الرئيسية ( `bold` ، `normal` ، `bolder` ، `lighter` ) أو كلمات رئيسية عددية ( `100` ، `200` ، `300` ، `400` إلخ) `400` هو نفسه `normal` .

 `p { 
   font-weight: bold 
 } 
` 

### استجابة الخط

يمكن ضبط حجم النص بوحدة عرض vw (عرض إطار العرض). وبهذه الطريقة ، سيتبع حجم النص حجم نافذة المتصفح.

 `
<h1 style="font-size:10vw">Hello World</h1> 
` 

`Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.`

### نوع الخط

تحدد خاصية `font-variant` إذا كان يجب عرض النص في خط صغير الحجم (حيث يتم تحويل جميع الأحرف الصغيرة إلى أحرف كبيرة أثناء الظهور في حجم خط أصغر من الأحرف الكبيرة الأصلية في النص).

 `p.small { 
  font-variant: small-caps; 
 } 
` 

#### معلومات اكثر:

*   [W3 مدارس - CSS الخط](https://www.w3schools.com/css/css_font.asp)
*   [MND - CSS الخط](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
*   [CSSFontStack](https://www.cssfontstack.com/)