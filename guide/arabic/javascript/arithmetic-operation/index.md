---
title: Arithmetic Operation
localeTitle: عملية حسابية
---
يوفر JavaScript المستخدم بخمس معاملات حسابية: `+` ، `-` ، `*` ، `/` و `%` . المشغلين هي لالجمع والطرح والضرب والقسمة والبقية على التوالي.

## إضافة

**بناء الجملة**

`a + b`

**استعمال**

 `2 + 3          // returns 5 
 true + 2       // interprets true as 1 and returns 3 
 false + 5      // interprets false as 0 and returns 5 
 true + "bar"   // concatenates the boolean value and returns "truebar" 
 5 + "foo"      // concatenates the string and the number and returns "5foo" 
 "foo" + "bar"  // concatenates the strings and returns "foobar" 
` 

_تلميح:_ وجود عامل [زيادة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_() يدوية) يمثل اختصارًا رائعًا عندما تضيف أرقامًا بمقدار 1.

## طرح

**بناء الجملة**

`a - b`

**استعمال**

 `2 - 3      // returns -1 
 3 - 2      // returns 1 
 false - 5  // interprets false as 0 and returns -5 
 true + 3   // interprets true as 1 and returns 4 
 5 + "foo"  // returns NaN (Not a Number) 
` 

_تلميح:_ وجود عامل [إنقاص](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--) مفيد) يمثل اختصارًا رائعًا عند طرح الأرقام بمقدار 1.

## عمليه الضرب

**بناء الجملة**

`a * b`

**استعمال**

 `2 * 3                // returns 6 
 3 * -2               // returns -6 
 false * 5            // interprets false as 0 and returns 0 
 true * 3             // interprets true as 1 and returns 3 
 5 * "foo"            // returns NaN (Not a Number) 
 Infinity * 0         // returns NaN 
 Infinity * Infinity  // returns Infinity 
` 

## قطاع

**بناء الجملة**

`a / b`

**استعمال**

 `3 / 2                // returns 1.5 
 3.0 / 2/0            // returns 1.5 
 3 / 0                // returns Infinity 
 3.0 / 0.0            // returns Infinity 
 -3 / 0               // returns -Infinity 
 false / 5            // interprets false as 0 and returns 0 
 true / 2             // interprets true a 1 and returns 0.5 
 5 + "foo"            // returns NaN (Not a Number) 
 Infinity / Infinity  // returns NaN 
` 

## بقية

**بناء الجملة**

`a % b`

**استعمال**

 `3 % 2          // returns 1 
 true % 5       // interprets true as 1 and returns 1 
 false % 4      // interprets false as 0 and returns 0 
 3 % "bar"      // returns NaN 
` 

## زيادة راتب

**بناء الجملة**

`a++ or ++a`

**استعمال**

 `// Postfix 
 x = 3;  // declare a variable 
 y = x++;        // y = 4, x = 3 
 
 // Prefix 
 var a = 2; 
 b = ++a; // a = 3, b = 3 
` 

## إنقاص

**بناء الجملة**

`a-- or --a`

**استعمال**

 `// Postfix 
 x = 3;  // declare a variable 
 y = x--;        // y = 3, x = 3 
 
 // Prefix 
 var a = 2; 
 b = --a; // a = 1, b = 1 
` 

_!مهم!_ كما ترى ، **لا يمكنك** إجراء أي نوع من العمليات على `Infinity` .

المصدر: المدهش [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) .