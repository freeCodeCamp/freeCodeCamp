---
title: Object Keys
localeTitle: Ключи объектов
---
Метод `Object.keys()` возвращает массив собственных перечислимых свойств данного объекта в том же порядке, что и `for...in` цикла `for...in` (разница состоит в том, что цикл `for-in` перечисляет свойства в цепочке прототипов как Что ж).

## Синтаксис
```
Object.keys(obj) 
```

### параметры

**OBJ**

Объект, чьи перечислимые собственные свойства должны быть возвращены.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx)

## Описание

`Object.keys()` возвращает массив, чьи элементы являются строками, соответствующими перечислимым свойствам, найденным непосредственно на объекте. Заказ свойств такой же, как и задание путем циклического изменения свойств объекта вручную.

## Примеры
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