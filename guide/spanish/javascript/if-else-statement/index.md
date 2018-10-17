---
title: If-Else Statement
localeTitle: Declaración If-Else
---
## Introducción

La sentencia `if` ejecuta una sentencia si una condición especificada es `true` . Si la condición es `false` , se puede ejecutar `else` instrucción utilizando la instrucción `else` .

**Nota:** la sentencia `else` es opcional.

```javascript
if (condition) 
    /* do something */ 
 else 
    /* do something else */ 
```

Se pueden encadenar varias declaraciones `if...else` para crear una cláusula `else if` . Esto especifica una nueva condición para probar y se puede repetir para probar múltiples condiciones, verificando hasta que se presente una declaración verdadera para ejecutar.

```javascript
if (condition1) 
    /* do something */ 
 else if (condition2) 
    /* do something else */ 
 else if (condition3) 
    /* do something else */ 
 else 
    /* final statement */ 
```

**Nota:** Si desea ejecutar más de una sentencia en el `if` , `else` o `else if` se requiere de partes, llaves alrededor de las declaraciones:

```javascript
if (condition) { 
    /* do */ 
    /* something */ 
    /* with multiple statements */ 
 } else { 
    /* do something */ 
    /* else */ 
 } 
```

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Enlace MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Ejemplos

**Usando** `if...else` :

```javascript
    // If x=5 z=7 and q=42. If x is not 5 then z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
```

**Usando** `else if` :

```javascript
if (x < 10) 
    return "Small number"; 
 else if (x < 50) 
    return "Medium number"; 
 else if (x < 100) 
    return "Large number"; 
 else { 
    flag = 1; 
    return "Invalid number"; 
 } 

```