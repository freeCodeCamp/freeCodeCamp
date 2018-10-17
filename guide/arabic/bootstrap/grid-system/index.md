---
title: Grid System
localeTitle: نظام الشبكة
---
## نظام الشبكة

باختصار ، يساعدك نظام Bootstrap الشبكي على إنشاء تخطيطات متجاوبة ، وهو يشتمل على نظام من الصفوف والأعمدة يساعدك في بناء المحتوى الخاص بك.

الصفوف هي مجموعات أفقية من الأعمدة ، بحد أقصى 12 عمودًا لكل صف. داخل كل صف ، يتم وضع المحتوى داخل الأعمدة ويمكن أن يمتد في أي مكان بين 1 إلى 12 عمودًا.

يحتوي Bootstrap على خمسة أنواع مختلفة من طبقات الشبكة ، وهي صغيرة جدًا ، وصغيرة ، ومتوسطة ، وكبيرة ، وكبيرة جدًا ، وهناك نقطة توقف محددة لكل طبقة من طبقات الشبكة هذه.

يستخدم Bootstrap وحدات البكسل لتعريف نقاط التوقف الخاصة بطبقات الشبكة ، وعروض العرض المختلفة التي تعمل كنقاط نقاط لمستويات الشبكة هي:

#### كيف تعمل

###### حاوية

الحاوية هي معظم العناصر الخارجية التي _ستحتوي على_ الشبكة الخاصة بك ، وتستخدم `container` عرض ثابتة في منتصف الشاشة (هامش إضافي على الشاشات الأكبر) أو `container-fluid` لعرض كامل.

 `<div class="container"></div> 
` 

###### صف

استخدم `row` لتجميع الأعمدة الخاصة بك ، وهذا سيبقي كل شيء مصفوفًا بشكل صحيح ويساعدك في بناء شبكتك.

 `<div class="row"></div> 
` 

###### أعمدة

تشير فئات العمود إلى عدد الأعمدة التي ترغب في استخدامها من أصل 12 لكل صف محتمل. على سبيل المثال `col-sm-6` سيعني `col-sm-6` أن عمودك سيستخدم نصف عرض `row` على شاشة صغيرة ، وسوف يستخدم `col-lg-4` ما يصل إلى الثلث على شاشة كبيرة.

إليك كيفية تعريف بادئة فئة لاستخدام عرض عمود واحد على أحجام الشاشات المختلفة:

*   **إضافي صغير** `col-1`
*   **صغير** `col-sm-1`
*   **متوسطة** `col-md-1`
*   **كبير** `col-lg-1`
*   **إضافي كبير** `col-xl-1`

 `<div class="col-sm-1"></div> 
` 

#### مثال

شبكة بعرض كامل تحتوي على أربعة أعمدة ، كل منها يشغل صفًا كاملاً على شاشات xs ، ونصف صف على الشاشات sm و md ، وربع عرض الصف على الشاشات الكبيرة وما فوقها.

 `<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12 col-sm-6 col-lg-4">First Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div> 
  </div> 
 </div> 
` 

_لاحظ أنه لم يتم تعريف `col-md` و `col-xl` ، حيث لم يتم تعريف الحجم ، سيتم تعيينه افتراضيًا إلى الحجم الأصغر التالي الذي تم تحديده._

يوفر Bootstrap نظام شبكة عمود 12 جاهز للاستخدام في التخطيطات. خذ بعين الاعتبار التعليمة البرمجية التالية.

 `
   <div class="container"> 
    <div class="row"> 
        <div class="col-md-6">Content</div> 
        <div class="col-md-6">Content</div> 
    <div> 
   </div> 
` 

أين:

 `- col = column 
 - md = screen size 
 - 6 = column width 
` 

وباعتباره نظام شبكة عمود 12 ، يجب أن يضيف كل عرض عمود الشبكة المحدد من قبل المستخدم ما يصل إلى 12.

يمكن تعيين قيم حجم الشاشة على النحو التالي:

*   xs - <768px Phones
    
*   sm - <992px Tablets
    
*   MD - <1200px أجهزة الكمبيوتر المحمولة
    
*   lg -> 1200px Desktops
    
    Bootstrap هو الأول المحمول ومتجاوب.
    
    يعني الجوال أولاً أن تخطيط الشبكة سيستجيب تلقائيًا للشاشات الأصغر حجمًا. ثم يحدد HTML تخطيط الشبكة للشاشات الأكبر حجمًا.
    

توضح التعليمة البرمجية والصورة التاليان ما هو ممكن باستخدام عرض الأعمدة المختلفة.

 `
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-6">Content</div> 
            <div class="example col-md-6">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
        </div> 
    </div> 
` 

![12-العقيد الشبكة](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)

#### معلومات اكثر:

[Bootstrap Docs - نظام الشبكة](https://getbootstrap.com/docs/4.0/layout/grid/)

_يعتمد هذا الدليل على Bootstrap v4 (سوف يعمل مع v3 باستثناء أن الشاشات الصغيرة الإضافية تُعرَّف على أنها `xs` وليس هناك حجم `xl` )_

*   كبير جدًا: **عرض العرض> 1200 بكسل**
*   كبير: **عرض إطار العرض> = 992 بكسل**
*   متوسط: **عرض العرض> = 768 بكسل**
*   صغير: **عرض العرض> = 576 بكسل**
*   صغير جدًا: **عرض إطار العرض أقل من 576 بكسل**

#### معلومات اكثر:

https://getbootstrap.com/docs/4.0/layout/grid/