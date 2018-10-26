---
title: Decorator
localeTitle: Decorador
---
O decorador é um padrão de design que pode modificar ou aprimorar a interface de uma classe.

## Decorador em Python3

Aqui está um exemplo da implementação do Decorator no Python3.

```python
class MyText(object): 
    def __init__(self, text=''): 
        self.text = text 
 
    def __str__(self): 
        return 'This is {}'.format(self.text) 
 
 
 class BracketDecorator(object): 
    def __init__(self, decoratee): 
        self._decoratee = decoratee 
 
    def __str__(self): 
        return '({})'.format(self._decoratee) 
 
 
 class QuoteDecorator(object): 
    def __init__(self, decoratee): 
        self._decoratee = decoratee 
 
    def __str__(self): 
        return '\"{}\"'.format(self._decoratee) 
 
 
 print(BracketDecorator(MyText('apple'))) 
 >>> (This is apple) 
 print(QuoteDecorator(MyText('banana'))) 
 >>> "This is banana" 

```