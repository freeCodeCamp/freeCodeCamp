---
title: Counting Sort
localeTitle: فرز الفرز
---
## فرز الفرز

فرز الفرز هو أسلوب فرز يستند إلى مفاتيح بين نطاق معين. يعمل من خلال حساب عدد الكائنات التي تحتوي على قيم أساسية مميزة (نوع التجزئة). ثم القيام ببعض الحساب لحساب موقف كل كائن في تسلسل الإخراج.

### مثال:

 `For simplicity, consider the data in the range 0 to 9. 
 Input data: 1, 4, 1, 2, 7, 5, 2 
  1) Take a count array to store the count of each unique object. 
  Index:     0  1  2  3  4  5  6  7  8  9 
  Count:     0  2  2  0  1  1  0  1  0  0 
 
  2) Modify the count array such that each element at each index 
  stores the sum of previous counts. 
  Index:     0  1  2  3  4  5  6  7  8  9 
  Count:     0  2  4  4  5  6  6  7  7  7 
 
 The modified count array indicates the position of each object in 
 the output sequence. 
 
  3) Output each object from the input sequence followed by 
  decreasing its count by 1. 
  Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 2. 
  Put data 1 at index 2 in output. Decrease count by 1 to place 
  next data 1 at an index 1 smaller than this index. 
` 

### التنفيذ

 `let numbers = [1, 4, 1, 2, 7, 5, 2]; 
 let count = []; 
 let i, z = 0; 
 let max = Math.max(...numbers); 
 // initialize counter 
 for (i = 0; i <= max; i++) { 
    count[i] = 0; 
 } 
 for (i=0; i < numbers.length; i++) { 
    count[numbers[i]]++; 
 } 
 for (i = 0; i <= max; i++) { 
    while (count[i]-- > 0) { 
        numbers[z++] = i; 
    } 
 } 
 // output sorted array 
 for (i=0; i < numbers.length; i++) { 
    console.log(numbers[i]); 
 } 
`