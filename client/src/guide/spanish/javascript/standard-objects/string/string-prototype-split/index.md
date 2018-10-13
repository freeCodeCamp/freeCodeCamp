---
title: String.prototype.split
localeTitle: String.prototype.split
---
## String.prototype.split

La función `split()` separa una cadena original en subcadenas, en función de una _cadena separadora_ que se pasa como entrada.

La salida de la función `split()` es una `Array` de cadenas, que representan las subcadenas separadas de la cadena original.

La cadena original no es alterada por la función `split()` .

Ejemplos:

```js
// We have a regular string 
 "Hello. I am a string. You can separate me." 
 
 // Let's use the split function to separate the string by the period character: 
 "Hello. I am a string. You can separate me.".split("."); 
 // output is [ "Hello", " I am a string", " You can separate me", "" ] 
```

Ya que usamos el período ( `.` ) Como la _cadena separadora_ , las cadenas en la matriz de salida no contienen el período en ellas; las cadenas separadas de salida _no incluyen la propia cadena de separador de entrada_ .

El _separador de cadenas_ no tiene que ser un solo carácter, puede ser cualquier otra cadena:

```js
"Hello... I am another string... keep on learning!".split("..."); 
 // output is [ "Hello", " I am another string", " keep on learning!" ] 
 
 const names = "Kratos- Atreus- Freya- Hela- Thor- Odin"; 
 // notice separator is a dash and a space 
 names.split("- "); 
 // output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ] 
```

#### Más información:

*   [String.prototype.split en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)