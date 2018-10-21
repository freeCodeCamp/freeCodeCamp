---
title: String Length
localeTitle: طول سلسلة
---
على `length` تمثل الممتلكات طول السلسلة.

## بناء الجملة

 `str.length 
` 

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx)

## وصف

هذه الخاصية بإرجاع عدد وحدات التعليمات البرمجية في السلسلة. يستخدم تنسيق UTF-16 ، وهو تنسيق السلسلة الذي تستخدمه جافا سكريبت ، وحدة رموز مفردة 16 بت لتمثيل أكثر الرموز شيوعًا ، ولكنه يحتاج إلى استخدام وحدتي تعليمات برمجية للأحرف الأقل استخدامًا ، لذلك من الممكن إرجاع القيمة حسب الطول إلى غير متطابق مع العدد الفعلي للأحرف في السلسلة.

بالنسبة لسلسلة فارغة ، يكون الطول 0.

الخاصية `String.length` ثابتة إرجاع القيمة 1.

## أمثلة

 `var x = 'Mozilla'; 
 var empty = ''; 
 
 console.log('Mozilla is ' + x.length + ' code units long'); 
 /* "Mozilla is 7 code units long" */ 
 
 console.log('The empty string has a length of ' + empty.length); 
 /* "The empty string has a length of 0" */ 
 
 var str = "every good boy does fine"; 
        var start = 0; 
        var end = str.length - 1; 
        var tmp = ""; 
        var arr = new Array(end); 
 
        while (end >= 0) { 
            arr[start++] = str.charAt(end--); 
        } 
 
 // Join the elements of the array with a 
        var str2 = arr.join(''); 
        document.write(str2); 
 
 // Output: enif seod yob doog yreve 
`