---
title: Python Complex Numbers
localeTitle: Números complejos de Python
---
Los números complejos tienen una parte real y otra imaginaria, cada una representada por un número de punto flotante.

La parte imaginaria de un número complejo se puede crear usando un literal imaginario, esto resulta en un número complejo con una parte real de `0.0` :

```python
>>> a = 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 3.5j 
 >>> a.real 
 0.0 
 >>> a.imag 
 3.5 
```

No existe un literal para crear un número complejo con partes reales e imaginarias distintas de cero. Para crear un número complejo de parte real que no sea cero, agregue un literal imaginario a un número de punto flotante:

```python
>>> a = 1.1 + 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 (1.1+3.5j) 
 >>> a.real 
 1.1 
 >>> a.imag 
 3.5 
```

O utilizar el [constructor complejo](https://docs.python.org/3/library/functions.html#complex) .

```python
class complex([real[, imag]]) 
```

Los argumentos utilizados para llamar al constructor complejo pueden ser de tipo numérico (incluido el `complex` ) para cualquier parámetro:

```python
>>> complex(1, 1) 
 (1+1j) 
 >>> complex(1j, 1j) 
 (-1+1j) 
 >>> complex(1.1, 3.5) 
 (1.1+3.5j) 
 >>> complex(1.1) 
 (1.1+0j) 
 >>> complex(0, 3.5) 
 3.5j 
```

También se puede utilizar una `string` como argumento. No se permite un segundo argumento si se usa una cadena como argumento

```python
>>> complex("1.1+3.5j") 
 (1.1+3.5j) 

```