---
title: Break Statement
localeTitle: Declaración de ruptura
---
## Introducción

La sentencia **break** termina el bucle de corriente, `switch` o `label` de control de programa declaración y las transferencias a la instrucción que sigue a su terminación.
```
break; 
```

Si la instrucción **break** se usa en una declaración etiquetada, la sintaxis es la siguiente:
```
break labelName; 
```

## Ejemplos

La siguiente función tiene una sentencia **break** que termina el `while` de bucle cuando **i** es 3, y luego devuelve el valor **3 \* x.**
```
function testBreak(x) { 
  var i = 0; 
 
  while (i < 6) { 
    if (i == 3) { 
      break; 
    } 
    i += 1; 
  } 
 
  return i * x; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7VM/0)

En el siguiente ejemplo, el contador está configurado para contar de 1 a 99; sin embargo, la sentencia **break** termina el bucle después de 14 recuentos.
```
for (var i = 1; i < 100; i++) { 
  if (i == 15) { 
    break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7VO/0)

## Otros recursos:

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [Enlace MSDN](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)