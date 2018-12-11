---
title: Match Characters that Occur One or More Times
localeTitle: مطابقة الأحرف التي تحدث مرة واحدة أو أكثر
---
## مطابقة الأحرف التي تحدث مرة واحدة أو أكثر

\## المشكلة: تريد البحث عن تطابقات عندما يحدث الحرف s مرة أو أكثر في "Mississippi". اكتب regex يستخدم علامة +. ## الحل

let hardSpelling = "Mississippi"؛ السماح لـ myRegex = / s + / g؛ // هذا هو الحل اسمح للنتيجة = hardSpelling.match (myRegex)؛