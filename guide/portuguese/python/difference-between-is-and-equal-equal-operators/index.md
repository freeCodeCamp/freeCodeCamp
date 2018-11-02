---
title: Difference between Python 'is' and '==' operators
localeTitle: Diferença entre os operadores Python 'is' e '=='
---
`is` é uma verificação da identidade do objeto - isto é, verificar se duas ou mais variáveis ​​estão se referindo ao mesmo objeto. Você não pode sobrecarregar `is` .

`==` avalia como verdadeiro se o objeto referido pelas variáveis ​​for igual. Você pode sobrecarregar `==` através do operador `__eq__` .

## Valor de retorno

O valor de retorno para ambos seria `True` ou `False` .

## Amostra de código
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