---
title: Use an IIFE to Create a Module
localeTitle: Использование модуля IIFE для создания модуля
---
## Использование модуля IIFE для создания модуля

### метод

Оба `Mixin` должны быть завернуты в новый `funModule` так что отправная точка отсрочки состоит в том, чтобы прокомментировать весь код до сих пор.

```javascript
/*let isCuteMixin = function(obj) { 
  obj.isCute = function() { 
    return true; 
  }; 
 }; 
 let singMixin = function(obj) { 
  obj.sing = function() { 
    console.log("Singing to an awesome tune"); 
  }; 
 }; 
 */ 
```

Затем ниже начните писать свой новый код `funModule` . Внутри нового модуля вам нужно написать оператор return, чтобы вернуть оба блока кода `Mixin` . Просто скопируйте оба оригинальных блока кода `Mixin` в свой новый код модуля, но не забудьте выделить оба микшина с помощью `,`

### Решение

```javascript
let funModule = (function() { 
  return { 
    isCuteMixin: function(obj) { 
      obj.isCute = function() { 
        return true; 
      }; 
    }, 
    singMixin: function(obj) { 
      obj.sing = function() { 
         console.log("Singing to an awesome tune"); 
      }; 
    } 
  } 
 })(); 

```