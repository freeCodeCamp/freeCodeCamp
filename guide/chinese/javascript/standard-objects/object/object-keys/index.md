---
title: Object Keys
localeTitle: 对象键
---
`Object.keys()`方法返回给定对象自己的可枚举属性的数组，其顺序与`for...in`循环提供的顺序相同（不同之处在于`for-in`循环枚举原型链中的属性为好）。

## 句法
```
Object.keys(obj) 
```

### 参数

**OBJ**

要返回其可枚举自身属性的对象。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx)

## 描述

`Object.keys()`返回一个数组，其元素是与直接在对象上找到的可枚举属性相对应的字符串。属性的顺序与通过手动循环对象的属性给出的顺序相同。

## 例子
```
var arr = ['a', 'b', 'c']; 
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

```