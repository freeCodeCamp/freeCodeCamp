---
title: Understand the Prototype Chain
localeTitle: فهم سلسلة النموذج
---
## فهم سلسلة النموذج

### حل

يجب أن تُظهر الكود الخاص بك أن Object.prototype هو النموذج الأولي لـ Dog.prototype

\`\` \`جافا سكريبت وظيفة كلب (الاسم) { this.name = name؛ }

دع بيغل = كلب جديد ("سنوبي") ؛

Dog.prototype.isPrototypeOf (بيغل)؛ // => صحيح

// ثبّت الشفرة أدناه حتى يتم تقييمها إلى true Object.prototype.isPrototypeOf (Dog.prototype)؛ \`\` \`