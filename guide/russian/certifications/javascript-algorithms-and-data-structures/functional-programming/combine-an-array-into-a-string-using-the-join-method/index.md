---
title: Combine an Array into a String Using the join Method
localeTitle: Объединение массива в строку Использование метода объединения
---
## Объединение массива в строку Использование метода объединения

### Проблема Объяснение

Используйте метод `join` (среди других) внутри функции `sentensify` чтобы сделать предложение из слов в строке `str` . Функция должна возвращать строку. Например, «I-like-Star-Wars» будет преобразован в «Мне нравятся« Звездные войны ». Для этой задачи не используйте метод `replace` .

#### Полезные ссылки:

*   [Array.prototype.join ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.prototype.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [Регулярные выражения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Hint1

Возможно, вам придется сначала преобразовать строку в массив.

### Hint2

Возможно, вам придется использовать регулярное выражение для разделения строки.

### Решение:

```javascript
function sentensify(str) { 
  // Add your code below this line 
  return str.split(/\W/).join(' '); 
  // Add your code above this line 
 } 
 sentensify("May-the-force-be-with-you"); 

```