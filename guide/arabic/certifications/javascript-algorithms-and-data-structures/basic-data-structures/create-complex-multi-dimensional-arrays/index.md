---
title: Create complex multi-dimensional arrays
localeTitle: إنشاء صفائف معقدة متعددة الأبعاد
---
## إنشاء صفائف معقدة متعددة الأبعاد

*   يجب أن تدرج السلسلة الأولى - `deep` - ثلاثة مستويات عميقة. هذا يعني ضمن ثلاث مجموعات بالضبط من `[square-brackets]` .

 `let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]]; 
` 

*   باستخدام هذه السلاسل إدراج المنطق `deep` ، `deeper` `deepest` في المصفوفة ثلاث مستويات عميقة ، أربعة مستويات عميقة وخمس مستويات العميق على التوالي.

## حل:

 `let myNestedArray = [ 
  // change code below this line 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  ['loop', 'shift', 6, 7, 1000, 'method'], 
  ['concat', false, true, 'spread', 'array',["deep"]], 
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]], 
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ] 
  // change code above this line 
 ]; 
`