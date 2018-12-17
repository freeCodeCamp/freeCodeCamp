---
title: If-Else Statement
localeTitle: Declaración If-Else
---
## Introducción

La sentencia `if` ejecuta una sentencia si una condición especificada es verdadera `true` . Si la condición es falsa `false` , se puede ejecutar otra instrucción, o la siguiente en la lista de condiciones, utilizando la instrucción `else` .

**Nota:** la sentencia `else` es opcional.

```javascript
if (condición) 
    /* Hacer algo */ 
 else 
    /* Hacer otra cosa */ 
```

Se pueden encadenar varias declaraciones `if...else` para crear una cláusula o condición: sino, entonces `else if` . Esto especifica una nueva condición para probar y se puede repetir para probar múltiples condiciones, verificando hasta que se presente una declaración verdadera para ejecutar.

```javascript
if (condición1) 
    /* Hacer algo */ 
 else if (condición2) 
    /* Hacer otra cosa */ 
 else if (condición3) 
    /* Hacer otra cosa */ 
 else 
    /* sentencia final */ 
```

**Nota:** Si desea ejecutar más de una sentencia en el `if` , `else` o `else if` se requiere de bloques, llaves alrededor de las declaraciones:

```javascript
if (condición) { 
    /* hacer */ 
    /* algo */ 
    /*con múltiples sentencias */ 
 } else { 
    /* hacer otra */ 
    /* cosa */ 
 } 
```

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Enlace MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Ejemplos

**Usando** `if...else` :

```javascript
    // Si x=5 --> z=7 y q=42. Si x no es igual a 5 --> z=19.
    if (x == 5) { 
      z = 7; 
      q = 42; 
    }else 
      z = 19; 
```

**Usando** `else if` :

```javascript
if (x < 10) 
    return "Numero pequeño"; 
 else if (x < 50) 
    return "Numero intermedio"; 
 else if (x < 100) 
    return "Numero grande"; 
 else { 
    flag = 1; 
    return "Numero Invalido"; 
 } 

```
