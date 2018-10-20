---
title: Python Iterators
localeTitle: Iteradores de pitón
---
Python soporta un concepto de iteración sobre contenedores. Esto se implementa utilizando dos métodos distintos; estos se utilizan para permitir que las clases definidas por el usuario admitan la iteración.

[Python Docs - Tipos de iterador](https://docs.python.org/3/library/stdtypes.html#iterator-types)

La iteración es el proceso de repetir programáticamente un paso un número determinado de veces. Un programador puede hacer uso de la iteración para realizar la misma operación en cada ítem en una colección de datos, por ejemplo, imprimiendo cada ítem en una lista.

*   Los objetos pueden implementar un `__iter__()` que devuelve un objeto iterador para admitir la iteración.
    
*   Los objetos iteradores deben implementar:
    
    *   `__iter__()` : devuelve el objeto iterador.
        
    *   `__next__()` : devuelve el siguiente objeto del contenedor.
        
    
    _objeto_ iterador _\= 'abc'. **iter** () imprimir (_ objeto _iterador_ ) imprimir (id ( _objeto_ iterador _)) print (id (_ objeto _iterador_ . **iter** ())) # Devuelve el iterador. imprimir ( _objeto_ iterador _. **next** ()) # Devuelve el primer objeto y avanza el iterador. imprimir (_ objeto _iterador_ . **next** ()) # Devuelve el segundo objeto y avanza el iterador. imprimir ( _objeto_ iterador _. **next** ()) # Devuelve el tercer objeto y avanza el iterador. print (_ objeto _iterador_ . **next** ()) # Aumenta la excepción StopIteration.
    

Salida:
```
<str_iterator object at 0x102e196a0> 
 4343305888 
 4343305888 
 a 
 b 
 c 
 --------------------------------------------------------------------------- 
 StopIteration                             Traceback (most recent call last) 
 <ipython-input-1-d466eea8c1b0> in <module>() 
      6 print(iterator_object.__next__())     # Returns 2nd object and advances iterator. 
      7 print(iterator_object.__next__())     # Returns 3rd object and advances iterator. 
 ----> 8 print(iterator_object.__next__())     # Raises StopIteration Exception. 
 
 StopIteration: 

```