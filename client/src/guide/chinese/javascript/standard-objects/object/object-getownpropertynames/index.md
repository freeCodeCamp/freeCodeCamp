---
title: Object getOwnPropertyNames
localeTitle: Object getOwnPropertyNames
---
`Object.getOwnPropertyNames()`方法返回直接在给定对象上找到的所有属性（可枚举或不可枚举`Object.getOwnPropertyNames()`的数组。

## 句法
```
Object.getOwnPropertyNames(obj) 
```

### 参数

**OBJ**

将返回其可枚举_和不可枚举的_自身属性的对象。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx)

## 描述

`Object.getOwnPropertyNames()`返回一个数组，其元素是与直接在对象上找到的可枚举_和不可枚举_属性相对应的字符串。数组中可枚举属性的排序与`for...in`循环（或`Object.keys()` ）在对象属性上公开的顺序一致。未定义数组中以及可枚举属性中的非可枚举属性的顺序。

## 例子
```
var arr = ['a', 'b', 'c']; 
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

```