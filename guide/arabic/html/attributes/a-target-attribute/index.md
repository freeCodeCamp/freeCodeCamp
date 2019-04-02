---
title: A Target Attribute
localeTitle: سمة الهدف
---
## سمة الهدف

تحدد السمة `<a target>` مكان فتح المستند المرتبط في `a` ( `a` ارتساء).

#### أمثلة:

تعمل السمة الهدف ذات القيمة "\_blank" على فتح المستند المرتبط في نافذة أو علامة تبويب جديدة.

 `
    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a> 
` 

تعمل السمة الهدف ذات القيمة "\_self" على فتح المستند المرتبط في نفس الإطار الذي تم النقر فوقه (وهذا هو الإعداد الافتراضي وعادةً لا يلزم تحديده).

 `
    <a href="https://www.freecodecamp.org" target="_self">freeCodeCamp</a> 
` 

 `
    <a href="https://www.freecodecamp.org">freeCodeCamp</a> 
` 

تعمل السمة الهدف ذات القيمة "\_parent" على فتح المستند المرتبط في الإطار الأصل.

 `
    <a href="https://www.freecodecamp.org" target="_parent">freeCodeCamp</a> 
` 

تعمل السمة الهدف ذات القيمة "\_top" على فتح المستند المرتبط في النص الكامل للنافذة.

 `
    <a href="https://www.freecodecamp.org" target="_top">freeCodeCamp</a> 
` 

سمة الهدف بقيمة _"framename"_ يفتح المستند المرتبط في إطار مسمى محدد.

 `
    <a href="https://www.freecodecamp.org" target="framename">freeCodeCamp</a> 
` 

#### معلومات اكثر:

السمة المستهدفة: [w3schools](https://www.w3schools.com/tags/att_a_target.asp)