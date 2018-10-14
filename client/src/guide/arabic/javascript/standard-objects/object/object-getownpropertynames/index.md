---
title: Object getOwnPropertyNames
localeTitle: كائن getOwnPropertyNames
---
إرجاع الأسلوب `Object.getOwnPropertyNames()` صفيف من كافة الخصائص (يمكن عدها أو لا) موجود مباشرة على كائن محدد.

## بناء الجملة

 `Object.getOwnPropertyNames(obj) 
` 

### المعلمات

**الكائنات**

الكائن الذي سيتم إرجاع خصائصه الخاصة _وغير المعدودة_ .

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx)

## وصف

`Object.getOwnPropertyNames()` بإرجاع صفيف عناصره هي سلاسل الموافق خصائص enumerable _وغير enumerable_ وجد مباشرة على الكائن. ترتيب الخصائص التي يمكن حصرها في الصفيف متناسق مع الترتيب الذي تم كشفه من خلال `for...in` حلقة (أو بواسطة `Object.keys()` ) فوق خصائص الكائن. لم يتم تعريف ترتيب الخصائص غير القابلة للتعداد في الصفيف ، وبين الخصائص التي لا تعد ولا تحصى.

## أمثلة

 `var arr = ['a', 'b', 'c']; 
 console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length' 
 
 // Array-like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2' 
 
 // Logging property names and values using Array.forEach 
 Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) { 
  console.log(val + ' -> ' + obj[val]); 
 }); 
 // logs 
 // 0 -> a 
 // 1 -> b 
 // 2 -> c 
 
 // non-enumerable property 
 var my_obj = Object.create({}, { 
  getFoo: { 
    value: function() { return this.foo; }, 
    enumerable: false 
  } 
 }); 
 my_obj.foo = 1; 
 
 console.log(Object.getOwnPropertyNames(my_obj).sort()); // logs 'foo,getFoo' 
 
 function Pasta(grain, size, shape) { 
    this.grain = grain; 
    this.size = size; 
    this.shape = shape; 
 } 
 
 var spaghetti = new Pasta("wheat", 2, "circle"); 
 
 var names = Object.getOwnPropertyNames(spaghetti).filter(CheckKey); 
 document.write(names); 
 
 // Check whether the first character of a string is 's'. 
 function CheckKey(value) { 
    var firstChar = value.substr(0, 1); 
    if (firstChar.toLowerCase() == 's') 
        return true; 
    else 
         return false; 
 } 
 // Output: 
 // size,shape 
`