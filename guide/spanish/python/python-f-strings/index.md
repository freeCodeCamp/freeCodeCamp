---
title: Python f-strings
localeTitle: Cuerdas de pitón
---
# F-cuerdas en Python

En Python versión 3.6, se implementó un nuevo método para formatear cadenas. El nuevo método se denomina interpolación de cadena literal (aunque comúnmente se denomina cadena de caracteres).

El uso de f-string permite al programador insertar dinámicamente una variable en una cadena de una manera limpia y concisa. Además de insertar variables en una cadena, esta característica también brinda la capacidad de un programador para evaluar expresiones, unir el contenido de la colección e incluso invocar funciones dentro de la cadena f.

Para realizar estos comportamientos dinámicos dentro de una f-string, los envolvemos entre corchetes dentro de la cadena, y escribimos una minúscula f al principio de la cadena (antes de la cita inicial).

### Ejemplos

1.  Insertar dinámicamente una variable en una cadena en tiempo de ejecución:
    
    ```python
    name = 'Jon Snow' 
     greeting = f'Hello! {name}' 
     print(greeting) 
    
    ```
    
2.  Evaluar una expresión en una cadena: `python val1 = 2 val2 = 3 expr = f'The sum of {val1} + {val2} is {val1 + val2}' print(expr)`
    
3.  Llamando una función e insertando salida dentro de una cadena:
    
    ```python
    def sum(*args): 
        result = 0 
        for arg in args: 
            result += arg 
        return result 
     
     func = f'The sum of 3 + 5 is {sum(3, 5)}' 
     print(func) 
    
    ```
    
4.  Uniendo los contenidos de una colección dentro de una cadena:
    
    ```python
    fruits = ['Apple', 'Banana', 'Pear'] 
     
     list_str = f'List of fruits: {", ".join(fruits)}' 
     print(list_str) 
    
    ```
    

### Fuentes

https://www.python.org/dev/peps/pep-0498/