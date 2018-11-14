---
title: Python Ord Function
localeTitle: Función de Python Ord
---
## Función ord

`ord()` es una función incorporada en Python 3, para convertir la cadena que representa un carácter Unicode en un entero Representando el código Unicode del personaje.

#### Ejemplos:
```
>>> ord('d') 
 100 
 >>> ord('1') 
 49 
```

## función chr

`chr()` es una función incorporada en Python 3, para convertir el entero representando el código Unicode en una cadena que representa un carácter correspondiente.

#### Ejemplos:
```
>>> chr(49) 
 '1' 
```

Se debe tener en cuenta que, si el valor entero pasado a `chr()` está fuera de rango, se generará un ValueError.
```
>>> chr(-10) 
 'Traceback (most recent call last): 
  File "<pyshell#24>", line 1, in <module> 
    chr(-1) 
 ValueError: chr() arg not in range(0x110000)' 

```