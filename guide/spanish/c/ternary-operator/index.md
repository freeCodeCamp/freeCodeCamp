---
title: Ternary Operator
localeTitle: Operador ternario
---
## Operador ternario

Los programadores utilizan operadores ternarios en C para la toma de decisiones en lugar de sentencias condicionales **si** y **si** **no** . El operador ternario es un operador que toma tres argumentos. El primer argumento es un argumento de comparación, el segundo es el resultado de una comparación verdadera, y el tercero es el resultado de una comparación falsa. Si le ayuda, puede pensar en el operador como una forma abreviada de escribir una declaración if-else.

Aquí hay un ejemplo simple de toma de decisiones usando **if** y **else** :

```c
int a = 10, b = 20, c; 
 
 if (a < b) { 
    c = a; 
 } 
 else { 
    c = b; 
 } 
 
 printf("%d", c); 
```

Este ejemplo toma más de 10 líneas, pero eso no es necesario. Puede escribir el programa anterior en solo 3 líneas de código usando el **operador ternario** .

### Sintaxis

`condition ? value_if_true : value_if_false`

La declaración se evalúa como sentencia\_1 si la condición es verdadera y, de lo contrario, sentencia\_2.

Aquí está el ejemplo anterior reescrito para usar el operador ternario:

```c
int a = 10, b = 20, c; 
 
 c = (a < b) ? a : b; 
 
 printf("%d", c); 
```

La salida del ejemplo debe ser:

```c
10 
```

`c` se establece igual a `a` , porque la condición `a<b` era verdadera.

Esto parece bastante simple, ¿verdad? Tenga en cuenta que `value_if_true` y `value_if_false` deben tener el mismo tipo, y no pueden ser declaraciones completas sino simplemente expresiones.

El operador ternario se puede anidar también igual que las instrucciones anidadas if-else. Considere esta declaración if-else anidada:

```c
int a = 1, b = 2, ans; 
 if (a == 1) { 
    if (b == 2) { 
        ans = 3; 
    } else { 
        ans = 5; 
    } 
 } else { 
    ans = 0; 
 } 
 printf ("%d\n", ans); 
```

Aquí está el código anterior reescrito usando un operador ternario anidado:

```c
int a = 1, b = 2, ans; 
 ans = (a == 1 ? (b == 2 ? 3 : 5) : 0); 
 printf ("%d\n", ans); 
```

La salida de los dos códigos anteriores debe ser:

```c
3 

```