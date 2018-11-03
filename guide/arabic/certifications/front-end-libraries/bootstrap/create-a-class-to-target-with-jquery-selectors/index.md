---
title: Create a Class to Target with jQuery Selectors
localeTitle: إنشاء فئة إلى الهدف باستخدام محددات jQuery
---
## إنشاء فئة إلى الهدف باستخدام محددات jQuery

كان التحدي الأخير هو إضافة بعض الفئات إلى عناصر `html <button></button>` لإضفاء الطابع الخاص عليها ، ولكن عليك في هذه المرة إضافة فصول أخرى إلى تلك الأزرار مما يسمح لـ jQuery باستهدافها.

### ملحوظة

تحرير الفصول الدراسية

### حل

نظرًا لأنك مضطر لإضافة فئة `target` ، فإن ما يلي هو الحل:

 `
<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 
`