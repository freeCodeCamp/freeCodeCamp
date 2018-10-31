---
title: Python Any Iterable
localeTitle: Python Any Iterable
---
`any()` é uma função interna do Python 3 (e do Python 2 desde a versão 2.5), para verificar se algum dos itens de um [_iterável_](https://docs.python.org/3/glossary.html#term-iterable) é `True` . É preciso um argumento, `iterable` .

## Argumento

### iterável

O argumento `iterable` é a coleção cujas entradas devem ser verificadas. Normalmente pode ser uma `list` , `str` , `dict` , `tuple` , etc., até mesmo um `file object` .

## Valor de retorno

O valor de retorno é um booleano. Se e somente se **todas as** entradas de iteráveis ​​forem `False` , ou o `iterable` estiver vazio; ele retorna `False` . Essa função essencialmente executa uma operação booleana `OR` em todos os elementos.

Se até um deles for `True` , ele retornará `True` .

A operação `any()` é equivalente a (internamente, não pode ser implementada exatamente assim)
```
def any(iterable): 
    for element in iterable: 
        if element: 
            return True 
    return False 
```

## Amostra de código
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CL9c/0)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#any)