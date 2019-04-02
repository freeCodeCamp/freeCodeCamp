---
title: Box Model
localeTitle: نموذج الصندوق
---
## نموذج الصندوق

يعد فهم نموذج صندوق CSS أمرًا أساسيًا حتى تتمكن من تخطيط صفحة الويب بشكل صحيح.

عندما يعرض المتصفح (يرسم) صفحة ويب ، يتم رسم كل عنصر ، على سبيل المثال ، قطعة من النص أو صورة ، كمربع مستطيل يتبع قواعد نموذج صندوق المغلق.

في وسط المربع هو المحتوى نفسه ، والذي يأخذ ارتفاع وعرض معينين. تُعرف هذه المنطقة باسم " **منطقة المحتوى"** . يمكن تحديد حجم منطقة المحتوى تلقائيًا ، أو يمكنك تعيين حجم الارتفاع والعرض بشكل صريح. (انظر الملاحظة أدناه فيما يتعلق `box-sizing` )

![صورة منطقة المحتوى](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/content%20area.jpg)

حول منطقة المحتوى ، هذه منطقة تعرف باسم **منطقة Padding** . يمكن أن يكون حجم الحشوة هو نفسه في كل مكان (مع وضع `padding` ) ، أو يمكنك ضبطه بشكل فردي على `padding-top` والسفلية واليمنى واليسرى (مع `padding-top` ، `padding-right` ، `padding-bottom` `padding-left` ) .

![منطقة الحشو صورة](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/padding%20area.jpg)

بعد ذلك ، هناك **منطقة الحدود** . هذا يخلق الحدود حول العنصر وحشوها. يمكنك تعيين سمك ( `border-width` ) ، ولون (لون `border-color` ) ، ونمط (نمط `border-style` ) للحدود. تتضمن خيارات النمط `none` (بلا ​​حدود) ، أو `solid` ، أو `dashed` ، أو `dotted` ، أو غيرها. بالإضافة إلى ذلك ، يمكنك تعيين الحدود على الجوانب الأربعة على حدة ؛ على سبيل المثال ، الحد العلوي مع `border-top-width` ، `border-top-color` `border-top-style` لسمك ولون ونمط. (انظر الملاحظة أدناه فيما يتعلق `box-sizing` .)

![صورة منطقة الحدود](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/border%20area.jpg)

أخيراً ، هناك **منطقة الهامش** . يؤدي هذا إلى إنشاء مساحة واضحة حول العنصر والحشو والحدود. مرة أخرى يمكنك بشكل فردي تعيين الهوامش العلوية والسفلية واليسرى واليسرى (مع `margin-top` `margin-right` `margin-bottom` `margin-left` ). تحت ظروف معينة يحدث بهامش الهوامش وقد تتم مشاركة الهوامش بين العناصر المتجاورة.

![صورة منطقة الهامش](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/margin%20area2.jpg)

**`box-sizing` الملكية** الافتراضي لهذه الخاصية هو `content-box` . إذا كنت تستخدم الافتراضي ، فإن نموذج الصندوق سيسمح للمؤلف بتحديد حجم منطقة المحتوى. ومع ذلك ، من الممكن استخدام هذه بدلاً من تحديد حجم منطقة الحدود. يتم ذلك عن طريق تغيير الخاصية `box-sizing` إلى `border-box` . هذا يمكن في بعض الأحيان جعل تخطيطات أسهل. يمكنك تعيين خاصية تغيير `box-sizing` لكل عنصر حسب الرغبة.

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)