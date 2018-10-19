---
title: Delete Properties from a JavaScript Object
localeTitle: Удаление свойств из объекта JavaScript
---
Мы также можем удалить свойства из таких объектов:
```
delete ourDog.bark; 
```

Оператор **delete** удаляет свойство из объекта.

## Синтаксис

`delete expression` где выражение должно оценивать ссылку на свойство, например:
```
delete object.property 
 delete object['property'] 
```

## параметры

**объект**  
Имя объекта или выражение, оценивающее объект.

**имущество**  
Свойство для удаления.

## пример

```js
var person = {name:'Jay', age:'52'}; 
 delete person['age']; 
 
 console.log(person); //{name:'Jay'} 
```

## Возвращаемое значение

Выдает строгий режим, если свойство является собственным неконфигурируемым свойством (возвращает false в нестрочном режиме). Возвращает true во всех остальных случаях.

[Прочитайте больше](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)