---
title: Function Invocation
localeTitle: Вызов функции
---
## Вызов функции

Код внутри функции выполняется при вызове функции. Обычно используется термин «вызов функции» вместо «вызывать функцию».

Функции должны быть в области действия, когда они вызываются. Объем функции - это функция, в которой она объявлена, или вся программа, если она объявлена ​​на верхнем уровне.

```javascript
function myFunction(a, b) { 
  return a * b; 
 } 
 myFunction(10, 2);           // Function invocation, will return 20 
 
 //optional parameters (es6 only) 
 //allow to set optional parameters 
 
 function myFunction(a, b = 10) { 
  return a * b; 
 } 
 myFunction(1);           // Function invocation, will return 10 
 myFunction(1,5);           // Function invocation, will return 5 
```

В примере кода a и b являются параметрами функции, которые содержат значения 10 и 2, которые являются аргументами, используемыми в вызове функции.

### Вызов функции как метода

В JavaScript вы можете определять функции как методы объекта.

В следующем примере создается объект ( `myObject` ) с двумя свойствами ( `firstName` и `lastName` ) и методом ( `fullName` ):

```javascript
var myObject = { 
  firstName:"John", 
  lastName: "Doe", 
  fullName: function () { 
    return this.firstName + " " + this.lastName; 
  } 
 } 
 myObject.fullName();         // Function invoked as a method, will return "John Doe" 
```

### Функции стрелки

В новейшей версии Javascript вы также можете сократить синтаксис с помощью функций стрелок. На следующем рисунке показаны две функции. Один из них написан в стандартной форме, один написан как функция стрелки. Имейте в виду, что функции стрелок не имеют собственных, аргументов, супер или new.target.

```javascript
//regular function 
 
 function addStuff(args) { 
   return args + 2; 
 } 
 
 addStuff(2); 
 //returns 4 
 
 //arrow function 
 
 var addStuff = (args) => args + 2; 
 addStuff(2); 
 //returns 4 
```

Эта сокращенная версия функции стрелки имеет неявный возврат, поэтому вы не указываете оператор return.

### Дополнительная информация:

*   Документация по функциям: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)