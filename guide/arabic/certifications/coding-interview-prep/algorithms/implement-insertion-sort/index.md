---
title: Implement Insertion Sort
localeTitle: تنفيذ فرز الإدراج
---
## تنفيذ فرز الإدراج

### طريقة:

*   يفترض إدراج الإدراج أن الصفيف مقسم إلى قسمين:

1.  مرتبة (في البداية العنصر الأول)
2.  لم يتم فرزها

*   كل تمريرة ، نختار عنصرًا ، ونتحقق من ذلك ضد الصفيف الذي تم فرزه.
*   إذا كان العنصر المحدد أصغر من العنصر الأخير في الصفيف الذي تم فرزه ، فسنقوم بتبديل المصفوفة التي تم فرزها بمقدار 1 حتى نعثر على الموضع _لإدراج_ العنصر المحدد.
*   ![نوع الإدراج في العمل](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [المصدر](https://en.wikipedia.org/wiki/Insertion_sort)
*   الوقت comlexity من الإدراج الإدراج هو من **O (ن 2 )** .
*   إنها خوارزمية **مستقرة** .

### حل:

 `function insertionSort(array) { 
  for (let i = 1; i < array.length; i++){ 
    let curr = array[i]; 
    for (var j = i-1; j >= 0 && array[j] > curr; j--){ 
      array[j+1] = array[j]; 
    } 
    array[j+1] = curr; 
  } 
  return array; 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Insertion-Sort)

### المراجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Insertion_sort)
*   [أكاديمية خان](https://www.youtube.com/watch?v=lCzQvQr8Utw)