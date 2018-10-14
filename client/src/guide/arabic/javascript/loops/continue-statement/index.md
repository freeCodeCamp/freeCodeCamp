---
title: Continue Statement
localeTitle: متابعة البيان
---
## المقدمة

**ويواصل** البيان إنهاء تنفيذ ما ورد في التكرار الحالي للحلقة الحالية أو المسمى، ويستمر تنفيذ حلقة مع التكرار التالي.

 `continue; 
` 

إذا تم استخدام العبارة **continue** في عبارة مسماة ، يكون بناء الجملة كما يلي:

 `continue labelName; 
` 

على النقيض من بيان **الاستراحة** ، لا يؤدي **الاستمرار إلى** إنهاء تنفيذ الحلقة بالكامل ؛ في حين أن:

*   في حلقة `while` ، ينتقل إلى الشرط.
*   في حلقة `for` ، ينتقل إلى تعبير التحديث.

## أمثلة

يعرض المثال التالي حلقة `while` تحتوي على عبارة **متابعة** تنفذ عندما تكون قيمة **i** هي 3. وهكذا ، تأخذ **n** القيم 1 و 3 و 7 و 12.

 `var i = 0; 
 var n = 0; 
 
 while (i < 5) { 
  i++; 
 
  if (i === 3) { 
    continue; 
  } 
 
  n += i; 
  console.log (n); 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7hx/0)

في المثال التالي، وبالتكرار حلقة من 1 إلى 9. التصريحات بين **تستمر** ونهاية `for` يتم تخطي الجسم بسبب استخدام الإفادة **continue** جنبا إلى جنب مع التعبير `(i < 5)` .

 `for (var i = 1; i < 10; i++) { 
    if (i < 5) { 
        continue; 
    } 
    console.log (i); 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7hs/0)

## موارد آخرى

*   [وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [رابط MSDN](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)