---
title: Li Tag
localeTitle: لى العلامة
---
## لى العلامة

تحدد العلامة `<li>` عنصر قائمة في قائمة. يمكن استخدام العلامة `<li>` مع قوائم غير مرتبة ( `<ul>` ) ، وقوائم مرتبة ( `<ol>` ) ، والقوائم ( `<menu>` ).

لتحديد عنصر قائمة ، قم بلف العناصر المطلوبة في `<li>` العلامة. يجب تضمين عناصر `<li>` داخل عنصر أصل يمثل قائمة.

### مثال

 `
<body> 
  <ul> 
    <li> 
      <p>I'm a list item</p> 
    </li> 
    <li> 
      <p>I'm a list item too</p> 
    </li> 
    <li> 
      <p>Me three/p> 
    </li> 
  </ul> 
 </body> 
` 

في قائمة مرتبة ، يظهر `<li>` كبند ذو نقطة نقطية.

*   البند الأول
*   البند الثاني
*   البند الثالث

في قائمة غير مرتبة ، يظهر `<li>` كعنصر مرقّم.

1.  البند الأول
2.  البند الثاني
3.  البند الثالث

يمكن تخصيص عداد العرض الرقمي هذا باستخدام خاصية CSS من _نوع نمط القائمة_ .

أمثلة:

 `
<!-- In a simple unordered list --> 
 <ul> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ul> 
 
 <!-- In a simple ordered list --> 
 <ol> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ol> 
 
 <!-- In a menu list --> 
 <menu> 
  <li>Menu item one</li> 
  <li>Menu item two</li> 
  <li>Menu item three</li> 
 </menu> 
` 

### سمات

يحتوي العنصر `<li>` على العناصر التالية:

#### نوع

تحدد السمة `type` الترقيم الذي سيتم استخدامه في القائمة. تُستخدم القيم التالية لتحديد نمط الترقيم الذي سيتم استخدامه:

*   `1` : الأرقام
*   `a` : أحرف صغيرة
*   `A` : أحرف كبيرة
*   `i` : الأرقام الصغيرة
*   `I` : الأرقام الكبيرة

#### مثال

 `
<body> 
  <ol type="I"> 
    <li>list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
` 

سوف ينتج HTMl أعلاه:

1.  قائمة الاغراض
2.  قائمة الاغراض
3.  قائمة الاغراض

#### القيمة

تحدد السمة `value` الترتيب الرقمي لـ `<li>` الحالي. هذه السمة تقبل فقط قيمة رقمية ويمكن استخدامها فقط مع قائمة مرتبة. سيتم ترتيب أي عناصر قائمة تتبع عدديًا استنادًا إلى الإدخال الرقمي لسمة `value` .

#### مثال

 `
<body> 
  <ol> 
    <li value="4">list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
` 

سوف ينتج HTML أعلاه:

4.  قائمة الاغراض
5.  قائمة الاغراض
6.  قائمة الاغراض

### تداخل قائمة أخرى كعنصر

إلى جانب إنشاء عناصر فردية ، يمكنك أيضًا استخدام علامات `<li>` لإنشاء قائمة متداخلة ، مرتبة أو غير مرتبة. للقيام بذلك ، تقوم بتعشيق `<ol>` أو `<ul>` _داخل_ علامة `<li>` .

هذه قائمة غير مرتبة بها قائمة متداخلة مرتبة.

*   البند الأول
*   البند الثاني

1.  البند الفرعي الأول
2.  البند الفرعي الثاني

*   البند الثالث

وهنا قائمة مرتبة مع قائمة متداخلة وغير مرتبة.

1.  البند الأول
2.  البند الثاني

*   البند الفرعي الأول
*   البند الفرعي الثاني

1.  البند الثالث

 `
<!-- An unordered list with a nested, ordered list. --> 
 <ul> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ul> 
 
 <!-- An ordered list with a nested, unordered list. --> 
 <ol> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ul> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ul> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ol> 
` 

#### معلومات اكثر:

*   [عنصر HTML <li>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
*   [HTML <li> tag: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
*   [خاصية نمط قائمة CSS: CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)