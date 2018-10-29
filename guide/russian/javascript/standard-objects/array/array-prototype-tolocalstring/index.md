---
title: Array.prototype.toLocaleString
localeTitle: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

Метод `toLocaleString()` возвращает строку, представляющую элементы массива. Все элементы преобразуются в строки с использованием методов toLocaleString. Результат вызова этой функции предназначен для конкретной локали.

##### Синтаксис:
```
arr.toLocaleString(); 
```

##### параметры

*   `locales` (Необязательно) - аргумент, содержащий либо строку, либо массив языковых тегов [BCP 47](http://tools.ietf.org/html/rfc5646) .
*   `options` (Необязательно) - объект с параметрами конфигурации

##### Возвращаемое значение

Строка, представляющая элементы массива, разделенные строкой, специфичной для локали (например, запятая ",")

## Примеры

```javascript
var number = 12345; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myString = myArray.toLocaleString(); 
 
 console.log(myString); 
 // OUTPUT '12345,10/25/2017, 4:20:02 PM,foo' 
```

Различные выходы могут отображаться на основе идентификатора языка и региона (локали).

```javascript
var number = 54321; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myJPString = myArray.toLocaleString('ja-JP'); 
 
 console.log(myJPString); 
 // OUTPUT '54321,10/26/2017, 5:20:02 PM,foo' 
```

### Дополнительная информация:

Источник: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)