---
title: Number
localeTitle: رقم
---
## رقم

يمثل كائن Javacript `Number` أي نوع من الأرقام. لا تميّز JavaScript أنواعًا منفصلة من الأرقام ، مثل الأعداد الصحيحة أو العوامات. يتم تخزينها جميعًا في تنسيق Floating Point موحد ، 64 بت ، بالتوافق مع المعيار الدولي IEEE 754 1 .

يتم إنشاء كائنات `Number` جديدة على النحو التالي: `var num = new Number(value)` على الرغم من أنه يمكن إنشاؤها بشكل أكثر شيوعًا ببساطة عن طريق تعيين قيمة عددية للمتغير: `var num = 1.616;` . في سياق غير المُنشئ (أي بدون المشغل `new` ) ، يمكن استخدام `Number` لإجراء تحويل نوع. إذا كان لا يمكن تحويل الوسيطة إلى رقم ، فإنها تُرجع [`NaN`](https://guide.freecodecamp.org/javascript/standard-objects/number/number-nan) .

### مصادر

1.  w3schools.com الموظفين. [w3schools.com: أرقام جافا سكريبت](https://www.w3schools.com/js/js_numbers.asp) _w3schools.com._ Accessed: 31 أكتوبر ، 2017.