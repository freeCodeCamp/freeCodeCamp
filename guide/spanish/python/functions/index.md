---
title: Functions
localeTitle: Funciones
---
## Funciones

Una función le permite definir un bloque de código reutilizable que puede ejecutarse muchas veces dentro de su programa.

Las funciones le permiten crear soluciones más modulares y [SECAS](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) para problemas complejos.

Si bien Python ya proporciona muchas funciones integradas, como `print()` y `len()` , también puede definir sus propias funciones para usar dentro de sus proyectos.

Una de las grandes ventajas de usar funciones en su código es que reduce el número total de líneas de código en su proyecto.

### Sintaxis

En Python, una definición de función tiene las siguientes características:

1.  La palabra clave `def`
2.  un nombre de función
3.  paranthesis '()', y dentro de paranthesis parámetros de entrada, aunque los parámetros de entrada son opcionales.
4.  dos puntos ':'
5.  algun bloque de codigo para ejecutar
6.  una declaración de retorno (opcional)

```python
# a function with no parameters or returned values 
 def sayHello(): 
  print("Hello!") 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 def helloWithName(name): 
  print("Hello " + name + "!") 
 
 helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 def multiply(val1, val2): 
  return val1 * val2 
 
 multiply(3, 5)  # prints 15 to the console 
```

Las funciones son bloques de código que se pueden reutilizar simplemente llamando a la función. Esto permite una reutilización de código simple y elegante sin tener que volver a escribir explícitamente secciones de código. Esto hace que el código sea más legible, facilita la depuración y limita los errores de escritura.

Las funciones en Python se crean utilizando la palabra clave `def` , seguida de un nombre de función y parámetros de función entre paréntesis.

Una función siempre devuelve un valor. La palabra clave de `return` es utilizada por la función para devolver un valor. Si no desea devolver ningún valor, el valor predeterminado `None` se devolverá.

El nombre de la función se utiliza para llamar a la función, pasando los parámetros necesarios entre paréntesis.

```python
# this is a basic sum function 
 def sum(a, b): 
  return a + b 
 
 result = sum(1, 2) 
 # result = 3 
```

Puede definir valores predeterminados para los parámetros, de esa manera Python interpretará que el valor de ese parámetro es el predeterminado si no se proporciona ninguno.

```python
def sum(a, b=3): 
  return a + b 
 
 result = sum(1) 
 # result = 4 
```

Puede pasar los parámetros en el orden que desee, utilizando el nombre del parámetro.

```python
result = sum(b=2, a=2) 
 # result = 4 
```

Sin embargo, no es posible pasar un argumento de palabra clave antes que uno que no sea de palabra clave.

```Python
result = sum(3, b=2) 
 #result = 5 
 result2 = sum(b=2, 3) 
 #Will raise SyntaxError 
```

Las funciones también son objetos, por lo que puede asignarlas a una variable y usar esa variable como una función.

```python
s = sum 
 result = s(1, 2) 
 # result = 3 
```

### Notas

*   Si la definición de una función incluye parámetros, debe proporcionar el mismo número de parámetros cuando llama a la función.
    
    ```python
    print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given) 
     
     print(multiply('a', 5))  # 'aaaaa' printed to the console 
     
     print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings 
    
    ```
    
*   El bloque de código que ejecutará la función incluye todas las declaraciones sangradas dentro de la función.
    
    ```python
    def myFunc(): 
     print('this will print') 
     print('so will this') 
     
     x = 7 
     # the assignment of x is not a part of the function since it is not indented 
    
    ```
    
*   Las variables definidas dentro de una función solo existen dentro del alcance de esa función.
    
    ```python
    def double(num): 
     x = num * 2 
     return x 
     
     print(x)  # error - x is not defined 
     print(double(4))  # prints 8 
    
    ```
    
    \-Python interpreta el bloque de función solo cuando se llama a la función y no cuando se define la función. Por lo tanto, incluso si el bloque de definición de función contiene algún tipo de error, la interpretación de python lo señalará solo cuando se llame a la función.
    

### Más información:

*   [Python 3 Docs: Definiendo Funciones](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)