---
title: Specify Upper and Lower Number of Matches
localeTitle: تحديد العلوي والسفلي عدد من المباريات
---
## تحديد العلوي والسفلي عدد من المباريات

تذكر `/a{2,4}/` سيعود `true` طالما هناك بين 2 إلى 4 أ معًا. فإنه سيعود `true` عن أي سلسلة لديها أكثر من أربعة ومعا أيضا.

كل هذه السلاسل ستعود `true` :

 `let threeAs = "aaa"; 
 let fourAs = "aaaa"; 
 let sevenAs = "aaaaaaa"; 
 
 let myRegex = /a{2,4}/; 
 myRegex.test(threeAs) ; // true 
 myRegex.test(fourAs) ; // true 
 myRegex.test(sevenAs) ; // true 
` 

## Spolier Alert!

تذكر استخدام `\s` بعد تضمين `Oh{3,6}` لتضمين مساحة بيضاء متبوعة بالرقم `no` لتمرير جميع حالات الاختبار. تتم كتابة جميع حالات الاختبار باستخدام رأس مال O ، ومع ذلك يمكن تمريرها أيضًا باستخدام `ignore-case` : `/oh{3,6}\sno/i`

## حل:

 `let ohStr = "Ohhh no"; 
 let ohRegex = /Oh{3,6}\sno/; // Change this line 
 let result = ohRegex.test(ohStr); 
`