---
title: Object Values
localeTitle: 对象值
---
`Object.values()`方法返回给定对象自己的可枚举属性值的数组，其顺序与for ... in循环提供的顺序相同（不同之处在于for-in循环枚举原型链中的属性） ）。

## 句法
```
Object.values(obj) 
```

### 参数

**OBJ**

要返回其可枚举自身属性的对象。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## 描述

`Object.values()`返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与手动循环对象的属性值所给出的顺序相同。换句话说，对象具有键：值对，并且此方法返回该对象在类数组对象中的所有_值_ 。

请参阅[Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/) ，它返回该对象在类数组对象中的所有_键_ 。

## 例子
```
var obj = { foo: 'bar', baz: 42 }; 
 console.log(Object.values(obj)); // ['bar', 42] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.values(obj)); // ['a', 'b', 'c'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.values(an_obj)); // ['b', 'c', 'a'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 'bar'; 
 console.log(Object.values(my_obj)); // ['bar'] 
 
 // non-object argument will be coerced to an object 
 console.log(Object.values('foo')); // ['f', 'o', 'o'] 
```

\* _在Internet Explorer中不起作用_