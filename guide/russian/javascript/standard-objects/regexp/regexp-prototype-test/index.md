---
title: RegExp.prototype.test
localeTitle: RegExp.prototype.test
---
## RegExp.prototype.test

Метод `test()` возвращает `true` если строка соответствует регулярному выражению, а `false` если нет.

## Примеры

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /Code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints true 
```

**Примечание.** Регулярные выражения чувствительны к регистру. Вышеприведенный пример вернет `false` если `regEx` is `/code/` вместо `/Code/` . Чтобы сделать регулярное выражение нечувствительным к регистру, вы должны добавить флаг `i` в регулярное выражение.

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints false 
 
 // Include the 'i' flag. 
 
 regEx = /code/i; 
 result = regEx.test(str); 
 console.log(result); // prints true 
```

#### Дополнительная информация:

Ознакомьтесь с [официальной `RegExp.prototype.test()` MDN `RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) для получения дополнительной информации.