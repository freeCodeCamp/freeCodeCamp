---
title: Labeled Statement
localeTitle: البيان المعنون
---
## البيان المعنون

يستخدم **بيان إعتبر** مع `break` و `continue` التصريحات ويعمل على تحديد بيان التي تكون `break` و `continue` تطبيق البيانات.

### بناء الجملة

\`\` \`جافا سكريبت اسم الطابع: صياغات

 ``### Usage 
 Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block. 
 #### Example 
`` 

جافا سكريبت foo: { console.log ("هذا يطبع:")؛ استراحة console.log ("هذا لن يطبع أبداً.")؛ } console.log ("لأن التنفيذ يقفز إلى هنا!") /\* انتاج هذا يطبع: لأن التنفيذ يقفز إلى هنا! \* /

 ``When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.` 
 #### Example 
`` 

جافا سكريبت // بدون بيان مصنّف ، عند j == i interoping jumps to next toeration اختبار الوظيفة () { لـ (var i = 0؛ i <3؛ i ++) { console.log ("i =" + i)؛ لـ (var j = 0؛ j <3؛ j ++) { if (j === i) { استمر؛ } console.log ("j =" + j)؛ } } }

/\* انتاج i = 0 (ملاحظة j = 0 مفقود) ي = 1 ي = 2 ط = 1 j = 0 (ملاحظة j = 1 مفقودة) ي = 2 ط = 2 ي = 0 j = 1 (ملاحظة j = 2 غير موجودة) \* /

// باستخدام عبارة مسماة يمكننا القفز إلى الحلقة الخارجية (i) بدلاً من ذلك اختبار الوظيفة () { outer: for (var i = 0؛ i <3؛ i ++) { console.log ("i =" + i)؛ لـ (var j = 0؛ j <3؛ j ++) { if (j === i) { تابع الخارجي } console.log ("j =" + j)؛ } } }

/ \* i = 0 (يتم تسجيل j فقط عندما يكون أقل من i) ط = 1 ي = 0 ط = 2 ي = 0 ي = 1 \* / \`\` \`

### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)