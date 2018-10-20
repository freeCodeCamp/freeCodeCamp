---
title: CSS Classes
localeTitle: فئات CSS
---
## فئات CSS

تعتبر الفئات طريقة فعالة لتجميع عناصر HTML بحيث يمكنهم مشاركة نفس الأنماط. يمكن استخدام صفوف CSS (أوراق الأنماط المتتالية) لترتيب وتزيين عناصر صفحة الويب.

عند كتابة HTML ، يمكنك إضافة فئات إلى عنصر. ما عليك سوى إضافة `class="myclass"` السمات `class="myclass"` إلى العنصر. يمكن أن تحتوي العناصر المتعددة على نفس الفئة ، ويمكن لعنصر واحد أن يحتوي على فئات متعددة. يمكنك تعيين فئات متعددة لعنصر عن طريق إضافة كل أسماء الفئات المطلوبة المفصولة بمسافة إلى سمة `class` في HTML.

 `
<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1> 
 <p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p> 
` 

يمكنك بعد ذلك تصميم هذه العناصر باستخدام CSS. تتم الإشارة إلى الفئات بالنقطة (.) قبلها في CSS ، ولكن لا يجب وضع الفترات في HTML الخاص بك.

 `.super-man { 
  color: red; 
  background-color: blue; 
 } 
` 

يعطي هذا الرمز خلفية زرقاء ولون نص أحمر لكافة العناصر التي تحتوي على فئة `super-man` . [شاهد هذا المثال على CodePen](https://codepen.io/Tlandis/pen/RLvomV) .

يمكنك أيضًا الإعلان عن أكثر من فئة واحدة لعنصرك ، مثل:

 `
<div class="ironMan alfred"> 
 We're going to save you. 
 </div> 
` 

ثم في ملف css الخاص بك:

 `.ironMan{ 
 color:red; 
 } 
 
 .alfred{ 
 background-color: black; 
 } 
` 

**ملاحظة:** أسماء الصفوف عادةً ما تكون جميع الأحرف الصغيرة ، مع كل كلمة في اسم فئة متعدد الكلمات مفصولة بواصلات (على سبيل المثال "super-man").

يمكنك أيضًا الجمع بين الصفوف في نفس السطر:

 `.superMan .spiderMan { 
 color: red; 
 background-color: blue; 
 } 
` 

يمكنك رؤية نتيجة الكود أعلاه [هنا](https://codepen.io/Tlandis/pen/RLvomV) . تعرف على كيفية الجمع بين دروس css باستخدام المحددات [هنا](https://www.w3schools.com/css/css_combinators.asp) .

#### معلومات اكثر:

*   [CSS Class Selector ، مدارس w3](https://www.w3schools.com/cssref/sel_class.asp)
*   [دروس HTML ، مدارس w3](https://www.w3schools.com/html/html_classes.asp)
*   [CSS-الحيل](https://css-tricks.com/how-css-selectors-work/)
*   [كيفية التعليمة البرمجية في HTML5 و CSS3](http://howtocodeinhtml.com/chapter7.html)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)