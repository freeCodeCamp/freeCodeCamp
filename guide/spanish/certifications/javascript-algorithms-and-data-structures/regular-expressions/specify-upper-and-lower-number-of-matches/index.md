---
title: Specify Upper and Lower Number of Matches
localeTitle: Especifique el número superior e inferior de coincidencias
---
## Especifique el número superior e inferior de coincidencias

Recuerde que `/a{2,4}/` devolverá `true` siempre que haya entre dos y cuatro a juntas. Devolverá `true` para cualquier cadena que tenga más de cuatro a juntas también.

Todas estas cadenas devolverán `true` :

```javascript
let threeAs = "aaa"; 
 let fourAs = "aaaa"; 
 let sevenAs = "aaaaaaa"; 
 
 let myRegex = /a{2,4}/; 
 myRegex.test(threeAs) ; // true 
 myRegex.test(fourAs) ; // true 
 myRegex.test(sevenAs) ; // true 
```

## ¡Alerta Spolier!

Recuerde usar `\s` después de `Oh{3,6}` para incluir un espacio en blanco, seguido de `no` para pasar todos los casos de prueba. Todos los casos de prueba se escriben con una O mayúscula, sin embargo, los casos de prueba también se pueden pasar usando `ignore-case` : `/oh{3,6}\sno/i`

## Solución:

```javascript
let ohStr = "Ohhh no"; 
 let ohRegex = /Oh{3,6}\sno/; // Change this line 
 let result = ohRegex.test(ohStr); 

```