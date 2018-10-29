---
title: Decorator
localeTitle: 装饰
---
装饰器是一种可以修改或增强类接口的设计模式。

## Python3中的装饰器

这是Python3中Decorator实现的一个例子。

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