---
title: Python All Iterable
localeTitle: Python Todo Iterable
---
`all()` es una función incorporada en Python 3 (y Python 2 desde la versión 2.5), para verificar si todos los elementos de un [_iterable_](https://docs.python.org/3/glossary.html#term-iterable) son `True` . Se necesita un argumento, `iterable` .

## Argumento

### iterable

El argumento `iterable` es la colección cuyas entradas se deben verificar. Puede ser una `list` , `str` , `dict` , `tuple` , etc.

## Valor de retorno

El valor de retorno es un booleano. Si y solo si **todas las** entradas de `iterable` son [veraces](https://guide.freecodecamp.org/python/truth-value-testing) , devuelve `True` . Esta función esencialmente realiza una operación Boolean `AND` sobre todos los elementos.

Si incluso uno de ellos no es sincero, devuelve `False` .

La operación `all()` es equivalente a (no implementada internamente exactamente como esta)
```
def all(iterable): 
    for element in iterable: 
        if not element: 
            return False 
    return True 
```

## Ejemplo de código
```
print(all([])) #=> True  # Because an empty iterable has no non-truthy elements 
 print(all([6, 7])) #=> True 
 print(all([6, 7, None])) #=> False  # Because it has None 
 print(all([0, 6, 7])) #=> False  # Because it has zero 
 print(all([9, 8, [1, 2]])) #=> True 
 print(all([9, 8, []])) #=> False  # Because it has [] 
 print(all([9, 8, [1, 2, []]])) #=> True 
 print(all([9, 8, {}])) #=> False  # Because it has {} 
 print(all([9, 8, {'engine': 'Gcloud'}])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CL9U/0)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#all)