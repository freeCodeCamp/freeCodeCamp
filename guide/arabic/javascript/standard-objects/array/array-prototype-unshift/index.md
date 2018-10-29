---
title: Array.prototype.unshift
localeTitle: Array.prototype.unshift
---
`.unshift()` طريقة مصفوفة جافا سكريبت `.unshift()` عنصرًا واحدًا أو أكثر إلى بداية الصفيف وتقوم بإرجاع طول الصفيف الجديد.

**بناء الجملة**

 `arr.unshift([element1[, ...[, elementN]]]) 
` 

## المعلمات

العناصر التي يجب إضافتها إلى مقدمة الصفيف.

## عائدات

`length` الجديد للمصفوفة التي تم استدعاء الطريقة عليها.

## أمثلة

 `var array = [1, 2, 3, 4, 5]; 
 
 array.unshift(0); 
 // If we console.log(array.shift()); the console would output 6. 
 // array is now [0, 1, 2, 3, 4, 5]; 
 
 array.unshift([-1]); 
 // array is now [[-1], 0, 1, 2, 3, 4, 5]; 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C2V3)

مصدر [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)