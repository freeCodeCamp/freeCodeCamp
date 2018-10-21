---
title: Write Arrow Functions with Parameters
localeTitle: كتابة وظائف السهم مع المعلمات
---
## كتابة وظائف السهم مع المعلمات

هنا هو [مورد رائع عن وظائف مجهولة في جافا سكريبت](http://helephant.com/2008/08/23/javascript-anonymous-functions/) ، في حال كنت لا تزال تتساءل ما هي ، ودورها.

الآن ، يتم تكليفك بوضع المعلمات داخل وظائف الأسهم.

## تلميح 1:

تخلص من الكلمة `function` . ضع عامل السهم.

## تلميح 2:

تأكد من تغيير `var` إلى `const` .

## تحذير المفسد - الحل إلى الأمام!

## حل:

 `const myConcat = (arr1, arr2) => { 
  "use strict"; 
  return arr1.concat(arr2); 
 }; 
 // test your code 
 console.log(myConcat([1, 2], [3, 4, 5])); 
`