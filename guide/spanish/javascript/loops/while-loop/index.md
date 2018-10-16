---
title: While Loop
localeTitle: Mientras bucle
---
El bucle while comienza evaluando la condición. Si la condición es verdadera, la (s) declaración (es) se ejecutan. Si la condición es falsa, la (s) declaración (es) no se ejecutan. Después de eso, mientras termina el bucle.

Aquí está la **sintaxis** del bucle while:

## Sintaxis:
```
while (condition) 
 
 { 
 
  statement(s); 
 
 } 
```

_instrucción (es):_ una instrucción que se ejecuta siempre que la condición se evalúe como verdadera.

_condición:_ aquí, condición es una expresión booleana que se evalúa antes de cada paso a través del bucle. Si esta condición se evalúa como verdadera, las declaraciones se ejecutan. Cuando la condición se evalúa como falsa, la ejecución continúa con la instrucción después del bucle while.

## Ejemplo:
```
    var i = 1; 
    while (i < 10) 
    { 
      console.log(i); 
       i++; // i=i+1 same thing 
    } 
 
    Output: 
    1 
    2 
    3 
    4 
    5 
    6 
    7 
    8 
    9 
```

_Fuente: [While Loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)_