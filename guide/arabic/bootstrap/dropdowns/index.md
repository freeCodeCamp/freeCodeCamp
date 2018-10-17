---
title: Dropdowns
localeTitle: هبوط قطرة
---
## هبوط قطرة

يوفر Bootstrap Dropdowns كمكوِّن إضافي لعرض قوائم الروابط. القائمة المنسدلة عبارة عن زر يتحول لعرض قائمة من الارتباطات.

تم تصميم القوائم المنسدلة في Bootstrap لتكون عامة وقابلة للتطبيق على مجموعة متنوعة من المواقف. على سبيل المثال ، من الممكن إنشاء قوائم منسدلة تحتوي على حقول بحث أو نماذج تسجيل دخول.

## مثال

 `
<div class="dropdown"> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    Dropdown example 
  </button> 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a class="dropdown-item" href="#">Action</a> 
    <a class="dropdown-item" href="#">Another action</a> 
    <a class="dropdown-item" href="#">Something else here</a> 
  </div> 
 </div> 
` 

## شرح المثال

يشير _تصنيف .dropdown_ إلى قائمة منسدلة.

لفتح القائمة المنسدلة ، استخدم زرًا أو رابطًا مع فصل من. _تبديل-downdown_ و to _\-toggle = "_ سمة _dropdown_ .

تقوم فئة _.caret_ بإنشاء رمز سهم علامة إقحام (▼) ، مما يشير إلى أن الزر عبارة عن قائمة منسدلة.

أضف فئة _.dropdown-menu_ إلى عنصر قائمة غير مرتبة لإنشاء القائمة المنسدلة.

#### معلومات اكثر:

https://getbootstrap.com/docs/4.0/components/dropdowns/