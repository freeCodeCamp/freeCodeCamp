---
title: String.prototype.concat
localeTitle: String.prototype.concat
---
يجمع الأسلوب concat () بين نص سلسلتين أو أكثر ويعيد سلسلة جديدة.

**بناء الجملة**

 `str.concat(string2[,..., stringN]); 
` 

## المعلمات

**string2… string _N_** السلاسل التي سيتم وصلها إلى هذه السلسلة.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## وصف

يجمع الأسلوب concat () بين نص سلسلتين أو أكثر ويعيد السلسلة المتسلسلة. لا يقوم بتعديل السلاسل الأصلية.

## أمثلة

**سلاسل متسلسلة**

 `    var str1 = "Hello"; 
    var str2 = "World"; 
    console.log(str1.concat(str2)); 
    // Console will output: HelloWorld 
 
    var str2 = "Hello, "; 
    console.log(str2.concat(" Welcome ", "to FCC.")); 
    // Console will output: Hello, Welcome to FCC. 
` 

المصدر \[MDN\]