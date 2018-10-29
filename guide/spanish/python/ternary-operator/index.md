---
title: Python Ternary Operater
localeTitle: Operador Ternario Python
---
# Operador ternario en Python

Las operaciones ternarias en Python, a menudo también denominadas expresiones condicionales, permiten al programador realizar una evaluación y devolver un valor basado en la verdad de la condición dada.

El operador ternario difiere de un estándar `if` , `if` `else` , estructura `elif` en el sentido de que no es una estructura de flujo de control, y se comporta más como otros operadores como `==` o `!=` En el lenguaje Python.

### Ejemplo

En este ejemplo, la cadena `Even` se devuelve si la variable `val` es par, de lo contrario se devuelve la cadena `Odd` . La cadena devuelta se asigna a la variable `is_even` y se imprime en la consola.

#### Entrada

```python
for val in range(1, 11): 
    is_even = "Even" if val % 2 == 0 else "Odd" 
    print(val, is_even, sep=' = ') 
```

#### Salida
```
1 = Odd 
 2 = Even 
 3 = Odd 
 4 = Even 
 5 = Odd 
 6 = Even 
 7 = Odd 
 8 = Even 
 9 = Odd 
 10 = Even 
```

### Fuentes

https://docs.python.org/2.5/whatsnew/pep-308.html