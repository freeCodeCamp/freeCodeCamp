---
title: Padding
localeTitle: حشوة
---
# حشوة

تحدد الخاصية `padding` CSS مساحة الحشو على الجوانب الأربعة للعنصر. يمكن استخدام هذه الخاصية لإنشاء مساحة حول المحتوى (داخل الحدود). إنه اختصار لضبط كافة paddings الفردية في وقت واحد: `padding-top` ، `padding-right` ، `padding-bottom` ، و `padding-left` . يتم تعريف القيم في اتجاه عقارب الساعة.

يتم تعيين قيم الحشو باستخدام الأطوال أو النسب المئوية أو `inherit` الكلمة الرئيسية ، ولا يمكن قبول القيم السالبة. القيمة الأولية ، أو الافتراضية ، لجميع خصائص الحشو هي 0. بينما يمكنك استخدام `inherit` الكلمة الأساسية ولكن لا يمكن استخدامها مع قيمة الطول.

## بناء الجملة

 `.element { 
    padding: [padding-top] || [padding-right] || [padding-bottom] || [padding-left]; 
 } 
` 

يمكن تحديد هذه الخاصية باستخدام قيم واحدة أو اثنتين أو ثلاثة أو أربعة.

*   عند تحديد قيمة واحدة ، يتم تطبيق نفس المساحة على كافة الجوانب الأربعة.
*   عند تحديد قيمتين ، تنطبق الحشو الأولى على الأعلى والأسفل ، والثانية إلى اليسار واليمين.
*   عند تحديد ثلاث قيم ، تسري الحشو الأولى على الأعلى ، والثانية على اليسار واليمين ، والثالثة إلى الأسفل.
*   عند تحديد أربع قيم ، يتم تطبيق paddings على الأعلى ، اليمين ، الأسفل ، واليسار في ذلك الترتيب (في اتجاه عقارب الساعة).

 `/* em refers to the current font size of an element */ 
 /* Apply to all four sides */ 
 padding: 1em; 
 
 /* top and bottom | left and right */ 
 padding: 5% 10%; 
 
 /* top | left and right | bottom */ 
 padding: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 padding: 5px 1em 0 1em; 
` 

## أين في نموذج مربع

تحدد خاصية المساحة المحفوظة في CSS الجزء الأعمق من نموذج الصندوق ، مما يؤدي إلى إنشاء مساحة حول محتوى العنصر ، داخل أي هامش و / أو حدود محددة.

![نموذج صندوق المغلق](https://www.w3.org/TR/css3-box/box.png)

## دعم المتصفح

مدعوم بشكل فعال في جميع المتصفحات (منذ IE6 + وفايرفوكس 2+ و Chrome 1+ وغيرها)

### معلومات اكثر

*   [W3C مسودة العمل](https://www.w3.org/TR/css3-box/#the-padding)
*   [W3C CSS Level 2](https://www.w3.org/TR/CSS2/box.html#propdef-padding)
*   [W3C CSS Level 1](https://www.w3.org/TR/CSS1/#padding)
*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
*   [CSS الخدع](https://css-tricks.com/almanac/properties/p/padding/)