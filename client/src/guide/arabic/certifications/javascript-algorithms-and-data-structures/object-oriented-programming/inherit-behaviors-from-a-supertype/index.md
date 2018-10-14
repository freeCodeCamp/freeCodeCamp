---
title: Inherit Behaviors from a Supertype
localeTitle: وراثة السلوكيات من Supertype
---
## وراثة السلوكيات من Supertype

### طريقة

لتمرير هذا التحدي ببساطة خلق جديدة `duck` و `beagle` الكائنات باستخدام `Object.create()` طريقة رأينا في المثال التالي.

\`\` \`جافا سكريبت

السماح للحيوان = Object.create (Animal.prototype) ؛

 `### Solution 
` 

جافا سكريبت

وظيفة الحيوان () {}

Animal.prototype = { منشئ: الحيوان ، أكل: وظيفة () { console.log ("nom nom nom")؛ } }؛

// أضف رمزك أدناه هذا السطر

السماح بطة = Object.create (Animal.prototype) ؛ // قم بتغيير هذا الخط let beagle = Object.create (Animal.prototype) ؛؛ // قم بتغيير هذا الخط

duck.eat ()؛ / / يجب طباعة "nom nom nom" beagle.eat ()؛ / / يجب طباعة "nom nom nom"

\`\` \`