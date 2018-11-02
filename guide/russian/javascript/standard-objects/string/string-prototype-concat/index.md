---
title: String.prototype.concat
localeTitle: String.prototype.concat
---
Метод concat () объединяет текст двух или более строк и возвращает новую строку.

**Синтаксис**
```
str.concat(string2[,..., stringN]); 
```

## параметры

**string2 ... string _N_** Строки, которые должны быть объединены с этой строкой.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## Описание

Метод concat () объединяет текст двух или более строк и возвращает конкатенированную строку. Он не изменяет исходные строки.

## Примеры

**Конкатенация строк**

```JavaScript
    var str1 = "Hello"; 
    var str2 = "World"; 
    console.log(str1.concat(str2)); 
    // Console will output: HelloWorld 
 
    var str2 = "Hello, "; 
    console.log(str2.concat(" Welcome ", "to FCC.")); 
    // Console will output: Hello, Welcome to FCC. 
```

Источник \[MDN\]