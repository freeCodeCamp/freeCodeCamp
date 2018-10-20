---
title: Docstring
localeTitle: Docstring
---
## Docstring

Docstring es una forma en que los desarrolladores pueden comunicar el propósito, los parámetros, los requisitos y el uso de una función en Python a otros desarrolladores. Permite la facilidad de mantenimiento y comprensión del código.

A diferencia de los comentarios de código fuente convencionales, la cadena de documentación debe describir lo que La función hace, no cómo.

Un ejemplo similar a Docstring es @Javadoc en Java.

Docstring se escribe como un comentario de varias líneas justo después del encabezado de la declaración en Python. Hay 4 partes diferentes en una cadena de documentación:

1.  Tipo de entrada, y tipo de salida
    *   La entrada / salida puede ser `obj, list, bool, int, str, float`
2.  Descripción de la función
    *   Breve, pero completa descripción de lo que hace su función
3.  Requerimientos
    *   Esto es leído por un humano, por lo que no tiene que ser un código
4.  Casos de prueba (normalmente 2-3)

El formato general se detalla a continuación.

## Formato de Docstring

```python
def my_examplefunc(input_type1, input_type2): 
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow! 
  Here is a description of my example function        # Your second line will be the description 
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function 
  REQ: type(input_type2) == str 
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases 
  [2, 3] "Hello World" 
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>> 
  [7, 2] "Another test case"                          # Your second line of the test case is the output 
  >>> my_example_func([5, 6], "Last test case") 
  [5, 6] "Last test case" 
  ''' 
  # Your code goes here, underneath the Docstring 
```

La cadena documental se entiende mejor con ejemplos, así que eche un vistazo al programa de ejemplo a continuación, en el que el programa muestra Verdadero si un número es menor que 5, y Falso si un número es mayor que 5.

## Ejemplo 1

```python
def is_less_than_five(some_number): 
  '''(int) -> bool 
  Returns True if the given number is less than 5, and False is the given number is greater than 5. 
  REQ: some_number != 5 
  >>> is_less_than_five(4) 
  True 
  >>> is_less_than_five(6) 
  False 
  >>> is_less_than_five(100000) 
  False 
  ''' 
  # Your code goes here 
```

### Algunos enlaces útiles:

Numpy y Google Docstrings son dos enfoques de uso común:

*   Google: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_google.html
*   Numpy: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_numpy.html También, consulte algunos buenos comentarios antiguos de PEP: https://www.python.org/dev/peps/pep-0257/