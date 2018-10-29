---
title: Add New Properties to a JavaScript Object
localeTitle: أضف خصائص جديدة إلى كائن JavaScript
---
يمكنك إضافة خصائص جديدة إلى كائنات JavaScript الموجودة بالطريقة نفسها التي يمكنك تعديلها بها.

هناك نوعان مختلفان من البُنى التركيبية ، وتدوين النقاط ، وتدوين القوس. يفضل الترميز النقطي بشكل عام لقابلية القراءة ولكن يجب أن تكون الخصائص معرفًا صالحًا.

إليك كيفية استخدام ميزة التدوين النقطي:

 `myDog.bark = "woof-woof"; 
` 

إليك كيفية استخدام تدرج قوس:

 `myObject['bark'] = "woof-woof"; 
` 

باستخدام تدرج القوس ، يمكننا استخدام المتغيرات كأسماء للممتلكات:

 `var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 
`