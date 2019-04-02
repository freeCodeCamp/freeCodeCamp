---
title: String.prototype.concat
localeTitle: String.prototype.concat
---
El método concat () combina el texto de dos o más cadenas y devuelve una nueva cadena.

**Sintaxis**
```
str.concat(string2[,..., stringN]); 
```

## Parámetros

**string2… string _N_** Las cadenas que deben ser concatenadas a esta cadena.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## Descripción

El método concat () combina el texto de dos o más cadenas y devuelve la cadena concatenada. No modifica las cuerdas originales.

## Ejemplos

**Cuerdas de concatenacion**

```JavaScript
    var str1 = "Hello"; 
    var str2 = "World"; 
    console.log(str1.concat(str2)); 
    // Console will output: HelloWorld 
 
    var str2 = "Hello, "; 
    console.log(str2.concat(" Welcome ", "to FCC.")); 
    // Console will output: Hello, Welcome to FCC. 
```

Fuente \[MDN\]