---
title: Implement map on a Prototype
localeTitle: تنفيذ الخريطة على نموذج أولي
---
## تنفيذ الخريطة على نموذج أولي

لحل هذا التحدي باستخدام الكلمة الرئيسية هذا هو المفتاح.

سيتيح لنا الوصول إلى الكائن الذي نطلق عليه myMap.

ومن هناك ، يمكننا استخدام forEach أو for loop لإضافة عناصر إلى مصفوفة فارغة تم تعريفها بالفعل ، حيث نقوم بتعديل كل عنصر باستخدام طريقة رد الاتصال المحددة.

 `// the global Array 
 var s = [23, 65, 98, 5]; 
 
 Array.prototype.myMap = function(callback){ 
  var newArray = []; 
  // Add your code below this line 
  this.forEach(a => newArray.push(callback(a))); 
  // Add your code above this line 
  return newArray; 
 
 }; 
 
 var new_s = s.myMap(function(item){ 
  return item * 2; 
 }); 
` 

### روابط مفيدة

[هذه. Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[هذه. جافا سكريبت W3Schools](https://www.w3schools.com/js/js_this.asp)