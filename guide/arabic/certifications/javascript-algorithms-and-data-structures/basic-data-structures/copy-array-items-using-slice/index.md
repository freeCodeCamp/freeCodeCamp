---
title: Copy Array Items Using slice()
localeTitle: نسخ صفيف العناصر باستخدام شريحة ()
---
## نسخ صفيف العناصر باستخدام شريحة ()

*   يجب استخدام الدالة `slice()` لإرجاع صفيف يتكون من `warm` `sunny` فقط.
*   لذلك ، يجب تمرير معلمتين إلى الدالة `slice()` . يجب أن تكون المعلمة الأولى هي الفهرس الذي تريد أن تبدأه السلسلة الفرعية. يجب أن تكون المعلمة الثانية هي الفهرس الذي تنتهي عنده السلسلة الفرعية.
*   ملاحظة: سيتم إنهاء المعلمة الثانية في السلسلة الفرعية في هذا الفهرس بالضبط.

## مثال:

 ` return arr.slice(1,4); 
 /* This will return a substring consisting of indexs [1,2,3] 
    Note: arr[4] is NOT included. 
` 

## حل:

 `function forecast(arr) { 
  // change code below this line 
  return arr.slice(2,4); 
 } 
 
 // do not change code below this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 
`