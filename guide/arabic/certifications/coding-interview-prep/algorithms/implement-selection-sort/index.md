---
title: Implement Selection Sort
localeTitle: تنفيذ فرز التحديد
---
## تنفيذ فرز التحديد

### طريقة:

*   Selection Sort هي واحدة من خوارزميات الفرز الأسهل لفهمها وتنفيذها.
*   تقسم هذه الخوارزمية المصفوفة في جزأين:

1.  مرتبة
2.  لم يتم فرزها

*   الجزء Sorted موجود في بداية الصفيف و الجزء غير المُرتب بعد ذلك.
*   كل تمريرة ، في البداية نفترض أن يكون العنصر الأول هو الأصغر ثم نكرر من خلال المجموعة بأكملها _ونختار_ أصغر عنصر. في نهاية التمريرة ، سنقوم بتبديل أصغر عنصر إلى الصفيف الذي تم فرزه.
*   لديه تعقيد زمني **O (n 2 )** .

### حل:

 `function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function selectionSort(array) { 
  for (let i = 0; i < array.length-1; i++){ 
    let min = i; 
    for (let j = i+1; j < array.length; j++){ 
      if (array[min] > array[j]) min = j; 
    } 
    swap(i, min, array); 
  } 
  return array; 
 } 
` 

### المراجع:

*   اقرأ حول اختيار التصنيف في [ويكيبيديا](https://en.wikipedia.org/wiki/Selection_sort)