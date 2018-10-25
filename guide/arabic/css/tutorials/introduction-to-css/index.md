---
title: Introduction to CSS
localeTitle: مقدمة في CSS
---
## مقدمة في CSS

### ما هو CSS؟

تصف Cascading Style Sheets (CSS) كيف يجب أن تظهر html على الصفحة.

قبل تطبيق مطوري CSS الأنماط باستخدام السمات أو علامات خاصة على كل عقدة من الصفحة. جعل هذا التكرار علامة متكررة وعرضة للأخطاء.

تسمح CSS لمعلمات بتوضيح كيفية ظهور كل جزء من محتوى المطابقة.

 `body { 
    font-size: 15px; 
 } 
 
 a { 
    color: rebeccapurple; 
    text-decoration: underline; 
 } 
` 

### استخدام المغلق

تسمح **أوراق الأنماط الخارجية** لصفحات كثيرة بمشاركة نفس الأنماط.

 `<link href="styles.css" rel="stylesheet" type="text/css"> 
` 

تطبق **أوراق الأنماط الداخلية** CSS على كل العلامات المطابقة في الصفحة.

 `<style> 
    h1 { 
        font-family: sans-serif; 
        margin-bottom: 1.5em; 
    } 
 </style> 
` 

تطبق **CSS مضمنة** الأنماط على علامة واحدة.

 `<img src="..." style="border: 1px solid red;" /> 
` 

#### معلومات اكثر:

*   [W3Schools](https://www.w3schools.com/css/css_intro.asp)
*   [CSS-Tricks Almanac](https://css-tricks.com/almanac/)
*   [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)