---
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: Использование назначения назначения для назначения переменных из объектов
---
## Использование назначения назначения для назначения переменных из объектов

# Эта задача требует некоторой интуиции о строковых объектах в javascript.

Когда вы создаете строковый объект, он основан на следующем [прототипе строки](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) .

Таким образом, каждая строка имеет свойство length; genericString = {длина: 13}. (Это единственное принятое свойство из String.prototype.)

# Переназначить свойства с помощью деконструкции.

```javascript
var basicOjb = {x: 40}; 
 //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6: 
 const { x: bigX } = basicOjb; 
 consle.log(bigX) // ans = 40 
```

Поместите значение свойства length 'str' в len.