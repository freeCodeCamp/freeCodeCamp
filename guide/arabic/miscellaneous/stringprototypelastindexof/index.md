---
title: String.prototype.lastIndexOf
localeTitle: String.prototype.lastIndexOf
---
إرجاع الأسلوب `lastIndexOf()` الفهرس ضمن كائن سلسلة الاستدعاء من التواجد الأخير للقيمة المحددة أو -1 إذا لم يتم العثور على. يتم البحث في سلسلة الاستدعاء للخلف ، بدءًا من `fromIndex` .

## بناء الجملة

 `str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex]) 
` 

## المعلمات

**searchValue**

سلسلة تمثل القيمة المطلوب البحث عنها.

**fromIndex**

اختياري. الموقع داخل سلسلة الاتصال لبدء البحث في ، فهرستها من اليسار إلى اليمين. يمكن أن يكون أي عدد صحيح. القيمة الافتراضية هي `str.length` . إذا كان سلبيا، فإنه يعامل 0. إذا `fromIndex > str.length` ، `fromIndex` يعامل `str.length` .

\[رابط MDN | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx)

## عائدات

إرجاع آخر ظهور لسلسلة فرعية في السلسلة.

## وصف

تتم فهرسة الأحرف في سلسلة من اليسار إلى اليمين. فهرس الحرف الأول هو 0 ، ومؤشر آخر حرف هو `stringName.length - 1` .

أسلوب `lastIndexOf()` حساس لحالة الأحرف. على سبيل المثال ، يعيد التعبير التالي `-1` :

## أمثلة

 `'canal'.lastIndexOf('a');     // returns 3 
 'canal'.lastIndexOf('a', 2);  // returns 1 
 'canal'.lastIndexOf('a', 0);  // returns -1 
 'canal'.lastIndexOf('x');     // returns -1 
 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1 
 
 var anyString = 'Brave new world'; 
 
 console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); 
 // logs 8 
 console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
 // logs 10 
 console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); 
 // logs 6 
 console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); 
 // logs 6 
 
 var str = "time, time"; 
 
 var s = ""; 
 s += "time is at position " + str.lastIndexOf("time"); 
 s += "<br />"; 
 s += "abc is at position " + str.lastIndexOf("abc"); 
 
 document.write(s); 
 
 // Output: 
 // time is at position 6 
 // abc is at position -1 
`