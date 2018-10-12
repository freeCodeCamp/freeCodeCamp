---
title: Number isInteger
localeTitle: Number isInteger
---
# Number isInteger

## وصف

تحدد الأسلوب `Number.isInteger()` ما إذا كانت القيمة التي تم تمريرها عددًا صحيحًا أم لا. تم تقديم هذه الطريقة في ES6

## بناء الجملة

`Number.isInteger(val)`

### المعلمات

**فال** - قيمة للتحقق من كونها عدد صحيح

## قيمة الإرجاع

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) تشير إلى ما إذا كانت القيمة عددًا صحيحًا أم لا.

## وصف

يقوم الأسلوب بإرجاع `true` إذا كانت القيمة التي تم تمريرها عددًا صحيحًا ، وإلا فإنها تُرجع `false` . قيم لانهائية و `NaN` ترجع `false` .

## أمثلة

 `Number.isInteger(0);         // true 
 Number.isInteger(-0);        // true 
 Number.isInteger(1);         // true 
 Number.isInteger(2);         // true 
 Number.isInteger(-100001);   // true 
 Number.isInteger(999999999999999999999999); // true 
 
 Number.isInteger(0.1);       // false 
 Number.isInteger(0.3);       // false 
 Number.isInteger(Math.PI);   // false 
 
 Number.isInteger(NaN);       // false 
 Number.isInteger(Infinity);  // false 
 Number.isInteger(-Infinity); // false 
 Number.isInteger('10');      // false 
 Number.isInteger(true);      // false 
 Number.isInteger(false);     // false 
 Number.isInteger([1]);       // false 
` 

#### معلومات اكثر:

[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger) [Number.isInteger () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)