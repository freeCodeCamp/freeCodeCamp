---
title: if else Statements
localeTitle: si más declaraciones
---## Introducción

La sentencia `if` ejecuta una sentencia si una condición especificada es **verdadera** . Si la condición es **falsa** , se puede ejecutar `else` instrucción utilizando la instrucción `else` .

**Nota:** la sentencia `else` es opcional.

```Go
  x := 7 
  if x%2 == 0 { 
    // This statement is executed if x is even 
  } else { 
    // This statement is executed if x is odd 
  } 
```

Se pueden anidar varias declaraciones `if...else` para crear una cláusula `else if` .

```go
  x := 7 
  if x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 4 { 
    // this statement is executed if x is 4 
  } else if x == 7 { 
    // this statement is executed if x is 7 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 
```

En Go puede preceder una condición `if` con una sentencia. La definición de la variable que contiene es entonces válida para el bloque `if` completo.

```go
  if x := 3; x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 3 { 
    // this statement is executed if x is 3 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 

```