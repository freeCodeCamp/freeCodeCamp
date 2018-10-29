---
title: Use Bracket Notation to Find the Last Character in a String
localeTitle: Use la notación de corchete para encontrar el último carácter en una cadena
---
## Use la notación de corchete para encontrar el último carácter en una cadena

Considera la siguiente cadena:
```
var str = "Coding"; 
```

Esta cadena tiene una longitud de 6 caracteres, por lo que si usa .length en la cadena, le dará 6. Pero recuerde que el primer carácter está en la posición cero. El segundo personaje está en la primera posición. El tercer personaje está en la segunda posición.

Continúa, y eventualmente obtendrás que el sexto carácter (que, basado en la cadena anterior, es 'g') está en la quinta posición. Es por eso que obtienes el último carácter de una cadena, con:
```
var lastChar = str[str.length - 1]; // This is 6 - 1, which is 5 
```

Esto será 'g'.