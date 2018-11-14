---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
localeTitle: استخدم Bracket Notation للبحث عن الحرف Nth-to-Last في سلسلة
---
## استخدم Bracket Notation للبحث عن الحرف Nth-to-Last في سلسلة

تذكر أن موضع أي حرف ، هو **طول السلسلة ، ناقص واحد ، مطروحًا منه عدد الأحرف بعده** . على سبيل المثال ، إذا كنت تحاول العثور على الحرف الثالث الأخير من السلسلة التالية:

 `var str = "Programming"; 
 var secondToLastChar = str[str.length - 2]; // This is 'i' 
` 

كما ترى ، هناك حرف إضافي واحد بعد 'n' (وهذا هو 'g').