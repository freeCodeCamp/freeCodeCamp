---
title: If-Else Statement
localeTitle: If-Else Statement
---
## المقدمة

بيان `if` ينفذ عبارة إذا كان الشرط المحدد هو `true` . إذا كان الشرط `false` ، فيمكن تنفيذ عبارة أخرى باستخدام العبارة `else` .

**ملاحظة:** العبارة `else` اختيارية.

 `if (condition) 
    /* do something */ 
 else 
    /* do something else */ 
` 

يمكن أن تكون متسلسلة متعددة `if...else` بيانات أخرى لإنشاء شرط `else if` . هذا يحدد شرط جديد لاختبار ويمكن تكرار لاختبار شروط متعددة ، والتحقق حتى يتم تقديم بيان صحيح لتنفيذ.

 `if (condition1) 
    /* do something */ 
 else if (condition2) 
    /* do something else */ 
 else if (condition3) 
    /* do something else */ 
 else 
    /* final statement */ 
` 

**ملاحظة:** إذا كنت ترغب في تنفيذ البيان أكثر من واحد في `if` ، `else` أو `else if` مطلوبة جزئيا، الأقواس المجعدة حول البيانات:

 `if (condition) { 
    /* do */ 
    /* something */ 
    /* with multiple statements */ 
 } else { 
    /* do something */ 
    /* else */ 
 } 
` 

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [رابط MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## أمثلة

**باستخدام** `if...else` :

 `    // If x=5 z=7 and q=42. If x is not 5 then z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
` 

**استخدام** `else if` :

 `if (x < 10) 
    return "Small number"; 
 else if (x < 50) 
    return "Medium number"; 
 else if (x < 100) 
    return "Large number"; 
 else { 
    flag = 1; 
    return "Invalid number"; 
 } 
`