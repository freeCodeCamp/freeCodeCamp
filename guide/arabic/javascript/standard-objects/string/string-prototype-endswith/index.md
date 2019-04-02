---
title: String.prototype.endsWith
localeTitle: String.prototype.endsWith
---
## String.prototype.endsWith

`endsWith()` طريقة `endsWith()` ما إذا كانت السلسلة تنتهي بإدخال السلسلة وإرجاع قيمة منطقية.

### فمثلا

 `let str = "Hello world"; 
 let bool = str.endsWith("ld") // true 
 bool = str.endsWith("llo") // false 
` 

يمكن أن تقبل هذه الطريقة أيضًا معلمة أخرى ، وهي `length` الذي يحدد قبل أي حرف للبحث في السلسلة.

 `let str = "Hello world"; 
 let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld") 
 bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo") 
`