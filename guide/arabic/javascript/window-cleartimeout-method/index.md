---
title: Window clearTimeout Method
localeTitle: نافذة clearTimeout الطريقة
---
## نافذة clearTimeout الطريقة

يتم استخدام أسلوب "clearTimeout ()" لإيقاف ضبط المؤقت باستخدام "setTimeout ()".

 `    clearTimeout(setTimeout_ID); 
` 

إذا تم استدعاء الأسلوب "clearTimeout () قبل انتهاء المؤقت ، فسيتم إيقاف الأسلوب" clearTimeout () '' في الأسلوب 'setTimeout ()' من التنفيذ.

لتتمكن من استخدام أسلوب "clearTimeout ()" ، يجب استخدام متغير عام. انظر المثال أدناه

 `    myID = setTimeout(function, milliseconds); 
` 

#### معلومات اكثر:

الوثائق: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)