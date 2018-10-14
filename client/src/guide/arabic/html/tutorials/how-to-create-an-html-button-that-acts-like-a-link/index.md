---
title: How to Create an HTML Button That Acts Like a Link
localeTitle: كيفية إنشاء زر HTML التي تعمل مثل الارتباط
---
## كيفية إنشاء زر HTML التي تعمل مثل الارتباط

في بعض الأحيان قد ترغب في استخدام زر لربط صفحة أخرى أو موقع ويب بدلاً من إرسال نموذج أو شيء من هذا القبيل. هذا أمر بسيط إلى حد ما ويمكن تحقيقه بعدة طرق.

إحدى الطرق هي ببساطة لف علامة `<button>` في علامة `<a>` :

 `
<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> 
` 

يؤدي هذا إلى تحويل الزر بالكامل إلى رابط.

الخيار الثاني هو إنشاء الرابط الخاص بك كما تفعل عادةً مع العلامة `<a>` ثم إعداده عبر CSS:

 `
<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a> 
` 

بمجرد إنشاء الرابط ، يمكنك استخدام CSS لجعله يبدو وكأنه زر. على سبيل المثال ، يمكنك إضافة حد ولون خلفية وبعض الأنماط عندما يحوم المستخدم في الرابط ...

هناك طريقة أخرى لإضافة زر وهي التفاف `input` داخل علامات `form` . حدد عنوان URL الهدف المطلوب في سمة إجراء النموذج.

 `
<form action="http://google.com"> 
    <input type="submit" value="Go to Google" /> 
 </form> 
` 

#### معلومات اكثر:

*   [دليل FreeCodeCamp - أزرار التصميم](https://guide.freecodecamp.org/css/css-buttons/)
*   [كيف يمكنك إنشاء زر HTML يعمل كأنه رابط؟](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)