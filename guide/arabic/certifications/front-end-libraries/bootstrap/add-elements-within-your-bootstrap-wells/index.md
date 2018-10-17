---
title: Add Elements within Your Bootstrap Wells
localeTitle: إضافة عناصر داخل الآبار Bootstrap الخاص بك
---
## إضافة عناصر داخل الآبار Bootstrap الخاص بك

في التحدي الأخير ، كنت قد أنشأت شعبة مع الطبقة جيدا ، يتطلب هذا التحدي الآن إضافة 3 عناصر زر في كل من الآبار.

### ملحوظة

يتم الإعلان عن زر على النحو التالي:

 `
<button></button> 
` 

### حل

نظرًا لأنه يتعين علينا إعلان 3 زر في كل بئر ، سنفعل ما يلي:

 `
<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
  </div> 
 </div> 
`