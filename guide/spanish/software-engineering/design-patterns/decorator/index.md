---
title: Decorator
localeTitle: Decorador
---
El decorador es un patrón de diseño que podría modificar o mejorar la interfaz de una clase.

## Decorador en Python3

Aquí hay un ejemplo de la implementación de Decorator en Python3.

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