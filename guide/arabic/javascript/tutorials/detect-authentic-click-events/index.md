---
title: Detect authentic click events
localeTitle: اكتشاف أحداث النقرات الأصلية
---
## اكتشاف أحداث النقرات الأصلية

قد يكون هناك موقف حيث تريد القيام ببعض الأشياء المحددة فقط إذا كان حدث النقر قد تم عرضه بشكل حقيقي من قبل مستخدم وليس بواسطة برنامج نصي لمحاكاة حدث نقرة.

هناك حل بسيط جدًا لهذه المشكلة ، حيث يمنحنا كائن الحدث javascript خاصية. `.istrusted` ، والتي يمكن استخدامها لمعرفة الفرق.

#### هنا مثال على استخدام هذه الطريقة

 `// Assume there is a button in the HTML 
 const button = document.querySelector('button'); 
 
 button.addEventListener('click', (e) => { 
  if (e.isTrusted) { 
    console.log('Button clicked by a real user'); 
  } else { 
    console.log('Button click simulated by a script'); 
  } 
 }); 
 
 button.click() // Outputs "Button click simulated by a script" 
`