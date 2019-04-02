---
title: Escaping Literal Quotes in Strings
localeTitle: الهروب من الأسعار الحرفيه في الاوتار
---
## الهروب من الأسعار الحرفيه في الاوتار

*   عندما تحتاج إلى استخدام حرف خاص مثل `"` داخل سلسلة ، يجب عليك الفرار منه باستخدام `\` .
*   إذا كنت تستخدم علامات الاقتباس المزدوجة `"` للسلسلة، ونقلت واحدة `'` لا تحتاج إلى أن هرب في السلسلة.
*   إذا كنت تستخدم علامات الاقتباس المفردة `'` للسلسلة ، فلا تحتاج إلى اقتباس علامات الاقتباس المزدوجة `"` في السلسلة.

## حل

 `var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.'; 
 var noEscapeSingle = "There is no need to 'escape' the single quotes."; 
 var noEscapeDouble = 'There is no need to "escape" the double quotes.'; 
`