---
title: Python All Iterable
localeTitle: Python All Iterable
---
`all()` é uma função interna do Python 3 (e também do Python 2 desde a versão 2.5) usada para verificar se todos os itens de um objeto [_iterável_](https://docs.python.org/3/glossary.html#term-iterable) são `True` . É necessário um argumento, `iterable` .

## Argumento

### iterável

O argumento `iterable` é a coleção cujas entradas devem ser verificadas. Pode ser uma `list` , `str` , `dict` , `tuple` , etc.

## Valor de retorno

O valor de retorno é um booleano. Se (e somente se) **todas as** entradas de `iterable` são [truthy](https://guide.freecodecamp.org/python/truth-value-testing) , ele retorna `True` . Essa função essencialmente executa uma operação Booleana `AND` em todos os elementos.

Se mesmo um deles não for verdade, ele retornará `False` .

Afinal, é preciso lembrar que:

>>> True and False
False

>>> True and True
True

>>> False and True
False

>>> False or True
True

>>> False or False
False


A operação `all()` é equivalente a (não implementada internamente exatamente assim)
```
def all(iterable): 
    for element in iterable: 
        if not element: 
            return False 
    return True 
```

## Amostra de código
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CL9U/0)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#all)
