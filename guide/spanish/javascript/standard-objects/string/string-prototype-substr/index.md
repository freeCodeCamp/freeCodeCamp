---
title: String.prototype.substr
localeTitle: String.prototype.substr
---
## String.prototype.substr

El método substr () extrae partes de una cadena, comenzando en el carácter en la posición especificada, y devuelve el número especificado de caracteres.

#### Sintaxis

```JavaScript
  string.substr(start, length); 
```

#### Valores paramétricos

| Parámetro | Descripción | | : ------------- | : ------------- | | inicio | **Necesario.** La posición donde comenzar la extracción. El primer carácter está en el índice 0. Si el _inicio_ es positivo y mayor que, o igual, a la longitud de la cadena, substr () devuelve una cadena vacía. Si _inicio_ es negativo, substr () lo usa como un índice de caracteres desde el final de la cadena. Si el _inicio_ es negativo o mayor que la longitud de la cadena, el inicio se establece en 0 | | longitud | **Opcional** El número de caracteres a extraer. Si se omite, extrae el resto de la cadena |

#### Ejemplos:

```JavaScript
let str = "Hello world!"; 
 let res = str.substr(1, 4); 
```

El resultado de res será:
```
ello 
```

#### Más información:

[JavaScript String substr () Método](https://www.w3schools.com/jsref/jsref_substr.asp) .