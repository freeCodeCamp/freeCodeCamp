---
title: Conditional Operator
localeTitle: Operador condicional
---
## Operador condicional

El operador condicional es un operador ternario, es decir, necesita 3 operandos. Devuelve uno de los dos valores dependiendo del resultado de una expresión El operador condicional se utiliza para reemplazar una simple instrucción if-else.

Sintaxis:

```cpp
  (condition)?(expression-1):(expression-2); 
```

Aquí, la expresión-1 se evalúa cuando la condición es verdadera y la expresión-2 se evalúa cuando la condición es falsa. Una declaración similar if-else sería:

```cpp
if(condition) 
  { 
    expression-1; 
  } 
 else 
  { 
    expression-2; 
  } 
```

Por lo tanto, el operador condicional es muy útil cuando se necesita escribir una declaración simple de if-else. También se puede utilizar en #define. preprocesador cuando se utiliza una condición similar en varios lugares.

Por ejemplo, para encontrar un máximo de dos operadores condicionales numéricos se puede utilizar de la siguiente manera:

```cpp
#define big(a,b) (a>=b)?a:b 
 
 int maximum,x=5,y=6; // variable to store maximum of two numbers 
 maximum=(x>y)?x:y; // directly using conditional operator 
 maximum=big(x,y); // using the #define preprocessor defined above as big 
```

**Buena suerte a todos ustedes**

**¡Feliz codificación! :)**

**No dude en preguntar cualquier duda en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**