---
title: String.prototype.substring
localeTitle: String.prototype.substring
---
## String.prototype.substring

Функция `substring()` _извлекает_ последовательность символов из другой заданной строки. Он не изменяет исходную строку.

Вы определяете последовательность для извлечения с _индексом начала и конца символа_ . Эти индексы передаются в функцию `substring()` качестве параметров. Подстрока формируется из характера начального индекса вплоть до символа конечного индекса. Оба индекса подсчитываются с начала строки, начиная с `0` .

Примеры:

```js
"Hello, campers".substring(7, 14); 
 // output is "campers" 
 
 "Hello, world".substring(0, 5); 
 // output is "Hello" 
```

Вы также можете опустить последний параметр индекса символа, а последовательность подстрок будет извлекаться из индекса начала до конца строки. Пример:

```js
"Hello, campers!".substring(7); 
 // output is "campers!" 
```

#### Дополнительная информация:

*   [String.prototype.substring () на MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)