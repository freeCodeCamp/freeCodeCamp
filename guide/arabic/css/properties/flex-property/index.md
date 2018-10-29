---
title: Flex Property
localeTitle: فليكس الملكية
---
## فليكس الملكية

الخاصية `flex` عبارة عن اختصار لتحديد حجم عنصر مرن. `flex-grow` `flex-shrink` `flex-basis` في هذه الخاصية المختزلة.

**هذه الخاصية ليس لها أي تأثير إذا كان العنصر ليس عنصرًا `flex-item`** . عنصر Flex هو عنصر يمثل طفلاً مباشراً لأحد الوالدين في حاوية مع خاصية العرض مثل `flex` أو `inline-flex` .

## بناء الجملة

الاختلافات الممكنة في بناء الجملة المذكورة أدناه. `flex-grow` `flex-shrink` يأخذ عدد صحيح كقيمة. `flex-basis` يأخذ وحدات حجم منتظم مثل px ، em ، rem… الخ.

 `flex: <flex-grow> <flex-shrink> <flex-basis>; 
 flex: <flex-basis>; 
 flex: <flex-grow>; 
 flex: <flex-grow> <flex-basis>; 
 flex: <flex-grow> <flex-shrink>; 
` 

تحدد `flex-basis` حجم العنصر على طول المحور الرئيسي. داخل الحاوية ، يتم تعريف المحور الرئيسي `flex-direction` . المحور الرئيسي هو الأفقي عندما يكون `flex-direction` هو `row` . عمودي عندما يكون `flex-direction` هو `column` .

`flex-basis: 20px` لتحديد العرض الأولي للعنصر إلى 20 `20px` إذا كان `flex-direction` هو `row` . نفس `flex-basis` ينطبق على ارتفاع إذا كان `fle-direction` هو `column` .

`flex: 20px` تقصد تلقائيًا `flex-basis: 20px` ، نظرًا لأن الخاصية المختزلة لها `flex-basis` فقط كخاصية يمكن أن تأخذ قيمة مع الوحدة.

`flex: 2` تحدد `flex-grow: 2` ، وينمو العنصر مرتين أطول / أطول من العناصر الأخرى مع `flex-grow: 1` .

`flex: 1 2` تحدد `flex-grow: 1` و `flex-shrink: 2` . ينمو العنصر ليأخذ مساحة فارغة بالتناسب مع العناصر الأخرى ذات `flex-grow: 1` ولكن يتقلص ضعفه عندما يقارن العناصر الأخرى مع `flex-shrink: 1` عند الضغط على الفضاء.

### معلومات اكثر

*   مرجع الخاصية `flex` على [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)