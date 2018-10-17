---
title: Carousel
localeTitle: دائري
---
## دائري

Carousel عبارة عن مكون عرض شرائح لركوب الدراجات من خلال عناصر مثل الصور أو شرائح النص. يوفر طريقة ديناميكية لتمثيل كمية كبيرة من البيانات (النص أو الصور) عن طريق الانزلاق أو ركوب الدراجات من خلال ، بطريقة سلسة

رمز عينة من شريط التمرير صورة أدناه:

 `
<html> 
 <head> 
 
 <!-- BootStrap's minified CSS version --> 
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
 
 
 </head> 
 
 <style> 
 
 .carousel-indicators li 
 { 
 background-color:red; 
 } 
 
 .carousel-indicators .active 
 { 
 background-color:blue; 
 } 
 
 .carousel-indicators .item 
 { 
 height:700 px; 
 width :800 px; 
 } 
 </style> 
 
 
 <body> 
  <!-- Declaring div for Carousel to appear inside it --> 
 <div class="container"> 
 
 <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
 
 <!-- Indicators --> 
 
 <ol class="carousel-indicators"> 
   <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
   <li data-target="#myCarousel" data-slide-to="1" ></li> 
   <li data-target="#myCarousel" data-slide-to="2"></li> 
 </ol> 
 
  <!-- Wrapper for Slides  --> 
 <div class="carousel-inner"> 
 
 <div  class="item active"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506241850/Hello_bootstrap_ohtphr.png" alt="Hello_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613859/devices_bootstrap_nk4zlk.jpg" alt="Device_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613966/responsive_bootstrap_nzuo9l.jpg" alt="Responsive_Bootstrap"> 
 </div> 
 
 </div> 
 
 <!-- Left and Right Controls for sliding through the slides  --> 
 
 <a class="left carousel-control"  href="#myCarousel" data-slide="prev"> 
 <span class="glyphicon glyphicon-chevron-left"></span> 
 </a> 
 
 <a class="right carousel-control"  href="#myCarousel" data-slide="next"> 
 <span class="glyphicon glyphicon-chevron-right"></span> 
 </a> 
 
 </div> 
 </div> 
 
 
 <!-- Optional JavaScript --> 
 <!-- jQuery first, then Popper.js, then Bootstrap JS --> 
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> 
 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> 
 
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> 
 
 </body> 
 </html> 
` 

فهم السمات والفئات المستخدمة في المثال أعلاه:

### 1) السمات

a) `data-ride` : - `data-ride ="carousel"` on page load animation to start.

ب) `data-target` : - يشير إلى معرف دائري

ج) `data-slide-to` : - تحدد الشريحة التي تنتقل إليها عند النقر على المؤشرات (نقاط محددة).

### 2) الفصول

أ) `carousel` : - `class="carousel"` يحدد أن div يحتوي على مكتبة دائري.

ب) `slide` : - تضيف هذه الفئة انتقالات CSS.

c) `carousel-inner` : - هذا يدل على قسم الكود الذي سيحمل النص / الصورة ليتم عرضها في شرائح.

د) `item` : - يشير إلى المحتوى المراد عرضه في الرف الدائري.

ه) `left carousal-control` : - وهذا يضيف الزر الخلفي مما يتيح الانزلاق إلى الشريحة السابقة.

f) `right carousal-control` : - يضيف هذا الزر التالي الذي يسمح `right carousal-control` إلى الشريحة التالية.

g) `carousel-caption` : - يسمح لك هذا الفصل بإضافة تسميات توضيحية إلى كل شريحة.

ملاحظة: أضف `class="carousel-caption"` لكل عنصر.

### استعمال

#### 1) عبر سمات البيانات

يتم استخدام سمة `data-ride="carousel"` لوضع علامة على شكل دائري كرسوم متحركة بدءًا من تحميل الصفحة. يقبل `data-slide` الكلمات الرئيسية `prev` أو `next` ، والتي تغير موضع الشريحة بالنسبة إلى موقعها الحالي.

#### 2) عبر JavaScript

اتصل بالرسم المتحرك يدويًا باستخدام:

`$('.carousel').carousel()`

### خيارات

يمكن تمرير الخيارات عبر سمات البيانات أو JavaScript. بالنسبة لسمات البيانات ، قم بإلحاق اسم الخيار `data-` ، كما هو الحال في `data-interval=""` .

بعض الخيارات المستخدمة بشكل متكرر هي:

*   فترة
*   وقفة
*   اركب
*   لف

## تفاصيل اضافية

*   [Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/)