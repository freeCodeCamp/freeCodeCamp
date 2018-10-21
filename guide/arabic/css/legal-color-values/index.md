---
title: Legal Color Values
localeTitle: قيم اللون القانونية
---
## قيم اللون القانونية

يمكن تحديد الألوان في CSS بالتنسيقات التالية:

*   [عشري](#hexadecimal-colors)
*   [RGB](#rgb-colors)
*   [RGBA](#rgba-colors)
*   [HSL](#hsl-colors)
*   [HSLA](#hsla-colors)
*   [أسماء اللون المعرفة مسبقا](#predefined-color-names)

### ألوان سداسي عشري

#### دعم المتصفح

جميع المتصفحات الرئيسية تدعم قيم hexadecimalcolor.

#### شكل

يتم تحديد قيمة سداسية عشرية كـ **#RRGGBB** ، حيث تحدد الأعداد الصحيحة من RR (أحمر) و GG (أخضر) و BB (أزرق) سداسي عشري مكونات اللون. يجب أن تكون جميع القيم بين 00 و FF. كما يوحي الاسم ، يكون الترميز في الأساس 16.

#### مثال

هنا ألوان عرافة مختلفة. ابحث عن المثال المباشر على https://jsfiddle.net/qg9revp4/2/.

 `#divRed{ 
  color: #ff0000; /* red */ 
 } 
 
 #divGreen{ 
  color: #00ff00; /* green */ 
 } 
 
 #divBlue{ 
  color: #0000ff; /* blue */ 
 } 
 
 #divWhite{ 
  color: #ffffff; /* white */ 
  background: #000000; /* black background, so that the text is visible */ 
 } 
` 

### ألوان RGB

#### دعم المتصفح

جميع المتصفحات الرئيسية تدعم قيم RGB.

#### شكل

يتم تحديد قيمة RGB كـ **rgb (أحمر ، أخضر ، أزرق)** . يحدد كل معلمة (أحمر وأخضر وأزرق) شدة اللون ويمكن أن يكون عددًا صحيحًا بين 0 و 255.

#### مثال

هنا ألوان RGB مختلفة. ابحث عن المثال الحي على https://jsfiddle.net/vspepeth/1/.

 `#divRed{ 
  color: rgb(255, 0, 0); /* red */ 
 } 
 
 #divGreen{ 
  color: rgb(0, 255, 0); /* green */ 
 } 
 
 #divBlue{ 
  color: rgb(0, 0, 255); /* blue */ 
 } 
 
 #divWhite{ 
  color: rgb(255, 255, 255); /* white */ 
  background: rgb(0, 0, 0); /* black background, so that the text is visible */ 
 } 
` 

### ألوان RGBA

#### دعم المتصفح

يتم دعم قيم ألوان RGBA في IE9 + و Firefox 3+ و Chrome و Safari و Opera 10+.

#### شكل

يتم تحديد قيمة RGBA كـ **rgb (أحمر ، أخضر ، أزرق ، ألفا)** . اعتبرها امتدادًا لتنسيق RGB ، مع قناة ألفا. المعلمة alpha هي رقم بين 0.0 (شفاف بالكامل) و 1.0 (معتمة بالكامل). تحدد المعلمات الأخرى (الأحمر والأخضر والأزرق) كثافة الألوان ويمكن أن تكون عددًا صحيحًا بين 0 و 255.

#### مثال

هنا مختلف ألوان RGBA. ابحث عن المثال المباشر على https://jsfiddle.net/hq0ngwg2/1/.

 `#divRed{ 
  color: rgba(255, 0, 0, 0.3); /* red with opacity */ 
 } 
 
 #divGreen{ 
  color: rgba(0, 255, 0, 0.7); /* green with opacity */ 
 } 
 
 #divBlue{ 
  color: rgba(0, 0, 255, 0.5); /* blue with opacity */ 
 } 
 
 #divWhite{ 
  color: rgba(255, 255, 255, 0.6); /* white with opacity */ 
  background: rgba(0, 0, 0, 0.8); /* black background with opacity */ 
 } 
` 

### ألوان HSL

#### دعم المتصفح

يتم دعم قيم ألوان HSL في IE9 + و Firefox و Chrome و Safari و Opera 10+.

#### شكل

HSL تعني الصباغة والتشبع والخفة. يتم تحديده كـ **hsl (تدرج ، تشبع ، خفة)** .

*   **هيو** : هي درجة على عجلة الألوان (من 0 إلى 360). _0_ (أو _360_ ) أحمر و _120_ أخضر و _240_ أزرق.
    
*   **التشبع** : إنها قيمة مئوية. _0٪_ يعني الظل الرمادي و _100٪_ هو اللون الكامل.
    
*   **الخفة** : هي ، أيضًا ، قيمة نسبة. _0٪_ أسود و _100٪_ أبيض.
    

#### مثال

فيما يلي جداول من [W3.org](https://www.w3.org/TR/css3-color/#hsl-color) . كل جدول يمثل لونا واحدا. تم اختيار اثنا عشر لونًا متباعدة بالتساوي (أي بفواصل 30 درجة) من دائرة الألوان. يمثل المحور X لكل جدول التشبع (100٪ ، 75٪ ، 50٪ ، 25٪ ، 0٪). المحور Y يمثل الخفة. 50 ٪ هي "طبيعية".

![جدول HSL](https://image.ibb.co/ngq686/hsl.png)

ابحث عن المثال المباشر على https://jsfiddle.net/g10zpL28/1/.

 `#div1 { 
  background-color: hsl(240, 100%, 50%); /* blue */ 
 } 
 #div2 { 
  background-color: hsl(195, 53%, 79%); /* light blue */ 
 } 
 #div3 { 
  background-color: hsl(240, 100%, 25%); /* dark blue */ 
 } 
 #div4 { 
  background-color: hsl(187, 75%, 86%); /* pastel blue */ 
 } 
` 

### ألوان HSLA

#### دعم المتصفح

يتم دعم قيم ألوان HSLA في IE9 + و Firefox 3+ و Chrome و Safari و Opera 10+.

#### شكل

HSLA تعني التدرج والتشبع والخفة وقناة ألفا. تم تحديده كـ **hsla (تدرج ، تشبع ، خفة ، ألفا)** . تحدد قناة ألفا عتامة اللون.

*   **هيو** : هي درجة على عجلة الألوان (من 0 إلى 360). _0_ (أو _360_ ) أحمر و _120_ أخضر و _240_ أزرق.
    
*   **التشبع** : إنها قيمة مئوية. _0٪_ يعني الظل الرمادي و _100٪_ هو اللون الكامل.
    
*   **الخفة** : هي ، أيضًا ، قيمة نسبة. _0٪_ أسود و _100٪_ أبيض.
    
*   **قناة ألفا** : وهي عبارة عن رقم betwenn 0.0 (شفاف تمامًا) و 1.0 (كامد تمامًا).
    

#### مثال

فيما يلي أمثلة على ألوان HSLA. انظر لهم يعيشون في https://jsfiddle.net/2Lxscgfy/1/.

 `#div1 { 
  background-color: hsla(240, 100%, 50%, 0.5); /* blue with transparency */ 
 } 
 #div2 { 
  background-color: hsla(195, 53%, 79%, 0.8); /* light blue with transparency */ 
 } 
 #div3 { 
  background-color: hsla(240, 100%, 25%, 0.3); /* dark blue with transparency */ 
 } 
 #div4 { 
  background-color: hsla(187, 75%, 86%, 1.0); /* pastel blue with transparency */ 
 } 
` 

### أسماء اللون المعرفة مسبقا

#### دعم المتصفح

يتم تعريف أسماء اللون 147 مسبقًا في مواصفات ألوان CSS. جميع المتصفحات الحديثة تدعمها.

#### مثال

فيما يلي بعض أسماء الألوان المستخدمة. تحقق من المثال الحي على https://jsfiddle.net/rqygumpy/. ابحث عن القائمة الكاملة في [مستندات MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) .

 `#div1{ 
  color: BlueViolet; 
 } 
 
 #div2{ 
  color: RebeccaPurple; 
 } 
 
 #div3{ 
  color: RoyalBlue; 
 } 
 
 #div4{ 
  color: Salmon; 
 } 
` 

#### معلومات اكثر:

[MDN Web Docs على ألوان CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)