---
title: Iterate Odd Numbers With a For Loop
localeTitle: تكرار الأرقام الفردية مع ل حلقة
---
## تكرار الأرقام الفردية مع ل حلقة

هنا هو المثال:

 `var ourArray = []; 
 
 for (var i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
` 

وإليك الحل: بعد السلسلة `// Only change code below this line.` نضيف `for` حلقة. تحتاج إلى نسخ حلقة من الجزء العلوي:

`javascript for (var i = 0; i < 10; i += 2) { ourArray.push(i); }` وتغيير `initialization` `var i = 0` إلى `var i = 1` ، كما تحتاج إلى تغيير اسم المصفوفة `ourArray` إلى `myArray` :

`javascript for (var i = 1; i < 10; i += 2) { myArray.push(i); }`

وإليك الحل الكامل:

\`\` \`جافا سكريبت var ourArray = \[\]؛

لـ (var i = 0؛ i <10؛ i + = 2) { ourArray.push (ط)؛ }

// اقامة var myArray = \[\]؛

// فقط تغيير رمز أدناه هذا الخط.

لـ (var i = 1؛ i <10؛ i + = 2) { myArray.push (ط)؛ } \`\` \`