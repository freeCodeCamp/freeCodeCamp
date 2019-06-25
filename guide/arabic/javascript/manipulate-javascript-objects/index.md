---
title: Manipulate JavaScript Objects
localeTitle: التعامل مع كائنات جافا سكريبت
---
هناك عدة طرق للتعامل مع خصائص الكائن وتدوين النقطة وتدوين الأقواس.

إضافة خصائص إلى كائنات بها تدوين نقطي:

 `myObject.myProperty = "myValue"; 
` 

إضافة خصائص إلى كائنات باستخدام تدرج قوس:

```javascript
myObject['myProperty'] = "myValue";
``` 

باستخدام تدرج القوس ، يمكننا استخدام المتغيرات كأسماء للممتلكات:

```javascript
var dynamicProperty = "myProperty";
myObject[dynamicProperty] = "myValue";
``` 

يمكننا أيضًا حذفها كما يلي:

 `delete(myObject.myProperty); 
`