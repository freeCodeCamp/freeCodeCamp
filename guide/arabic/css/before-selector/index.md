---
title: Before Selector
localeTitle: قبل المختار
---
## قبل المختار

يمكن استخدام CSS **:: before** selector لإدراج أي شيء قبل المحتوى لعنصر أو عناصر. يسمح للمصممين بتنفيذ أي تصميم css قبل المحتوى في عنصر. يتم استخدامه من خلال إرفاق **:: قبل** العنصر الذي سيتم استخدامه عليه.

لنلق نظرة على بعض الأمثلة:

 `p::before { 
    content: ""; 
    border: solid 5px #ccc 
 } 
 
 span.comment::before{ 
  content: "Comment: "; 
  color: blue; 
 } 
` 

 `
<p> To infinity and beyond</p> 
 <p> I am buz lightyear, I come in peace.</p> 
 
 <span class="comment"> May the force be with you</span> 
 <br/> 
 <span> Do. Or do not. There is no try</span> 
` 

في المثال أعلاه ، سنقوم بترقيم حدود رمادية قبل كل عنصر فقرة في الصفحة ، ونحن نقوم أيضًا بإضافة كلمة "تعليق" باللون الأزرق قبل كل عنصر في الامتداد مع تعليق الفصل.

> يمكنك الاطلاع على هذا العرض التوضيحي هنا https://jsfiddle.net/398by400/

#### التعريف والاستخدام

`::before` واحد من محددات CSS pseudo-elements ، والتي تستخدم لتصميم أجزاء محددة من عنصر. في هذه الحالة ، يمكننا إدراج المحتوى قبل بعض عناصر HTML من CSS. على الرغم من أننا سنرى المحتوى في الصفحة ، إلا أنه ليس جزءًا من DOM ، ما يعني أنه لا يمكننا التلاعب به من Javascript. حيلة واحدة لحل هذا العائق: تمرير المحتوى باستخدام سمة بيانات واستخدام jQuery للتلاعب به. هذا مثال على الاستخدام:

 `   p::before { 
     content: "Hello "; 
   } 
` 

 `
<p>world!!</p> 
` 

هذا سيظهر `Hello world!!` في الصفحة.

لا يمكن فقط إدراج السلاسل أو الصور أو العدادات أو حتى أي شيء ("" ، مفيدة لـ clearfix) في attibute `content` ، ولكن **ليس HTML** . هناك عدد كبير من الأشياء الرائعة التي يمكن إجراؤها باستخدام `::before` `after` بطريقة إبداعية. يمكنك إلقاء نظرة على الرابط التالي إذا كنت تشعر بالفضول: [مجموعة كاملة من الأشياء المدهشة يمكن أن تقوم بها عناصر الزائفة](https://www.w3schools.com/css/css_pseudo_elements.asp)

#### وحيد القولون مقابل نقرا مزدوجا

هناك القليل من النقاش حول الطريقة الصحيحة لاستخدام العناصر الزائفة: النقطتين المفصليتين القديمتين ( `:before` ) ، المستخدمتين في مواصفات CSS 1 و 2 ، مقابل إعادة التوصية CSS3 ، النقطتين المزدوجتين ( `::before` ) ، بشكل أساسي إلى _"إنشاء التمييز بين الطبقات الزائفة والعناصر الزائفة "_ . ولكن لأسباب التوافق ، لا يزال يتم قبول القولون المفرد. يتحدث عن التوافق ، يدعم IE8 تدوين القولون المفرد فقط.

#### معلومات اكثر:

[W3Schools CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)

[CSS-Tricks :: after / :: before](https://css-tricks.com/almanac/selectors/a/after-and-before/)

[تحديد ومعالجة عناصر زائفة CSS مثل :: before و :: after jQuery](https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin)