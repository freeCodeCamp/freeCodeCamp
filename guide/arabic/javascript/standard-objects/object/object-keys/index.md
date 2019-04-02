---
title: Object Keys
localeTitle: مفاتيح الكائن
---
إرجاع الأسلوب `Object.keys()` صفيف خصائص enumerable الخاصة كائن محدد في نفس الترتيب كتلك المقدمة من قبل `for...in` حلقة (الفرق هو أن حلقة `for-in` تعداد خصائص في سلسلة النموذج الأولي كـ حسنا).

## بناء الجملة

 `Object.keys(obj) 
` 

### المعلمات

**الكائنات**

الكائن الذي سيتم إرجاع خصائصه الخاصة به.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx)

## وصف

`Object.keys()` ترجع مصفوفة تكون عناصرها عبارة عن سلاسل مطابقة للخصائص اللامحدودة الموجودة مباشرة على الكائن. ترتيب الخصائص هو نفسه الذي يتم تحديده بواسطة التكرار فوق خصائص الكائن يدويًا.

## أمثلة

 `var arr = ['a', 'b', 'c']; 
 console.log(Object.keys(arr)); // console: ['0', '1', '2'] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.keys(obj)); // console: ['0', '1', '2'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.keys(an_obj)); // console: ['2', '7', '100'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 1; 
 
 console.log(Object.keys(my_obj)); // console: ['foo'] 
 
 // Create a constructor function. 
 function Pasta(grain, width, shape) { 
    this.grain = grain; 
    this.width = width; 
    this.shape = shape; 
 
    // Define a method. 
    this.toString = function () { 
        return (this.grain + ", " + this.width + ", " + this.shape); 
    } 
 } 
 
 // Create an object. 
 var spaghetti = new Pasta("wheat", 0.2, "circle"); 
 
 // Put the enumerable properties and methods of the object in an array. 
 var arr = Object.keys(spaghetti); 
 document.write (arr); 
 
 // Output: 
 // grain,width,shape,toString 
`