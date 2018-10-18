---
title: Literal Improvements
localeTitle: Mejoras literales
---# Mejoras literales

C # 7.0 permite que \_ ocurra como un **_separador de dígitos_** dentro de números literales:
```
var d = 123_456; 
 var x = 0xAB_CD_EF; 
```

Puedes ponerlos donde quieras entre dígitos, para mejorar la legibilidad. No tienen efecto en el valor.

Además, C # 7.0 introduce **_literales binarios_** , de modo que puede especificar patrones de bits directamente en lugar de tener que conocer de memoria la notación hexadecimal.
```
var b = 0b1010_1011_1100_1101_1110_1111; 

```