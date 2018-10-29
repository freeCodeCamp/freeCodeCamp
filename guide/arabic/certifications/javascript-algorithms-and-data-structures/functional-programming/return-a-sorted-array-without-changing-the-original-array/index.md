---
title: Return a Sorted Array Without Changing the Original Array
localeTitle: إرجاع صفيف Sorted دون تغيير في صفيف الأصلي
---
## إرجاع صفيف Sorted دون تغيير في صفيف الأصلي

### طريقة

أولاً تجميع الصفيف المتخذة كمعلمة إلى صفيف فارغ جديد. ثم استخدم الأسلوب `sort()` كما هو موضح في التحدي الأخير وقم بإنشاء دالة لفرز الصفيف الجديد بترتيب تصاعدي.

### حل

 `var globalArray = [5, 6, 3, 2, 9]; 
 function nonMutatingSort(arr) { 
  // Add your code below this line 
  return [].concat(arr).sort(function(a, b) { 
    return a - b; 
  }); 
  // Add your code above this line 
 } 
 nonMutatingSort(globalArray); 
`