---
title: Object Values
localeTitle: Значения объектов
---
Метод `Object.values()` возвращает массив собственных значений перечислимого свойства данного объекта в том же порядке, что и в цикле for for ... in (разница заключается в том, что цикл for-in перечисляет свойства в цепочке прототипов, а также ).

## Синтаксис
```
Object.values(obj) 
```

### параметры

**OBJ**

Объект, чьи перечислимые собственные свойства должны быть возвращены.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Описание

`Object.values()` возвращает массив, чьи элементы являются перечисляемыми значениями свойств, найденными на объекте. Заказ свойств такой же, как и задание путем циклического обращения к значениям свойств объекта вручную. Другими словами, у объекта есть пары ключ: значение, и этот метод возвращает все _значения_ этого объекта в подобном массиву объекте.

См. [Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/) , который возвращает все _ключи_ этого объекта в подобном массиву объекте.

## Примеры
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

\* _не работает в Internet Explorer_