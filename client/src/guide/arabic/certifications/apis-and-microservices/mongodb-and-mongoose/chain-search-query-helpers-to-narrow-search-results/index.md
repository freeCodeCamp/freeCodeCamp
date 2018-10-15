---
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: سلسلة بحث مساعدة المساعدين لضيق نتائج البحث
---
## سلسلة بحث مساعدة المساعدين لضيق نتائج البحث

1.  لإنشاء ولكن لا يتم تنفيذ استعلام بحث

 `Model.find( {name: 'Leah'} ) 
` 

2.  لتخزين استعلام البحث في متغير لاستخدامه لاحقًا:

 `var findQuery = YourModel.find( {name: 'Leah'} ) 
` 

3.  لفرز مصفوفة:

 `yourArray.sort( {age: 1} )  // Here: 1 for ascending    order and -1 for descending order. 
` 

4.  لتحديد حجم المصفوفة:

 `yourArray.limit(5)  // return array which has 5 items in it. 
` 

5.  لإخفاء خاصية معينة من النتيجة:

 `yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show. 
` 

6.  لتنفيذ هذا الاستعلام ، يمكنك إما:  
    1) رد الاتصال:

 `YourQuery.exec(function(err, docs) { 
    //do something here 
 }) 
` 

أو 2) وعد

 `YourQuery.exec.then(function(err, docs) { 
    //do something here 
 }) 
` 

7.  سلسلة كل ذلك معا:

 `Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) { 
  //do something here 
 }) 
` 

  
  

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .