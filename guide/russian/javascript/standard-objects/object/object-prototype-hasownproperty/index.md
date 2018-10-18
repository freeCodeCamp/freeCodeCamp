---
title: Object.prototype.hasOwnProperty
localeTitle: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### Синтаксис

`Object.hasOwnProperty(prop)`

### Описание

Метод **hasOwnProperty ()** возвращает [логическое значение,](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) указывающее, принадлежит ли объекту указанное свойство.

Это удобный способ проверить, имеет ли объект указанное свойство или нет; соответственно возвращая true / false.

### параметры

##### подпирать

[Строка](https://developer.mozilla.org/en-US/docs/Glossary/String) или [символ](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) для тестирования.

### Примеры

используя **hasOwnProperty ()** для проверки наличия или отсутствия свойства в данном объекте:

```js
var course = { 
  name: 'freeCodeCamp', 
  feature: 'is awesome', 
 } 
 
 var student = { 
  name: 'enthusiastic student', 
 } 
 
 course.hasOwnProperty('name');  // returns true 
 course.hasOwnProperty('feature');   // returns true 
 
 student.hasOwnProperty('name');  // returns true 
 student.hasOwnProperty('feature'); // returns false 
```

#### связи

[MDN hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)