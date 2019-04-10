---
title: Add Elements to the End of an Array Using concat Instead of push
localeTitle: إضافة عناصر إلى نهاية صفيف باستخدام concat بدلاً من الضغط
---
## إضافة عناصر إلى نهاية صفيف باستخدام concat بدلاً من الضغط

عندما تضيف طريقة `push` عنصرًا جديدًا إلى نهاية الصفيف الأصلي ، تنشئ طريقة `concat` صفيفًا جديدًا يحتوي على العناصر من الصفيف الأصلي والعنصر الجديد. الصفيف الأصلي لا يزال هو نفسه عند استخدام `concat` .

#### روابط ذات صلة:

*   [Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## حل

 `function nonMutatingPush(original, newItem) { 
 
  // Add your code below this line 
 
  return original.concat(newItem); 
 
  // Add your code above this line 
 } 
 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingPush(first, second); 
`