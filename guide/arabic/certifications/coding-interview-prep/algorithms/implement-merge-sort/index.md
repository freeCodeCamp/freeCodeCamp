---
title: Implement Merge Sort
localeTitle: تنفيذ فرز دمج
---
## تنفيذ فرز دمج

### طريقة:

*   دمج تصنيف هو مشكلة الانقسام والتغلب الكلاسيكية.
*   يتم تضمين الخطوات التالية:
*   القسمة: نكسر الصفيف من المنتصف باستخدام الانطواء حتى يتم تركنا مع عنصر واحد.
*   Conquer: ثم نفرز هذه المصفوفات الصغيرة.
*   الجمع: وأخيرًا ، ندمج هذه المصفوفات الصغيرة في مصفوفة مرتبة واحدة ونستمر في فعلها حتى نجمع كل المصفوفات.
*   وقت تعقيد دمج **المزيج** هو **O (nlogn)** .
*   تعقيد الفضاء لفرز الدمج هو **O (n)** .
*   إنها خوارزمية **مستقرة** .
*   ![دمج الفرز في العمل](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### حل:

 `//Merger function, which merges 2 sorted array into 1 sorted array 
 function merger(arr1, arr2){ 
  let i = 0, j = 0, mergedArr = []; 
  while (i < arr1.length && j < arr2.length){ 
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]); 
    else mergedArr.push(arr1[i++]); 
  } 
  while (i < arr1.length){ 
    mergedArr.push(arr1[i++]); 
  } 
  while (j < arr2.length){ 
    mergedArr.push(arr2[j++]); 
  } 
  return mergedArr; 
 } 
 function mergeSort(array) { 
  //Array of length 1 is sorted so we return the same array back 
  if (array.length == 1) return array; 
 
  //Break down the array to half from middle into left and right 
  let middle = Math.floor(array.length/2); 
  let left = mergeSort(array.slice(0, middle)); 
  let right = mergeSort(array.slice(middle)); 
 
  //Return the merged sorted array 
  return merger(left, right); 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Merge-Sort)

### المراجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Merge_sort)
*   فيديو من قبل [Hackerrank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)