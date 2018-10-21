---
title: JSON Parse
localeTitle: JSON تحليل
---
## JSON تحليل

تقوم طريقة `JSON.parse()` بتوزيع سلسلة وإنشاء كائن جديد تم وصفه بواسطة سلسلة.

#### بناء الجملة:

 `    JSON.parse(text [, reviver]) 
` 

##### المعلمات:

`text` السلسلة المراد تحليلها كـ JSON

`reviver` (اختياري) ستتلقى الدالة `key` `value` كوسيطة. هذه الوظيفة يمكن استخدامها ل tranform قيمة النتيجة.

فيما يلي مثال على كيفية استخدام `JSON.parse()` :

 ``var data = '{"foo": "bar"}'; 
 
 console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo` 
 
 // You can use JSON.parse to create a new JSON object from the given string 
 var convertedData = JSON.parse(data); 
 
 console.log(convertedData.foo); // This will print `bar 
`` 

[Repl.it Demo](https://repl.it/MwgK/0)

هنا مثال مع `reviver` :

 `var data = '{"value": 5}'; 
 
 var result = JSON.parse(data, function(key, value) { 
    if (typeof value === 'number') { 
        return value * 10; 
    } 
    return value; 
 }); 
 
 // Original Data 
 console.log("Original Data:", data); // This will print Original Data: {"value": 5} 
 // Result after parsing 
 console.log("Parsed Result: ", result); // This will print Parsed Result:  { value: 50 } 
` 

في المثال أعلاه ، يتم مضاعفة جميع القيم [الرقمية في](https://repl.it/Mwfp/0) `10` - [Repl.it Demo](https://repl.it/Mwfp/0)

#### معلومات اكثر:

[JSON.parse - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)