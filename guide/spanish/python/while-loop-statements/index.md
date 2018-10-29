---
title: While Loop Statements
localeTitle: Mientras que las declaraciones de bucle
---
## Mientras que las declaraciones de bucle

Python utiliza el `while` de bucle de manera similar a otros lenguajes populares. El `while` bucle evalúa una condición ejecuta entonces un bloque de código si la condición es verdadera. El bloque de código se ejecuta repetidamente hasta que la condición se vuelve falsa.

La sintaxis básica es:

```python
contador = 0 
while contador < 10: 
  # Ejecutar el bloque mientras el contador sea menos que 10
```

A continuación se muestra un ejemplo:

```python
dia = 0 
semana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
while dia < 7: 
  print("Hoy es " + semana[dia]) 
  dia += 1 
```

Emisión:
```
>> Hoy es Monday 
>> Hoy es Tuesday 
>> Hoy es Wednesday 
>> Hoy es Thursday 
>> Hoy es Friday 
>> Hoy es Saturday 
>> Hoy es Sunday 
```

Explicación línea por línea del CÓDIGO anterior:

1.  El variable 'día' se establece en un valor 0.
2.  Una lista que contiene todos los días de la semana se asigna a el varibale `semana`
3.  Comienza el bucle tipo mientras, `while`
4.  El bloque de código se ejecutará hasta que la condición devuelva "verdadero"
5.  La condición es 'días <7', que de manera correcta dice que se debe ejecutar el ciclo while hasta el punto en que los días variables son menores que 7
6.  Entonces cuando los días = 7, el bucle while deja de ejecutarse.
7.  La variable dia se actualiza en cada iteración.
8.  Cuando el ciclo while se ejecuta por primera vez, la línea "Hoy es lunes" se imprime en la consola y los días variables se vuelven iguales a 1.
9.  Dado que la variable días es igual a 1, que es menor que 7, el bucle while se ejecuta nuevamente.
10. Continúa una y otra vez, y cuando la consola imprime "Hoy es domingo", los días variables ahora son iguales a 7 y el bucle while deja de ejecutarse.

#### Más información:

*   [Python, `while` que la documentación de la declaración](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)
