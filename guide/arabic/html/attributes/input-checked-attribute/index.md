---
title: Input Checked Attribute
localeTitle: سمة فحص المدخلات
---
## سمة فحص المدخلات

السمة المحددة هي سمة منطقية.

عندما يكون موجودا ، فإنه يحدد أن  يجب أن يكون العنصر محددًا مسبقًا (محددًا) عند تحميل الصفحة.

يمكن استخدام الخاصية المميزة المحددة  و  .

يمكن أيضًا تعيين السمة المحددة بعد تحميل الصفحة ، عبر JavaScript.

## ألق نظرة على المثال التالي:

 `
<form action="/action_page.php"> 
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br> 
  <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br> 
  <input type="submit" value="Submit"> 
 </form> 
` 

في المثال أعلاه عند تحميل صفحة الويب افتراضيًا ، سيتم تحديد خانة الاختيار الأولى تلقائيًا بسبب السمة المحددة.