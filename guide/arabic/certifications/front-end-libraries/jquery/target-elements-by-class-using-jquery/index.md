---
title: Target Elements by Class Using jQuery
localeTitle: عناصر الهدف حسب الفئة باستخدام jQuery
---
## عناصر الهدف حسب الفئة باستخدام jQuery

*   يمكنك العثور على عناصر باستخدام محدد فئة jQuery. // $ (. className)
*   في هذا المثال ، يسمح لك بتحديد عناصر مع الفئة ".well"

## حل

 `<script> 
  $(document).ready(function() { 
    $(".well").addClass("animated bounce"); 
    $(".well").addClass("shake"); 
  }); 
 </script> 
`