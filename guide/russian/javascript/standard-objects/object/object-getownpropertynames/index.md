---
title: Object getOwnPropertyNames
localeTitle: Объект getOwnPropertyNames
---
Метод `Object.getOwnPropertyNames()` возвращает массив всех свойств (перечисляемых или нет), найденных непосредственно на заданном объекте.

## Синтаксис
```
Object.getOwnPropertyNames(obj) 
```

### параметры

**OBJ**

Объект, чьи перечислимые _и неперечислимые_ собственные свойства должны быть возвращены.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx)

## Описание

`Object.getOwnPropertyNames()` возвращает массив, чьи элементы являются строками, соответствующими перечислимым _и неперечислимым_ свойствам, найденным непосредственно на объекте. Порядок перечисляемых свойств в массиве согласуется с порядком, выставленным с помощью цикла `for...in` (или `Object.keys()` ) над свойствами объекта. Порядок неперечислимых свойств в массиве и среди перечислимых свойств не определен.

## Примеры
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