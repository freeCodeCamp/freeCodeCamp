---
title: Match Characters that Occur Zero or More Times
localeTitle: مطابقة الأحرف التي تحدث Zero أو أوقات إضافية
---
## مطابقة الأحرف التي تحدث Zero أو أوقات إضافية

لا يجب أن يحدث أي حرف في تعبير regex يتبعه `*` في السلسلة التي تم اختبارها ، في حين يجب أن يظهر أي حرف في تعبير regex متبوعًا بـ `+` في سلسلة واحدة على الأقل ، كما هو موضح أدناه ،

 `let phrase = "ba humbug"; 
 
 let regexPlus = /bah+/; 
 let regexStar = /bah*/; 
 
 regexPlus.test(phrase);  // returns false 
 regexStar.test(phrase);  // returns true 
` 

كلاهما يسمحان بأي عدد من الأحداث من نفس الحرف في صف ، على سبيل المثال ،

 `let phrase = "wooooow look at that!"; 
 
 let regexPlus = /wo+w/; 
 let regexStar = /wo*w/; 
 
 regexPlus.test(phrase); // returns true 
 regexStar.test(phrase); // returns true 
`