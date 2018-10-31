---
title: Transition
localeTitle: انتقال
---
## انتقال

و `transition` الملكية يسمح لك بتغيير قيمة العقارات بشكل سلس (من قيمة واحدة إلى أخرى)، خلال مدة معينة. \`\` \`المغلق الانتقال: كل 300ms.

 `### Transition on Several Property Values 
 
 You can change multiples property values with transition property. 
` 

المغلق الانتقال: عرض 300ms ، ارتفاع 2s ؛

 `### Specify the Speed Curve of the Transition 
 
 You can specify a speed curve on an element in transition property. 
` 

المغلق الانتقال: ارتفاع 2s خطي؛

 ``or the property `transition-timing-function` 
`` 

المغلق الانتقال-- توقيت وظيفة: خطي؛ \`\` \`

### قيم مختلفة من `transition-timing-function`

`ease` - تحدد تأثير الانتقال ببداية بطيئة ، ثم سريعة ، ثم تنتهي ببطء (هذا هو الإعداد الافتراضي) `linear` - يحدد تأثير انتقال بنفس السرعة من البداية إلى النهاية `ease-in` - تحدد تأثير الانتقال ببداية بطيئة `ease-out` - يحدد تأثير انتقال بنهاية بطيئة `ease-in-out` - تحدد تأثير التحويل مع بداية ونهاية بطيئين `cubic-bezier(n,n,n,n)` - يتيح لك تحديد القيم الخاصة بك في وظيفة بيزي مكعب

#### معلومات اكثر:

*   وثائق [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
*   مرجع [الارتفاعات](http://easings.net/en) : [Easings](http://easings.net/en)