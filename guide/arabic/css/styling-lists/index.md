---
title: Styling Lists
localeTitle: قوائم التصميم
---
## قوائم التصميم

### HTML قوائم Recap

هناك نوعان رئيسيان من القوائم في HTML - **مرتبة** وغير **مرتبة** .

في القوائم **المرتبة** ( `<ol></ol>` ) ، يكون ترتيب عناصر القائمة مهمًا. قد تظهر العناصر بالترتيب حسب الرقم ، أو الأرقام الرومانية ، أو الأرقام ألفا ، أو أي نوع آخر من العلامات. العلامة الافتراضية للقوائم المرتبة هي رقم (أو `decimal` ):

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true "قائمة مرتبة")

في قوائم **غير مرتبة** ( `<ul></ul>` ) ، لا يهم ترتيب عناصر القائمة. تظهر العناصر بتنسيق التعداد النقطي. علامة الافتراضي للقوائم غير مرتبة هي النقطة مستديرة أو `disc` .

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true "قائمة غير مرتبة")

يتم إنشاء كل عنصر قائمة ضمن قائمة مرتبة أو غير مرتبة بالعلامة `<li></li>` .

### أنماط قائمة محددة

هناك ثلاث خصائص شائعة خاصة بقوائم التصميم: `list-style-type` `list-style-position` `list-style-image` . هناك أيضا خاصية الاختزال التي تشمل كل ثلاثة.

#### `list-style-type`

يمكن وضع العلامات (أو النقاط) التي تظهر في قوائم مرتبة وغير مرتبة بالعديد من الطرق. خاصية CSS لتصميم نوع العلامة هي نوع `list-style-type` . القيمة الافتراضية `list-style-type` مرتبة هي `decimal` ، بينما يكون الإعداد الافتراضي لقائمة غير مرتبة هو `disc` .

مثال القائمة المطلوبة:

>  `/* css */ 
>  ol { 
>   list-style-type: upper-roman; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true "النمط العلوي من القائمة النمط الروماني")

مثال قائمة غير مرتبة:

>  `/* css */ 
>  ul { 
>   list-style-type: square; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true "مربع من نوع نمط القائمة")

لا يوجد مثال للعلامات:

>  `/* css */ 
>  ul { 
>   list-style-type: none; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true "النمط من نوع القائمة لا شيء")

تتضمن القيم المقبولة لخاصية `list-style-type` ما يلي:

_غير مرتبة:_

*   قرص ( _افتراضي_ )
*   دائرة
*   ميدان

_أمر:_

*   عشري ( _افتراضي_ )
*   العشري الرائدة الصفر
*   المنخفض الرومانية
*   العلوي الرومانية
*   المنخفض اليونانية
*   أقل-اللاتينية
*   العلوي اللاتينية
*   الأرميني
*   الجورجية
*   انخفاض ألفا
*   العلوي ألفا

_آخر:_

*   لا شيء

ملاحظة: يمكن استخدام جميع قيم الخصائص المذكورة أعلاه لتصميم كل من القوائم المرتبة وغير المرتبة (مثل: قائمة مرتبة بها علامات قائمة `square` ).

#### `list-style-position`

يتحكم في `list-style-position` ما إذا كانت علامة القائمة تظهر داخل أو خارج كل عنصر عنصر قائمة ( `<li></li>` ). تقبل الخاصية قيمتين ، `outside` (افتراضي) أو `inside` .

ضع العلامة `outside` عنصر عنصر القائمة ، وستتم محاذاة جميع الأسطر والنصوص الفرعية لكل عنصر قائمة رأسيًا:

>  `/* css */ 
>  ul { 
>   list-style-position: outside; /* default */ 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true "موقف نمط القائمة خارج")

ضع العلامة `inside` ، وسيتم وضع مسافة بادئة للسطر الأول من كل عنصر قائمة لإفساح المجال للعلامة. سيتم محاذاة أي خطوط فرعية من نفس عنصر القائمة مع العلامة بدلاً من السطر الأول:

>  `/* css */ 
>  ul { 
>   list-style-position: inside; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true "موقف نمط القائمة داخل")

#### `list-style-image`

تقبل خاصية `list-style-image` عنوان url للصورة بدلاً من علامة القائمة. القيمة الافتراضية لهذه الخاصية هي `none` .

>  `/* css */ 
>  ul { 
>   list-style-image: url(https://url-to-image); 
>  } 
> ` 

#### `list-style` الاختزال

`list-style` هو خاصية اختزال لخصائص النمط الثلاثة المذكورة أعلاه. إن ترتيب قيم `list-style` يقبل هو `list-style-type` `list-style-position` `list-style-image` . إذا تم حذف أي قيمة ، فسيتم استخدام القيمة الافتراضية لهذه الخاصية.

> مثال:
> 
>  `/* css */ 
>  ul { 
>   list-style: circle inside none; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true "الاختزال على غرار القائمة")

#### مزيد من التصميم المحدد قائمة

تقبل علامات القوائم المرتبة أيضًا السمات التي تتحكم في التدفق أو العد أو قيم محدد لعناصر القائمة الخاصة بها. وتشمل هذه سمات `start` ، `reversed` ، `value` . راجع موارد MDN المدرجة أدناه لمزيد من التفاصيل.

### التصميم العام

يمكن تصميم محتوى القائمة تمامًا مثل عناصر `p` أو `div` الأخرى. `color` ، `font-family` ، `margin` ، `padding` ، أو `border` ليست سوى أمثلة قليلة من الخصائص التي يمكن أن تضاف إلى أي من `ul` ، `ol` ، أو `li` العناصر.

لاحظ أن أي أنماط مضافة إلى عنصر `ul` أو `ol` ستؤثر على القائمة بأكملها. الأنماط المضافة مباشرة إلى عناصر `li` ستؤثر على عناصر القائمة الفردية. في المثال أدناه ، تم تصميم خصائص الحدود ولون الخلفية بشكل مختلف بين عناصر القائمة والقائمة عنصر:

>  `/* css */ 
>  ul { 
>   list-style-type: circle; 
>   border: 2px solid blue; 
>   background-color: lightblue; 
>  } 
>  li { 
>   margin: 5px; 
>   background-color: lightyellow; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-styles.png?raw=true "النمط العام على غرار القائمة")

#### قائمة التباعد

قد تلاحظ تباعد إضافي أمام عناصر `list-style-type` عند تعيين `list-style-type` على `none` . سيؤدي تعيين `padding` إلى `0` (أو أي فراغ مفضل) في عنصر القائمة إلى إلغاء هذا الحشو الافتراضي.

>  `/* css */ 
>  ul { 
>   list-style: none; 
>   padding: 0; 
>  } 
>  li { 
>   padding: 5px 10px; 
>   background-color: #EEEEEE; 
>   border: 1px solid #DDDDDD; 
>  } 
> ` 
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true "النمط العام على غرار القائمة")

* * *

#### مصادر:

تمت الإشارة إليها الارتباطات أدناه في ترجمة المعلومات الموجودة في هذه المقالة. يرجى زيارتهم لمزيد من التفاصيل حول هذا الموضوع.

#### معلومات اكثر:

[MDN - قوائم التصميم](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - قوائم CSS](https://www.w3schools.com/css/css_list.asp)

[CSS الخدع - نمط القائمة](https://css-tricks.com/almanac/properties/l/list-style/)