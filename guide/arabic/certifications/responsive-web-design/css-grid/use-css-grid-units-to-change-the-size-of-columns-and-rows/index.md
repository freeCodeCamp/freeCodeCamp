---
title: Use CSS Grid Units to Change the Size of Columns and Rows
localeTitle: استخدم CSS الشبكة وحدات لتغيير حجم الأعمدة والصفوف
---
## استخدم وحدات CSS الشبكة لتغيير حجم الأعمدة والصفوف

يتطلب هذا التحدي تعيين عرض أعمدة الحاوية إلى تلك المحددة في وصف التحدي.

### ملحوظة

قم بتغيير الخاصية `grid-template-columns` .

### حل

نظرًا لأن التحدي يتطلب منك تعيين العرض على `1fr` و `100px` و `2fr` ، `2fr` بتغيير خاصية `css grid-template-columns` الخاصة بـ `.container` إلى:

 `grid-template-columns: 1fr 100px 2fr; 
` 

#### المزيد من المعلومات

*   [مقدمة إلى الوحدة fr CSS - حيل CSS](https://css-tricks.com/introduction-fr-css-unit/)