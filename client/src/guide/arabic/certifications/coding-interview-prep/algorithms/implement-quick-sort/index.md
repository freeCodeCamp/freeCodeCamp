---
title: Implement Quick Sort
localeTitle: تنفيذ فرز سريع
---
## تنفيذ فرز سريع

### طريقة:

*   الفرز السريع هو خوارزمية الفرز كفاءة. إنها خوارزمية موضعية بحيث لا تأخذ أي مساحة إضافية.
*   أولاً ، اختر نقطة محورية عشوائية حولها تحريك جميع العناصر الأصغر إليها إلى يسارها والعناصر الأكبر إلى يمينها.
*   بعد الحصول على pivotIndex والذي هو بشكل أساسي الموضع الثابت لهذا العنصر ، نجد pivotIndex أخرى عن طريق استدعاء هذه الوظيفة.
*   حالة أسوأ فرز سريع هي **O (n 2 )** ولكن يمكن تجنب ذلك إذا اخترنا نقطة محورية عشوائية ، وبهذه الطريقة يكون O كبيرًا **O (nlogn)** .
*   إنه تعقيد الفضاء هو **O (logn)** .
*   إنها خوارزمية **غير مستقرة** .
*   ![فرز سريع في العمل](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### حل:

 `//Swapping array elements via ES6 array destructuring 
 function swap(arr, x, y){ 
  [arr[x], arr[y]] = [arr[y], arr[x]]; 
 } 
 
 //Pivot function returns the fixed pivot point 
 function pivot(arr, left = 0, right = arr.length-1){ 
  let shift = left; 
  for (let i = left+1; i <= right; i++){ 
 
    //Move all the small elements on the left side 
    if (arr[i] < arr[left]) swap(arr, i, ++shift); 
  } 
 
  //Finally swapping the last element with the left 
  swap(arr, left, shift); 
  return shift; 
 } 
 
 function quickSort(array, left = 0, right = array.length-1) { 
  if (left < right){ 
    let pivotIndex = pivot(array, left, right); 
 
    //Recusrively calling the function to the left of the pivot and to the right of the pivot 
    quickSort(array, left, pivotIndex-1); 
    quickSort(array, pivotIndex+1, right); 
  } 
  return array; 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Quick-Sort)

### مرجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Quicksort)
*   [أكاديمية خان](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)