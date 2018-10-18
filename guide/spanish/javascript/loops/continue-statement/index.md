---
title: Continue Statement
localeTitle: Continuar declaración
---
## Introducción

La instrucción **continue** termina la ejecución de las instrucciones en la iteración actual del bucle actual o etiquetado, y continúa la ejecución del bucle con la siguiente iteración.
```
continue; 
```

Si la instrucción **continue** se usa en una declaración etiquetada, la sintaxis es la siguiente:
```
continue labelName; 
```

A diferencia de la instrucción **break** , **continue** no termina completamente la ejecución del bucle; en lugar:

*   En un bucle de `while` , salta de nuevo a la condición.
*   En un bucle `for` , salta a la expresión de actualización.

## Ejemplos

El siguiente ejemplo muestra un `while` bucle que tiene una declaración de **continuar** que se ejecuta cuando el valor de **i** es 3. Por lo tanto, **n** toma los valores 1, 3, 7 y 12.
```
var i = 0; 
 var n = 0; 
 
 while (i < 5) { 
  i++; 
 
  if (i === 3) { 
    continue; 
  } 
 
  n += i; 
  console.log (n); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7hx/0)

En el siguiente ejemplo, un bucle se repite de 1 a 9. Las declaraciones entre **continuar** y el final del cuerpo `for` se omiten debido al uso de la instrucción **continue** junto con la expresión `(i < 5)` .
```
for (var i = 1; i < 10; i++) { 
    if (i < 5) { 
        continue; 
    } 
    console.log (i); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7hs/0)

## Otros recursos

*   [Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [Enlace MSDN](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)