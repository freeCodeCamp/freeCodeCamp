---
title: Understand Own Properties
localeTitle: Понять собственные свойства
---
## Понять собственные свойства

### Метод:

В приведенном примере кода вы увидите новый массив `ownProps[]` intialised, за которым следует инструкция `for...in` цикле через свойства `duck` а затем используйте оператор `push()` для заполнения нового массива. Тот же метод должен применяться для `canary` объекта.

Просто замените объект `duck` в выражении «for ... in» с `canary` чтобы передать все тестовые примеры.

### Решение:

```javascript
let canary = new Bird("Tweety"); 
 let ownProps = []; 
 // Add your code below this line 
 for(let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  } 
 } 

```