---
title: Python Defining Functions
localeTitle: Funciones de definición de Python
---
[Python Docs](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

Podemos crear una función que escriba la serie de Fibonacci en un límite arbitrario:
```
>>> def fib(n):    # write Fibonacci series up to n 
 ...     """Print a Fibonacci series up to n.""" 
 ...     a, b = 0, 1 
 ...     while a < n: 
 ...         print(a, end=' ') 
 ...         a, b = b, a+b 
 ...     print() 
 ... 
 >>> # Now call the function we just defined: 
 ... fib(2000) 
 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
```

La palabra clave [`def`](https://docs.python.org/3/reference/compound_stmts.html#def) introduce una definición de función. Debe ir seguido del nombre de la función y la lista de parámetros formales entre paréntesis. Las declaraciones que forman el cuerpo de la función comienzan en la siguiente línea y deben estar sangradas.

La primera declaración del cuerpo de la función puede ser opcionalmente una cadena literal; esta cadena literal es la cadena de la función de la documentación, o [cadena de documentación](https://www.python.org/dev/peps/pep-0257/) (Más información sobre las cadenas de documentación se pueden encontrar en las cadenas sección de documentación). Algunas herramientas usan cadenas de documentación para producir automáticamente documentación en línea o impresa o para permitir que el usuario navegue interactivamente a través del código. Es una buena práctica incluir las cadenas de documentación en el código que escribes, así que trata de convertirlo en un hábito.