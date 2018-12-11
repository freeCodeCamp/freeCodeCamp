---
title: Python Any Iterable
localeTitle: Python cualquier iterable
---
`any()` es una función incorporada en Python 3 (y Python 2 desde la versión 2.5), para verificar si alguno de los elementos de un [_iterable_](https://docs.python.org/3/glossary.html#term-iterable) es `True` . Se necesita un argumento, `iterable` .

## Argumento

### iterable

El argumento `iterable` es la colección cuyas entradas se deben verificar. Por lo general, puede ser una `list` , `str` , `dict` , `tuple` , etc., incluso un `file object` .

## Valor de retorno

El valor de retorno es un booleano. Si y solo si **todas las** entradas de iterable son `False` , o `iterable` está vacío; devuelve `False` . Esta función esencialmente realiza una operación Boolean `OR` sobre todos los elementos.

Si incluso uno de ellos es `True` , devuelve `True` .

La operación `any()` es equivalente a (internamente, no se puede implementar exactamente de esta manera)
```
def any(iterable): 
    for element in iterable: 
        if element: 
            return True 
    return False 
```

## Ejemplo de código
```
print(any([])) #=> False 
 print(any({})) #=> False 
 print(any([None])) #=> False 
 print(any(['', {}, 0])) #=> False 
 print(any([6, 7])) #=> True 
 print(any([6, 7, None])) #=> True 
 print(any([0, 6, 7])) #=> True 
 print(any([9, 8, [1, 2]])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CL9c/0)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#any)