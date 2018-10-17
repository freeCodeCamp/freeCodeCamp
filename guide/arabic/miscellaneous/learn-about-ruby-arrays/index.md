---
title: Learn About Ruby Arrays
localeTitle: تعرف على صفائف روبي
---
### الأساسيات:

*   المصفوفة هي قائمة بالعناصر المفهرسة المخزنة داخل أقواس `<a href='http://ruby-doc.org/core-2.2.0/Array.html' target='_blank' rel='nofollow'>]` .
*   يستخدم روبي فهرسة الصفر. هذا يعني أن العنصر الأول في المصفوفة مخزَّن في الرقم `0` ، ثم الثاني في الرقم `1` ، وهكذا عند زيادة قيم 1 لكل عنصر إضافي مخزّن في المصفوفة.
*   يمكن إنشاء الصفائف باستخدام بناء الجملة `[]` أو `Array.new` .
*   لدى Ruby العديد من الطرق لإنشاء عمليات على صفائف مثل عكس أو إيجاد عنصر مخزن في الصفيف.

## أمثلة:

 `arr = [1,2,3] 
 # is equivalent to: 
 arr = Array.new(3) 
 arr[0] = 1 
 arr[1] = 2 
 arr[2] = 3 
 # is also equivalent to: 
 arr = Array(1..3) 
 # All three of these examples return: 
 [1,2,3] 
` 

## المراجع:

*   [وثائق روبي الرسمية للصفائف](https://docs.ruby-lang.org/en/2.0.0/Array.html) .