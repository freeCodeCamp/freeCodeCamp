---
title: Python Slicestartstopstep
localeTitle: Python Slicestartstopstep
---
`slice(start:stop[:step])` es un objeto que generalmente contiene una parte de una secuencia. Una porción se crea utilizando la notación de subíndices, \[\] con dos puntos entre los números cuando se dan varios, como en variable\_name \[1: 3: 5\].

## Argumentos

Esta función se puede utilizar para cortar tuplas, matrices y listas.

El valor del parámetro de `start` (o Ninguno si no se proporciona)

El valor del parámetro de `stop` (o último índice de secuencia)

El valor del parámetro de `step` (o Ninguno si no se proporciona). No puede ser 0.

Los tres deben ser de tipo entero.

## Regreso

Si solo se proporciona una `stop` , genera una parte de la secuencia desde el índice `0` hasta la `stop` .

Si solo se proporciona el `start` , genera una parte de la secuencia después del `start` índice hasta el último elemento.

Si se proporcionan tanto el `start` como la `stop` , genera una parte de la secuencia después del `start` índice hasta la `stop` .

Si se proporcionan los tres `start` , `stop` y `step` , se genera una parte de la secuencia después del `start` índice hasta la `stop` con el incremento del `step` del índice.

## Ejemplo
```
a = [1, 2, 3, 4, 5, 6, 7, 8] 
 print(a[:5])    # prints [1, 2, 3, 4, 5] 
 print(a[2:])    # prints [3, 4, 5, 6, 7, 8] 
 print(a[2:5])    # prints [3, 4, 5] 
 print(a[2:7:2])    # prints [3, 5, 7] 
```

Puede indexar el último índice de una secuencia usando `-1` :
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[-1])    # prints 6 
 print(a[2:-1])    # prints [3, 4, 5] 
```

Puede voltear una secuencia usando la notación de división `[::-1]` :
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[::-1])    # prints [6, 5, 4, 3, 2, 1] 
```

[Documentacion oficial](https://docs.python.org/3/library/functions.html#slice) ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CT5h)