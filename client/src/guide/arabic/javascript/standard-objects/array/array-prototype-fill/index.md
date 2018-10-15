---
title: Array.prototype.fill
localeTitle: Array.prototype.fill
---
## Array.prototype.fill

يملأ الأسلوب fill () كافة العناصر في صفيف ذات قيمة ثابتة.

بناء الجملة:

\`\` \`جافا سكريبت arr.fill (القيمة) arr.fill (القيمة ، البدء) arr.fill (القيمة ، البداية ، النهاية)

 `The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object. 
 
 The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it. 
 
 ## Examples 
` 

جافا سكريبت \[1 ، 2 ، 3\] .Fill (4) ؛ // \[4، 4، 4\] \[1 ، 2 ، 3\] .Fill (4 ، 1) ؛ // \[1 ، 4 ، 4\]

var fruits = \["Grape"، "Pear"، "Apple"، "Strawberry"\]؛ fruit.fill ("البطيخ" ، 2 ، 4) ؛ // الموز ، الكمثرى ، البطيخ ، البطيخ \`\` \`

#### معلومات اكثر:

لمزيد من المعلومات ، قم بزيارة [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)