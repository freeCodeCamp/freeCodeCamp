---
title: Implement Bubble Sort
localeTitle: تنفيذ فرز الفقاعة
---
## تنفيذ فرز الفقاعة

### طريقة:

*   Bubble Sort عبارة عن خوارزمية الفرز الذي يفرز أو _يفسر_ الرقم الأكبر كعنصر آخر في نهاية كل مسار.
*   نقارن كل عنصر إلى العنصر الذي قبله ، إذا كان العنصر السابق أصغر ، فإننا نبدل أماكنه.
*   تعقيد وقت Bubble Sort هو **O (n 2 )** .
*   إنها خوارزمية **مستقرة** .
*   ![نوع الفقاعة في العمل](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### حل:

#### الحل 1: الأساسي

 `function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function bubbleSort(array) { 
  for (let i = 0; i < array.length; i++){ 
    for (let j = 0; j < array.length-1-i; j++){ // -i because the largest element will be bubbled at the end so we don't have to compare. 
      if (array[j] > array[j+1]){ 
        swap(j, j+1, array); 
      } 
    } 
  } 
  return array; 
 } 
` 

#### الحل 2: متقدم

`js function bubbleSort(array) { for (let i = 0; i < array.length; i++){ for (let j = 0; j < array.length-1-i; j++){ if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap } } return array; }`

*   [تشغيل الكود](https://repl.it/@ezioda004/Bubble-Sort)
    
    ### المراجع:
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)
    
*   [ويكيبيديا](https://en.wikipedia.org/wiki/Bubble_sort)
    
*   فيديو من قبل [HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)