---
title: String.prototype.indexOf
localeTitle: String.prototype.indexOf
---
## String.prototype.indexOf

Метод `indexOf()` возвращает первый индекс, в котором данный элемент может быть найден в массиве. Если элемент отсутствует, он возвращает -1.

**Синтаксис**

```javascript
str.indexOf(searchValue[, fromIndex]) 
```

### параметры

*   **searchValue** Подстрока, для которой вы смотрите. Если это пусто ( `''` ), и нет параметра `fromIndex` , это вернет 0.
    
*   **fromIndex** Дополнительно. Индекс, по которому вы хотите начать поиск. Если значение `fromIndex` больше или равно длине строки, строка не выполняется, и метод возвращает -1. Если `searchValue` - это пустая строка ( `''` ), а `fromIndex` меньше длины строки, она вернет `fromIndex` ; в противном случае он вернет длину строки. (Отрицательное число будет обрабатываться так, как будто аргументов нет).
    

### Описание

Метод `indexOf()` проверяет строку слева направо. Индекс первого символа равен 0; индекс последнего символа - `string.length - 1` . Метод проверяет каждую подстроку на `searchValue` с использованием строгого равенства ( `===` ), что означает, что этот метод чувствителен к регистру. Когда он найдет подстроку, которая возвращает `true` , она возвращает индекс своего первого символа.

### Примеры

```javascript
'Blue Whale'.indexOf('Blue');     // returns  0 
 'Blue Whale'.indexOf('Blute');    // returns -1 
 'Blue Whale'.indexOf('Whale', 0); // returns  5 
 'Blue Whale'.indexOf('Whale', 5); // returns  5 
 'Blue Whale'.indexOf('Whale', 7); // returns -1 
 'Blue Whale'.indexOf('');         // returns  0 
 'Blue Whale'.indexOf('', 9);      // returns  9 
 'Blue Whale'.indexOf('', 10);     // returns 10 
 'Blue Whale'.indexOf('', 11);     // returns 10 
 'Blue Whale'.indexOf('blue');     // returns -1 
```

### Дополнительная информация:

*   Документация [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*   Документация [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript) : [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)