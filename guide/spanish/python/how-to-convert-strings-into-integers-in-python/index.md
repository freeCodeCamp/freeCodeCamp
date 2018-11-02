---
title: How to Convert Strings into Integers in Python
localeTitle: Cómo convertir cadenas en enteros en Python
---
## Cómo convertir cadenas en enteros en Python

Al igual que el `str()` incorporado, Python también ofrece un práctico accesorio que toma un objeto de cadena como un argumento y devuelve el objeto entero correspondiente.

#### Ejemplo de uso:

```py
# Here age is a string object 
 age = "18" 
 print(age) 
 # Converting string to integer 
 int_age = int(age) 
 print(int_age) 
```

Salida

```py
18 
 18 
```

Aquí, aunque la salida es visualmente similar, pero debe tener en cuenta que la primera línea imprime un objeto de cadena, mientras que la línea que se encuentra a su lado imprime un objeto entero, que se ilustra con más detalle en el siguiente ejemplo:

```py
age = "18" 
 print(age+2) 
```

Salida:

```py
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: cannot concatenate 'str' and 'int' objects 
```

`The error should make it clear to you that you need to convert the` dejarle `The error should make it clear to you that you need to convert the` objeto age\` en un entero antes de agregarle algo.

```py
age = "18" 
 age_int = int(age) 
 print(age_int+2) 
```

Salida:

```py
20 
```

Pero debes tener en cuenta algunos casos especiales:

1.  Un punto flotante (un entero con parte fraccionaria) como argumento devolverá el flotante redondeado hacia abajo al entero entero más cercano. Por ejemplo: `print(int(7.9))` imprimirá `7` . También `print(int("7.9"))` generará un error, ya que la cadena no es un argumento válido para convertir en un entero.
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: '7.9' 
    
    ```
    
2.  Además, cualquier entero en palabras, si se presenta como un argumento, devolverá el mismo error anterior: `print(int("one"))` dará un error de la siguiente manera:
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: 'one' 
    
    ```
    

#### Más información:

La documentación oficial de `int()` incorporada se puede encontrar [aquí](https://docs.python.org/3.6/library/functions.html#int)