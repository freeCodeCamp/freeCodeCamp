---
title: String.prototype.concat
localeTitle: String.prototype.concat
---
O método concat () combina o texto de duas ou mais strings e retorna uma nova string.

**Sintaxe**
```
str.concat(string2[,..., stringN]); 
```

## Parâmetros

**string2… string _N_** As strings que devem ser concatenadas a esta String.

[Link MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## Descrição

O método concat () combina o texto de duas ou mais strings e retorna a string concatenada. Não modifica as strings originais.

## Exemplos

**Concatenando strings**

```JavaScript
    var str1 = "Hello"; 
    var str2 = "World"; 
    console.log(str1.concat(str2)); 
    // Console will output: HelloWorld 
 
    var str2 = "Hello, "; 
    console.log(str2.concat(" Welcome ", "to FCC.")); 
    // Console will output: Hello, Welcome to FCC. 
```

Fonte \[MDN\]