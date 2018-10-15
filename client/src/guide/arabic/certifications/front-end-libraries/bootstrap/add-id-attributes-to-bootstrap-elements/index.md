---
title: Add id Attributes to Bootstrap Elements
localeTitle: أضف سمات المعرف إلى عناصر Bootstrap
---
## أضف سمات المعرف إلى عناصر Bootstrap

كان التحدي الأخير هو إضافة فئة إلى عناصر الزر ، هذه المرة لديك لإضافة id (s) إلى div (s) التي تحتوي على فئة well.

### تلميح 1

يتم تعريف معرف على النحو التالي:

 `
<element id="id(s)List"></element> 
` 

### تلميح 2

تحرير علامات div التي لديها فئة جيد

### تلميح 3

استخدم معرف (أرقام) مختلفة لكل من الآبار.

### تلميح 4

إعطاء جيدا على ترك معرف `left-well` وكذلك على حق معرف `right-well` .

### حل

نظرًا لأنك تحتاج إلى إضافة معرّف (معرّفات) إلى كلٍّ من الآبار ولديك كلاً من معرف فريد ، فإن ما يلي هو الحل:

 `
<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well" id="left-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well" id="right-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 
`