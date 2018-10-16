---
title: String.prototype.trim
localeTitle: String.prototype.trim
---
## String.prototype.trim

Функция `trim()` удаляет любые символы пробела как из начала, так и из конца данной строки. Он не изменяет исходную строку; он выводит новый.

Примеры:

```js
"  Hello, campers. I have spaces on both ends!  ".trim(); 
 // output is "Hello, campers. I have spaces on both ends!" 
```

`trim()` не только удаляет пробелы; он удаляет любой пробельный символ, такой как вкладки, разрывы строк, пробелы без пробелов и т. д.

Это полезно, например, когда вы хотите обработать текстовый ввод от пользователя, и они, возможно, отправили строку с пробелами в конце, которое вам может не понадобиться.

#### Дополнительная информация:

*   [String.prototype.trim () на MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)