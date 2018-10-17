---
title: Jump Search
localeTitle: القفز بحث
---
## القفز بحث

يقوم بحث الانتقال بتحديد موقع عنصر في مصفوفة تم فرزها بالقفز إلى k ثم يتم التحقق مما إذا كان العنصر المطلوب موجودًا القفزة السابقة والقفزة الحالية.

# حالة التعقيد الأسوأ

O (√N)

# أعمال

1.  تعريف قيمة k ، عدد القفزات: حجم القفزة الأمثل هو √N حيث N هي طول الصفيف
2.  الانتقال إلى الصفيف k-by-k البحث في الحالة `Array[i] < valueWanted < Array[i+k]`
3.  إجراء بحث خطي بين `Array[i]` و `Array[i + k]`

![القفز البحث 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# الشفرة

لعرض أمثلة لتنفيذ التعليمات البرمجية لهذه الطريقة ، قم بالوصول إلى هذا الرابط أدناه:

[القفز بحث - OpenGenus / الكون](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# قروض

[صورة مجموعة المنطق](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)