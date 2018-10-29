---
title: String.prototype.split
localeTitle: String.prototype.split
---
## String.prototype.split

Функция `split()` разделяет исходную строку на подстроки на основе _строки разделителя,_ которую вы передаете в качестве входных данных.

Результатом функции `split()` является `Array` строк, которые представляют собой разделенные подстроки из исходной строки.

Исходная строка не изменяется функцией `split()` .

Примеры:

```js
// We have a regular string 
 "Hello. I am a string. You can separate me." 
 
 // Let's use the split function to separate the string by the period character: 
 "Hello. I am a string. You can separate me.".split("."); 
 // output is [ "Hello", " I am a string", " You can separate me", "" ] 
```

Поскольку мы использовали период ( `.` ) В качестве _разделительной строки_ , строки в выходном массиве не содержат период в них; выходные разделенные строки _не включают в себя строку разделителя ввода_ .

_Разделитель строк_ не должен быть одним символом, это может быть любая другая строка:

```js
"Hello... I am another string... keep on learning!".split("..."); 
 // output is [ "Hello", " I am another string", " keep on learning!" ] 
 
 const names = "Kratos- Atreus- Freya- Hela- Thor- Odin"; 
 // notice separator is a dash and a space 
 names.split("- "); 
 // output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ] 
```

#### Дополнительная информация:

*   [String.prototype.split на MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)