---
title: While Loop Statements
localeTitle: Mientras que las declaraciones de bucle
---
## Mientras que las declaraciones de bucle

Python utiliza el `while` de bucle de manera similar a otros lenguajes populares. El `while` bucle evalúa una condición ejecuta entonces un bloque de código si la condición es verdadera. El bloque de código se ejecuta repetidamente hasta que la condición se vuelve falsa.

La sintaxis básica es:

```python
counter = 0 
 while counter < 10: 
   # Execute the block of code here as 
   # long as counter is less than 10 
```

A continuación se muestra un ejemplo:

```python
days = 0 
 week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
 while days < 7: 
   print("Today is " + week[days]) 
   days += 1 
```

Salida:
```
Today is Monday 
 Today is Tuesday 
 Today is Wednesday 
 Today is Thursday 
 Today is Friday 
 Today is Saturday 
 Today is Sunday 
```

Explicación línea por línea del CÓDIGO anterior:

1.  La variable 'días' se establece en un valor 0.
2.  una semana variable se asigna a una lista que contiene todos los días de la semana.
3.  mientras comienza el bucle
4.  el bloque de código se ejecutará hasta que la condición devuelva "verdadero".
5.  la condición es 'días <7', que de manera correcta dice que se debe ejecutar el ciclo while hasta el punto en que los días variables son menores que 7
6.  Entonces cuando los días = 7, el bucle while deja de ejecutarse.
7.  La variable days se actualiza en cada iteración.
8.  Cuando el ciclo while se ejecuta por primera vez, la línea "Hoy es lunes" se imprime en la consola y los días variables se vuelven iguales a 1.
9.  Dado que la variable días es igual a 1, que es menor que 7, el bucle while se ejecuta nuevamente.
10.  Continúa una y otra vez, y cuando la consola imprime "Hoy es domingo", los días variables ahora son iguales a 7 y el bucle while deja de ejecutarse.

#### Más información:

*   [Python, `while` que la documentación de la declaración](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)