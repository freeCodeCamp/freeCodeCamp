---
title: Structure of CSS
localeTitle: هيكل CSS
---
## بنية CSS

تتبع قاعدة CSS هذا الهيكل الأساسي:

 `selector { 
  property: value; 
  property: value; 
 } 
` 

كل شيء داخل الأقواس المتعرجة يتناسب مع كل ما يختاره [المختار](https://guide.freecodecamp.org/css/selectors) . يوجد داخل قواعد CSS مجموعة من أزواج [الخصائص](https://guide.freecodecamp.org/css/properties) / القيمة.

يمكن أن يكون لديك محددات مختلفة مفصولة بغيبوبة:

 `selector1, 
 selector2 { 
  property: value; 
 } 
` 

يمكن وضع قواعد CSS متعددة في ملف CSS واحد - إليك مثال على ذلك:

 `h1 { 
  color: red; 
 } 
 
 div { 
  text-align: center; 
  color: blue; 
 } 
 
 img { 
  margin-left: 2px; 
  margin-top: 100px; 
 } 
` 

#### معلومات اكثر:

*   [CSS البناء على قانون الويب](https://codetheweb.blog/2017/11/11/css-syntax/)
*   المزيد عن [محددات CSS](https://guide.freecodecamp.org/css/selectors)
*   المزيد على [خصائص CSS](https://guide.freecodecamp.org/css/properties)