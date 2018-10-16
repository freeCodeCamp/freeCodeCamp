---
title: Flex Basis Property
localeTitle: خصائص Flex Basis
---
# فليكس أساس

تحدد خاصية `flex-basis` حجم `flex-item` طول المحور الرئيسي للحاوية المرنة. يكون المحور الرئيسي أفقيًا إذا تم ضبط `flex-direction` على `row` وسوف يكون عموديًا إذا تم تعيين خاصية `flex-direction` على `column` .

## بناء الجملة

 `flex-basis: auto | content | <width> | <height>; 
` 

## أساس المرن: السيارات

`flex-basis: auto` بالبحث عن الحجم الرئيسي للعنصر ويحدد الحجم. على سبيل المثال ، في حاوية مرنة أفقية ، سوف تبحث `auto` عن `width` `height` إذا كان محور الحاوية رأسياً.

إذا لم يتم تحديد أي حجم ، فسيتم الرجوع `auto` إلى `content` .

## أساس المرن: المحتوى

`flex-basis: content` يحل `flex-basis: content` الحجم استنادًا إلى محتوى العنصر ، ما لم يتم ضبط `width` أو `height` خلال `box-sizing` العادي.

في كلتا الحالتين حيث يكون `flex-basis` إما `auto` أو `content` ، إذا تم تحديد الحجم الرئيسي ، فإن هذا الحجم سيأخذ الأولوية.

## المرن أساس:

هذا هو مجرد تحديد `width` أو `height` ، ولكن فقط أكثر مرونة. `flex-basis: 20em;` سيحدد الحجم الأولي للعنصر إلى `20em` . وسيستند حجمه النهائي إلى المساحة المتاحة ، `flex-grow` متعدد `flex-shrink` ، `flex-shrink` متعدد الأشكال.

توحي المواصفات استخدام خاصية الاختزال `flex` . هذا يساعد على كتابة `flex-basis` جنبا إلى جنب مع خصائص `flex-grow` `flex-shrink` .

## أمثلة

توجد هنا صفوف من حاويات مرنة فردية وعناصر مرنة فردية توضح كيف أن `flex-basis` يؤثر على `box-sizing` .

![تأثير أساس المرن على المحور الأفقي](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-horizontal.png)

عندما يكون `flex-direction` هو `column` ، فإن نفس `flex-basis` تتحكم في خاصية `height` . مثال أدناه ،

![مثال على التحكم في ارتفاع الارتفاع في حاوية رأسية](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-vertical.png)

#### معلومات اكثر:

مراجع إضافية على الصفحات التالية:

*   [مستوى](https://drafts.csswg.org/css-flexbox-1/) مواصفات CSS [1](https://drafts.csswg.org/css-flexbox-1/)
*   صفحة شبكة مطوري موزيلا على [أساس مرن](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis#content)