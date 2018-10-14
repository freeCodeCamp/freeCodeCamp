---
title: Use conditional logic with If statements
localeTitle: Usa lógica condicional con sentencias if
---
## Usa lógica condicional con sentencias if

### Explicación del problema:

_Cree una instrucción `if` dentro de la función para devolver `"Yes, that was true"` si el parámetro `wasThatTrue` es `true` y devuelva `"No, that was false"` contrario._

#### Sugerencia 1

Su declaración `if` evaluará si su `(condition)` es `true` o `false` y ejecutará (si se evalúa como `true` ) la `{statement}` declarada justo después de esta.

> _intenta resolver el problema ahora_

#### Sugerencia 2

En caso de que su `(condition)` evalúe como `false` la `{statement}` no se ejecutará y la función devolverá la siguiente sentencia de `return` .

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
// Setup 
 function trueOrFalse(wasThatTrue) { 
 
  // Only change code below this line. 
 
  if (wasThatTrue) 
   { 
    return "Yes, that was true"; 
    } 
  return "No, that was false"; 
 
  // Only change code above this line. 
 } 
```

### Explicación del código

La función primero evalúa `if` la condición `(wasThatTrue)` evalúa como `true` . Si lo hace, ir devuelve la declaración entre las llaves. Si no lo hace, devuelve la siguiente declaración de `return` fuera de ellos.

### Recursos

*   ["Boolean" - MDN Glosario](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
    
*   ["if ... else" - referencia de JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)