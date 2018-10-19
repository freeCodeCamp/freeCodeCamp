---
title: CSS Display
localeTitle: عرض CSS
---
## عرض CSS

تحدد خاصية العرض نوع المربع المستخدم لعنصر HTML. لديها 20 قيمة ممكنة للكلمات الرئيسية. هذه هي شائعة الاستخدام:

 `    .none             {display: none} 
    .block            {display: block} 
    .inline-block     {display: inline-block} 
    .inline           {display: inline} 
    .flex             {display: flex} 
    .inline-flex      {display: inline-flex} 
    .inline-table     {display: inline-table} 
    .table            {display: table} 
    .inherit          {display: inherit} 
    .initial          {display: initial} 
` 

`display:none` يمكن أن تكون `display:none` خاصية مفيدة في كثير من الأحيان عند إجراء استجابة لموقع الويب. على سبيل المثال ، قد ترغب في إخفاء عنصر في الصفحة حيث ينكمش حجم الشاشة لتعويض نقص المساحة. `display: none` لن يؤدي إلى إخفاء العنصر فقط ، ولكن جميع العناصر الأخرى في الصفحة ستتصرف كما لو كان هذا العنصر غير موجود. هذا هو الفرق الأكبر بين هذه الخاصية `visibility: hidden` الخاصية `visibility: hidden` ، التي تخفي العنصر ولكنها تحتفظ بجميع عناصر الصفحة الأخرى في نفس المكان كما تظهر إذا كان العنصر المخفي مرئيًا.

يتم تجميع قيم الكلمات الرئيسية هذه في ست فئات:

*   `<display-inside>`
*   `<display-outside>`
*   `<display-listitem>`
*   `<display-box>`
*   `<display-internal>`
*   `<display-legacy>`

### معلومات اكثر:

*   [MDN - العرض](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [caniuse - دعم المستعرض](http://caniuse.com/#search=display)
*   [CSS-Tricks- A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)