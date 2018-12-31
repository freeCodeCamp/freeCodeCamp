---
title: Break Statement
localeTitle: بيان استراحة
---
## المقدمة

ينهي بيان **الإيقاف** العبارة الحالية أو `switch` أو `label` البيان وينقل التحكم في البرنامج إلى البيان التالي للبيان المنتهي.

 `break; 
` 

إذا تم استخدام عبارة **الفاصل** في عبارة المسمى ، يكون بناء الجملة كالتالي:

 `break labelName; 
` 

## أمثلة

تحتوي الدالة التالية على جملة **فاصل** تقوم بإنهاء حلقة `while` عندما تكون **i** 3 ، ثم تقوم بإرجاع القيمة **3 \* x** .

 `function testBreak(x) { 
  var i = 0; 
 
  while (i < 6) { 
    if (i == 3) { 
      break; 
    } 
    i += 1; 
  } 
 
  return i * x; 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7VM/0)

في المثال التالي ، يتم إعداد العداد العد من 1 إلى 99؛ ومع ذلك ، إنهاء بيان **الفاصل** حلقة بعد 14 التهم.

 `for (var i = 1; i < 100; i++) { 
  if (i == 15) { 
    break; 
  } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7VO/0)

## موارد آخرى:

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [رابط MSDN](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)