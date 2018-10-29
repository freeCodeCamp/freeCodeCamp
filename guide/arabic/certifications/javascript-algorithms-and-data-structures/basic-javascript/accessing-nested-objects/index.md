---
title: Accessing Nested Objects
localeTitle: الوصول إلى الكائنات المتداخلة
---
## الوصول إلى الكائنات المتداخلة

فكرة: **_"استخدام تدرج قوس الخصائص مع مساحة في أسمائهم."_**

إذا نظرنا إلى هدفنا:

 `var myStorage = { 
  "car": { 
    "inside": { 
      "glove box": "maps", 
      "passenger seat": "crumbs" 
     }, 
    "outside": { 
      "trunk": "jack" 
    } 
  } 
 }; 
` 

اسم هدفنا هو `myStorage` .

| - داخل أن لدينا كائن متداخل يسمى `car` .

| --- داخل ذلك لدينا اثنين آخرين يسمى `inside` `outside` كل منهما الممتلكات الخاصة

يمكنك تصور بنية الكائن مثل هذا ، إذا كانت تساعد:

 `myStorage 
 |-- car 
 |--- inside 
 |----- glove box: maps 
 |----- passenger seat: crumbs 
 |--- outside 
 |----- trunk: jack 
` 

مطلوب منا تعيين محتويات `glove box` ، والتي يمكننا رؤيتها متداخلة في الكائن `inside` ، والتي بدورها متداخلة في جسم `car` .

يمكننا استخدام الترميز النقطي للوصول إلى `glove box` النحو التالي:

 `var gloveBoxContents = myStorage.car.inside'complete here' 
` 

يجب عليك استبدال `complete here` بالطريقة الصحيحة للوصول إلى الخاصية. انظر فكرة أعلاه إذا واجهتك مشكلة.