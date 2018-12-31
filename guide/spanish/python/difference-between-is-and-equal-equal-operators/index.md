---
title: Difference between Python 'is' and '==' operators
localeTitle: Diferencia entre los operadores Python 'is' y '=='
---
`is` una verificación de la identidad del objeto, es decir, verificar si dos o más variables se refieren al mismo objeto. No se puede sobrecargar `is` .

`==` evalúa como verdadero si el objeto al que hacen referencia las variables es igual. Puede sobrecargar `==` través del operador `__eq__` .

## Valor de retorno

El valor de retorno para ambos sería `True` o `False` .

## Ejemplo de código
```
a = 2.3 
 a is 2.3  # => False 
 a == 2.3  # => True 
 
 a = [234,123,321] 
 b = [234,123,321] 
 a == b  # => True 
 a is b  # => False 
 a = b 
 a == b  # => True 
 a is b  # => True, because if we change a, b changes too 

```