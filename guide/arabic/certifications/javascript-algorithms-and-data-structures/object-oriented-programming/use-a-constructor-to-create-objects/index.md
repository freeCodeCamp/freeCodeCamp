---
title: Use a Constructor to Create Objects
localeTitle: استخدم منشئ لإنشاء كائنات
---
## استخدم منشئ لإنشاء كائنات

### طريقة:

رأينا في التحدي الأخير كيفية إنشاء وظيفة منشئ. الآن يمكننا ببساطة استدعاء هذه الوظيفة لإنشاء كائن جديد مع خصائص محددة بالفعل في المنشئ. ببساطة تهيئة `hound` متغير جديد استدعاء منشئ `Dog()` .

### حل:

 `function Dog() { 
  this.name = "Rupert"; 
  this.color = "brown"; 
  this.numLegs = 4; 
 } 
 // Add your code below this line 
 let hound = new Dog(); 
`