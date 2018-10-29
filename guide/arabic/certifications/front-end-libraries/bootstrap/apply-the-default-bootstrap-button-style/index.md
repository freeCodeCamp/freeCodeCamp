---
title: Apply the Default Bootstrap Button Style
localeTitle: قم بتطبيق نمط زر Bootstrap الافتراضي
---
## قم بتطبيق نمط زر Bootstrap الافتراضي

التحدي الأخير كان عليك إنشاء أزرار 6 ، 3 في كل عنصر البئر ، هذه المرة أنت مطالب لإضافة فئات إلى تلك الأزرار.

### ملحوظة

يتم تعريف الفئة باستخدام بناء الجملة التالي:

 `
<button class="class(es)Name"></button> 
` 

### حل

نظرًا لأنك `btn` إلى إضافة فئات `btn` و `btn-default` ، فإن ما يلي هو الحل:

 `
<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
  </div> 
 </div> 
`