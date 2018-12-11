---
title: Create a JavaScript Slot Machine
localeTitle: قم بإنشاء ماكينة Slot JavaScript
---
لهذا علينا أن نولد ثلاثة أرقام عشوائية باستخدام الصيغة التي تعطيناها وليس المعادلة العامة. `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`

 `slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
`