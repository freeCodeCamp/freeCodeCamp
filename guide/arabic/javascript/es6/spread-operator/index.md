---
title: Spread Operator
localeTitle: انتشار المشغل
---## انتشار المشغل

يسمح عامل الانتشار ( `...` ) ، بالحصول على عناصر المجموعة.

أحد أكثر الاستخدامات شيوعًا هو `Node` Objects ، عند استخدام محددات الاستعلام في المستعرض ، وذلك لجعلها كائنات Array القابلة للتكرار:

 `const paragraphs = document.querySelectorAll('p.paragraph'); 
 const arr = [...paragraphs]; 
` 

استخدام آخر لمشغل الانتشار هو لتسلسل صفيف:

 `const arr_1 = [1, 2, 3, 4] 
 const arr_2 = [5, 6, 7, 8] 
 const arr_final = [...arr_1, ...arr_2] 
 // arr_final = [1, 2, 3, 4, 5, 6, 7, 8] 
`