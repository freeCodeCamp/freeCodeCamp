---
title: Python Calling Functions
localeTitle: Funciones de llamada de Python
---
Una declaración de definición de función no ejecuta la función. La ejecución (llamada) de una función se realiza utilizando el nombre de la función seguido de paréntesis que incluye los argumentos requeridos (si los hay).
```
>>> def say_hello(): 
 ...     print('Hello') 
 ... 
 >>> say_hello() 
 Hello 
```

La ejecución de una función introduce una nueva tabla de símbolos utilizada para las variables locales de la función. Más precisamente, todas las asignaciones de variables en una función almacenan el valor en la tabla de símbolos local; mientras que las referencias de variables primero miran en la tabla de símbolos local, luego en las tablas de símbolos locales de las funciones de encierro, luego en la tabla de símbolos global y finalmente en la tabla de nombres incorporados. Por lo tanto, a las variables globales no se les puede asignar directamente un valor dentro de una función (a menos que estén nombradas en una declaración global), aunque pueden ser referenciadas.
```
>>> a = 1 
 >>> b = 10 
 >>> def fn(): 
 ...     print(a)    # local a is not assigned, no enclosing function, global a referenced. 
 ...     b = 20      # local b is assigned in the local symbol table for the function. 
 ...     print(b)    # local b is referenced. 
 ... 
 >>> fn() 
 1 
 20 
 >>> b               # global b is not changed by the function call. 
 10 
```

Los parámetros reales (argumentos) para una llamada de función se introducen en la tabla de símbolos locales de la función llamada cuando se llama; por lo tanto, los argumentos se pasan usando llamada por valor (donde el valor es siempre una referencia de objeto, no el valor del objeto). Cuando una función llama a otra función, se crea una nueva tabla de símbolos locales para esa llamada.
```
>>> def greet(s): 
 ...     s = "Hello " + s    # s in local symbol table is reassigned. 
 ...     print(s) 
 ... 
 >>> person = "Bob" 
 >>> greet(person) 
 Hello Bob 
 >>> person                  # person used to call remains bound to original object, 'Bob'. 
 'Bob' 
```

Los argumentos utilizados para llamar a una función no pueden ser reasignados por la función, pero los argumentos que hacen referencia a objetos mutables pueden cambiar sus valores:
```
>>> def fn(arg): 
 ...     arg.append(1) 
 ... 
 >>> a = [1, 2, 3] 
 >>> fn(a) 
 >>> a 
 [1, 2, 3, 1] 

```