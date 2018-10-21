---
title: Find Characters with Lazy Matching
localeTitle: العثور على شخصيات مع مطابقة كسول
---
## العثور على شخصيات مع مطابقة كسول

#### تحدي دبي:

أصلح regex `/<.*>/` لإرجاع علامة HTML `<h1>` وليس النص `<h1>Winter is coming</h1>` . تذكر حرف البدل. في التعبير العادي يطابق أي حرف.

#### حل:

 `let text = "<h1>Winter is coming</h1>"; 
 let myRegex = /<h1>?/; // it's the answer! 
 let result = text.match(myRegex); 
`