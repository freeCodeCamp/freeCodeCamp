---
title: Grid Examples
localeTitle: أمثلة الشبكة
---
## أمثلة الشبكة

#### شجرة أعمدة متساوية

 `
<div class="container"> 
  <div class="row"> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
  </div> 
 </div> 
` 

ينشئ المثال أعلاه ثلاثة أعمدة متساوية العرض على الأجهزة الصغيرة والمتوسطة والكبيرة ، والكبير جدًا باستخدام فئات الشبكة المحددة مسبقًا. يتم توسيط تلك الأعمدة في الصفحة مع الأصل. `.container` .

#### ثلاثة أعمدة غير متساوية

 `
 <div class="row"> 
  <div class="col-sm-3">.col-sm-3</div> 
  <div class="col-sm-6">.col-sm-6</div> 
  <div class="col-sm-3">.col-sm-3</div> 
 </div> 
` 

#### اثنان أعمدة غير متساوية

 `
 <div class="row"> 
  <div class="col-sm-4">.col-sm-4</div> 
  <div class="col-sm-8">.col-sm-8</div> 
 </div> 
` 

#### أعمدة مع اثنين من الأعمدة المتداخلة

 `
 <div class="row"> 
  <div class="col-sm-8"> 
    .col-sm-8 
    <div class="row"> 
      <div class="col-sm-6">.col-sm-6</div> 
      <div class="col-sm-6">.col-sm-6</div> 
    </div> 
  </div> 
  <div class="col-sm-4">.col-sm-4</div> 
 </div> 
` 

#### مختلط موبايل وسطح المكتب

\`\` \`أتش تي أم أل

.col-xs-7 .col-sm-6 .col-lg-8

.col-xs-5 .col-sm-6 .col-lg-4

.col-xs-6 .col-sm-8 .col-lg-10

.col-xs-6 .col-sm-4 .col-lg-2

 ``#### Clear Floats 
 
 Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content: 
`` 

أتش تي أم أل

العمود 1 تغيير حجم نافذة المتصفح لمعرفة التأثير.

العمود 2

العمود 3

العمود 4

 ``#### Offsetting Columns 
 Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns: 
`` 

أتش تي أم أل

.col-sm-5 .col-md-6

.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0

 ``#### Push And Pull - Change Column Ordering 
 Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes: 
`` 

أتش تي أم أل

.col-sm-4 .col-sm-push-8

.col-sm-8 .col-sm-pull-4

\`\` \`

#### معلومات اكثر:

[Bootstrap الشبكة](https://getbootstrap.com/docs/4.0/layout/grid/)